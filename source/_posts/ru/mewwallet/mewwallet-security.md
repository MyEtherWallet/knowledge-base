---
title: "Как MEW wallet защищает мои средства?"
date: 2018-03-01 00:01:00
tags:
  - mewwallet
  - руководство
categories:
  - 
    - mewwallet
primary_category: mewwallet
primary_category_display_name: "MEWwallet"
---

# **Как MEW wallet защищает мои средства?**

###### {% read_time title "Как MEW wallet защищает мои средства?" %} мин на чтение

* * *

## MEW wallet использует передовой метод многослойного шифрования и изолированное локальное хранилище для защиты ваших средств.

<br>

Подобно всем кошелькам Ethereum, процесс начинается с генерации вашего **ключа**. This key is the foundation of your wallet, offering complete and permanent access to your account and all the funds involved. We recognize the significance of your private key, so **we encrypt it with a master key**. But we don’t stop there.

Your encrypted key is **encrypted again** with an access key depending on the method of access you use to unlock your MEW wallet mobile account. MEW wallet offers a pin code and biometric signature, such as a FaceID or fingerprint, as access methods used in the encryption process.

But we’re not done yet. This is where the process changes slightly depending on if you’re using an iOS or Android mobile device.

To make sure your key is protected, this encrypted key is **encrypted again** with a key generated from the Android Keystore section of your device, or the Secure Enclave if you’re using an iOS device. This specific key is not shared with us or any other apps in your phone, it is completely isolated architecturally within the local hardware of your mobile phone.

After that, we store this **super encrypted key** in a local SharedPreferences storage for Android devices, or the local KeyStore storage on iOS, which are also separated from the rest of the system on the software level.

This process may seem like overkill, but it’s necessary for the security of your information. When you make a new wallet with our MEW wallet app, you can rest assured that no one has access to your private key.

In fact, we don’t even allow our users to see their key. Instead, we offer a 24-word recovery phrase for backing up your accounts. This is generally viewed as the best method of recovery, which is used by most hardware wallets and wallet interfaces.

It’s recommended that you keep this phrase written down on paper, off of the internet, and stored in multiple physical locations. We cannot recover this information for you, which is a good thing. It means you have all the power and control over your accounts.
