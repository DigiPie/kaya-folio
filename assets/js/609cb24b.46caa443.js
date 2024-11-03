"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[7163],{7439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),r=t(8453);const i={title:"C Cheatsheet"},c=void 0,o={id:"c-cheatsheet",title:"C Cheatsheet",description:"Published on December 23, 2020",source:"@site/docs/c-cheatsheet.md",sourceDirName:".",slug:"/c-cheatsheet",permalink:"/docs/c-cheatsheet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"C Cheatsheet"},sidebar:"docs",previous:{title:"Dependency management",permalink:"/docs/ruby-dependency-management"},next:{title:"JS Cheatsheet",permalink:"/docs/js-cheatsheet"}},a={},l=[{value:"Print out arguments",id:"print-out-arguments",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Published on December 23, 2020"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["This document was migrated from ",(0,s.jsx)(n.a,{href:"https://digipie.github.io/digidocs/c/arguments/",children:"DigiDocs"})]})}),"\n",(0,s.jsx)(n.h2,{id:"print-out-arguments",children:"Print out arguments"}),"\n",(0,s.jsxs)(n.p,{children:["The example program below prints out all command line arguments passed into the ",(0,s.jsx)(n.code,{children:"main()"})," function."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"print-arguments.c"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n\nint main(int argc, char **argv) {\n    for (int i = 0; i < argc; i++) {\n        printf("%s\\n", argv[i]);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Key details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"argc"})," - the number of arguments passed into the program"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"argv"})," - the array of character pointers (strings) containing all arguments"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"argv[0]"})," - the first argument which is also the name of the program"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To use:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter the above code into a file (e.g. ",(0,s.jsx)(n.code,{children:"print-arguments.c"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Compile the code with ",(0,s.jsx)(n.code,{children:"gcc print-arguments.c -o print-arguments"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Run the executable with ",(0,s.jsx)(n.code,{children:"./print-arguments test"})," or ",(0,s.jsx)(n.code,{children:"./print-arguments $USER"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://digipie.github.io/digidocs/c/arguments/",children:"Original copy of this document at DigiDocs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);