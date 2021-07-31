---
title: iTerm2 and zsh Setup
---

Published on January 16, 2021  
Updated on January 23, 2021

In this section you will find my notes on setting up [iTerm2](https://iterm2.com/), an awesome terminal emulator for MacOS, and [ohmyzsh](https://ohmyz.sh/), an amazing open-source framework for managing your zsh configuration.

## Install

1. Install iTerm2:

   ```zsh
   brew install --cask iterm2
   ```

1. Install zsh:

   ```zsh
   brew install zsh
   ```

1. Install ohmyzsh:

   ```zsh
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
   ```

1. Update ohmyzsh:

   ```zsh
   omz update
   ```

1. Exit Terminal and open iTerm2: `⌘` + `Space Bar` > Search 'iTerm'
1. You are done setting up iTerm2 and ohmyzsh!

## Change theme

:::tip

To configure ohmyzsh, you will almost always be doing so by opening `~/.zshrc`.

:::

1. Open the `~/.zshrc` configuration file:

   ```zsh
   open ~/.zshrc
   ```

1. Change your theme by updating `ZSH_THEME="robbyrussell"` accordingly.
1. Find a theme you like [here](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes) and follow the install instructions in the theme repositories.
1. Run `exec zsh` to reload your new configuration:

   ```zsh
   exec zsh
   ```

You should see your new theme in action.

## Add an alias

Aliases are useful shorcuts you set to reduce the time spent on typing commands you often use. For example, if you often type:

```zsh
cd /Users/evantay/Documents/Git
```

or even worse:

```zsh
cd /Users/
cd evantay
cd Documents/Git
```

You should add an alias for `cd /Users/evantay/Documents/Git`:

1. Open the `~/.zshrc` configuration file:

   ```zsh
   open ~/.zshrc
   ```

1. Add a new alias at the bottom of the file:

   ```zsh
   # Example aliases
   # alias zshconfig="mate ~/.zshrc"
   # alias ohmyzsh="mate ~/.oh-my-zsh"
   alias repo="/Users/evantay/Documents/Git"
   ```

1. Reload zsh:

   ```zsh
   exec zsh
   ```

You can now type `repo` whenever you want to `cd /Users/evantay/Documents/Git`.

## Resources

- [iTerm2's Landing Site](https://iterm2.com/)
- [freeCodeCamp's Guide](https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/)
