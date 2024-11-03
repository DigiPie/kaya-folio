"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[157],{2208:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=s(4848),r=s(8453);const l={title:"iTerm2 and zsh Setup"},c=void 0,a={id:"iterm2-zsh-setup",title:"iTerm2 and zsh Setup",description:"Published on January 16, 2021",source:"@site/docs/iterm2-zsh-setup.md",sourceDirName:".",slug:"/iterm2-zsh-setup",permalink:"/docs/iterm2-zsh-setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"iTerm2 and zsh Setup"},sidebar:"docs",previous:{title:"Git Ignore file",permalink:"/docs/git-ignore-file"},next:{title:"iTerm2 Cheatsheet",permalink:"/docs/iterm2-cheatsheet"}},t={},h=[{value:"Install",id:"install",level:2},{value:"Change theme",id:"change-theme",level:2},{value:"Add an alias",id:"add-an-alias",level:2},{value:"Resources",id:"resources",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Published on January 16, 2021",(0,i.jsx)(n.br,{}),"\n","Updated on January 23, 2021"]}),"\n",(0,i.jsxs)(n.p,{children:["In this section you will find my notes on setting up ",(0,i.jsx)(n.a,{href:"https://iterm2.com/",children:"iTerm2"}),", an awesome terminal emulator for MacOS, and ",(0,i.jsx)(n.a,{href:"https://ohmyz.sh/",children:"ohmyzsh"}),", an amazing open-source framework for managing your zsh configuration."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install iTerm2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"brew install --cask iterm2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install zsh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"brew install zsh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install ohmyzsh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update ohmyzsh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"omz update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Exit Terminal and open iTerm2: ",(0,i.jsx)(n.code,{children:"\u2318"})," + ",(0,i.jsx)(n.code,{children:"Space Bar"})," > Search 'iTerm'"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You are done setting up iTerm2 and ohmyzsh!"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"change-theme",children:"Change theme"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To configure ohmyzsh, you will almost always be doing so by opening ",(0,i.jsx)(n.code,{children:"~/.zshrc"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"open ~/.zshrc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Change your theme by updating ",(0,i.jsx)(n.code,{children:'ZSH_THEME="robbyrussell"'})," accordingly."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Find a theme you like ",(0,i.jsx)(n.a,{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes",children:"here"})," and follow the install instructions in the theme repositories."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"exec zsh"})," to reload your new configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"exec zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should see your new theme in action."}),"\n",(0,i.jsx)(n.h2,{id:"add-an-alias",children:"Add an alias"}),"\n",(0,i.jsx)(n.p,{children:"Aliases are useful shorcuts you set to reduce the time spent on typing commands you often use. For example, if you often type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"cd /Users/evantay/Documents/Git\n"})}),"\n",(0,i.jsx)(n.p,{children:"or even worse:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"cd /Users/\ncd evantay\ncd Documents/Git\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You should add an alias for ",(0,i.jsx)(n.code,{children:"cd /Users/evantay/Documents/Git"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"open ~/.zshrc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a new alias at the bottom of the file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:'# Example aliases\n# alias zshconfig="mate ~/.zshrc"\n# alias ohmyzsh="mate ~/.oh-my-zsh"\nalias repo="/Users/evantay/Documents/Git"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reload zsh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-zsh",children:"exec zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can now type ",(0,i.jsx)(n.code,{children:"repo"})," whenever you want to ",(0,i.jsx)(n.code,{children:"cd /Users/evantay/Documents/Git"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://iterm2.com/",children:"iTerm2's Landing Site"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/",children:"freeCodeCamp's Guide"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);