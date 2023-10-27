"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Using Cron",slug:"/metadata-ingestion/schedule_docs/cron",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md"},i="Using Cron",s={unversionedId:"metadata-ingestion/schedule_docs/cron",id:"version-0.11.0/metadata-ingestion/schedule_docs/cron",title:"Using Cron",description:"Assume you have a recipe file /home/ubuntu/datahubingest/mysqlto_datahub.yml on your machine",source:"@site/versioned_docs/version-0.11.0/metadata-ingestion/schedule_docs/cron.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/cron",permalink:"/docs/0.11.0/metadata-ingestion/schedule_docs/cron",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md",tags:[],version:"0.11.0",frontMatter:{title:"Using Cron",slug:"/metadata-ingestion/schedule_docs/cron",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md"},sidebar:"overviewSidebar",previous:{title:"Introduction to Scheduling Metadata Ingestion",permalink:"/docs/0.11.0/metadata-ingestion/schedule_docs/intro"},next:{title:"Using Airflow",permalink:"/docs/0.11.0/metadata-ingestion/schedule_docs/airflow"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-cron"},"Using Cron"),(0,o.kt)("p",null,"Assume you have a recipe file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/ubuntu/datahub_ingest/mysql_to_datahub.yml")," on your machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source:\n  type: mysql\n  config:\n    # Coordinates\n    host_port: localhost:3306\n    database: dbname\n\n    # Credentials\n    username: root\n    password: example\n\nsink:\n type: datahub-rest \n config:\n  server: http://localhost:8080\n")),(0,o.kt)("p",null,"We can use crontab to schedule ingestion to run five minutes after midnight, every day using ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/cli"},"DataHub CLI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"5 0 * * * datahub ingest -c /home/ubuntu/datahub_ingest/mysql_to_datahub.yml\n")),(0,o.kt)("p",null,"Read through ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man5/crontab.5.html"},"crontab docs")," for more options related to scheduling."))}p.isMDXComponent=!0}}]);