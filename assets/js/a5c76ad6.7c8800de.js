"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79589],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(i),h=r,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return i?n.createElement(f,o(o({ref:t},d),{},{components:i})):n.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8473:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const a={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/redshift/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/overview.md"},o="Redshift Ingestion Guide: Overview",s={unversionedId:"docs/quick-ingestion-guides/redshift/overview",id:"version-0.12.0/docs/quick-ingestion-guides/redshift/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.12.0/docs/quick-ingestion-guides/redshift/overview.md",sourceDirName:"docs/quick-ingestion-guides/redshift",slug:"/quick-ingestion-guides/redshift/overview",permalink:"/docs/quick-ingestion-guides/redshift/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/overview.md",tags:[],version:"0.12.0",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/redshift/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/bigquery/configuration"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/redshift/setup"}},l={},u=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redshift-ingestion-guide-overview"},"Redshift Ingestion Guide: Overview"),(0,r.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,r.kt)("p",null,"This guide will help you set up the Redshift connector through the DataHub UI to begin ingesting metadata into DataHub."),(0,r.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from Redshift and load it into DataHub. This will include to following Redshift asset types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Database"),(0,r.kt)("li",{parentName:"ul"},"Schemas (External and Internal)"),(0,r.kt)("li",{parentName:"ul"},"Tables (External and Internal)"),(0,r.kt)("li",{parentName:"ul"},"Views")),(0,r.kt)("p",null,"This recurring ingestion pipeline will also extract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage statistics")," to help you understand recent query activity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table-level lineage")," (where available) to automatically define interdependencies between datasets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table- and column-level profile statistics")," to help you understand the shape of the data")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The source currently can ingest one database with one recipe")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"If that all sounds like what you're looking for, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/redshift/setup"},"next page"),", where we'll talk about prerequisites"),(0,r.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,r.kt)("p",null,"If you're looking to do something more in-depth, want to use CLI instead of the DataHub UI, or just need to look at the reference documentation for this connector, use these links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/redshift/#module-redshift"},"Redshift Ingestion Reference Guide"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);