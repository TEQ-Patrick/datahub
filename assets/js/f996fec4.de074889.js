"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,u=p["".concat(i,".").concat(f)]||p[f]||c[f]||o;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},16155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:0,title:"Data Platform",slug:"/generated/metamodel/entities/dataplatform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataPlatform.md"},l="Data Platform",s={unversionedId:"docs/generated/metamodel/entities/dataPlatform",id:"version-0.12.0/docs/generated/metamodel/entities/dataPlatform",title:"Data Platform",description:"Data Platforms are systems or tools that contain Datasets, Dashboards, Charts, and all other kinds of data assets modeled in the metadata graph.",source:"@site/versioned_docs/version-0.12.0/docs/generated/metamodel/entities/dataPlatform.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/dataplatform",permalink:"/docs/generated/metamodel/entities/dataplatform",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataPlatform.md",tags:[],version:"0.12.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Data Platform",slug:"/generated/metamodel/entities/dataplatform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataPlatform.md"},sidebar:"overviewSidebar",previous:{title:"Metadata Events",permalink:"/docs/what/mxe"},next:{title:"Role",permalink:"/docs/generated/metamodel/entities/role"}},i={},d=[{value:"Identity",id:"identity",level:2},{value:"Aspects",id:"aspects",level:2},{value:"dataPlatformKey",id:"dataplatformkey",level:3},{value:"dataPlatformInfo",id:"dataplatforminfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-platform"},"Data Platform"),(0,r.kt)("p",null,"Data Platforms are systems or tools that contain Datasets, Dashboards, Charts, and all other kinds of data assets modeled in the metadata graph."),(0,r.kt)("p",null,"Examples of data platforms are ",(0,r.kt)("inlineCode",{parentName:"p"},"redshift"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"looker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tableau")," etc."),(0,r.kt)("h2",{id:"identity"},"Identity"),(0,r.kt)("p",null,"Data Platforms are identified by the name of the technology. A complete list of currently supported data platforms is available ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/datahub-project/datahub/master/metadata-service/war/src/main/resources/boot/data_platforms.json"},"here"),"."),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"dataplatformkey"},"dataPlatformKey"),(0,r.kt)("p",null,"Key for a Data Platform"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformKey"\n  },\n  "name": "DataPlatformKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "type": "string",\n      "name": "platformName",\n      "doc": "Data platform name i.e. hdfs, oracle, espresso"\n    }\n  ],\n  "doc": "Key for a Data Platform"\n}\n'))),(0,r.kt)("h3",{id:"dataplatforminfo"},"dataPlatformInfo"),(0,r.kt)("p",null,"Information about a data platform"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInfo"\n  },\n  "name": "DataPlatformInfo",\n  "namespace": "com.linkedin.dataplatform",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": false,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM"\n      },\n      "validate": {\n        "strlen": {\n          "max": 15\n        }\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the data platform"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "The name that will be used for displaying a platform type."\n    },\n    {\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "FILE_SYSTEM": "Value for a file system, e.g. hdfs",\n          "KEY_VALUE_STORE": "Value for a key value store, e.g. espresso, voldemort",\n          "MESSAGE_BROKER": "Value for a message broker, e.g. kafka",\n          "OBJECT_STORE": "Value for an object store, e.g. ambry",\n          "OLAP_DATASTORE": "Value for an OLAP datastore, e.g. pinot",\n          "OTHERS": "Value for other platforms, e.g salesforce, dovetail",\n          "QUERY_ENGINE": "Value for a query engine, e.g. presto",\n          "RELATIONAL_DB": "Value for a relational database, e.g. oracle, mysql",\n          "SEARCH_ENGINE": "Value for a search engine, e.g seas"\n        },\n        "name": "PlatformType",\n        "namespace": "com.linkedin.dataplatform",\n        "symbols": [\n          "FILE_SYSTEM",\n          "KEY_VALUE_STORE",\n          "MESSAGE_BROKER",\n          "OBJECT_STORE",\n          "OLAP_DATASTORE",\n          "OTHERS",\n          "QUERY_ENGINE",\n          "RELATIONAL_DB",\n          "SEARCH_ENGINE"\n        ],\n        "doc": "Platform types available at LinkedIn"\n      },\n      "name": "type",\n      "doc": "Platform type this data platform describes"\n    },\n    {\n      "type": "string",\n      "name": "datasetNameDelimiter",\n      "doc": "The delimiter in the dataset names on the data platform, e.g. \'/\' for HDFS and \'.\' for Oracle"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "logoUrl",\n      "default": null,\n      "doc": "The URL for a logo associated with the platform"\n    }\n  ],\n  "doc": "Information about a data platform"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}c.isMDXComponent=!0}}]);