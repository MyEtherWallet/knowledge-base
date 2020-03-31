---
title: "What is a Keystore/JSON file?  Can I Change my Password?"

date: 2018-06-01 00:05:00
tags:
- Keystore
- JSON
- Change
- Password
categories:
- [security-and-privacy]
primary_category: security-and-privacy
primary_category_display_name: "Security And Privacy"
alias:
- security/keystore-file.html
---

# **What is a Keystore/JSON file?  Can I Change my Password?**

#### **Keystore/JSON files are not a recommended way of accessing MyEtherWallet (MEW).  For more information on other methods of access, check out our article on [how to access a wallet][accessMEW].**

###### {% read_time title "What is a Keystore/JSON file? Can I Change my Password?" %} min read

* * *

Your Keystore/JSON file holds an encrypted version of your private key, which is simply your private key encoded into a cool, secret string of characters. Take, for example, the word 'apple'. If you encrypted this word with a 4-character difference down the alphabet, it would look something like 'dssoh'. At face value, you'd have no idea what 'dssoh' meant. However, if you gave someone this word and told them the way you encrypted it, they could then decode it back to the world 'apple'! This is a **very** simplified version of how encryption works, but it gets the point across.

When you enter your password upon generation of your wallet, it takes your password and uses it to encrypt your Private Key into a Keystore/JSON file. The result is a file that looks a lot like gibberish if you open it, (which there is no reason to do, do not open your JSON file!). This file simply holds your encrypted private key within it, which is why you have to use your chosen password to unlock your wallet via this method. You cannot change your password without generating an entirely new Keystore/JSON file.

It’s important to note that the strength of your password is directly related to the integrity of your Keystore/JSON file. If you choose a weak password, and a hacker gets hold of your encrypted key, they can bruteforce it until they discover what password you used. Pick a strong password for a strong encryption! 

## **To change your Keystore/JSON file + password:**

As mentioned above, you cannot change your password without generating a completely new JSON file. 

**Step 1.** Download and install our [MEW Chrome Extension][MEWCX]. 

**Step 2.** In the extension, add a ‘new wallet’ by entering your private key. 

-   This does not mean generating an entirely new wallet. It means to add your existing wallet as a ‘new wallet’ into the extension.

**Step 3.** Enter a strong password, and save the wallet. 

-   This will be the new password for your JSON file, so choose wisely.

**Step 4.** Head to the ‘My Wallets’ area of the extension and click the word 'Details' in the top-right corner of your wallet.

**Step 5.** Enter in the password you just made.

**Step 6.** You will be taken to an area that shows your wallet’s information. You can download a new Keystore/JSON file from this area, and use that for future access.

After downloading the new Keystore/JSON file, you can choose to continue using our Chrome Extension, or go back to using regular MEW. However, since you’re using a Keystore/JSON file, we highly suggest learning [how to use MEW offline][offlineMEW], for the security of your information.

[accessMEW]: /@@@@@@/getting-started/how-to-access-your-wallet/

[offlineMEW]: /@@@@@@/offline/offline-mew-looks-weird/

[MEWCX]: https://chrome.google.com/webstore/detail/myetherwallet/nlbmnnijcnlegkjjpcfjclmcfggfefdm?hl=en
