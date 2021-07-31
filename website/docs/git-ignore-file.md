---
title: Git Ignore file
---

Published on December 24, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/git/ignoring-files/)_

This section covers how to tell Git to ignore certain files and directories by using _.gitignore_ files or the `git update-index` commands.

:::tip

Basic knowledge of Git is assumed in this tutorial. If you are new to Git, visit <http://rogerdudler.github.io/git-guide/> to learn the basics first.

:::

If you want a certain file or directory to be ignored for the long-term, you should choose to do so using _.gitignore_ files. Otherwise, if you only want Git to ignore a certain file temporarily, before committing it at a later time, you should do so using the `git update-index` commands.

## Using .gitignore files

Git uses _.gitignore_ files to decide which files and directories to ignore before you commit. Files and directories specified in _.gitignore_ will not be tracked nor staged when `git add *` or `git commit -a` commands are used.

To ignore a file or directory using _.gitignore_:

1. Create a _.gitignore_ file in the desired location (e.g. the project's root directory).
   - The _.gitignore_ file affects all files and sub-directories in its directory.
     - It recursively affects all files and directories in its sub-directories.
     - Sub-directories with their own _.gitignore_ file use their own _.gitignore_ instead.
2. Open the file and enter the filename or directory to be ignored (e.g. _secret.txt_). See example below.
3. Save the file and commit it.
   - Commit it to share the ignore rules with other users using the same repository and also to version-control it.

Example _.gitignore_ file:

```bash
# Ignore specific file
plaintext_password.txt

# Ignore specific file type using wildcards
*.html

# Ignore specific directory
site/
```

:::caution

If a file is already being tracked, adding it to _.gitignore_ will not stop Git from tracking it. You will need to remove the file from the Git cache using the `git rm --cached <file>` command. After doing this, the file will no longer be tracked provided it is specified in _.gitignore_.

:::

## Using 'git update-index'

If you want Git to temporarily ignore a file which you will commit at a later time, you can do so easily by using the `git update-index` commands to tell Git to stop and start tracking the file.

To temporarily ignore (stop tracking) a file:

```bash
git update-index --assume-unchanged <file>
```

To start tracking a file again:

```bash
git update-index --no-assume-unchanged <file>
```

:::tip

Read the [man page](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-update-index.html) to find out more about `git update-index` rules.

:::

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/git/ignoring-files/)
- [gitscm's documentation for .gitignore](https://git-scm.com/docs/gitignore)
- [github's guide to ignoring files](https://help.github.com/en/articles/ignoring-files)
- [gitready's guide to ignoring files](http://gitready.com/beginner/2009/01/19/ignoring-files.html)
- [gitready's guide to temporarily ignoring files](http://gitready.com/intermediate/2009/02/18/temporarily-ignoring-files.html)
- [man page on 'git update-index'](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-update-index.html)
