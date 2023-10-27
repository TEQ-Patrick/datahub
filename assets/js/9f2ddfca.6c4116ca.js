"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84931],{3905:(e,t,i)=>{i.d(t,{Zo:()=>g,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},g=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(i),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||r;return i?n.createElement(m,o(o({ref:t},g),{},{components:i})):n.createElement(m,o({ref:t},g))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},76013:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={title:"Managing Lineage via UI",slug:"/features/feature-guides/ui-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/features/feature-guides/ui-lineage.md"},o="Managing Lineage via UI",s={unversionedId:"docs/features/feature-guides/ui-lineage",id:"version-0.12.0/docs/features/feature-guides/ui-lineage",title:"Managing Lineage via UI",description:"Viewing lineage",source:"@site/versioned_docs/version-0.12.0/docs/features/feature-guides/ui-lineage.md",sourceDirName:"docs/features/feature-guides",slug:"/features/feature-guides/ui-lineage",permalink:"/docs/features/feature-guides/ui-lineage",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/features/feature-guides/ui-lineage.md",tags:[],version:"0.12.0",frontMatter:{title:"Managing Lineage via UI",slug:"/features/feature-guides/ui-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/features/feature-guides/ui-lineage.md"},sidebar:"overviewSidebar",previous:{title:"Column Assertions",permalink:"/docs/managed-datahub/observe/column-assertions"},next:{title:"The Metadata Model",permalink:"/docs/metadata-modeling/metadata-model"}},d={},l=[{value:"Viewing lineage",id:"viewing-lineage",level:2},{value:"Editing from Lineage Graph View",id:"editing-from-lineage-graph-view",level:2},{value:"Adding Lineage Edges",id:"adding-lineage-edges",level:3},{value:"Removing Lineage Edges",id:"removing-lineage-edges",level:3},{value:"Reviewing Changes",id:"reviewing-changes",level:3},{value:"Editing from Lineage Tab",id:"editing-from-lineage-tab",level:2}],g={toc:l},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-lineage-via-ui"},"Managing Lineage via UI"),(0,a.kt)("h2",{id:"viewing-lineage"},"Viewing lineage"),(0,a.kt)("p",null,"The UI shows the latest version of the lineage. The time picker can be used to filter out edges within the latest version to exclude those that were last updated outside of the time window. Selecting time windows in the patch will not show you historical lineages. It will only filter the view of the latest version of the lineage. "),(0,a.kt)("h2",{id:"editing-from-lineage-graph-view"},"Editing from Lineage Graph View"),(0,a.kt)("p",null,'The first place that you can edit lineage for entities is from the Lineage Visualization screen. Click on the "Lineage" button on the top right of an entity\'s profile to get to this view.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/lineage-viz-button.png"})),(0,a.kt)("p",null,"Once you find the entity that you want to edit the lineage of, click on the three-dot menu dropdown to select whether you want to edit lineage in the upstream direction or the downstream direction."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/edit-lineage-menu.png"})),(0,a.kt)("p",null,"If you want to edit upstream lineage for entities downstream of the center node or downstream lineage for entities upstream of the center node, you can simply re-center to focus on the node you want to edit. Once focused on the desired node, you can edit lineage in either direction."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/focus-to-edit.png"})),(0,a.kt)("h3",{id:"adding-lineage-edges"},"Adding Lineage Edges"),(0,a.kt)("p",null,'Once you click "Edit Upstream" or "Edit Downstream," a modal will open that allows you to manage lineage for the selected entity in the chosen direction. In order to add a lineage edge to a new entity, search for it by name in the provided search bar and select it. Once you\'re satisfied with everything you\'ve added, click "Save Changes." If you change your mind, you can always cancel or exit without saving the changes you\'ve made.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/add-upstream.png"})),(0,a.kt)("h3",{id:"removing-lineage-edges"},"Removing Lineage Edges"),(0,a.kt)("p",null,'You can remove lineage edges from the same modal used to add lineage edges. Find the edge(s) that you want to remove, and click the "X" on the right side of it. And just like adding, you need to click "Save Changes" to save and if you exit without saving, your changes won\'t be applied.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/remove-lineage-edge.png"})),(0,a.kt)("h3",{id:"reviewing-changes"},"Reviewing Changes"),(0,a.kt)("p",null,"Any time lineage is edited manually, we keep track of who made the change and when they made it. You can see this information in the modal where you add and remove edges. If an edge was added manually, a user avatar will be in line with the edge that was added. You can hover over this avatar in order to see who added it and when."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/lineage-edge-audit-stamp.png"})),(0,a.kt)("h2",{id:"editing-from-lineage-tab"},"Editing from Lineage Tab"),(0,a.kt)("p",null,'The other place that you can edit lineage for entities is from the Lineage Tab on an entity\'s profile. Click on the "Lineage" tab in an entity\'s profile and then find the "Edit" dropdown that allows you to edit upstream or downstream lineage for the given entity.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lineage/edit-from-lineage-tab.png"})),(0,a.kt)("p",null,"Using the modal from this view will work the same as described above for editing from the Lineage Visualization screen."))}c.isMDXComponent=!0}}]);