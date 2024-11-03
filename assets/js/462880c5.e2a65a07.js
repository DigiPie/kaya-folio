"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[1175],{9556:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var s=o(4848),t=o(8453);const d={title:"NodeJS Auto-reload server"},i=void 0,r={id:"nodejs-auto-reload",title:"NodeJS Auto-reload server",description:"Published on December 23, 2020",source:"@site/docs/nodejs-auto-reload.md",sourceDirName:".",slug:"/nodejs-auto-reload",permalink:"/docs/nodejs-auto-reload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NodeJS Auto-reload server"},sidebar:"docs",previous:{title:"MongoDB Cheatsheet",permalink:"/docs/mongodb-cheatsheet"},next:{title:"NodeJS Set npm run shell",permalink:"/docs/nodejs-set-npm-run-shell"}},l={},c=[{value:"Nodemon",id:"nodemon",level:2},{value:"How-to-use",id:"how-to-use",level:3},{value:"Add to npm scripts",id:"add-to-npm-scripts",level:3},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Published on December 23, 2020"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["This document was migrated from ",(0,s.jsx)(n.a,{href:"https://digipie.github.io/digidocs/nodejs/auto-reload/",children:"DigiDocs"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Problem:"})," Manually reloading the NodeJS server by hitting ",(0,s.jsx)(n.code,{children:"Ctrl + C"})," and entering ",(0,s.jsx)(n.code,{children:"npm start"})," repeatedly in development is exhausting."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Solution:"})," Automatically reload the server each time there is a change!"]}),"\n",(0,s.jsx)(n.h2,{id:"nodemon",children:"Nodemon"}),"\n",(0,s.jsx)(n.admonition,{title:"Cite",type:"note",children:(0,s.jsx)(n.p,{children:"Nodemon is a utility that will monitor for any changes in your source and automatically restart your server."})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How-to-use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i -g nodemon\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.code,{children:"nodemon"}),": ",(0,s.jsx)(n.code,{children:"npm i -g nodemon"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"node"})," with ",(0,s.jsx)(n.code,{children:"nodemon"})," in your command. For example, change ",(0,s.jsx)(n.code,{children:"node index.js"})," to ",(0,s.jsx)(n.code,{children:"nodemon index.js"}),". That's it."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"add-to-npm-scripts",children:"Add to npm scripts"}),"\n",(0,s.jsx)(n.p,{children:"You can also add it to npm scripts to make life even easier."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After doing so, you can enter ",(0,s.jsx)(n.code,{children:"npm run dev"})," subsequently, which will resolve to ",(0,s.jsx)(n.code,{children:"nodemon index.js"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://digipie.github.io/digidocs/nodejs/auto-reload/",children:"Original copy of this document at DigiDocs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodemon.io/",children:"Nodemon's landing page"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var s=o(6540);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);