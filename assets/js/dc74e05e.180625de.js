"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,o({},t,{components:a}))}},c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=i,_=m["".concat(r,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(_,s(s({ref:t},d),{},{components:a})):n.createElement(_,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},32639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},r=void 0,s={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Mariana Trench is highly configurable and we recommend that you invest time into adjusting the tool to your specific use cases. At Facebook, we have dedicated security engineers that will spend a significant amount of their time adding new rules and model generators to improve the analysis results.",source:"@site/documentation/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Customize Sources and Sinks",permalink:"/docs/customize-sources-and-sinks"}},l={},d=[{value:"Command Line Options",id:"command-line-options",level:2},{value:"<code>--apk-path</code>",id:"--apk-path",level:4},{value:"<code>--output-directory OUTPUT_DIRECTORY</code>",id:"--output-directory-output_directory",level:4},{value:"<code>--system-jar-configuration-path SYSTEM_JAR_CONFIGURATION_PATH</code>",id:"--system-jar-configuration-path-system_jar_configuration_path",level:4},{value:"<code>--rules-paths RULES_PATHS</code>",id:"--rules-paths-rules_paths",level:4},{value:"<code>--source-root-directory SOURCE_ROOT_DIRECTORY</code>",id:"--source-root-directory-source_root_directory",level:4},{value:"<code>--model-generator-configuration-paths MODEL_GENERATOR_CONFIGURATION_PATHS</code>",id:"--model-generator-configuration-paths-model_generator_configuration_paths",level:4},{value:"<code>--model-generator-search-paths MODEL_GENERATOR_SEARCH_PATHS</code>",id:"--model-generator-search-paths-model_generator_search_paths",level:4},{value:"<code>--maximum-source-sink-distance MAXIMUM_SOURCE_SINK_DISTANCE</code>",id:"--maximum-source-sink-distance-maximum_source_sink_distance",level:4},{value:"<code>--heuristics HEURISTICS_FILE_PATH</code>",id:"--heuristics-heuristics_file_path",level:4},{value:"Heuristics Parameters",id:"heuristics-parameters",level:2},{value:"<code>join_override_threshold INT</code>",id:"join_override_threshold-int",level:4},{value:"<code>android_join_override_threshold INT</code>",id:"android_join_override_threshold-int",level:4},{value:"<code>warn_override_threshold INT</code>",id:"warn_override_threshold-int",level:4},{value:"<code>generation_max_port_size INT</code>",id:"generation_max_port_size-int",level:4},{value:"<code>generation_max_output_path_leaves INT</code>",id:"generation_max_output_path_leaves-int",level:4},{value:"<code>parameter_source_max_port_size INT</code>",id:"parameter_source_max_port_size-int",level:4},{value:"<code>parameter_source_max_output_path_leaves INT</code>",id:"parameter_source_max_output_path_leaves-int",level:4},{value:"<code>sink_max_port_size INT</code>",id:"sink_max_port_size-int",level:4},{value:"<code>sink_max_input_path_leaves INT</code>",id:"sink_max_input_path_leaves-int",level:4},{value:"<code>call_effect_source_max_port_size INT</code>",id:"call_effect_source_max_port_size-int",level:4},{value:"<code>call_effect_source_max_output_path_leaves INT</code>",id:"call_effect_source_max_output_path_leaves-int",level:4},{value:"<code>call_effect_sink_max_port_size INT</code>",id:"call_effect_sink_max_port_size-int",level:4},{value:"<code>call_effect_sink_max_input_path_leaves INT</code>",id:"call_effect_sink_max_input_path_leaves-int",level:4},{value:"<code>max_number_iterations INT</code>",id:"max_number_iterations-int",level:4},{value:"<code>max_depth_class_properties INT</code>",id:"max_depth_class_properties-int",level:4},{value:"<code>max_call_chain_source_sink_distance INT</code>",id:"max_call_chain_source_sink_distance-int",level:4},{value:"<code>propagation_max_input_path_size INT</code>",id:"propagation_max_input_path_size-int",level:4},{value:"<code>propagation_max_input_path_leaves INT</code>",id:"propagation_max_input_path_leaves-int",level:4},{value:"Heuristics Parameter Configuration Example",id:"heuristics-parameter-configuration-example",level:3}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,i.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Mariana Trench is highly configurable and we recommend that you invest time into adjusting the tool to your specific use cases. At Facebook, we have dedicated security engineers that will spend a significant amount of their time adding new rules and model generators to improve the analysis results."),(0,i.mdx)("p",null,"This page will cover the more important, non-trivial configuration options. Note that you will spend most of your time configuring Mariana Trench writing model generators. These are covered in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/models"},"next section"),"."),(0,i.mdx)("h2",{id:"command-line-options"},"Command Line Options"),(0,i.mdx)("p",null,"You can get a full set of options by running ",(0,i.mdx)("inlineCode",{parentName:"p"},"mariana-trench --help"),". The following is an abbreviated version of the output."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"$ mariana-trench --help\n\nTarget arguments:\n  --apk-path APK_PATH   The APK to analyze.\n\nOutput arguments:\n  --output-directory OUTPUT_DIRECTORY\n                        The directory to store results in.\n\nConfiguration arguments:\n  --system-jar-configuration-path SYSTEM_JAR_CONFIGURATION_PATH\n                        A JSON configuration file with a list of paths to the system jars.\n  --rules-paths RULES_PATHS\n                        A `;`-separated list of rules files and directories containing rules files.\n  --repository-root-directory REPOSITORY_ROOT_DIRECTORY\n                        The root of the repository. Resulting paths will be relative to this.\n  --source-root-directory SOURCE_ROOT_DIRECTORY\n                        The root where source files for the APK can be found.\n  --model-generator-configuration-paths MODEL_GENERATOR_CONFIGURATION_PATHS\n                        A `;`-separated list of paths specifying JSON configuration files. Each file is a list of paths to JSON model generators relative to the\n                        configuration file or names of CPP model generators.\n  --model-generator-search-paths MODEL_GENERATOR_SEARCH_PATHS\n                        A `;`-separated list of paths where we look up JSON model generators.\n  --maximum-source-sink-distance MAXIMUM_SOURCE_SINK_DISTANCE\n                        Limits the distance of sources and sinks from a trace entry point.\n")),(0,i.mdx)("h4",{id:"--apk-path"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--apk-path")),(0,i.mdx)("p",null,"Mariana Trench analyzes Dalvik bytecode. You provide it with the android app (APK) to analyze."),(0,i.mdx)("h4",{id:"--output-directory-output_directory"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--output-directory OUTPUT_DIRECTORY")),(0,i.mdx)("p",null,"The output of the analysis is a file containing metadata about the particular run in JSON format as well as sharded files containing data flow specifications for every method in the APK. These files need to be processed by SAPP (see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started"),") after the analysis. The flag specifies where these files are saved."),(0,i.mdx)("h4",{id:"--system-jar-configuration-path-system_jar_configuration_path"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--system-jar-configuration-path SYSTEM_JAR_CONFIGURATION_PATH")),(0,i.mdx)("p",null,"This path points to a json file containing a list of ",(0,i.mdx)("inlineCode",{parentName:"p"},".jar")," files that the analysis should include in the analysis. It's important that this contains at least the ",(0,i.mdx)("inlineCode",{parentName:"p"},"android.jar")," on your system. This file is typically located in your android SDK distribution at ",(0,i.mdx)("inlineCode",{parentName:"p"},"$ANDROID_SDK/platforms/android-30/android.jar"),". Without the ",(0,i.mdx)("inlineCode",{parentName:"p"},"android.jar"),", Mariana Trench will not know about many methods from the standard library that might be important for your model generators."),(0,i.mdx)("h4",{id:"--rules-paths-rules_paths"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--rules-paths RULES_PATHS")),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},";")," separated search path pointing to files and directories containing rules files. These files specify what taint flows Mariana Trench should look for. Check out the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/rules.json#L2-L13"},(0,i.mdx)("inlineCode",{parentName:"a"},"rules.json"))," that's provided by default. It specifies that we want to find flows from user controlled input (",(0,i.mdx)("inlineCode",{parentName:"p"},"ActivityUserInput"),") into ",(0,i.mdx)("inlineCode",{parentName:"p"},"CodeExecution")," sinks and that this constitutes a remote code execution."),(0,i.mdx)("h4",{id:"--source-root-directory-source_root_directory"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--source-root-directory SOURCE_ROOT_DIRECTORY")),(0,i.mdx)("p",null,"Mariana Trench will do a source indexing path before the analysis. This is because Dalvik/Java bytecode does not contain complete location information, only filenames (not paths) and line numbers. The index is later used to emit precise locations."),(0,i.mdx)("h4",{id:"--model-generator-configuration-paths-model_generator_configuration_paths"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--model-generator-configuration-paths MODEL_GENERATOR_CONFIGURATION_PATHS")),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},";")," separated set of files containing the names of model generators to run. See ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/default_generator_config.json"},(0,i.mdx)("inlineCode",{parentName:"a"},"default_generator_config.json"))," for an example."),(0,i.mdx)("h4",{id:"--model-generator-search-paths-model_generator_search_paths"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--model-generator-search-paths MODEL_GENERATOR_SEARCH_PATHS")),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},";")," separated search path where Mariana Trench will try to find the model generators specified in the generator configuration."),(0,i.mdx)("h4",{id:"--maximum-source-sink-distance-maximum_source_sink_distance"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--maximum-source-sink-distance MAXIMUM_SOURCE_SINK_DISTANCE")),(0,i.mdx)("p",null,"For performance reasons it can be useful to limit the maximum length of a trace Mariana Trench tries to find (note that longer traces also tend to be harder to interpret). Due to the modular nature of the analysis the value specified here limits the maximum length from the trace root to the source, and from the trace root to the sink. This means found traces can have length of ",(0,i.mdx)("inlineCode",{parentName:"p"},"2 x MAXIMUM_SOURCE_SINK_DISTANCE"),"."),(0,i.mdx)("h4",{id:"--heuristics-heuristics_file_path"},(0,i.mdx)("inlineCode",{parentName:"h4"},"--heuristics HEURISTICS_FILE_PATH")),(0,i.mdx)("p",null,"Mariana Trench uses various heuristics parameters during the analysis. It is possible to set some of them with a JSON configuration file. The complete list of configurable parameters is reported in the ",(0,i.mdx)("a",{parentName:"p",href:"#heuristics-parameters"},"heuristics parameters section"),". It is optional to specify a configuration for the heuristics parameters, and the the parameters that are not specified are set to a default value."),(0,i.mdx)("h2",{id:"heuristics-parameters"},"Heuristics Parameters"),(0,i.mdx)("h4",{id:"join_override_threshold-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"join_override_threshold INT")),(0,i.mdx)("p",null,"When a method has a set of overrides greater than this threshold, Mariana Trench does not join all overrides at call sites."),(0,i.mdx)("h4",{id:"android_join_override_threshold-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"android_join_override_threshold INT")),(0,i.mdx)("p",null,"When an android/java/google method has a set of overrides which is greater than this threshold, Mariana Trench does not join all overrides at call sites."),(0,i.mdx)("h4",{id:"warn_override_threshold-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"warn_override_threshold INT")),(0,i.mdx)("p",null,"When a method which has a set of overrides greater than this threshold that is not marked with ",(0,i.mdx)("inlineCode",{parentName:"p"},"NoJoinVirtualOverrides")," is called at least once, Mariana Trench prints a warning."),(0,i.mdx)("h4",{id:"generation_max_port_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"generation_max_port_size INT")),(0,i.mdx)("p",null,"Maximum size of the port of a generation."),(0,i.mdx)("h4",{id:"generation_max_output_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"generation_max_output_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of output paths of generations. When reaching the maximum, Mariana Trench collapses all the subtrees into a single node."),(0,i.mdx)("h4",{id:"parameter_source_max_port_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"parameter_source_max_port_size INT")),(0,i.mdx)("p",null,"Maximum size of the port of a parameter source."),(0,i.mdx)("h4",{id:"parameter_source_max_output_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"parameter_source_max_output_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of output paths of parameter sources. When reaching the maximum, Mariana Trench collapses all the subtrees into a single node."),(0,i.mdx)("h4",{id:"sink_max_port_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"sink_max_port_size INT")),(0,i.mdx)("p",null,"Maximum size of the port of a sink."),(0,i.mdx)("h4",{id:"sink_max_input_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"sink_max_input_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of input paths of sinks. When reaching the maximum, Mariana Trench collapses all the subtrees into a single node."),(0,i.mdx)("h4",{id:"call_effect_source_max_port_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"call_effect_source_max_port_size INT")),(0,i.mdx)("p",null,"Maximum size of the port of a call effect source."),(0,i.mdx)("h4",{id:"call_effect_source_max_output_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"call_effect_source_max_output_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of output paths of call effect sources. When reaching the maximum, Mariana Trench collapses all the subtrees into a single node."),(0,i.mdx)("h4",{id:"call_effect_sink_max_port_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"call_effect_sink_max_port_size INT")),(0,i.mdx)("p",null,"Maximum size of the port of a call effect sink."),(0,i.mdx)("h4",{id:"call_effect_sink_max_input_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"call_effect_sink_max_input_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of input paths of call effect sinks. When reaching the maximum, Mariana Trench collapses all the subtrees into a single node."),(0,i.mdx)("h4",{id:"max_number_iterations-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"max_number_iterations INT")),(0,i.mdx)("p",null,"Maximum number of global iterations before Mariana Trench aborts the analysis."),(0,i.mdx)("h4",{id:"max_depth_class_properties-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"max_depth_class_properties INT")),(0,i.mdx)("p",null,"Maximum depth of dependency graph traversal to find class properties."),(0,i.mdx)("h4",{id:"max_call_chain_source_sink_distance-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"max_call_chain_source_sink_distance INT")),(0,i.mdx)("p",null,"Maximum number of hops that can be tracked for a call chain issue."),(0,i.mdx)("h4",{id:"propagation_max_input_path_size-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"propagation_max_input_path_size INT")),(0,i.mdx)("p",null,"Maximum size of the input access path of a propagation."),(0,i.mdx)("h4",{id:"propagation_max_input_path_leaves-int"},(0,i.mdx)("inlineCode",{parentName:"h4"},"propagation_max_input_path_leaves INT")),(0,i.mdx)("p",null,"Maximum number of leaves in the tree of input paths of propagations."),(0,i.mdx)("h3",{id:"heuristics-parameter-configuration-example"},"Heuristics Parameter Configuration Example"),(0,i.mdx)("p",null,"The following JSON document is a valid configuration file for the heuristics parameters.\nIt improves the precision of the analysis by sacrificing some performance."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "join_override_threshold": 100,\n    "android_join_override_threshold": 100,\n    "warn_override_threshold": 100,\n    "generation_max_port_size": 10,\n    "generation_max_output_path_leaves": 30,\n    "parameter_source_max_port_size": 10,\n    "parameter_source_max_output_path_leaves": 30,\n    "sink_max_port_size": 10,\n    "sink_max_input_path_leaves": 30,\n    "call_effect_source_max_port_size": 10,\n    "call_effect_source_max_output_path_leaves": 30,\n    "call_effect_sink_max_port_size": 10,\n    "call_effect_sink_max_input_path_leaves": 30,\n    "max_number_iterations": 300,\n    "max_depth_class_properties": 30,\n    "max_call_chain_source_sink_distance": 30,\n    "propagation_max_input_path_size": 10,\n    "propagation_max_input_path_leaves": 10\n}\n')))}c.isMDXComponent=!0}}]);