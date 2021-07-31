---
title: Git Cheatsheet
---

Published on December 24, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/git/cheat-sheet/)_

:::tip

Basic knowledge of Git is assumed in this tutorial. If you are new to Git, visit <http://rogerdudler.github.io/git-guide/> to learn the basics first.

:::

## Get branch information

I want to find out what branches I have locally:

```bash
git branch
```

I want to find out what is the upstream branch for a given branch:

```bash
git branch -v
```

Even more verbose information:

```bash
git branch -vv
```

## Delete local and remote branches

**Example scenario:**  
I have merged my development branch `feat/new-feature` into `develop` and wish to delete the local and remote branch of `feat/new-feature` now.

**The solution:**

- Delete the local branch:
  - `git branch -d feat/new-feature`
  - or with `--force`: `git branch -D feat/new-feature`
- Delete the remote branch: `git push <remote> -d <branch>`

**The general command format it is based on:**

- Delete a local branch:
  - `git branch -d|--delete <branch>`
  - or with `--force`: `git branch -D <branch>`
- Delete a remote branch: `git push <remote> -d|--delete <branch>`

## Reset a branch

**Example scenario:**  
I messed up my local `master` branch. I want to reset it such that it will revert to being the same as `origin/master`.

**The one-line solution:**  
`git checkout -B master origin/master`

**The general command format it is based on:**  
`git checkout -b|-B <new_branch> [<start point>]`

**How does it work?**

`git checkout -b|-B <new_branch>` is typically used to create and switch to a new branch. However, if `<new_branch>` already exists, it will be reset instead.

:::note Cite

If `-B` is given, `<new_branch>` is created if it doesn’t exist; otherwise, it is reset.

:::

## Ignore a file's changes temporarily

**Example scenario:**  
I want to stop tracking changes for a given file temporarily, as I am still editing it and do not want an incomplete copy of it to be added to staging when I do `git add *` (to add all changes in the current path).

**The solution:**

To temporarily ignore (stop tracking) a file:

```bash
git update-index --assume-unchanged <file>
```

To start tracking a file again:

```bash
git update-index --no-assume-unchanged <file>
```

See [Git Ignore file](git-ignore-file#using-git-update-index) for more information.

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/git/cheat-sheet/)
- [gitscm's documentation for branch](https://git-scm.com/docs/git-branch)
- [gitscm's documentation for checkout](https://git-scm.com/docs/git-checkout)
- [gitscm's documentation for push](https://git-scm.com/docs/git-push)
