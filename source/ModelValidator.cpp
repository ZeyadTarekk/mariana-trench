/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <boost/algorithm/string.hpp>
#include <fmt/format.h>
#include <algorithm>

#include <Show.h>

#include <mariana-trench/ModelValidator.h>

namespace marianatrench {

namespace {

enum ModelValidationType {
  EXPECT_ISSUE,
  EXPECT_NO_ISSUE,
};

struct AnnotationProperties {
  ModelValidationType validation_type;
  bool repeatable;
};

std::optional<AnnotationProperties> get_annotation_properties(
    const DexAnnotation* annotation) {
  const auto* annotation_type = annotation->type();
  if (!annotation_type) {
    return std::nullopt;
  }

  auto annotation_type_string = annotation_type->str();
  if (annotation_type_string ==
      "Lcom/facebook/marianabench/validation/ExpectIssue;") {
    return AnnotationProperties{
        .validation_type = ModelValidationType::EXPECT_ISSUE,
        .repeatable = false};
  } else if (
      annotation_type_string ==
      "Lcom/facebook/marianabench/validation/ExpectIssues;") {
    // For repeatable/multiple @ExpectIssue annotation
    return AnnotationProperties{
        .validation_type = ModelValidationType::EXPECT_ISSUE,
        .repeatable = true};
  } else if (
      annotation_type_string ==
      "Lcom/facebook/marianabench/validation/ExpectNoIssue;") {
    return AnnotationProperties{
        .validation_type = ModelValidationType::EXPECT_NO_ISSUE,
        .repeatable = false};
  } else if (
      annotation_type_string ==
      "Lcom/facebook/marianabench/validation/ExpectNoIssues;") {
    // For repeatable/multiple @ExpectNoIssue annotation
    return AnnotationProperties{
        .validation_type = ModelValidationType::EXPECT_NO_ISSUE,
        .repeatable = true};
  }

  return std::nullopt;
}

std::unique_ptr<ModelValidator> make_validator(
    ModelValidationType validator_type,
    const EncodedAnnotations& annotation_elements) {
  switch (validator_type) {
    case ModelValidationType::EXPECT_ISSUE:
      return std::make_unique<ExpectIssue>(
          ExpectIssue::from_annotation(annotation_elements));
    case ModelValidationType::EXPECT_NO_ISSUE:
      return std::make_unique<ExpectNoIssue>(
          ExpectNoIssue::from_annotation(annotation_elements));
      break;
  }
}

std::vector<std::unique_ptr<ModelValidator>> validators_from_annotation(
    const DexAnnotation* annotation) {
  auto annotation_properties = get_annotation_properties(annotation);
  if (!annotation_properties) {
    return {};
  }

  std::vector<std::unique_ptr<ModelValidator>> validators;
  ModelValidationType validation_type = annotation_properties->validation_type;

  if (!annotation_properties->repeatable) {
    // Non-repeating annotations are encoded in the outer-most annotation.
    validators.emplace_back(
        make_validator(validation_type, annotation->anno_elems()));
  } else {
    // Repeatable annotation. The annotation of interest is nested within an
    // encoded array. The outer annotation has only 1 element which is the
    // array itself.
    mt_assert(annotation->anno_elems().size() == 1);
    for (const auto& element : annotation->anno_elems()) {
      // Arrays represent repeated annotations of the same kind.
      const auto* repeatable_annotation =
          dynamic_cast<const DexEncodedValueArray*>(
              element.encoded_value.get());
      mt_assert(repeatable_annotation != nullptr);

      for (const auto& repeated_annotation :
           *repeatable_annotation->evalues()) {
        const auto* inner_annotation =
            dynamic_cast<const DexEncodedValueAnnotation*>(
                repeated_annotation.get());
        // Within each repeatable annotation should be the nested annotation.
        mt_assert(inner_annotation != nullptr);
        validators.emplace_back(
            make_validator(validation_type, inner_annotation->annotations()));
      }
    }
  }

  return validators;
}

} // namespace

std::optional<ModelValidators> ModelValidators::from_method(
    const Method* method) {
  const auto* dex_method = method->dex_method();
  if (dex_method == nullptr) {
    return std::nullopt;
  }

  const auto* annotations_set = dex_method->get_anno_set();
  if (annotations_set == nullptr) {
    return std::nullopt;
  }

  std::vector<std::unique_ptr<ModelValidator>> validators;
  for (const auto& annotation : annotations_set->get_annotations()) {
    auto validator = validators_from_annotation(annotation.get());
    validators.insert(
        validators.end(),
        std::make_move_iterator(validator.begin()),
        std::make_move_iterator(validator.end()));
  }

  if (validators.empty()) {
    return std::nullopt;
  }

  return ModelValidators(std::move(validators));
}

bool ModelValidators::validate(const Model& model) const {
  return std::all_of(
      validators_.cbegin(),
      validators_.cend(),
      [&model](const auto& validator) { return validator->validate(model); });
}

std::string ModelValidators::show() const {
  std::vector<std::string> validator_strings(validators_.size());
  std::transform(
      validators_.cbegin(),
      validators_.cend(),
      validator_strings.begin(),
      [](const auto& validator) { return validator->show(); });
  return boost::algorithm::join(validator_strings, ",");
}

ExpectIssue ExpectIssue::from_annotation(
    const EncodedAnnotations& annotation_elements) {
  int code = -1;
  std::set<std::string> source_kinds;
  std::set<std::string> sink_kinds;

  for (const auto& annotation_element : annotation_elements) {
    const auto* annotation_key = annotation_element.string;
    if (annotation_key->str() == "code") {
      mt_assert(annotation_element.encoded_value->is_evtype_primitive());
      code = annotation_element.encoded_value->value();
    } else if (annotation_key->str() == "sourceKinds") {
      mt_assert(annotation_element.encoded_value->evtype() == DEVT_ARRAY);
      std::vector<const DexString*> source_kinds_dexstring;
      annotation_element.encoded_value->gather_strings(source_kinds_dexstring);
      for (const auto* dex_string : source_kinds_dexstring) {
        source_kinds.insert(dex_string->str_copy());
      }
    } else if (annotation_key->str() == "sinkKinds") {
      mt_assert(annotation_element.encoded_value->evtype() == DEVT_ARRAY);
      std::vector<const DexString*> sink_kinds_dexstring;
      annotation_element.encoded_value->gather_strings(sink_kinds_dexstring);
      for (const auto* dex_string : sink_kinds_dexstring) {
        sink_kinds.insert(dex_string->str_copy());
      }
    } else {
      throw std::runtime_error(fmt::format(
          "Unexpected annotation key: {} in @ExpectIssue",
          ::show(annotation_key)));
    }
  }

  return ExpectIssue(code, std::move(source_kinds), std::move(sink_kinds));
}

namespace {

bool includes_issue_kinds(
    const std::unordered_set<const Kind*>& issue_kinds,
    const std::set<std::string>& validator_kinds) {
  if (validator_kinds.empty()) {
    return true;
  }

  std::set<std::string> issue_kinds_set;
  for (const auto* kind : issue_kinds) {
    issue_kinds_set.insert(kind->to_trace_string());
  }

  return std::includes(
      issue_kinds_set.cbegin(),
      issue_kinds_set.cend(),
      validator_kinds.cbegin(),
      validator_kinds.cend());
}

} // namespace

bool ExpectIssue::validate(const Model& model) const {
  const auto& issues = model.issues();
  return std::any_of(issues.begin(), issues.end(), [this](const Issue& issue) {
    // Issue (hence rule) should not be bottom() at this point.
    const auto* rule = issue.rule();
    mt_assert(rule != nullptr);
    return rule->code() == code_ &&
        includes_issue_kinds(issue.sources().kinds(), source_kinds_) &&
        includes_issue_kinds(issue.sinks().kinds(), sink_kinds_);
  });
}

std::string ExpectIssue::show() const {
  return fmt::format(
      "ExpectIssue(code={}, sourceKinds={}, sinkKinds={})",
      code_,
      boost::algorithm::join(source_kinds_, ","),
      boost::algorithm::join(sink_kinds_, ","));
}

ExpectNoIssue ExpectNoIssue::from_annotation(
    const EncodedAnnotations& annotation_elements) {
  int code = -1;
  for (const auto& annotation_element : annotation_elements) {
    const auto* annotation_key = annotation_element.string;
    if (annotation_key->str() == "code") {
      mt_assert(annotation_element.encoded_value->is_evtype_primitive());
      code = annotation_element.encoded_value->value();
    } else {
      throw std::runtime_error(fmt::format(
          "Unexpected annotation key: {} in @ExpectNoIssue",
          ::show(annotation_key)));
    }
  }

  return ExpectNoIssue(code);
}

bool ExpectNoIssue::validate(const Model& model) const {
  if (code_ == -1) {
    // Issue code unspecified. Model must not contain any issues.
    return model.issues().empty();
  }

  const auto& issues = model.issues();
  return std::none_of(issues.begin(), issues.end(), [this](const Issue& issue) {
    // Issue (hence rule) should not be bottom() at this point.
    const auto* rule = issue.rule();
    mt_assert(rule != nullptr);
    return rule->code() == code_;
  });
}

std::string ExpectNoIssue::show() const {
  return fmt::format("ExpectNoIssue(code={})", code_);
}

} // namespace marianatrench