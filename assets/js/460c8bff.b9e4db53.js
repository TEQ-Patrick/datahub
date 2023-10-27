"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8920],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={slug:"/api/graphql/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md"},o="DataHub GraphQL API",p={unversionedId:"docs/api/graphql/overview",id:"version-0.11.0/docs/api/graphql/overview",title:"DataHub GraphQL API",description:"DataHub provides a rich graphql API for programmatically interacting with the Entities & Relationships comprising your organization's Metadata Graph.",source:"@site/versioned_docs/version-0.11.0/docs/api/graphql/overview.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/overview",permalink:"/docs/0.11.0/api/graphql/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md",tags:[],version:"0.11.0",frontMatter:{slug:"/api/graphql/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md"},sidebar:"overviewSidebar",previous:{title:"Which DataHub API is for me?",permalink:"/docs/0.11.0/api/datahub-apis"},next:{title:"Queries",permalink:"/docs/0.11.0/graphql/queries"}},l={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"About GraphQL",id:"about-graphql",level:2},{value:"GraphQL Schema Reference",id:"graphql-schema-reference",level:2}],c={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datahub-graphql-api"},"DataHub GraphQL API"),(0,n.kt)("p",null,"DataHub provides a rich ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql"))," API for programmatically interacting with the Entities & Relationships comprising your organization's Metadata Graph."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"To begin using the DataHub ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql")," API, please consult the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.11.0/api/graphql/getting-started"},"Getting Started"),"."),(0,n.kt)("p",null,"For detailed guidance on using ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql")," for specific use cases, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.11.0/api/datahub-apis#datahub-api-comparison"},"Datahub API Comparison"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Pro Tip!")," Throughout our API guides, we have examples of using GraphQL API.\nLookout for the ",(0,n.kt)("inlineCode",{parentName:"p"},"| GraphQL |")," tab within our tutorials.")),(0,n.kt)("h2",{id:"about-graphql"},"About GraphQL"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql"))," provides a data query language and API with the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"validated specification"),": The ",(0,n.kt)("inlineCode",{parentName:"li"},"graphql")," spec verifies a ",(0,n.kt)("em",{parentName:"li"},"schema")," on the API server. The server in turn is responsible\nfor validating incoming queries from the clients against that schema."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Strongly typed"),": A GraphQL schema declares the universe of types and relationships composing the interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Document-oriented & hierarchical"),": GraphQL makes it eay to ask for related entities using a familiar JSON document\nstructure. This minimizes the number of round-trip API requests a client must make to answer a particular question."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexible & efficient"),": GraphQL provides a way to ask for only the data you want, and that's it. Ignore all\nthe rest. It allows you to replace multiple REST calls with one GraphQL call."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Large Open Source Ecosystem"),": Open source GraphQL projects have been developed for ",(0,n.kt)("a",{parentName:"li",href:"https://graphql.org/code/"},"virtually every programming language"),". With a thriving\ncommunity, it offers a sturdy foundation to build upon.")),(0,n.kt)("p",null,"For these reasons among others DataHub provides a GraphQL API on top of the Metadata Graph,\npermitting easy exploration of the Entities & Relationships composing it."),(0,n.kt)("p",null,"For more information about the GraphQL specification, check out ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"Introduction to GraphQL"),"."),(0,n.kt)("h2",{id:"graphql-schema-reference"},"GraphQL Schema Reference"),(0,n.kt)("p",null,"The Reference docs in the sidebar are generated from the DataHub GraphQL schema. Each call to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint is\nvalidated against this schema. You can use these docs to understand data that is available for retrieval and operations\nthat may be performed using the API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Available Operations: ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/queries"},"Queries")," (Reads) & ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/mutations"},"Mutations")," (Writes)"),(0,n.kt)("li",{parentName:"ul"},"Schema Types: ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/objects"},"Objects"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/inputObjects"},"Input Objects"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/interfaces"},"Interfaces"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/unions"},"Unions"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/enums"},"Enums"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.11.0/graphql/scalars"},"Scalars"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Visit our ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack channel")," to ask questions, tell us what we can do better, & make requests for what you'd like to see in the future. Or just\nstop by to say 'Hi'.")))}h.isMDXComponent=!0}}]);