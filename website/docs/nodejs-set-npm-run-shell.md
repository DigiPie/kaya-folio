---
title: NodeJS Set npm run shell
---

Published on December 23, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/nodejs/set-npm-run-shell/)_

This article covers how you can set the shell used when you run the `npm run` scripts.

## Example scenario

You are a Windows user who just started working on a new NodeJS project. While following through the "Getting Started" guide, you were instructed to run one or more `npm run` scripts such as `npm run dev`. These commands fail with errors.

Upon checking, you realise that the reason why these commands fail is because they contains Bash (shell) commands not available to your Windows shell. You proceed to install [Git Bash for Windows](https://gitforwindows.org/), and then re-run the command again using Git Bash instead. It still fails. It seems like `npm run` scripts still uses your Windows shell for execution.

## The one-line solution

Tell `npm config` what shell you want your `npm run` scripts to be executed with (in this case, the Git Bash shell):

`npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"`

:::note

It is assumed that your Git Bash executable file is located at "C:\\Program Files\\git\\bin\\bash.exe", which is the default installation location. If it is not, amend the path accordingly.

:::

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/nodejs/set-npm-run-shell/)
- [npmjs.com's documentation for npm config](https://docs.npmjs.com/misc/config)
