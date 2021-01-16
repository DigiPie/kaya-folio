---
slug: docusaurus-gh-action
title: GitHub Action for Docusaurus
author: Evan Tay
author_url: https://github.com/DigiPie
author_title: Software Engineer at Padlet
author_image_url: https://avatars2.githubusercontent.com/u/13582874
tags: [docusaurus, github-action, ci]
---

I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.

Initially, I was planning to follow the [official guide](https://v2.docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) on doing so. However, it was actually much more complicated than I liked. I did not really want to generate and store a SSH key on GitHub. Too much effort man.

I decided it was better off for me to write my own script. Here it is:

<!--truncate-->

## deploy-docusaurus.yml

:::caution

The script below assumes that your Docusaurus website resides at `/website` of your repo. If that is not the case for you, you will need to:

- Change `cd website` to `cd <docu_site_root>`, or delete the entire line if your Docusaurus website is at the root of your repo `/`
- Change `build_dir`'s value from `website/build` to `<docu_site_root>/build`, or `build` if your Docusaurus website is at the root of your repo `/`

:::

```yml
name: deploy-docusaurus

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Check out repo
        uses: actions/checkout@v2
      # Node is required for npm
      - name: Set up Node
        uses: actions/setup-node@v2
        with:
          node-version: "12"
      # Install and build Docusaurus website
      - name: Build Docusaurus website
        run: |
          cd website
          npm install 
          npm run build
      - name: Deploy to GitHub Pages
        if: success()
        uses: crazy-max/ghaction-github-pages@v2
        with:
          target_branch: gh-pages
          build_dir: website/build
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

:::note

GitHub will automatically add `GITHUB_TOKEN` to Secrets. You need not do so. See [this](https://docs.github.com/en/actions/reference/authentication-in-a-workflow) for more information.

:::

To see this script in action, visit my [personal website repo](https://github.com/DigiPie/kaya-folio/actions).
