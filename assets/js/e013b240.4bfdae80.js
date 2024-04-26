"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[949],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=t(87462),a=(t(67294),t(3905)),o=t(86341);const i={id:"customize-sources-and-sinks",title:"Customize Sources and Sinks",sidebar_label:"Customize Sources and Sinks"},s=void 0,m={unversionedId:"customize-sources-and-sinks",id:"customize-sources-and-sinks",title:"Customize Sources and Sinks",description:"This page provides a high-level overview of the steps needed to update or create new sources and sinks.",source:"@site/documentation/customize_sources_and_sinks.md",sourceDirName:".",slug:"/customize-sources-and-sinks",permalink:"/docs/customize-sources-and-sinks",draft:!1,editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/customize_sources_and_sinks.md",tags:[],version:"current",frontMatter:{id:"customize-sources-and-sinks",title:"Customize Sources and Sinks",sidebar_label:"Customize Sources and Sinks"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Rules",permalink:"/docs/rules"}},l={},d=[{value:"Overview",id:"overview",level:2}],c=(u="FbCustomizeSourcesAndSinks",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var u;const p={toc:d};function f(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page provides a high-level overview of the steps needed to update or create new sources and sinks."),(0,a.mdx)("h2",{id:"overview"},"Overview"),(0,a.mdx)("p",null,"Under the context of Mariana Trench, we talk about sources and sinks in terms of methods (or, rarely, fields). For example, we may say that the return value of a method is a source (or a sink). We may also say that the 2nd parameter of a method is a source (or a sink). Such description of a method is called a ",(0,a.mdx)("strong",{parentName:"p"},'"model"'),". See ",(0,a.mdx)("a",{parentName:"p",href:"/docs/models"},"Models & Model Generators")," for more details about models and writing them."),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"}," ",(0,a.mdx)(c,{mdxType:"FbCustomizeSourcesAndSinks"})," "),(0,a.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"To define sources or sinks that are not contained in the default set of ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators/sources"},"sources")," and ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators/sinks"},"sinks"),", a user needs to:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Write one or more JSON files that respect our ",(0,a.mdx)("a",{parentName:"p",href:"/docs/models"},"model generator Domain Specific Language (DSL)"),", which express how to generate models from methods and are hence called ",(0,a.mdx)("strong",{parentName:"p"},'"model generators"'),"."),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"For example, a model generator may say that, for all methods (that will be analyzed by Mariana Trench) whose name is ",(0,a.mdx)("inlineCode",{parentName:"li"},"onActivityResult"),", specify their 2nd parameter as a source.")),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "model_generators": [\n    {\n      "find": "methods",\n      "where": [\n        {\n          "constraint": "name",\n          "pattern": "onActivityResult"\n        }\n      ],\n      "model": {\n        "sources": [\n          {\n            "kind": "TestSensitiveUserInput",\n            "port": "Argument(2)"\n          }\n        ]\n      }\n    }\n  ]\n}\n'))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Instruct Mariana Trench to read from your model generator, so that Mariana Trench will generate models at runtime."),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Intuitively, the models generated (by interpreting model generators) express sources and sinks for each method ",(0,a.mdx)("strong",{parentName:"li"},"before")," running Mariana Trench. Based on such models, Mariana Trench will automatically infer ",(0,a.mdx)("strong",{parentName:"li"},"new")," models for each method at runtime."),(0,a.mdx)("li",{parentName:"ul"},"To instruct Mariana Trench to read from customized JSON model generators, add your json model generator ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators"},"here"),"."),(0,a.mdx)("li",{parentName:"ul"},"Add the model generator name (i.e, the file name) in the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/default_generator_config.json"},"JSON configuration file"),"."))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Update ",(0,a.mdx)("strong",{parentName:"p"},'"rules"')," if necessary."),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Background: Mariana Trench categorizes sources and sinks into different ",(0,a.mdx)("strong",{parentName:"li"},'"kinds"'),", which are string-typed. For example, a source may have a kind of",(0,a.mdx)("inlineCode",{parentName:"li"},"JavascriptInterfaceUserInput"),". A sink may have a kind of ",(0,a.mdx)("inlineCode",{parentName:"li"},"Logging"),". Mariana Trench only finds data flow ",(0,a.mdx)("strong",{parentName:"li"},"from sources of a particular kind to sinks of another particular kind"),", which are called ",(0,a.mdx)("strong",{parentName:"li"},'"rules"'),". See ",(0,a.mdx)("a",{parentName:"li",href:"/docs/rules"},"Rules")," for writing them."),(0,a.mdx)("li",{parentName:"ul"},"To specify kinds that are not mentioned in the default set of rules or to specify rules that are different than the default rules, you need to specify a new rule in file ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/rules.json"},(0,a.mdx)("inlineCode",{parentName:"a"},"rules.json")),", in order to instruct Mariana Trench to find data flow that matches the new rule."),(0,a.mdx)("li",{parentName:"ul"},"For example, to catch flows from ",(0,a.mdx)("inlineCode",{parentName:"li"},"TestSensitiveUserInput")," in the example above and the sink kind ",(0,a.mdx)("inlineCode",{parentName:"li"},"Logging"),", you can add the following rule to the default ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/rules.json"},(0,a.mdx)("inlineCode",{parentName:"a"},"rules.json")),":")),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "TestRule",\n "code": 18,\n "description": "A test rule",\n "sources": [\n   "TestSensitiveUserInput"\n ],\n "sinks": [\n   "Logging"\n ]\n}\n'))))))}f.isMDXComponent=!0}}]);