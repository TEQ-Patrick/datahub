"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md"},o="High Cardinality Relationships",s={unversionedId:"docs/advanced/high-cardinality",id:"version-0.11.0/docs/advanced/high-cardinality",title:"High Cardinality Relationships",description:"As explained in What is a Relationship, the raw metadata for forming relationships is captured directly inside of a Metadata Aspect. The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user URNs. However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged.",source:"@site/versioned_docs/version-0.11.0/docs/advanced/high-cardinality.md",sourceDirName:"docs/advanced",slug:"/advanced/high-cardinality",permalink:"/docs/0.11.0/advanced/high-cardinality",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md",tags:[],version:"0.11.0",frontMatter:{title:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md"}},l={},p=[{value:"1:N Relationships",id:"1n-relationships",level:3},{value:"M:N Relationships",id:"mn-relationships",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"high-cardinality-relationships"},"High Cardinality Relationships"),(0,r.kt)("p",null,"As explained in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/what/relationship"},"What is a Relationship"),", the raw metadata for forming relationships is captured directly inside of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/what/aspect"},"Metadata Aspect"),". The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/what/urn"},"URNs"),". However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged."),(0,r.kt)("p",null,"Depending on the type of relationships, there are different strategies for dealing with high cardinality. "),(0,r.kt)("h3",{id:"1n-relationships"},"1:N Relationships"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is large, simply store the relationship as a reverse pointer on the ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," side, instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),"-element array on the ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," side. In other words, instead of doing this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"record MemberList {\n  members: array[UserUrn]\n}\n")),(0,r.kt)("p",null,"do this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"record Membership {\n  group: GroupUrn\n}\n")),(0,r.kt)("p",null,"One drawback with this approach is that batch updating the member list becomes multiple DB operations and non-atomic. If the list is provided by an external metadata provider via ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/what/mxe"},"MCEs"),", this also means that multiple MCEs will be required to update the list, instead of having one giant array in a single MCE."),(0,r.kt)("h3",{id:"mn-relationships"},"M:N Relationships"),(0,r.kt)("p",null,"When one side of the relation (",(0,r.kt)("inlineCode",{parentName:"p"},"M")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),") has low cardinality, you can apply the same trick in ","[1:N Relationship]"," by creating the array on the side with low-cardinality. For example, assuming a user can only be part of a small number of groups but each group can have a large number of users, the following model will be more efficient than the reverse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"record Membership {\n  groups: array[GroupUrn]\n}\n")),(0,r.kt)("p",null,"When both ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),' are of high cardinality (e.g. millions of users, each belongs to million of groups), the only way to store such relationships efficiently is by creating a new "Mapping Entity" with a single aspect like this'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"record UserGroupMap {\n  user: UserUrn\n  group: GroupUrn\n}\n")),(0,r.kt)("p",null,"This means that the relationship now can only be created & updated at a single source-destination pair granularity."))}h.isMDXComponent=!0}}]);