---
title: "Why Does MEW wallet use a Pin Code instead of a Password?"
date: 2018-03-01 00:01:00
tags:
  - mewwallet
  - pin
  - contraseña
  - security
categories:
  - 
    - mewwallet
primary_category: mewwallet
primary_category_display_name: "MEW Wallet"
author: MyEtherWallet (MEW)
---

# **Why Does MEW wallet use a Pin Code instead of a Password?**

###### {% read_time title "Why Does MEW wallet use a Pin Code instead of a Password?" %} min read

* * *

## First, it's important to understand the [underlying security and encryption methods used by MEW wallet][mws] to secure your private key.

<br>

Your pin code and biometric access, such as FaceID or Fingerprint, are the first step of accessing your private key information from the secure local storage on your mobile device. It follows this general path, with extra layers of security and encryption steps ommitted for simplicity:

**PIN/biometry -> Secure Enclave Key -> Master Key -> Private Key**

Since **your pin code is not actually used to encrypt your private key**, it is unnecessary to use a complex password for access. If a hacker managed to get ahold of your device and somehow managed to access your encrypted private key, they would have to bruteforce a proper **AES 128 bit SE encryption**, which would take longer than the age of our Universe to accomplish.

The other scenario is that someone gains access to your phone and tries to use your MEW wallet app to send funds directly. First they would need to unlock your phone's main lockscreen, then they would need to unlock your MEW wallet app. (For stronger security, use different pins for your phone's lock screen and your MEW wallet app!)

Brute-forcing a pin code requires trial and error to try and determine the correct combination. However, **both your mobile device and the MEW wallet app have placed heavy restrictions on the number of attempts you can make to unlock them**. For this reason, the possibility of someone accessing your app with your phone is very small, even if they have prolonged access to it.

Therefore, using a password or a pin code are both viable options. However, we chose the pin code route for simplicity, efficiency, and the ability to place restrictions on the number of attempts to unlock.

The best way to keep your funds safe using the MEW wallet app is to make sure you write down your 24 word recovery phrase on paper with pen, double-check every word, and store it somewhere safe for the long-term. **Never enter your phrase on any websites online, and never share them with anyone.** They offer complete and permanent access to your wallet.

[mws]: /@@@@@@/mewwallet/mewwallet-security/
