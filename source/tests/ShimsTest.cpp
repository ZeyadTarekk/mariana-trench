/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <gmock/gmock.h>

#include <mariana-trench/Context.h>
#include <mariana-trench/MethodMappings.h>
#include <mariana-trench/Redex.h>
#include <mariana-trench/shim-generator/ShimGeneration.h>
#include <mariana-trench/shim-generator/Shims.h>
#include <mariana-trench/tests/Test.h>

namespace marianatrench {

class ShimsTest : public test::Test {};

namespace {
Context test_types(const Scope& scope) {
  Context context;
  context.options = std::make_unique<Options>(
      /* models_path */ std::vector<std::string>{},
      /* field_models_path */ std::vector<std::string>{},
      /* rules_path */ std::vector<std::string>{},
      /* lifecycles_path */ std::vector<std::string>{},
      /* shims_path */ std::vector<std::string>{},
      /* proguard_configuration_paths */ std::vector<std::string>{},
      /* sequential */ false,
      /* skip_source_indexing */ true,
      /* skip_analysis */ true,
      /* model_generators_configuration */
      std::vector<ModelGeneratorConfiguration>{},
      /* model_generator_search_paths */ std::vector<std::string>{},
      /* remove_unreachable_code */ false,
      /* emit_all_via_cast_features */ false,
      /* source_root_directory */ ".",
      /* enable_cross_component_analysis */ true);
  DexStore store("test_store");
  store.add_classes(scope);
  context.stores = {store};
  context.artificial_methods =
      std::make_unique<ArtificialMethods>(*context.kinds, context.stores);
  context.methods = std::make_unique<Methods>(context.stores);
  context.control_flow_graphs =
      std::make_unique<ControlFlowGraphs>(context.stores);
  context.types = std::make_unique<Types>(*context.options, context.stores);
  return context;
}

using SerializedMultimap =
    std::vector<std::pair<std::string, std::vector<std::string>>>;

SerializedMultimap serialize_classes_to_intent_getters(
    const ClassesToIntentGettersMap& classes_to_intent_getters) {
  SerializedMultimap serialized;
  for (const auto& [dex_type, methods] : classes_to_intent_getters) {
    std::vector<std::string> serialized_methods;
    for (const auto& method : methods) {
      serialized_methods.push_back(method->show());
    }
    serialized.emplace_back(dex_type->str(), std::move(serialized_methods));
  }
  sort(serialized.begin(), serialized.end());
  return serialized;
}

SerializedMultimap serialize_methods_to_routed_intents(
    const MethodToRoutedIntentClassesMap& method_to_routed_intents) {
  SerializedMultimap serialized;
  for (const auto& [method, dex_types] : method_to_routed_intents) {
    std::vector<std::string> serialized_types;
    for (const auto& dex_type : dex_types) {
      serialized_types.emplace_back(dex_type->str());
    }
    serialized.emplace_back(method->show(), serialized_types);
  }
  sort(serialized.begin(), serialized.end());
  return serialized;
}

} // namespace

TEST_F(ShimsTest, TestBuildCrossComponentAnalysisShims) {
  Scope scope;
  auto intent_methods = redex::create_methods(
      scope,
      "Landroid/content/Intent;",
      {
          R"(
            (method (public) "Landroid/content/Intent;.<init>:(Landroid/content/Context;Ljava/lang/Class;)V"
            (
              (return-void)
            )
            ))",
          R"(
            (method (public) "Landroid/content/Intent;.<init>:(Ljava/lang/Class;)V"
            (
              (return-void)
            )
            ))",
          R"(
            (method (public) "Landroid/content/Intent;.setClass:(Landroid/content/Context;Ljava/lang/Class;)V"
            (
              (return-void)
            )
            ))",
      });
  auto dex_methods = redex::create_methods(
      scope,
      "LClass;",
      {
          R"(
            (method (public) "LClass;.routes_intent_via_constructor:()V"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (new-instance "Landroid/content/Context;")
              (move-result-pseudo-object v1)
              (const-class "LRouteTo;")
              (move-result-pseudo-object v2)
              (invoke-direct (v0 v1 v2) "Landroid/content/Intent;.<init>:(Landroid/content/Context;Ljava/lang/Class;)V")
              (return-void)
            )
            ))",
          R"(
            (method (public) "LClass;.routes_intent_via_set_class:()V"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (invoke-direct (v0) "Landroid/content/Intent;.<init>:()V")
              (new-instance "Landroid/content/Context;")
              (move-result-pseudo-object v1)
              (const-class "LRouteTo;")
              (move-result-pseudo-object v2)
              (invoke-direct (v0 v1 v2) "Landroid/content/Intent;.setClass:(Landroid/content/Context;Ljava/lang/Class;)V")
              (return-void)
            )
            ))",
          R"(
            (method (public) "LClass;.does_not_route_intent:()V"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (const-class "LDontRouteTo;")
              (move-result-pseudo-object v1)
              (invoke-direct (v0 v1) "Landroid/content/Intent;.<init>:(Ljava/lang/Class;)V")
              (return-void)
            )
            ))",
          R"(
            (method (public) "LClass;.getIntent:()Landroid/content/Intent;"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (return-object v0)
            )
            ))",
          R"(
            (method (public) "LClass;.gets_routed_intent:()V"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (invoke-direct (v0) "LClass;.getIntent:()Landroid/content/Intent;")
              (return-void)
            )
            ))",
          R"(
            (method (public) "LClass;.also_gets_routed_intent:()V"
            (
              (new-instance "Landroid/content/Intent;")
              (move-result-pseudo-object v0)
              (invoke-direct (v0) "LClass;.getIntent:()Landroid/content/Intent;")
              (return-void)
            )
            ))",
      });

  auto context = test_types(scope);
  MethodMappings method_mappings = MethodMappings(*context.methods);
  Shims shims = ShimGeneration::run(context, method_mappings);

  auto classes_to_intent_getters =
      serialize_classes_to_intent_getters(shims.classes_to_intent_getters());
  SerializedMultimap expected_classes_to_intent_getters{std::make_pair(
      "LClass;",
      std::vector<std::string>{
          "LClass;.also_gets_routed_intent:()V",
          "LClass;.gets_routed_intent:()V",
      })};
  EXPECT_EQ(classes_to_intent_getters, expected_classes_to_intent_getters);

  auto methods_to_routed_intents =
      serialize_methods_to_routed_intents(shims.methods_to_routed_intents());
  SerializedMultimap expected_methods_to_routed_intents{
      std::make_pair(
          "LClass;.routes_intent_via_constructor:()V",
          std::vector<std::string>{"LRouteTo;"}),
      std::make_pair(
          "LClass;.routes_intent_via_set_class:()V",
          std::vector<std::string>{"LRouteTo;"}),

  };
  EXPECT_EQ(methods_to_routed_intents, expected_methods_to_routed_intents);
}
} // namespace marianatrench