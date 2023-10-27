"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"No Code Upgrade (In-Place Migration Guide)",slug:"/advanced/no-code-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-upgrade.md"},l="No Code Upgrade (In-Place Migration Guide)",i={unversionedId:"docs/advanced/no-code-upgrade",id:"version-0.11.0/docs/advanced/no-code-upgrade",title:"No Code Upgrade (In-Place Migration Guide)",description:"Summary of changes",source:"@site/versioned_docs/version-0.11.0/docs/advanced/no-code-upgrade.md",sourceDirName:"docs/advanced",slug:"/advanced/no-code-upgrade",permalink:"/docs/0.11.0/advanced/no-code-upgrade",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-upgrade.md",tags:[],version:"0.11.0",frontMatter:{title:"No Code Upgrade (In-Place Migration Guide)",slug:"/advanced/no-code-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-upgrade.md"},sidebar:"overviewSidebar",previous:{title:"Integrating with Confluent Cloud",permalink:"/docs/0.11.0/deploy/confluent-cloud"},next:{title:"Debugging by Jattach",permalink:"/docs/0.11.0/how/jattach-guide"}},d={},s=[{value:"Summary of changes",id:"summary-of-changes",level:2},{value:"Migration strategy",id:"migration-strategy",level:2},{value:"Upgrade Steps",id:"upgrade-steps",level:2},{value:"Step 1: Pull &amp; deploy latest container images",id:"step-1-pull--deploy-latest-container-images",level:3},{value:"Docker Compose Deployments",id:"docker-compose-deployments",level:4},{value:"Helm",id:"helm",level:4},{value:"Step 2: Execute Migration Job",id:"step-2-execute-migration-job",level:3},{value:"Docker Compose Deployments - Preserve Data",id:"docker-compose-deployments---preserve-data",level:4},{value:"Docker Compose Deployments - Lose All Existing Data",id:"docker-compose-deployments---lose-all-existing-data",level:4},{value:"How to fix the &quot;listening to port 5005&quot; issue",id:"how-to-fix-the-listening-to-port-5005-issue",level:5},{value:"Helm Deployments",id:"helm-deployments",level:4},{value:"Step 3 (Optional): Cleaning Up",id:"step-3-optional-cleaning-up",level:3},{value:"Docker Compose Deployments",id:"docker-compose-deployments-1",level:4},{value:"Helm Deployments",id:"helm-deployments-1",level:4},{value:"Support",id:"support",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-code-upgrade-in-place-migration-guide"},"No Code Upgrade (In-Place Migration Guide)"),(0,o.kt)("h2",{id:"summary-of-changes"},"Summary of changes"),(0,o.kt)("p",null,"With the No Code metadata initiative, we've introduced various major changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"New Ebean Aspect table (metadata_aspect_v2)"),(0,o.kt)("li",{parentName:"ol"},"New Elastic Indices (",(0,o.kt)("em",{parentName:"li"},"entityName"),"index_v2)"),(0,o.kt)("li",{parentName:"ol"},"New edge triples. (Remove fully qualified classpaths from nodes & edges)"),(0,o.kt)("li",{parentName:"ol"},"Dynamic DataPlatform entities (no more hardcoded DataPlatformInfo.json)"),(0,o.kt)("li",{parentName:"ol"},"Dynamic Browse Paths (no more hardcoded browse path creation logic)"),(0,o.kt)("li",{parentName:"ol"},"Addition of Entity Key aspects, dropped requirement for strongly-typed Urns."),(0,o.kt)("li",{parentName:"ol"},"Addition of @Entity, @Aspect, @Searchable, @Relationship annotations to existing models.")),(0,o.kt)("p",null,"Because of these changes, it is required that your persistence layer be migrated after the NoCode containers have been\ndeployed."),(0,o.kt)("p",null,"For more information about the No Code Update, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/advanced/no-code-modeling"},"no-code-modeling"),"."),(0,o.kt)("h2",{id:"migration-strategy"},"Migration strategy"),(0,o.kt)("p",null,"We are merging these breaking changes into the main branch upfront because we feel they are fundamental to subsequent\nchanges, providing a more solid foundation upon which exciting new features will be built upon. We will continue to\noffer limited support for previous verions of DataHub."),(0,o.kt)("p",null,"This approach means that companies who actively deploy the latest version of DataHub will need to perform an upgrade to\ncontinue operating DataHub smoothly."),(0,o.kt)("h2",{id:"upgrade-steps"},"Upgrade Steps"),(0,o.kt)("h3",{id:"step-1-pull--deploy-latest-container-images"},"Step 1: Pull & deploy latest container images"),(0,o.kt)("p",null,"It is important that the following containers are pulled and deployed simultaneously:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"datahub-frontend-react"),(0,o.kt)("li",{parentName:"ul"},"datahub-gms"),(0,o.kt)("li",{parentName:"ul"},"datahub-mae-consumer"),(0,o.kt)("li",{parentName:"ul"},"datahub-mce-consumer")),(0,o.kt)("h4",{id:"docker-compose-deployments"},"Docker Compose Deployments"),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"docker-compose down --remove-orphans && docker-compose pull && docker-compose -p datahub up --force-recreate\n")),(0,o.kt)("h4",{id:"helm"},"Helm"),(0,o.kt)("p",null,"Deploying latest helm charts will upgrade all components to version 0.8.0. Once all the pods are up and running, it will\nrun the datahub-upgrade job, which will run the above docker container to migrate to the new sources."),(0,o.kt)("h3",{id:"step-2-execute-migration-job"},"Step 2: Execute Migration Job"),(0,o.kt)("h4",{id:"docker-compose-deployments---preserve-data"},"Docker Compose Deployments - Preserve Data"),(0,o.kt)("p",null,"If you do not care about migrating your data, you can refer to the Docker Compose Deployments - Lose All Existing Data\nsection below."),(0,o.kt)("p",null,"To migrate existing data, the easiest option is to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_upgrade.sh")," script located under ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/nocode"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd docker/datahub-upgrade/nocode\n./run_upgrade.sh\n")),(0,o.kt)("p",null,"Using this command, the default environment variables will be used (",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/env/docker.env"),"). These assume\nthat your deployment is local & that you are running MySQL. If this is not the case, you'll need to define your own environment variables to tell the\nupgrade system where your DataHub containers reside and run "),(0,o.kt)("p",null,"To update the default environment variables, you can either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"docker/datahub-upgrade/env/docker.env")," in place and then run one of the above commands OR"),(0,o.kt)("li",{parentName:"ol"},'Define a new ".env" file containing your variables and execute ',(0,o.kt)("inlineCode",{parentName:"li"},"docker pull acryldata/datahub-upgrade && docker run acryldata/datahub-upgrade:latest -u NoCodeDataMigration"))),(0,o.kt)("p",null,"To see the required environment variables, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/docker/datahub-upgrade"},"datahub-upgrade"),"\ndocumentation."),(0,o.kt)("p",null,"To run the upgrade against a database other than MySQL, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a dbType=<db-type>")," argument."),(0,o.kt)("p",null,"Execute "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./docker/datahub-upgrade.sh -u NoCodeDataMigration -a dbType=POSTGRES\n")),(0,o.kt)("p",null,"where dbType can be either ",(0,o.kt)("inlineCode",{parentName:"p"},"MYSQL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MARIA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"POSTGRES"),"."),(0,o.kt)("h4",{id:"docker-compose-deployments---lose-all-existing-data"},"Docker Compose Deployments - Lose All Existing Data"),(0,o.kt)("p",null,"This path is quickest but will wipe your DataHub's database."),(0,o.kt)("p",null,"If you want to make sure your current data is migrated, refer to the Docker Compose Deployments - Preserve Data section above.\nIf you are ok losing your data and re-ingesting, this approach is simplest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# make sure you are on the latest\ngit checkout master\ngit pull origin master\n\n# wipe all your existing data and turn off all processes\n./docker/nuke.sh\n\n# spin up latest datahub\n./docker/quickstart.sh\n\n# re-ingest data, for example, to ingest sample data:\n./docker/ingestion/ingestion.sh\n")),(0,o.kt)("p",null,"After that, you will be ready to go."),(0,o.kt)("h5",{id:"how-to-fix-the-listening-to-port-5005-issue"},'How to fix the "listening to port 5005" issue'),(0,o.kt)("p",null,"Fix for this issue have been published to the acryldata/datahub-upgrade:head tag. Please pull latest master and rerun\nthe upgrade script."),(0,o.kt)("p",null,"However, we have seen cases where the problematic docker image is cached and docker does not pull the latest version. If\nthe script fails with the same error after pulling latest master, please run the following command to clear the docker\nimage cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images -a | grep acryldata/datahub-upgrade | awk '{print $3}' | xargs docker rmi -f\n")),(0,o.kt)("h4",{id:"helm-deployments"},"Helm Deployments"),(0,o.kt)("p",null,"Upgrade to latest helm charts by running the following after pulling latest master."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-(shell)"},"helm upgrade datahub datahub/\n")),(0,o.kt)("p",null,"In the latest helm charts, we added a datahub-upgrade-job, which runs the above mentioned docker container to migrate to\nthe new storage layer. Note, the job will fail in the beginning as it waits for GMS and MAE consumer to be deployed with\nthe NoCode code. It will rerun until it runs successfully."),(0,o.kt)("p",null,"Once the storage layer has been migrated, subsequent runs of this job will be a noop."),(0,o.kt)("h3",{id:"step-3-optional-cleaning-up"},"Step 3 (Optional): Cleaning Up"),(0,o.kt)("p",null,"Warning: This step clears all legacy metadata. If something is wrong with the upgraded metadata, there will no easy way to\nre-run the migration. "),(0,o.kt)("p",null,"This step involves removing data from previous versions of DataHub. This step should only be performed once you've\nvalidated that your DataHub deployment is healthy after performing the upgrade. If you're able to search, browse, and\nview your Metadata after the upgrade steps have been completed, you should be in good shape."),(0,o.kt)("p",null,"In advanced DataHub deployments, or cases in which you cannot easily rebuild the state stored in DataHub, it is strongly\nadvised that you do due diligence prior to running cleanup. This may involve manually inspecting the relational\ntables (metadata_aspect_v2), search indices, and graph topology."),(0,o.kt)("h4",{id:"docker-compose-deployments-1"},"Docker Compose Deployments"),(0,o.kt)("p",null,"The easiest option is to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_clean.sh")," script located under ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/nocode"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd docker/datahub-upgrade/nocode\n./run_clean.sh\n")),(0,o.kt)("p",null,"Using this command, the default environment variables will be used (",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/env/docker.env"),"). These assume\nthat your deployment is local. If this is not the case, you'll need to define your own environment variables to tell the\nupgrade system where your DataHub containers reside."),(0,o.kt)("p",null,"To update the default environment variables, you can either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"docker/datahub-upgrade/env/docker.env")," in place and then run one of the above commands OR"),(0,o.kt)("li",{parentName:"ol"},'Define a new ".env" file containing your variables and execute\n',(0,o.kt)("inlineCode",{parentName:"li"},"docker pull acryldata/datahub-upgrade && docker run acryldata/datahub-upgrade:latest -u NoCodeDataMigrationCleanup"))),(0,o.kt)("p",null,"To see the required environment variables, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/docker/datahub-upgrade"},"datahub-upgrade"),"\ndocumentation"),(0,o.kt)("h4",{id:"helm-deployments-1"},"Helm Deployments"),(0,o.kt)("p",null,"Assuming the latest helm chart has been deployed in the previous step, datahub-cleanup-job-template cronJob should have\nbeen created. You can check by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get cronjobs\n")),(0,o.kt)("p",null,"You should see an output like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                                   SCHEDULE     SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ndatahub-datahub-cleanup-job-template   * * * * *    True      0        <none>          12m\n")),(0,o.kt)("p",null,"Note that the cronJob has been suspended. It is intended to be run in an adhoc fashion when ready to clean up. Make sure\nthe migration was successful and DataHub is working as expected. Then run the following command to run the clean up job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create job --from=cronjob/<<release-name>>-datahub-cleanup-job-template datahub-cleanup-job\n")),(0,o.kt)("p",null,'Replace release-name with the name of the helm release. If you followed the kubernetes guide, it should be "datahub".'),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"The Acryl team will be on standby to assist you in your migration. Please\njoin ",(0,o.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/archives/C0244FHMHJQ"},"#release-0_8_0")," channel and reach out to us if you find\ntrouble with the upgrade or have feedback on the process. We will work closely to make sure you can continue to operate\nDataHub smoothly."))}c.isMDXComponent=!0}}]);