---
title: "Private Key Not Working"
date: 2018-06-01 00:02:00
tags:
  - Private
  - Key
categories:
  - 
    - private-keys-and-passwords
primary_category: private-keys-and-passwords
primary_category_display_name: "Private Keys And Passwords"
alias:
  - private-keys-passwords/private-key-not-working.html
---

# **Private Key Not Working**

###### {% read_time title "Private Key Not Working" %} min read

* * *

Be sure there is not a space at the beginning or end of your private key. We validate based on the number of characters. A private key has 64 characters, count to make sure you have all 64. If you saved another version (i.e. the UTC / Keystore file) it may also be worth trying that file as well. For more information about how to use a Keystore file, learn how to [access your wallet](/@@@@@@/getting-started/how-to-access-your-wallet/).

Please be sure that you are **carefully and accurately** typing your private key. A single wrong character will open a different wallet than is yours.

Some wallets, like Exodus, may export a private key that begins with `0x`. If you remove these two characters from the beginning, you may be able to access your account.

For reference private key looks like this: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`