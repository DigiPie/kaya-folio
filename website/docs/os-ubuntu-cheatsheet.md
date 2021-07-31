---
title: Ubuntu Cheatsheet
---

Published on December 24, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/os/ubuntu18-04/)_

In this section you will find my notes on setting up and securing Ubuntu 18.04. [Vim](https://www.linux.com/learn/vim-101-beginners-guide-vim) knowledge is assumed.

## Creating a new non-root Sudo user

It is recommended to avoid using the root user account on a regular basis as it compromises security and is risky. Instead, create a new user account and add it to the sudo group.

### Add a new user

```bash
adduser evan
```

### Add user to sudo group

```bash
usermod -aG sudo evan
```

### Log in to user

```bash
su evan
```

## Only allow Key Authentication

Password-based authentication is susceptible to brute-force attacks. Thus, it is good practice to disable it and only allow key-based authentication.

### Add Public Key to User

As mentioned, usage of the root user account should be avoided. Hence, it is advisable that you add your public key to the user account you created earlier on. It is assumed that you logged into your root account using SSH key.

1. Create a `authorized_keys` file:

```bash
su evan
cd ~
mkdir .ssh
vim .ssh/authorized_keys
```

2. Insert your public key and save the file with `:wq!`. You can copy this from the `authorized_keys` file under the root account's directory. You can find the file using the following commands:

```bash
su root
cd ~
vim .ssh/authorized_keys
```

:::tip

Toggle visual mode by pressing `v` at the start of the line for the public key you wish to copy over. Press `$` to move the cursor to the end of the line; doing so highlights the entire line. Press `y` to yank (copy). Then exit the file using `:q!`.

Enter the destination `authorized_keys` file. Press `p` to paste what you yanked.

:::

### Disable Password Authentication

As it is assumed that you logged into your root account using SSH key, this step could be unnecessary. However, do still perform a check to verify that `PasswordAuthentication no` is in place.

1. Open `sshd_config` with Vim:

```bash
sudo vim /etc/ssh/sshd_config
```

2. Add `PasswordAuthentication no`. It might be commented out as `#PasswordAuthentication no` or written as `PasswordAuthentication yes`. If you find either, replace with `PasswordAuthentication no`. Else just add it in.

:::tip

Use `:/PasswordAuthentication` to find `#PasswordAuthentication no`.

:::

3. Save the file with `:wq!`.

4. Restart `ssh` to implement this change:

```bash
sudo systemctl restart ssh
```

## Basic Firewall

1. List application profiles registered with ufw firewall:

```bash
sudo ufw app list
```

You should see

```
Available applications:
  OpenSSH
```

2. Ensure the firewall allows SSH connections:

```bash
sudo ufw allow OpenSSH
sudo ufw enable # Enable firewall
sudo ufw status # Check if OpenSSH is allowed
```

You should see the following after executing `sudo ufw status`:

```
To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
```

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/os/ubuntu18-04/)
- [Initial Server Setup with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)
- [How to Set Up SSH Keys on Ubuntu 18.04 ](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1804)
