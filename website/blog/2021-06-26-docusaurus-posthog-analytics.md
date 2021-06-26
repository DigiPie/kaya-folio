---
slug: docusaurus-posthog
title: "Integrating PostHog product analytics with Docusaurus v2 on GitHub Pages"
author: Evan Tay
author_url: https://github.com/DigiPie
author_title: Software Engineer at Padlet
author_image_url: https://avatars2.githubusercontent.com/u/13582874
tags: [docusaurus, posthog, analytics]
---

I integrated [PostHog](https://posthog.com/) analytics into this website today. I decided to do so after reading Gergely Orosz's [Stats](https://blog.pragmaticengineer.com/stats/) page on his blog [The Pragmatic Engineer](https://blog.pragmaticengineer.com/). He had installed [Plausible](https://plausible.io/) analytics and made his [analytics dashboard](https://plausible.io/blog.pragmaticengineer.com?period=6mo) public. I thought that was cool and wanted to do the same.

I managed to find a [Plausible plugin](https://github.com/infracost/docusaurus-plugin-plausible) for [Docusaurus v2](https://docusaurus.io/), which is what this website runs on. But I decided to use [PostHog](https://posthog.com/) instead. It also has a [Docusaurus plugin](https://github.com/PostHog/posthog-docusaurus) and a public dashboard feature. I decided so because it is free and Plausible isn't.

<!--truncate-->

Plausible only offers a free 30-day trial, and would cost at least $6 monthly subsequently. In comparison, PostHog has a free non-expiring tier which provides up to 1 million events every month. It also requires no credit card and is completely self-serve. There was no need to request and wait for a free license. It took me less than 10 minutes from signing up to getting the analytics running.

:::info PostHog is open-source

If you are looking for an open-source solution you can self-host, PostHog may be it.

:::

Despite what I have shared so far, I would still choose Plausible over PostHog if the former was free too. That's because the Plausible's dashboard interface looks much better and has more visualization options. For comparison, you can view the [PostHog dashboard](https://app.posthog.com/shared_dashboard/OpHsSFokK2VvhHFF-5Jn0rgVzqaMRg) for this site, and the [Plausible dashboard](https://plausible.io/blog.pragmaticengineer.com?period=6mo) for [The Pragmatic Engineer](https://blog.pragmaticengineer.com/).

If you want to integrate PostHog with your Docusaurus site, you can follow the guide below. The later steps are for deployment to GitHub Pages via GitHub Actions. But you can easily modify them for other platforms and deployment workflows. I will give some tips for doing that.

## Installation Guide

1. Sign up for **PostHog Cloud** on [posthog.com](https://posthog.com/).
1. Get your **Project API Key** from [Project Settings](https://app.posthog.com/project/settings).
   ![PostHog Project API Key](/img/blog/posthog_api_key.png)

1. Install the `posthog-docusaurus` package by running this command at your Docusaurus project root:

   ```zsh
   yarn add posthog-docusaurus
   ```

   or

   ```zsh
   npm install --save posthog-docusaurus
   ```

1. Add this code block to `docusaurus.config.js`:

   ```js
   module.exports = {
     plugins: ["posthog-docusaurus"],
     themeConfig: {
       posthog: {
         apiKey: process.env.POSTHOG_API_KEY || "DEV",
         appUrl: "https://app.posthog.com", // optional
         enableInDevelopment: false, // optional
       },
     },
   };
   ```

   :::note

   The example in the official PostHog guide for [Docusaurus v2 Integration](https://posthog.com/docs/libraries/docusaurus) inserts the API key directly into the code (e.g. `apiKey: "phc_fakekeyhHBZOuIq"`). It is a bad idea to do so, especially if you host your code publicly (i.e. on a GitHub public repo). It is good practice to keep API keys secret and outside of application code instead. We will be using [GitHub Encrypted Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) to achieve that.

   :::

1. Add a **repository secret** to the GitHub repo hosting your site's code.
   ![GitHub Action Secrets](/img/blog/posthog_actions_secrets.png)

   **Settings** > **Secrets** > **New repository secret** > **Name:** `POSTHOG_API_KEY`

   :::tip If you are using another deployment platform

   There should be a settings panel which allows you to specify environment variables or secrets to insert into your application deployments securely. Put your `POSTHOG_API_KEY` there. Skip the next step.

   :::

1. Open the GitHub Action workflow file responsible for deploying your site, and add the environment variable `POSTHOG_API_KEY` to the Docusaurus build step:

   ```yml
   env:
     POSTHOG_API_KEY: ${{ secrets.POSTHOG_API_KEY }}
   ```

   Example:

   ```yml
   # Install and build Docusaurus website
   - name: Build Docusaurus website
     run: |
       cd website
       npm install 
       npm run build
     env:
       POSTHOG_API_KEY: ${{ secrets.POSTHOG_API_KEY }}
   ```

That's it! Once you deploy your new changes, the plugin will automatically start tracking pageviews, clicks and more. For more customisation options, you can check out the [posthog-docusaurus](https://github.com/PostHog/posthog-docusaurus) plugin repo and the PostHog guide for [Docusaurus v2 Integration](https://posthog.com/docs/libraries/docusaurus). You can also check out the [commit](https://github.com/DigiPie/kaya-folio/commit/fd6b029dbc0be34909cd539f2d33bac5de8209bc) I made to integrate PostHog into this website.

If you want to deploy Docusaurus to GitHub Pages, check out my post on [GitHub Action for Docusaurus](2021-01-17-docusaurus-gh-action.md).
