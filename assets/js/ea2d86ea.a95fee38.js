"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:35,title:"DataHubIngestionSource",slug:"/generated/metamodel/entities/datahubingestionsource",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md"},i="DataHubIngestionSource",s={unversionedId:"docs/generated/metamodel/entities/dataHubIngestionSource",id:"version-0.11.0/docs/generated/metamodel/entities/dataHubIngestionSource",title:"DataHubIngestionSource",description:"Aspects",source:"@site/versioned_docs/version-0.11.0/docs/generated/metamodel/entities/dataHubIngestionSource.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubingestionsource",permalink:"/docs/0.11.0/generated/metamodel/entities/datahubingestionsource",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md",tags:[],version:"0.11.0",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"DataHubIngestionSource",slug:"/generated/metamodel/entities/datahubingestionsource",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md"},sidebar:"overviewSidebar",previous:{title:"DataHubPolicy",permalink:"/docs/0.11.0/generated/metamodel/entities/datahubpolicy"},next:{title:"DataHubSecret",permalink:"/docs/0.11.0/generated/metamodel/entities/datahubsecret"}},c={},u=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubIngestionSourceInfo",id:"datahubingestionsourceinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],l={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubingestionsource"},"DataHubIngestionSource"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubingestionsourceinfo"},"dataHubIngestionSourceInfo"),(0,o.kt)("p",null,"Info about a DataHub ingestion source"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubIngestionSourceInfo"\n  },\n  "name": "DataHubIngestionSourceInfo",\n  "namespace": "com.linkedin.ingestion",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The display name of the ingestion source"\n    },\n    {\n      "type": "string",\n      "name": "type",\n      "doc": "The type of the source itself, e.g. mysql, bigquery, bigquery-usage. Should match the recipe."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "platform",\n      "default": null,\n      "doc": "Data Platform URN associated with the source"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "DataHubIngestionSourceSchedule",\n          "namespace": "com.linkedin.ingestion",\n          "fields": [\n            {\n              "type": "string",\n              "name": "interval",\n              "doc": "A cron-formatted execution interval, as a cron string, e.g. * * * * *"\n            },\n            {\n              "type": "string",\n              "name": "timezone",\n              "doc": "Timezone in which the cron interval applies, e.g. America/Los Angeles"\n            }\n          ],\n          "doc": "The schedule associated with an ingestion source."\n        }\n      ],\n      "name": "schedule",\n      "default": null,\n      "doc": "The schedule on which the ingestion source is executed"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "DataHubIngestionSourceConfig",\n        "namespace": "com.linkedin.ingestion",\n        "fields": [\n          {\n            "type": "string",\n            "name": "recipe",\n            "doc": "The JSON recipe to use for ingestion"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "version",\n            "default": null,\n            "doc": "The PyPI version of the datahub CLI to use when executing a recipe"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "executorId",\n            "default": null,\n            "doc": "The id of the executor to use to execute the ingestion run"\n          },\n          {\n            "type": [\n              "null",\n              "boolean"\n            ],\n            "name": "debugMode",\n            "default": null,\n            "doc": "Whether or not to run this ingestion source in debug mode"\n          }\n        ]\n      },\n      "name": "config",\n      "doc": "Parameters associated with the Ingestion Source"\n    }\n  ],\n  "doc": "Info about a DataHub ingestion source"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);