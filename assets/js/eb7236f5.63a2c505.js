"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(m,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(7294),n(3905));const l={sidebar_position:3},o="Select",i={unversionedId:"form-elements/native-elements/select",id:"form-elements/native-elements/select",title:"Select",description:"You bet native selects are easy.",source:"@site/docs/form-elements/native-elements/select.md",sourceDirName:"form-elements/native-elements",slug:"/form-elements/native-elements/select",permalink:"/formatomus/form-elements/native-elements/select",draft:!1,editUrl:"https://github.com/owenjs/formatomus/tree/main/apps/docs/docs/form-elements/native-elements/select.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Textarea",permalink:"/formatomus/form-elements/native-elements/textarea"},next:{title:"Error Handling",permalink:"/formatomus/error-handling"}},m={},p=[{value:"Select Options",id:"select-options",level:2},{value:"Styling",id:"styling",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Component API",id:"component-api",level:2},{value:"Full Example",id:"full-example",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("p",null,"You bet native selects are easy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FormElement } from "@formatomus/core";\n\n<FormElement.Select\n  options={[\n    {\n      key: "foo",\n      value: "foo",\n      label: "Foo"\n    },\n    {\n      key: "foo",\n      value: "bar",\n      label: "Bar"\n    }\n  ]}\n/>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<FormElement.Select />")," component includes all the native props the regular ",(0,a.kt)("inlineCode",{parentName:"p"},"<select />")," element has, while automatically registering the element to the useForm hook context."),(0,a.kt)("p",null,"Ensure the element is wrapped in the ",(0,a.kt)("a",{parentName:"p",href:"/form-elements/"},(0,a.kt)("inlineCode",{parentName:"a"},"<FormElement />"))," component so that is it registered to your ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook context correctly."),(0,a.kt)("h2",{id:"select-options"},"Select Options"),(0,a.kt)("p",null,"Each option within the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop is rendered separately as an ",(0,a.kt)("inlineCode",{parentName:"p"},"<option />")," element."),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("p",null,"Use the native ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop as the styling is completely up to you!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<FormElement.Select className="my-class-name" />\n')),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"Error handling is easy with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook, and we recommend powering it with ",(0,a.kt)("a",{parentName:"p",href:"/error-handling"},"yup")),(0,a.kt)("h2",{id:"component-api"},"Component API"),(0,a.kt)("p",null,"The component inherits all the available props from the native ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"},(0,a.kt)("inlineCode",{parentName:"a"},"<select />"))," element."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"However you can't use the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," prop as we generate these automatically."),(0,a.kt)("p",{parentName:"admonition"},"You also can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onBlur"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," as these are handled by React Form Hook - this will likely change")),(0,a.kt)("p",null,"As well as:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ key: number or string; value: string; label: string }[]"),(0,a.kt)("br",null),(0,a.kt)("br",null),"An array of each option the select should display")))),(0,a.kt)("h2",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,"Here's a full example using the select input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Form, FormElement } from "@formatomus/core";\nimport { useForm } from "react-hook-form";\n\ntype FormData = { bestSupermarket: string };\n\nconst Component = () => {\n  const methods = useForm<FormData>();\n  \n  return (\n    <Form methods={methods}>\n      <FormElement name="bestSupermarket">\n        <FormElement.Label>Best Supermarket</FormElement.Label>\n\n        <FormElement.Select\n          options={[\n            {\n              key: "lidl",\n              value: "lidl",\n              label: "Lidl"\n            },\n            {\n              key: "tesco",\n              value: "tesco",\n              label: "Tesco"\n            }\n          ]}\n        />\n\n        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>\n      </FormElement>\n    </Form>\n  );\n};\n')))}u.isMDXComponent=!0}}]);