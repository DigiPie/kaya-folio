"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[3228],{9375:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(4848),i=o(8453);const s={title:"MongoDB Setup"},a=void 0,r={id:"mongodb-setup",title:"MongoDB Setup",description:"Published on December 23, 2020",source:"@site/docs/mongodb-setup.md",sourceDirName:".",slug:"/mongodb-setup",permalink:"/docs/mongodb-setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MongoDB Setup"},sidebar:"docs",previous:{title:"Ubuntu Cheatsheet",permalink:"/docs/os-ubuntu-cheatsheet"},next:{title:"MongoDB Cheatsheet",permalink:"/docs/mongodb-cheatsheet"}},c={},d=[{value:"Installation and config",id:"installation-and-config",level:2},{value:"Create a new collection",id:"create-a-new-collection",level:2},{value:"Create a new user",id:"create-a-new-user",level:2},{value:"connection-string format",id:"connection-string-format",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Verify connection-string",id:"verify-connection-string",level:3},{value:"Resources",id:"resources",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Published on December 23, 2020"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["This document was migrated from ",(0,t.jsx)(n.a,{href:"https://digipie.github.io/digidocs/mongodb/local-setup/",children:"DigiDocs"})]})}),"\n",(0,t.jsxs)(n.p,{children:["The purpose of this guide is to quickly set up a local copy of MongoDB ",(0,t.jsx)(n.strong,{children:"on Windows"})," for local development purposes. Authentication will not be enabled or covered in this tutorial."]}),"\n",(0,t.jsx)(n.h2,{id:"installation-and-config",children:"Installation and config"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/administration/install-community/",children:"MongoDB Community Edition"}),", the standard configuration is fine."]}),"\n",(0,t.jsxs)(n.li,{children:["Take note of where your installation's ",(0,t.jsx)(n.code,{children:"bin"})," folder is at, it should be at ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin"})," by default."]}),"\n",(0,t.jsxs)(n.li,{children:["Add it to your environment variables. See guide ",(0,t.jsx)(n.a,{href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Open your terminal - if you already have it opened, exit and re-open it to reload the enviroment variables."}),"\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.code,{children:"mongo"})," to access MongoDB."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-new-collection",children:"Create a new collection"}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Next, create a new collection, use the ",(0,t.jsx)(n.code,{children:"use"})," command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# To display the database you are using\ndb\n\n# To switch databases use `use <database>`\n# To create a new database, switch to a non-existing database\nuse dev\n\n# Template\nuse <database>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/mongo/",children:"https://docs.mongodb.com/manual/mongo/"})," for more information."]})}),"\n",(0,t.jsx)(n.h2,{id:"create-a-new-user",children:"Create a new user"}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Next, create a user with ",(0,t.jsx)(n.code,{children:"readWrite"})," and ",(0,t.jsx)(n.code,{children:"dbAdmin"})," roles, using the ",(0,t.jsx)(n.code,{children:"db.createUser()"})," command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Switch to the database you want to add the user to\nuse dev\n\n# Create the user with `readWrite` and `dbAdmin` rights\ndb.createUser(\n  {\n    user: "devadmin",\n    pwd: passwordPrompt(),\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n\n# Template\ndb.createUser(\n  {\n    user: <username>,\n    pwd: <password>,\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/mongo/",children:"https://docs.mongodb.com/manual/mongo/"})," for more information."]})}),"\n",(0,t.jsx)(n.h2,{id:"connection-string-format",children:"connection-string format"}),"\n",(0,t.jsx)(n.p,{children:"The connection-string is used to access the MongoDB instance from your applications (i.e. MongooseJS). The format of your connection-string is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]\n# Parts in [ and ] are optional\n\n# Example, without authentication\nmongodb://localhost:27017/dev\n\n# Example, with authentication\nmongodb://devadmin:<password>@localhost:27017/dev\n# Replace the <password> with your actual password\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If the username or password includes the at sign @, colon :, slash /, or the percent sign % character, use percent encoding. See ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/#examples",children:"https://docs.mongodb.com/manual/reference/connection-string/#examples"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(n.p,{children:"Given that we are not enabling authentication, you can use either of the above connection-string URI formats."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/",children:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"verify-connection-string",children:"Verify connection-string"}),"\n",(0,t.jsxs)(n.p,{children:["To verify your connection-string, simply use ",(0,t.jsx)(n.code,{children:"mongo <mongoURI>"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Example, without authentication\nmongo mongodb://localhost:27017/dev\n\n# Example, with authentication\nmongo mongodb://devadmin:<password>@localhost:27017/dev\n"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://digipie.github.io/digidocs/mongodb/local-setup/",children:"Original copy of this document at DigiDocs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/administration/install-community/",children:"MongoDB's official guide to Install MongoDB Community Edition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/",children:"Architect Ryan's guide to Add to the PATH on Windows 10"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/mongo/",children:"MongoDB's official guide to the mongo shell"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/method/db.createUser/",children:"MongoDB's official guide to db.createUser()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/",children:"MongoDB's official guide to Connection String URI Format"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/",children:"MongoDB's official guide to Enable Access Control"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);