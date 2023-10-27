"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(a),c=r,h=p["".concat(u,".").concat(c)]||p[c]||d[c]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),o=a(72957),s=a(16550),u=a(75238),i=a(33609),m=a(92560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),_=(()=>{const e=u??p;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{_&&s(_)}),[_]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var _=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),n=i[a].value;n!==s&&(p(t),u(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,_.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},88705:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(73992),o=a(18679);const s={title:"ML System",slug:"/api/tutorials/ml",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md"},u="ML System",i={unversionedId:"docs/api/tutorials/ml",id:"version-0.11.0/docs/api/tutorials/ml",title:"ML System",description:"Why Would You Integrate ML System with DataHub?",source:"@site/versioned_docs/version-0.11.0/docs/api/tutorials/ml.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/ml",permalink:"/docs/0.11.0/api/tutorials/ml",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md",tags:[],version:"0.11.0",frontMatter:{title:"ML System",slug:"/api/tutorials/ml",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md"},sidebar:"overviewSidebar",previous:{title:"Custom Properties",permalink:"/docs/0.11.0/api/tutorials/custom-properties"},next:{title:"CLI",permalink:"/docs/0.11.0/cli"}},m={},p=[{value:"Why Would You Integrate ML System with DataHub?",id:"why-would-you-integrate-ml-system-with-datahub",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create ML Entities",id:"create-ml-entities",level:2},{value:"Create MlFeature",id:"create-mlfeature",level:3},{value:"Create MlFeatureTable",id:"create-mlfeaturetable",level:3},{value:"Create MlModel",id:"create-mlmodel",level:3},{value:"Create MlModelGroup",id:"create-mlmodelgroup",level:3},{value:"Expected Outcome of creating entities",id:"expected-outcome-of-creating-entities",level:3},{value:"Read ML Entities",id:"read-ml-entities",level:2},{value:"Read MLFeature",id:"read-mlfeature",level:3},{value:"Read MLFeatureTable",id:"read-mlfeaturetable",level:3},{value:"Read MLModel",id:"read-mlmodel",level:3},{value:"Read MLModelGroup",id:"read-mlmodelgroup",level:3},{value:"Add ML Entities",id:"add-ml-entities",level:2},{value:"Add MlFeature to MlFeatureTable",id:"add-mlfeature-to-mlfeaturetable",level:3},{value:"Add MlFeature to MLModel",id:"add-mlfeature-to-mlmodel",level:3},{value:"Add MLGroup To MLModel",id:"add-mlgroup-to-mlmodel",level:3},{value:"Expected Outcome of Adding ML Entities",id:"expected-outcome-of-adding-ml-entities",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ml-system"},"ML System"),(0,r.kt)("h2",{id:"why-would-you-integrate-ml-system-with-datahub"},"Why Would You Integrate ML System with DataHub?"),(0,r.kt)("p",null,"Machine learning systems have become a crucial feature in modern data stacks.\nHowever, the relationships between the different components of a machine learning system, such as features, models, and feature tables, can be complex.\nThus, it is essential for these systems to be discoverable to facilitate easy access and utilization by other members of the organization."),(0,r.kt)("p",null,"For more information on ML entities, please refer to the following docs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.0/generated/metamodel/entities/mlfeature"},"MlFeature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.0/generated/metamodel/entities/mlfeaturetable"},"MlFeatureTable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.0/generated/metamodel/entities/mlmodel"},"MlModel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.0/generated/metamodel/entities/mlmodelgroup"},"MlModelGroup"))),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ML entities: MlFeature, MlFeatureTable, MlModel, MlModelGroup"),(0,r.kt)("li",{parentName:"ul"},"Read ML entities: MlFeature, MlFeatureTable, MlModel, MlModelGroup"),(0,r.kt)("li",{parentName:"ul"},"Attach MlFeatureTable or MlModel to MlFeature")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("h2",{id:"create-ml-entities"},"Create ML Entities"),(0,r.kt)("h3",{id:"create-mlfeature"},"Create MlFeature"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlfeature.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\ndataset_urn = builder.make_dataset_urn(\n    name="fct_users_deleted", platform="hive", env="PROD"\n)\nfeature_urn = builder.make_ml_feature_urn(\n    feature_table_name="my-feature-table",\n    feature_name="my-feature",\n)\n\n#  Create feature\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeature",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_urn,\n    aspectName="mlFeatureProperties",\n    aspect=models.MLFeaturePropertiesClass(\n        description="my feature", sources=[dataset_urn], dataType="TEXT"\n    ),\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,r.kt)("p",null,"Note that when creating a feature, you can access a list of data sources using ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),"."))),(0,r.kt)("h3",{id:"create-mlfeaturetable"},"Create MlFeatureTable"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlfeature_table.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\nfeature_table_urn = builder.make_ml_feature_table_urn(\n    feature_table_name="my-feature-table", platform="feast"\n)\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature", feature_table_name="my-feature-table"\n    ),\n    builder.make_ml_feature_urn(\n        feature_name="my-feature2", feature_table_name="my-feature-table"\n    ),\n]\nfeature_table_properties = models.MLFeatureTablePropertiesClass(\n    description="Test description", mlFeatures=feature_urns\n)\n\n# MCP creation\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeatureTable",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_table_urn,\n    aspect=feature_table_properties,\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,r.kt)("p",null,"Note that when creating a feature table, you can access a list of features using ",(0,r.kt)("inlineCode",{parentName:"p"},"mlFeatures"),"."))),(0,r.kt)("h3",{id:"create-mlmodel"},"Create MlModel"),(0,r.kt)("p",null,"Please note that an MlModel represents the outcome of a single training run for a model, not the collective results of all model runs."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\nmodel_urn = builder.make_ml_model_urn(\n    model_name="my-test-model", platform="science", env="PROD"\n)\nmodel_group_urns = [\n    builder.make_ml_model_group_urn(\n        group_name="my-model-group", platform="science", env="PROD"\n    )\n]\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature", feature_table_name="my-feature-table"\n    ),\n    builder.make_ml_feature_urn(\n        feature_name="my-feature2", feature_table_name="my-feature-table"\n    ),\n]\n\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspectName="mlModelProperties",\n    aspect=models.MLModelPropertiesClass(\n        description="my feature",\n        groups=model_group_urns,\n        mlFeatures=feature_urns,\n        trainingMetrics=[\n            models.MLMetricClass(\n                name="accuracy", description="accuracy of the model", value="1.0"\n            )\n        ],\n        hyperParams=[\n            models.MLHyperParamClass(\n                name="hyper_1", description="hyper_1", value="0.102"\n            )\n        ],\n    ),\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,r.kt)("p",null,"Note that when creating a model, you can access a list of features using ",(0,r.kt)("inlineCode",{parentName:"p"},"mlFeatures"),".\nAdditionally, you can access the relationship to model groups with ",(0,r.kt)("inlineCode",{parentName:"p"},"groups"),"."))),(0,r.kt)("h3",{id:"create-mlmodelgroup"},"Create MlModelGroup"),(0,r.kt)("p",null,"Please note that an MlModelGroup serves as a container for all the runs of a single ML model."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlmodel_group.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\nmodel_group_urn = builder.make_ml_model_group_urn(\n    group_name="my-model-group", platform="science", env="PROD"\n)\n\n\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModelGroup",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_group_urn,\n    aspectName="mlModelGroupProperties",\n    aspect=models.MLModelGroupPropertiesClass(\n        description="my model group",\n    ),\n)\n\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-creating-entities"},"Expected Outcome of creating entities"),(0,r.kt)("p",null,"You can search the entities in DataHub UI."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/feature-table-created.png"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/model-group-created.png"})),(0,r.kt)("h2",{id:"read-ml-entities"},"Read ML Entities"),(0,r.kt)("h3",{id:"read-mlfeature"},"Read MLFeature"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  mlFeature(urn: "urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_LIST_feature)"){\n    name\n    featureNamespace\n    description\n    properties {\n      description\n      dataType\n      version {\n        versionTag\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Expected response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeature": {\n      "name": "test_BOOL_LIST_feature",\n      "featureNamespace": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "properties": {\n        "description": null,\n        "dataType": "SEQUENCE",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlFeature(urn: \\\"urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_LIST_feature)\\\") { name featureNamespace description properties { description dataType version { versionTag } } } }\"\n}'\n")),(0,r.kt)("p",null,"Expected response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeature": {\n      "name": "test_BOOL_LIST_feature",\n      "featureNamespace": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "properties": {\n        "description": null,\n        "dataType": "SEQUENCE",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlfeature.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLFeaturePropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_feature)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLFeaturePropertiesClass)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"read-mlfeaturetable"},"Read MLFeatureTable"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  mlFeatureTable(urn: "urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)"){\n    name\n    description\n    platform {\n      name\n    }\n    properties {\n      description\n      mlFeatures {\n        name\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeatureTable": {\n      "name": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "platform": {\n        "name": "feast"\n      },\n      "properties": {\n        "description": null,\n        "mlFeatures": [\n          {\n            "name": "test_BOOL_LIST_feature"\n          },\n          ...\n          {\n            "name": "test_STRING_feature"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlFeatureTable(urn: \\\"urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)\\\") { name description platform { name } properties { description mlFeatures { name } } } }\"\n}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeatureTable": {\n      "name": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "platform": {\n        "name": "feast"\n      },\n      "properties": {\n        "description": null,\n        "mlFeatures": [\n          {\n            "name": "test_BOOL_LIST_feature"\n          },\n          ...\n          {\n            "name": "test_STRING_feature"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlfeature_table.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLFeatureTablePropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLFeatureTablePropertiesClass)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"read-mlmodel"},"Read MLModel"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  mlModel(urn: "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)"){\n    name\n    description\n    properties {\n      description\n      version\n      type\n      mlFeatures\n      groups {\n        urn\n        name\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModel": {\n      "name": "scienceModel",\n      "description": "A sample model for predicting some outcome.",\n      "properties": {\n        "description": "A sample model for predicting some outcome.",\n        "version": null,\n        "type": "Naive Bayes classifier",\n        "mlFeatures": null,\n        "groups": []\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlModel(urn: \\\"urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)\\\") { name description properties { description version type mlFeatures groups { urn name } } } }\"\n}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModel": {\n      "name": "scienceModel",\n      "description": "A sample model for predicting some outcome.",\n      "properties": {\n        "description": "A sample model for predicting some outcome.",\n        "version": null,\n        "type": "Naive Bayes classifier",\n        "mlFeatures": null,\n        "groups": []\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlmodel.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLModelPropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLModelPropertiesClass)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"read-mlmodelgroup"},"Read MLModelGroup"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  mlModelGroup(urn: "urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)"){\n    name\n    description\n    platform {\n      name\n    }\n    properties {\n      description\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Expected Response: (Note that this entity does not exist in the sample ingestion and you might want to create this entity first.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModelGroup": {\n      "name": "my-model-group",\n      "description": "my model group",\n      "platform": {\n        "name": "science"\n      },\n      "properties": {\n        "description": "my model group"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlModelGroup(urn: \\\"urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)\\\") { name description platform { name } properties { description } } }\"\n}'\n")),(0,r.kt)("p",null,"Expected Response: (Note that this entity does not exist in the sample ingestion and you might want to create this entity first.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModelGroup": {\n      "name": "my-model-group",\n      "description": "my model group",\n      "platform": {\n        "name": "science"\n      },\n      "properties": {\n        "description": "my model group"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlmodel_group.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLModelGroupPropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLModelGroupPropertiesClass)\n\nprint(result)\n\n')))),(0,r.kt)("h2",{id:"add-ml-entities"},"Add ML Entities"),(0,r.kt)("h3",{id:"add-mlfeature-to-mlfeaturetable"},"Add MlFeature to MlFeatureTable"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlfeature_to_mlfeature_table.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\nfrom datahub.metadata.schema_classes import MLFeatureTablePropertiesClass\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nfeature_table_urn = builder.make_ml_feature_table_urn(\n    feature_table_name="my-feature-table", platform="feast"\n)\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature2", feature_table_name="my-feature-table"\n    ),\n]\n\n# This code concatenates the new features with the existing features in the feature table.\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\nfeature_table_properties = graph.get_aspect(\n    entity_urn=feature_table_urn, aspect_type=MLFeatureTablePropertiesClass\n)\nif feature_table_properties:\n    current_features = feature_table_properties.mlFeatures\n    print("current_features:", current_features)\n    if current_features:\n        feature_urns += current_features\n\nfeature_table_properties = models.MLFeatureTablePropertiesClass(mlFeatures=feature_urns)\n# MCP createion\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeatureTable",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_table_urn,\n    aspect=feature_table_properties,\n)\n\n# Emit metadata! This is a blocking call\nemitter.emit(metadata_change_proposal)\n\n')))),(0,r.kt)("h3",{id:"add-mlfeature-to-mlmodel"},"Add MlFeature to MLModel"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlfeature_to_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\nfrom datahub.metadata.schema_classes import MLModelPropertiesClass\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nmodel_urn = builder.make_ml_model_urn(\n    model_name="my-test-model", platform="science", env="PROD"\n)\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature3", feature_table_name="my-feature-table"\n    ),\n]\n\n# This code concatenates the new features with the existing features in the model\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\nmodel_properties = graph.get_aspect(\n    entity_urn=model_urn, aspect_type=MLModelPropertiesClass\n)\nif model_properties:\n    current_features = model_properties.mlFeatures\n    print("current_features:", current_features)\n    if current_features:\n        feature_urns += current_features\n\nmodel_properties = models.MLModelPropertiesClass(mlFeatures=feature_urns)\n\n# MCP creation\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspect=model_properties,\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')))),(0,r.kt)("h3",{id:"add-mlgroup-to-mlmodel"},"Add MLGroup To MLModel"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlgroup_to_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nmodel_group_urns = [\n    builder.make_ml_model_group_urn(\n        group_name="my-model-group", platform="science", env="PROD"\n    )\n]\nmodel_urn = builder.make_ml_model_urn(\n    model_name="science-model", platform="science", env="PROD"\n)\n\n# This code concatenates the new features with the existing features in the feature table.\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ntarget_model_properties = graph.get_aspect(\n    entity_urn=model_urn, aspect_type=models.MLModelPropertiesClass\n)\nif target_model_properties:\n    current_model_groups = target_model_properties.groups\n    print("current_model_groups:", current_model_groups)\n    if current_model_groups:\n        model_group_urns += current_model_groups\n\nmodel_properties = models.MLModelPropertiesClass(groups=model_group_urns)\n# MCP createion\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspect=model_properties,\n)\n\n# Emit metadata! This is a blocking call\nemitter.emit(metadata_change_proposal)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-ml-entities"},"Expected Outcome of Adding ML Entities"),(0,r.kt)("p",null,"You can access to ",(0,r.kt)("inlineCode",{parentName:"p"},"Features")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," Tab of each entity to view the added entities."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/feature-added-to-model.png"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/model-group-added-to-model.png"})))}h.isMDXComponent=!0}}]);