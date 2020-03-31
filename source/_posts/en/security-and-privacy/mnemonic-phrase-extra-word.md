---
title: "Mnemonic Phrase: Should I Include an Extra Word?"

date: 2018-06-01 00:06:00
tags:
- mnemonic
- phrase
- password
categories:
- [security-and-privacy]
primary_category: security-and-privacy
primary_category_display_name: "Security And Privacy"
---

# **Mnemonic Phrase: Should I Include an Extra Word?**

###### {% read_time title "Mnemonic Phrase: Should I Include an Extra Word?" %} min read

* * *

## **Creating a New Wallet**

#### **We do not suggest creating a new wallet with the mnemonic phrase option on our website, unless you are planning to [use MEW offline][offline].**

When you’re creating a new wallet through the ‘Mnemonic Phrase’ option on MEW, you are given the choice of whether or not to include an extra word. This is an extra word of your own choosing tacked onto the end of your phrase. For example, if you’re making a 24 word mnemonic phrase, this will act as a **mandatory** 25th word every time you want to use this phrase.

Occasionally, this extra word is also referred to as a 'password', but this is misleading. It's actually a 13th / 25th word to your phrase.

**The upside to this is extra security.** If someone got a hold of your 24 word mnemonic phrase, they would still need your extra word to act as a 25th word in order to access your funds. This greatly increases the security of your phrase. 

**The downside to this is integration with other platforms.** Almost every other Ethereum wallet interface requires your mnemonic phrase to be in a 12 or 24-word format and does not offer the extra word option. Therefore, restoring this phrase through other Ethereum wallets can prove difficult. This extra word becomes necessary to see your wallet, so you will not be able to regain access through non-supporting wallets. 

In the end, the choice is yours.

## **Accessing or Restoring a Wallet**

#### **We do not suggest accessing or restoring your wallet with your mnemonic phrase directly on our website, unless you are [using MEW offline][offline].**

When accessing or restoring your wallet through the ‘Mnemonic Phrase’ option on MEW, you are given the choice of whether or not to include an extra word. Most of the time, the answer is no. 

Most apps or extensions that use Mnemonic phrases, such as MEWconnect, MetaMask, and hardware wallets, do not include an extra word in their mnemonic phrase. They ask you to input a password for app access, but this is different than requiring an extra word for recovery purposes.

If you made your wallet directly on MyEtherWallet.com, you may need to use the extra word you chose during creation to restore your wallet. However, most wallets made through other platforms will **not** require the extra word. Simply toggle this option to the ‘off’ position and proceed with your recovery process.

[offline]: /@@@@@@/offline/using-mew-offline
