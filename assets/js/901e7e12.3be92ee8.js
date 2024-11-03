"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[4019],{9230:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=o(4848),i=o(8453);const s={slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},a=void 0,u={permalink:"/blog/docusaurus-gh-action",editUrl:"https://github.com/DigiPie/kaya-folio/tree/main/website/blog/2021-01-17-docusaurus-gh-action.md",source:"@site/blog/2021-01-17-docusaurus-gh-action.md",title:"GitHub Action for Docusaurus",description:"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.",date:"2021-01-17T00:00:00.000Z",tags:[{inline:!0,label:"docusaurus",permalink:"/blog/tags/docusaurus"},{inline:!0,label:"github-action",permalink:"/blog/tags/github-action"},{inline:!0,label:"ci",permalink:"/blog/tags/ci"}],readingTime:1.54,hasTruncateMarker:!0,authors:[{name:"Evan Tay",title:"Software Engineer at Padlet",url:"https://github.com/DigiPie",imageURL:"https://avatars2.githubusercontent.com/u/13582874",key:null,page:null}],frontMatter:{slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},unlisted:!1,prevItem:{title:"Top 3 reasons why you should start investing with StashAway today!",permalink:"/blog/stashaway"},nextItem:{title:"History of EvanTay.com",permalink:"/blog/history"}},r={authorsImageUrls:[void 0]},c=[{value:"deploy-docusaurus.yml",id:"deploy-docusaurusyml",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action."}),"\n",(0,n.jsxs)(t.p,{children:["Initially, I was planning to follow the ",(0,n.jsx)(t.a,{href:"https://v2.docusaurus.io/docs/deployment#triggering-deployment-with-github-actions",children:"official guide"})," on doing so. However, it was actually much more complicated than I liked. I did not really want to generate and store a SSH key on GitHub. Too much effort man."]}),"\n",(0,n.jsx)(t.p,{children:"I decided it was better off for me to write my own script. Here it is:"}),"\n",(0,n.jsx)(t.h2,{id:"deploy-docusaurusyml",children:"deploy-docusaurus.yml"}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["The script below assumes that your Docusaurus website resides at ",(0,n.jsx)(t.code,{children:"/website"})," of your repo. If that is not the case for you, you will need to:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Change ",(0,n.jsx)(t.code,{children:"cd website"})," to ",(0,n.jsx)(t.code,{children:"cd <docu_site_root>"}),", or delete the entire line if your Docusaurus website is at the root of your repo ",(0,n.jsx)(t.code,{children:"/"})]}),"\n",(0,n.jsxs)(t.li,{children:["Change ",(0,n.jsx)(t.code,{children:"build_dir"}),"'s value from ",(0,n.jsx)(t.code,{children:"website/build"})," to ",(0,n.jsx)(t.code,{children:"<docu_site_root>/build"}),", or ",(0,n.jsx)(t.code,{children:"build"})," if your Docusaurus website is at the root of your repo ",(0,n.jsx)(t.code,{children:"/"})]}),"\n"]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",children:'name: deploy-docusaurus\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  publish:\n    runs-on: ubuntu-latest\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Check out repo\n        uses: actions/checkout@v2\n      # Node is required for npm\n      - name: Set up Node\n        uses: actions/setup-node@v2\n        with:\n          node-version: "12"\n      # Install and build Docusaurus website\n      - name: Build Docusaurus website\n        run: |\n          cd website\n          npm install \n          npm run build\n      - name: Deploy to GitHub Pages\n        if: success()\n        uses: crazy-max/ghaction-github-pages@v2\n        with:\n          target_branch: gh-pages\n          build_dir: website/build\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["GitHub will automatically add ",(0,n.jsx)(t.code,{children:"GITHUB_TOKEN"})," to Secrets. You need not do so. See ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/actions/reference/authentication-in-a-workflow",children:"this"})," for more information."]})}),"\n",(0,n.jsxs)(t.p,{children:["To see this script in action, visit my ",(0,n.jsx)(t.a,{href:"https://github.com/DigiPie/kaya-folio/actions",children:"personal website repo"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>u});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);