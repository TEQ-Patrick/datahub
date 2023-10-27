"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Quickstart Debugging Guide",slug:"/troubleshooting/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/quickstart.md"},i="Quickstart Debugging Guide",s={unversionedId:"docs/troubleshooting/quickstart",id:"version-0.11.0/docs/troubleshooting/quickstart",title:"Quickstart Debugging Guide",description:"For when Quickstart did not work out smoothly.",source:"@site/versioned_docs/version-0.11.0/docs/troubleshooting/quickstart.md",sourceDirName:"docs/troubleshooting",slug:"/troubleshooting/quickstart",permalink:"/docs/0.11.0/troubleshooting/quickstart",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/quickstart.md",tags:[],version:"0.11.0",frontMatter:{title:"Quickstart Debugging Guide",slug:"/troubleshooting/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"Plugins Guide",permalink:"/docs/0.11.0/plugins"},next:{title:"Build Debugging Guide",permalink:"/docs/0.11.0/troubleshooting/build"}},l={},c=[{value:"Common Problems",id:"common-problems",level:2},{value:"How can I confirm if all Docker containers are running as expected after a quickstart?",id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart",level:2},{value:"My elasticsearch or broker container exited with error or was stuck forever",id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever",level:2},{value:"How can I check if MXE Kafka topics are created?",id:"how-can-i-check-if-mxe-kafka-topics-are-created",level:2},{value:"How can I check if search indices are created in Elasticsearch?",id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch",level:2},{value:"How can I check if data has been loaded into MySQL properly?",id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly",level:2},{value:"Getting error while starting Docker containers",id:"getting-error-while-starting-docker-containers",level:2},{value:"<code>bind: address already in use</code>",id:"bind-address-already-in-use",level:3},{value:"<code>OCI runtime create failed</code>",id:"oci-runtime-create-failed",level:3},{value:"<code>failed to register layer: devmapper: Unknown device</code>",id:"failed-to-register-layer-devmapper-unknown-device",level:3},{value:"<code>ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF</code>",id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof",level:3},{value:"toomanyrequests: too many failed login attempts for username or IP address",id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address",level:2},{value:"Seeing <code>Table &#39;datahub.metadata_aspect&#39; doesn&#39;t exist</code> error when logging in",id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in",level:2},{value:"I&#39;ve messed up my docker setup. How do I start from scratch?",id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch",level:2},{value:"I&#39;m seeing exceptions in DataHub GMS container like &quot;Caused by: java.lang.IllegalStateException: Duplicate key com.linkedin.metadata.entity.ebean.EbeanAspectV2@dd26e011&quot;. What do I do?",id:"im-seeing-exceptions-in-datahub-gms-container-like-caused-by-javalangillegalstateexception-duplicate-key-comlinkedinmetadataentityebeanebeanaspectv2dd26e011-what-do-i-do",level:2},{value:"I&#39;ve modified the default user.props file to include a custom username and password, but I don&#39;t see the new user(s) inside the Users &amp; Groups tab. Why not?",id:"ive-modified-the-default-userprops-file-to-include-a-custom-username-and-password-but-i-dont-see-the-new-users-inside-the-users--groups-tab-why-not",level:2},{value:"I&#39;ve configured OIDC, but I cannot login. I get continuously redirected. What do I do?",id:"ive-configured-oidc-but-i-cannot-login-i-get-continuously-redirected-what-do-i-do",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-debugging-guide"},"Quickstart Debugging Guide"),(0,o.kt)("p",null,"For when ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/quickstart"},"Quickstart")," did not work out smoothly."),(0,o.kt)("h2",{id:"common-problems"},"Common Problems"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Command not found: datahub"),(0,o.kt)("p",null,'If running the datahub cli produces "command not found" errors inside your terminal, your system may be defaulting to an\nolder version of Python. Try prefixing your ',(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m datahub docker quickstart\n")),(0,o.kt)("p",null,"Another possibility is that your system PATH does not include pip's ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.local/bin")," directory. On linux, you can add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -d "$HOME/.local/bin" ] ; then\n    PATH="$HOME/.local/bin:$PATH"\nfi\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Port Conflicts"),(0,o.kt)("p",null,"By default the quickstart deploy will require the following ports to be free on your local machine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3306 for MySQL"),(0,o.kt)("li",{parentName:"ul"},"9200 for Elasticsearch"),(0,o.kt)("li",{parentName:"ul"},"9092 for the Kafka broker"),(0,o.kt)("li",{parentName:"ul"},"8081 for Schema Registry"),(0,o.kt)("li",{parentName:"ul"},"2181 for ZooKeeper"),(0,o.kt)("li",{parentName:"ul"},"9002 for the DataHub Web Application (datahub-frontend)"),(0,o.kt)("li",{parentName:"ul"},"8080 for the DataHub Metadata Service (datahub-gms)")),(0,o.kt)("p",null,"In case the default ports conflict with software you are already running on your machine, you can override these ports by passing additional flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart")," command.\ne.g. To override the MySQL port with 53306 (instead of the default 3306), you can say: ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --mysql-port 53306"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --help")," to see all the supported options.\nFor the metadata service container (datahub-gms), you need to use an environment variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"DATAHUB_MAPPED_GMS_PORT"),". So for instance to use the port 58080, you would say ",(0,o.kt)("inlineCode",{parentName:"p"},"DATAHUB_MAPPED_GMS_PORT=58080 datahub docker quickstart"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"no matching manifest for linux/arm64/v8 in the manifest list entries"),"On Mac computers with Apple Silicon (M1, M2 etc.), you might see an error like `no matching manifest for linux/arm64/v8 in the manifest list entries`, this typically means that the datahub cli was not able to detect that you are running it on Apple Silicon. To resolve this issue, override the default architecture detection by issuing `datahub docker quickstart --arch m1`"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Miscellaneous Docker issues"),"There can be misc issues with Docker, like conflicting containers and dangling volumes, that can often be resolved by pruning your Docker state with the following command. Note that this command removes all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Still stuck?"),(0,o.kt)("p",null,"Hop over to our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack community")," and ask for help in the ",(0,o.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/archives/C029A3M079U"},"#troubleshoot")," channel!")),(0,o.kt)("h2",{id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart"},"How can I confirm if all Docker containers are running as expected after a quickstart?"),(0,o.kt)("p",null,"If you set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," CLI tool (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/metadata-ingestion"},"here"),"), you can use the built-in check utility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"datahub docker check\n")),(0,o.kt)("p",null,"You can list all Docker containers in your local by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container ls"),". You should expect to see a log similar to the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                                      NAMES\n979830a342ce        linkedin/datahub-mce-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mce-consumer\n3abfc72e205d        linkedin/datahub-frontend-react:latest              "datahub-frontend\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9002->9002/tcp                                     datahub-frontend\n50b2308a8efd        linkedin/datahub-mae-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mae-consumer\n4d6b03d77113        linkedin/datahub-gms:latest                         "bash -c \'dockerize \u2026"   10 hours ago        Up 10 hours         0.0.0.0:8080->8080/tcp                                     datahub-gms\nc267c287a235        landoop/schema-registry-ui:latest                     "/run.sh"                10 hours ago        Up 10 hours         0.0.0.0:8000->8000/tcp                                     schema-registry-ui\n4b38899cc29a        confluentinc/cp-schema-registry:5.2.1                 "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:8081->8081/tcp                                     schema-registry\n37c29781a263        confluentinc/cp-kafka:5.2.1                           "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp           broker\n15440d99a510        docker.elastic.co/kibana/kibana:5.6.8                 "/bin/bash /usr/loca\u2026"   10 hours ago        Up 10 hours         0.0.0.0:5601->5601/tcp                                     kibana\n943e60f9b4d0        neo4j:4.0.6                                           "/sbin/tini -g -- /d\u2026"   10 hours ago        Up 10 hours         0.0.0.0:7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp   neo4j\n6d79b6f02735        confluentinc/cp-zookeeper:5.2.1                       "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         2888/tcp, 0.0.0.0:2181->2181/tcp, 3888/tcp                 zookeeper\n491d9f2b2e9e        docker.elastic.co/elasticsearch/elasticsearch:5.6.8   "/bin/bash bin/es-do\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9200->9200/tcp, 9300/tcp                           elasticsearch\nce14b9758eb3        mysql:5.7\n')),(0,o.kt)("p",null,"Also you can check individual Docker container logs by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs <<container_name>>"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms"),", you should see a log similar to this at the end of the initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-02-06 09:20:54.870:INFO:oejs.Server:main: Started @18807ms\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react"),", you should see a log similar to this at the end of the initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"09:20:22 [main] INFO  play.core.server.AkkaHttpServer - Listening for HTTP on /0.0.0.0:9002\n")),(0,o.kt)("h2",{id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever"},"My elasticsearch or broker container exited with error or was stuck forever"),(0,o.kt)("p",null,"If you're seeing errors like below, chances are you didn't give enough resource to docker. Please make sure to allocate at least 8GB of RAM + 2GB swap space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub-gms             | 2020/04/03 14:34:26 Problem with request: Get http://elasticsearch:9200: dial tcp 172.19.0.5:9200: connect: connection refused. Sleeping 1s\nbroker                  | [2020-04-03 14:34:42,398] INFO Client session timed out, have not heard from server in 6874ms for sessionid 0x10000023fa60002, closing socket connection and attempting reconnect (org.apache.zookeeper.ClientCnxn)\nschema-registry         | [2020-04-03 14:34:48,518] WARN Client session timed out, have not heard from server in 20459ms for sessionid 0x10000023fa60007 (org.apache.zookeeper.ClientCnxn)\n")),(0,o.kt)("h2",{id:"how-can-i-check-if-mxe-kafka-topics-are-created"},"How can I check if ",(0,o.kt)("a",{parentName:"h2",href:"/docs/0.11.0/what/mxe"},"MXE")," Kafka topics are created?"),(0,o.kt)("p",null,"You can use a utility like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/kafkacat"},"kafkacat")," to list all topics.\nYou can run below command to see the Kafka topics created in your Kafka broker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kafkacat -L -b localhost:9092\n")),(0,o.kt)("p",null,"Confirm that ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal_v1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeLog_v1")," topics exist besides the default ones."),(0,o.kt)("h2",{id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch"},"How can I check if search indices are created in Elasticsearch?"),(0,o.kt)("p",null,"You can run below command to see the search indices created in your Elasticsearch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:9200/_cat/indices\n")),(0,o.kt)("p",null,"Confirm that ",(0,o.kt)("inlineCode",{parentName:"p"},"datasetindex_v2")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"corpuserindex_v2")," indices exist besides the default ones. Example response as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yellow open dataset_datasetprofileaspect_v1         HnfYZgyvS9uPebEQDjA1jg 1 1   0  0   208b   208b\nyellow open datajobindex_v2                         A561PfNsSFmSg1SiR0Y0qQ 1 1   2  9 34.1kb 34.1kb\nyellow open mlmodelindex_v2                         WRJpdj2zT4ePLSAuEvFlyQ 1 1   1 12 24.2kb 24.2kb\nyellow open dataflowindex_v2                        FusYIc1VQE-5NaF12uS8dA 1 1   1  3 23.3kb 23.3kb\nyellow open mlmodelgroupindex_v2                    QOzAaVx7RJ2ovt-eC0hg1w 1 1   0  0   208b   208b\nyellow open datahubpolicyindex_v2                   luXfXRlSRoS2-S_tvfLjHA 1 1   0  0   208b   208b\nyellow open corpuserindex_v2                        gbNXtnIJTzqh3vHSZS0Fwg 1 1   2  2 18.4kb 18.4kb\nyellow open dataprocessindex_v2                     9fL_4iCNTLyFv8MkDc6nIg 1 1   0  0   208b   208b\nyellow open chartindex_v2                           wYKlG5ylQe2dVKHOaswTww 1 1   2  7 29.4kb 29.4kb\nyellow open tagindex_v2                             GBQSZEvuRy62kpnh2cu1-w 1 1   2  2 19.7kb 19.7kb\nyellow open mlmodeldeploymentindex_v2               UWA2ltxrSDyev7Tmu5OLmQ 1 1   0  0   208b   208b\nyellow open dashboardindex_v2                       lUjGAVkRRbuwz2NOvMWfMg 1 1   1  0  9.4kb  9.4kb\nyellow open .ds-datahub_usage_event-000001          Q6NZEv1UQ4asNHYRywxy3A 1 1  36  0 54.8kb 54.8kb\nyellow open datasetindex_v2                         bWE3mN7IRy2Uj0QzeCt1KQ 1 1   7 47 93.7kb 93.7kb\nyellow open mlfeatureindex_v2                       fvjML5xoQpy8oxPIwltm8A 1 1  20 39 59.3kb 59.3kb\nyellow open dataplatformindex_v2                    GihumZfvRo27vt9yRpoE_w 1 1   0  0   208b   208b\nyellow open glossarynodeindex_v2                    ABKeekWTQ2urPWfGDsS4NQ 1 1   1  1 18.1kb 18.1kb\nyellow open graph_service_v1                        k6q7xV8OTIaRIkCjrzdufA 1 1 116 25 77.1kb 77.1kb\nyellow open system_metadata_service_v1              9-FKAqp7TY2hs3RQuAtVMw 1 1 303  0 55.9kb 55.9kb\nyellow open schemafieldindex_v2                     Mi_lqA-yQnKWSleKEXSWeg 1 1   0  0   208b   208b\nyellow open mlfeaturetableindex_v2                  pk98zrSOQhGr5gPYUQwvvQ 1 1   5 14 36.4kb 36.4kb\nyellow open glossarytermindex_v2                    NIyi3WWiT0SZr8PtECo0xQ 1 1   3  8 23.1kb 23.1kb\nyellow open mlprimarykeyindex_v2                    R1WFxD9sQiapIZcXnDtqMA 1 1   7  6 35.5kb 35.5kb\nyellow open corpgroupindex_v2                       AYxVtFAEQ02BsJdahYYvlA 1 1   2  1 13.3kb 13.3kb\nyellow open dataset_datasetusagestatisticsaspect_v1 WqPpDCKZRLaMIcYAAkS_1Q 1 1   0  0   208b   208b\n")),(0,o.kt)("h2",{id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly"},"How can I check if data has been loaded into MySQL properly?"),(0,o.kt)("p",null,"Once the mysql container is up and running, you should be able to connect to it directly on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3306")," using tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.mysql.com/products/workbench/"},"MySQL Workbench"),". You can also run the following command to invoke ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysql.html"},"MySQL Command-Line Client")," inside the mysql container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker exec -it mysql /usr/bin/mysql datahub --user=datahub --password=datahub\n")),(0,o.kt)("p",null,"Inspect the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata_aspect_v2")," table, which contains the ingested aspects for all entities."),(0,o.kt)("h2",{id:"getting-error-while-starting-docker-containers"},"Getting error while starting Docker containers"),(0,o.kt)("p",null,"There can be different reasons why a container fails during initialization. Below are the most common reasons:"),(0,o.kt)("h3",{id:"bind-address-already-in-use"},(0,o.kt)("inlineCode",{parentName:"h3"},"bind: address already in use")),(0,o.kt)("p",null,"This error means that the network port (which is supposed to be used by the failed container) is already in use on your system. You need to find and kill the process which is using this specific port before starting the corresponding Docker container. If you don't want to kill the process which is using that port, another option is to change the port number for the Docker container. You need to find and change the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/#ports"},"ports")," parameter for the specific Docker container in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Example : On macOS\n\nERROR: for mysql  Cannot start service mysql: driver failed programming external connectivity on endpoint mysql (5abc99513affe527299514cea433503c6ead9e2423eeb09f127f87e2045db2ca): Error starting userland proxy: listen tcp 0.0.0.0:3306: bind: address already in use\n\n   1) sudo lsof -i :3306\n   2) kill -15 <PID found in step1>\n")),(0,o.kt)("h3",{id:"oci-runtime-create-failed"},(0,o.kt)("inlineCode",{parentName:"h3"},"OCI runtime create failed")),(0,o.kt)("p",null,"If you see an error message like below, please make sure to git update your local repo to HEAD."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ERROR: for datahub-mae-consumer  Cannot start service datahub-mae-consumer: OCI runtime create failed: container_linux.go:349: starting container process caused "exec: \\"bash\\": executable file not found in $PATH": unknown\n')),(0,o.kt)("h3",{id:"failed-to-register-layer-devmapper-unknown-device"},(0,o.kt)("inlineCode",{parentName:"h3"},"failed to register layer: devmapper: Unknown device")),(0,o.kt)("p",null,"This most means that you're out of disk space (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/1879"},"#1879"),")."),(0,o.kt)("h3",{id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof"},(0,o.kt)("inlineCode",{parentName:"h3"},"ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF")),(0,o.kt)("p",null,"This is most likely a transient issue with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry"),". Retry again later."),(0,o.kt)("h2",{id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address"},"toomanyrequests: too many failed login attempts for username or IP address"),(0,o.kt)("p",null,"Try the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/.docker/config.json\ndocker login\n")),(0,o.kt)("p",null,"More discussions on the same issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/docker/hub-feedback/issues/1250"},"https://github.com/docker/hub-feedback/issues/1250")),(0,o.kt)("h2",{id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in"},"Seeing ",(0,o.kt)("inlineCode",{parentName:"h2"},"Table 'datahub.metadata_aspect' doesn't exist")," error when logging in"),(0,o.kt)("p",null,"This means the database wasn't properly initialized as part of the quickstart processs (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/1816"},"#1816"),"). Please run the following command to manually initialize it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker exec -i mysql sh -c 'exec mysql datahub -udatahub -pdatahub' < docker/mysql/init.sql\n")),(0,o.kt)("h2",{id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch"},"I've messed up my docker setup. How do I start from scratch?"),(0,o.kt)("p",null,"Run the following script to remove all the containers and volumes created during the quickstart tutorial. Note that you'll also lose all the data as a result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker nuke\n")),(0,o.kt)("h2",{id:"im-seeing-exceptions-in-datahub-gms-container-like-caused-by-javalangillegalstateexception-duplicate-key-comlinkedinmetadataentityebeanebeanaspectv2dd26e011-what-do-i-do"},'I\'m seeing exceptions in DataHub GMS container like "Caused by: java.lang.IllegalStateException: Duplicate key com.linkedin.metadata.entity.ebean.EbeanAspectV2@dd26e011". What do I do?'),(0,o.kt)("p",null,"This is related to a SQL column collation issue. The default collation we previously used (prior to Oct 26, 2021) for URN fields was case-insensitive (utf8mb4_unicode_ci). We've recently moved\nto deploying with a case-sensitive collation (utf8mb4_bin) by default. In order to update a deployment that was started before Oct 26, 2021 (v0.8.16 and below) to have the new collation, you must run this command against your SQL DB directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER TABLE metadata_aspect_v2 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;\n")),(0,o.kt)("h2",{id:"ive-modified-the-default-userprops-file-to-include-a-custom-username-and-password-but-i-dont-see-the-new-users-inside-the-users--groups-tab-why-not"},"I've modified the default user.props file to include a custom username and password, but I don't see the new user(s) inside the Users & Groups tab. Why not?"),(0,o.kt)("p",null,"Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"user.props")," is a file used by the JAAS PropertyFileLoginModule solely for the purpose of ",(0,o.kt)("strong",{parentName:"p"},"Authentication"),". The file is not used as an source from which to\ningest additional metadata about the user. For that, you'll need to ingest some custom information about your new user using the Rest.li APIs or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/generated/ingestion/sources/file"},"File-based ingestion source"),"."),(0,o.kt)("p",null,"For an example of a file that ingests user information, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/mce_files/single_mce.json"},"single_mce.json"),', which ingests a single user object into DataHub. Notice that the "urn" field provided\nwill need to align with the custom username you\'ve provided in user.props file. For example, if your user.props file contains:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-custom-user:my-custom-password\n")),(0,o.kt)("p",null,"You'll need to ingest some metadata of the following form to see it inside the DataHub UI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "auditHeader": null,\n  "proposedSnapshot": {\n    "com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot": {\n      "urn": "urn:li:corpuser:my-custom-user",\n      "aspects": [\n        {\n          "com.linkedin.pegasus2avro.identity.CorpUserInfo": {\n            "active": true,\n            "displayName": {\n              "string": "The name of the custom user"\n            },\n            "email": "my-custom-user-email@example.io",\n            "title": {\n              "string": "Engineer"\n            },\n            "managerUrn": null,\n            "departmentId": null,\n            "departmentName": null,\n            "firstName": null,\n            "lastName": null,\n            "fullName": {\n              "string": "My Custom User"\n            },\n            "countryCode": null\n          }\n        }\n      ]\n    }\n  },\n  "proposedDelta": null\n}\n')),(0,o.kt)("h2",{id:"ive-configured-oidc-but-i-cannot-login-i-get-continuously-redirected-what-do-i-do"},"I've configured OIDC, but I cannot login. I get continuously redirected. What do I do?"),(0,o.kt)("p",null,"Sorry to hear that!"),(0,o.kt)("p",null,"This phenomena may be due to the size of a Cookie DataHub uses to authenticate its users. If it's too large ( > 4096), then you'll see this behavior. The cookie embeds an encoded version of the information returned by your OIDC Identity Provider - if they return a lot of information, this can be the root cause."),(0,o.kt)("p",null,"One solution is to use Play Cache to persist this session information for a user. This means the attributes about the user (and their session info) will be stored in an in-memory store in the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," service, instead of a browser-side cookie."),(0,o.kt)("p",null,'To configure the Play Cache session store, you can set the env variable "PAC4J_SESSIONSTORE_PROVIDER" as "PlayCacheSessionStore" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," container."),(0,o.kt)("p",null,"Do note that there are downsides to using the Play Cache. Specifically, it will make ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," a stateful server. If you have multiple instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," deployed, you'll need to ensure that the same user is deterministically routed to the same service container (since the sessions are stored in memory). If you're using a single instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend"),' (the default), then things should "just work".'),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/pull/5114"},"https://github.com/datahub-project/datahub/pull/5114")))}p.isMDXComponent=!0}}]);