"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){return function(t){var a=c(t.components);return r.createElement(e,i({},t,{components:a}))}},c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,f=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={id:"feature-descriptions",title:"Feature Glossary",sidebar_label:"Feature Glossary"},o=void 0,l={unversionedId:"feature-descriptions",id:"feature-descriptions",title:"Feature Glossary",description:"As explained in the features section of the models wiki, a feature can be used to tag a flow and help filtering issues. A feature describes a property of a flow. A feature can be any arbitrary string. A feature that's prefixed with always- signals that every path in the issue has that feature associated with it, while lacking that prefix means that at least one path, but not all paths, contains that feature.",source:"@site/documentation/feature_descriptions.md",sourceDirName:".",slug:"/feature-descriptions",permalink:"/docs/feature-descriptions",draft:!1,editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/feature_descriptions.md",tags:[],version:"current",frontMatter:{id:"feature-descriptions",title:"Feature Glossary",sidebar_label:"Feature Glossary"},sidebar:"docs",previous:{title:"Shims",permalink:"/docs/shims"},next:{title:"Known False Negatives",permalink:"/docs/known-false-negatives"}},s={},d=[{value:"Pre-configured features",id:"pre-configured-features",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"As explained in the ",(0,n.mdx)("a",{parentName:"p",href:"../models/#features"},"features section of the models wiki"),", a feature can be used to tag a flow and help filtering issues. A feature describes a property of a flow. A feature can be any arbitrary string. A feature that's prefixed with ",(0,n.mdx)("inlineCode",{parentName:"p"},"always-")," signals that every path in the issue has that feature associated with it, while lacking that prefix means that at least one path, but not all paths, contains that feature."),(0,n.mdx)("p",null,"This page will cover the purpose of the pre-configured features to help you understand how you can use them best."),(0,n.mdx)("h2",{id:"pre-configured-features"},"Pre-configured features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"via-caller-exported",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This feature is applied when the root callable is directly or indirectly called from an exported component defined in the Android manifest. For example, if the root callable is in the ",(0,n.mdx)("inlineCode",{parentName:"li"},"MainActivity")," and the ",(0,n.mdx)("inlineCode",{parentName:"li"},"MainActivity")," is exported, this feature will be attached. It is needed in order to determine if an ",(0,n.mdx)("inlineCode",{parentName:"li"},"Intent")," source is third-party controllable or not. This feature is sometimes accompanied by ",(0,n.mdx)("inlineCode",{parentName:"li"},"via-class")," which tells you which class Mariana Trench used to determine that the root callable is called from an exported class."))),(0,n.mdx)("li",{parentName:"ul"},"via-caller-unexported",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Same as ",(0,n.mdx)("inlineCode",{parentName:"li"},"via-caller-exported")," but applied if the root callable is considered to be called only via unexported components"))),(0,n.mdx)("li",{parentName:"ul"},"via-caller-permission",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Similair to ",(0,n.mdx)("inlineCode",{parentName:"li"},"via-caller-exported")," but applied if the root callable paths to a manifest entry that has a protectionLevel or Android permission declared."))),(0,n.mdx)("li",{parentName:"ul"},"via-explicit-intent",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Applied when the taint flow goes via a class or package name setter on an Intent. This can be used to infer whether a launched Intent can resolve to third party apps or only to a specifically defined app (implicit versus explicit intents)."))),(0,n.mdx)("li",{parentName:"ul"},"via-inner-class-this",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Anonymous classes in Java byte code transfer the taint from the parent class to the anonymous class via ",(0,n.mdx)("inlineCode",{parentName:"li"},"this.this$0")," which can lead to ",(0,n.mdx)("a",{parentName:"li",href:"../models/#taint-broadening"},"broaden false positives"),". This feature can be used to filter out such flows when they are a common false positive pattern."))),(0,n.mdx)("li",{parentName:"ul"},"cast:","[...]",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Cast features such as ",(0,n.mdx)("inlineCode",{parentName:"li"},"cast:boolean")," are applied when the tainted data is converted to that specific type. This allows for example to filter out data flows such as ",(0,n.mdx)("inlineCode",{parentName:"li"},"taintedString.length()")," where the returned tainted integer may no longer be of interest."))),(0,n.mdx)("li",{parentName:"ul"},"via-obscure",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Obscure methods are methods for which Mariana Trench doesn't have any byte code available. Therefore we generally apply taint-in-taint-out behaviour on these methods and add the feature ",(0,n.mdx)("inlineCode",{parentName:"li"},"via-obscure")," to tell the user that the data flow went along an obscure method."))),(0,n.mdx)("li",{parentName:"ul"},"via-","[...]","-broadening",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Is applied when any of the four broaden operations is applied (see ",(0,n.mdx)("a",{parentName:"li",href:"../models/#taint-broadening"},"Models"),").")))))}c.isMDXComponent=!0}}]);