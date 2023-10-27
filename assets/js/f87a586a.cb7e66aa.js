"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[59891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),k=i,m=p["".concat(c,".").concat(k)]||p[k]||g[k]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},70699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/looker/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/configuration.md"},a="Configuring Looker & LookML Connector",s={unversionedId:"docs/quick-ingestion-guides/looker/configuration",id:"version-0.12.0/docs/quick-ingestion-guides/looker/configuration",title:"Configuration",description:"Now that you have created a DataHub-specific API key with the relevant access in the prior step, it's time to set up a connection via the DataHub UI.",source:"@site/versioned_docs/version-0.12.0/docs/quick-ingestion-guides/looker/configuration.md",sourceDirName:"docs/quick-ingestion-guides/looker",slug:"/quick-ingestion-guides/looker/configuration",permalink:"/docs/quick-ingestion-guides/looker/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/configuration.md",tags:[],version:"0.12.0",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/looker/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/quick-ingestion-guides/looker/setup"},next:{title:"Airflow Integration",permalink:"/docs/lineage/airflow"}},c={},l=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Looker Ingestion",id:"configure-looker-ingestion",level:2},{value:"Configure Recipe",id:"configure-recipe",level:3},{value:"Schedule Execution",id:"schedule-execution",level:3},{value:"Finish Up",id:"finish-up",level:3},{value:"Configure LookML Connector",id:"configure-lookml-connector",level:2},{value:"Configure Recipe",id:"configure-recipe-1",level:3},{value:"Schedule Execution",id:"schedule-execution-1",level:3},{value:"Finish Up",id:"finish-up-1",level:3},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],u={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-looker--lookml-connector"},"Configuring Looker & LookML Connector"),(0,i.kt)("p",null,"Now that you have created a DataHub-specific API key with the relevant access in ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/looker/setup"},"the prior step"),", it's time to set up a connection via the DataHub UI."),(0,i.kt)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,i.kt)("p",null,"You must create two secrets to configure a connection with Looker or LookerML."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOOKER_CLIENT_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOOKER_CLIENT_SECRET"))),(0,i.kt)("p",null,"On your DataHub instance, navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Ingestion")," tab in your screen's top right corner."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_ingestion_button.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please get in touch with your DataHub admin to grant you the correct permissions.")),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Secrets")," tab and click ",(0,i.kt)("strong",{parentName:"p"},"Create new secret"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_secrets_tab.png"})),(0,i.kt)("p",null,"First, create a secret for the ",(0,i.kt)("strong",{parentName:"p"},"Client Id"),". The value should be the ",(0,i.kt)("strong",{parentName:"p"},"Client Id")," of the API key created in the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/next/quick-ingestion-guides/looker/setup#create-an-api-key"},"prior step"),". "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"API Key Client ID",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-client-id-secret.png"})),(0,i.kt)("p",null,"Then, create a secret for the ",(0,i.kt)("strong",{parentName:"p"},"Client Secret"),". The value should be the ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," of the API key created in the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/next/quick-ingestion-guides/looker/setup#create-an-api-key"},"prior step"),". "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"API Key client secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-client-secret.png"})),(0,i.kt)("h2",{id:"configure-looker-ingestion"},"Configure Looker Ingestion"),(0,i.kt)("h3",{id:"configure-recipe"},"Configure Recipe"),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Sources")," tab and click ",(0,i.kt)("strong",{parentName:"p"},"Create new source"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"})),(0,i.kt)("p",null,"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Looker"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Select Looker from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-choose-looker.png"})),(0,i.kt)("p",null,"Enter the details into the Looker Recipe."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base URL:")," This is your looker instance URL. (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<your-looker-instance>.cloud.looker.com"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client ID:")," Use the secret LOOKER_CLIENT_ID with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"${LOOKER_CLIENT_ID}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client Secret:")," Use the secret LOOKER_CLIENT_SECRET with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"${LOOKER_CLIENT_SECRET}"),".")),(0,i.kt)("p",null,"Optionally, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard_pattern")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"chart_pattern")," fields to filter for specific dashboard and chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'config:\n     ...\n     dashboard_pattern:\n        allow:\n          - "2"\n     chart_pattern:\n        allow:\n          - "258829b1-82b1-4bdb-b9fb-6722c718bbd3"\n')),(0,i.kt)("p",null,"Your recipe should look something like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Looker Recipe",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-ingestion-source-recipe.png"})),(0,i.kt)("p",null," After completing the recipe, click ",(0,i.kt)("strong",{parentName:"p"},"Next"),". "),(0,i.kt)("h3",{id:"schedule-execution"},"Schedule Execution"),(0,i.kt)("p",null,"Now, it's time to schedule a recurring ingestion pipeline to extract metadata from your Looker instance regularly."),(0,i.kt)("p",null,"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,i.kt)("p",null,"Ensure you've configured your correct timezone."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"})),(0,i.kt)("p",null,"Finally, click ",(0,i.kt)("strong",{parentName:"p"},"Next")," when you are done."),(0,i.kt)("h3",{id:"finish-up"},"Finish Up"),(0,i.kt)("p",null,"Name your ingestion source, then click ",(0,i.kt)("strong",{parentName:"p"},"Save and Run"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-ingestion-source-window.png"})),(0,i.kt)("p",null,"You will now find your new ingestion source running."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-ingestion-running.png"})),(0,i.kt)("h2",{id:"configure-lookml-connector"},"Configure LookML Connector"),(0,i.kt)("p",null,"Now that you have created a DataHub-specific API key and Deploy Key with the relevant access in ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/looker/setup"},"the prior step"),", it's time to set up a connection via the DataHub UI."),(0,i.kt)("h3",{id:"configure-recipe-1"},"Configure Recipe"),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Sources")," tab and click ",(0,i.kt)("strong",{parentName:"p"},"Create new source"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"})),(0,i.kt)("p",null,"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"LooML"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Select Looker from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-choose-lookml.png"})),(0,i.kt)("p",null,"Enter the details into the Looker Recipe. You need to set a minimum 5 fields in the recipe for this quick ingestion guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GitHub Repository:")," This is your GitHub repository where LookML models are stored. You can provide the full URL (example: ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab"},"https://gitlab.com/gitlab-org/gitlab"),") or organization/repo; in this case, the connector assume it is a GitHub repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GitHub Deploy Key:")," Copy the content of ",(0,i.kt)("inlineCode",{parentName:"li"},"looker_datahub_deploy_key")," and paste into this filed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Looker Base URL:")," This is your looker instance URL. (i.e. ",(0,i.kt)("a",{parentName:"li",href:"https://abc.cloud.looker.com"},"https://abc.cloud.looker.com"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Looker Client ID:")," Use the secret LOOKER_CLIENT_ID with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"${LOOKER_CLIENT_ID}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Looker Client Secret:")," Use the secret LOOKER_CLIENT_SECRET with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"${LOOKER_CLIENT_SECRET}"),".")),(0,i.kt)("p",null,"Your recipe should look something like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"LookML Recipe",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-source-recipe.png"})),(0,i.kt)("p",null,"After completing the recipe, click ",(0,i.kt)("strong",{parentName:"p"},"Next"),".    "),(0,i.kt)("h3",{id:"schedule-execution-1"},"Schedule Execution"),(0,i.kt)("p",null,"Now, it's time to schedule a recurring ingestion pipeline to extract metadata from your Looker instance regularly."),(0,i.kt)("p",null,"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,i.kt)("p",null,"Ensure you've configured your correct timezone."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," when you are done."),(0,i.kt)("h3",{id:"finish-up-1"},"Finish Up"),(0,i.kt)("p",null,"Name your ingestion source, then click ",(0,i.kt)("strong",{parentName:"p"},"Save and Run"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-source-window.png"})),(0,i.kt)("p",null,"You will now find your new ingestion source running."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-running.png"})),(0,i.kt)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,i.kt)("p",null,"View the latest status of ingestion runs on the Ingestion page."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-succeeded.png"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," sign to expand the complete list of historical runs and outcomes; click ",(0,i.kt)("strong",{parentName:"p"},"Details")," to see the results of a specific run."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-history.png"})),(0,i.kt)("p",null,"From the Ingestion Run Details page, pick ",(0,i.kt)("strong",{parentName:"p"},"View All")," to see which entities were ingested."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-detail.png"})),(0,i.kt)("p",null,"Pick an entity from the list to manually validate if it contains the detail you expected.  "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-ingestion-assets.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up Looker & LookML as an ingestion source for DataHub!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,i.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);