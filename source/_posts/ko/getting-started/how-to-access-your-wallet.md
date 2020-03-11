---
title: "How to Access Your Wallet"
date: 2018-06-01 00:06:00
tags:
  - access
  - wallet
categories:
  - 
    - get-started
primary_category: get-started
primary_category_display_name: "Get Started"
alias:
  - getting-started/accessing-your-new-eth-wallet.html
---

# __How to Access Your Wallet__
##### <i>This article is meant for those that already have an ETH wallet. If you would like to create a wallet from scratch, please refer to [this article][createWallet].</i>
###### {% read_time title "How to Access Your Wallet" %} min read
***
MyEtherWallet (MEW) offers a variety of ways to access one’s Ethereum wallet, by selecting the ‘Access My Wallet’ option on the front page.

They are, from most to least recommended:

* Hardware Wallets ([Ledger Nano S](https://www.ledger.com/?r=fa4b), [Trezor](https://trezor.io/?offer_id=12&aff_id=2029), [Digital Bitbox](https://shiftcrypto.ch/?ref=mew), [Finney](http://shop.sirinlabs.com/?rfsn=2397639.54fdf&utm_source=refersion&utm_medium=affiliate&utm_campaign=2397639.54fdf), etc.)
* MEW wallet
* Browser Extensions a.k.a. Web3 (MEW CX, MetaMask, etc.)
* Keystore/JSON File + Password
* Mnemonic Phrase + Password
* Private Key

## __Hardware Wallets__

Hardware wallets use the highest security measures to encrypt a private key within the device itself, keeping phishers and hackers at bay. Users of most hardwares wallets do not receive their private key, but instead receive a 24-word mnemonic phrase for recovery purposes. The devices are also usually accompanied by a pin code or password used to unlock the device, and all information about each wallet is kept on the actual physical device itself.

To learn more about accessing MEW with hardware wallets, reference our [Migrating to/from MEW](/@@@@@@/migration/moving-from-exchange-to-mew/) category.



## __MEW wallet__
This is our fully fledged MEW mobile app for iOS and Android smartphones. It's simple, fast, and secure to use. When creating a wallet with MEW wallet, your private key is kept encrypted on a secure, local vault in your phone. For backup, you are given a mnemonic phrase (much like the hardware wallets above). The wallet is also accompanied by a pin or password, which is used to unlock it on your device.

To learn more about accessing MEW with MEW wallet, reference our [MEW wallet User Guide](/@@@@@@/mewwallet/mewwallet-user-guide/).




## __Browser Extension (Web3) Wallets__
#### __[What is Web3?](https://www.mewtopia.com/the-essential-wallet-guide-part-4/)__



#### __MEW CX__
MEW CX is MyEtherWallet's offical Web3 Chrome Extension wallet. It offers all the functionality of the web-version of MEW in the convenience of an toolbar extension. It also hosts the ability to interact with web-based Dapps, such as CryptoKitties.

MEW CX will come in conflict with any other Web3 wallets you have, such as MetaMask or Brave Browser's in-house wallet. Make sure all other Web3 wallets are disabled before using MEW CX.




#### __To connect MEW with MEW CX__

**Step 1.** Install the MEW CX wallet via our Chrome Extension.

**Step 2.** Open the extension and select 'Add Wallet' to create a new wallet or add an existing one.

**Step 2.** Once you've saved a wallet, head to the MEW website. On the front page, select 'Access My Wallet'.

**Step 3.** Select the 'Browser Extension' option to connect.

**Step 4.** Read and accept the ‘Terms and Conditions’, then select ‘Access My Wallet’.

**Step 5.** Confirm which wallet you'd like to connect with in the MEW CX pop-up window, or select 'Burner Account' for a temporary wallet.

**Step 6.** You're done!




#### __MetaMask__
This is a Chrome Extension that allows the creation of an ethereum-based wallet that keeps one’s private key encrypted within the extension itself. It also generates a 12-word mnemonic phrase for recovery purposes. MetaMask allows users to name their separate wallets, see funds within the extension, and offers the option to import the private key information of a previously created wallet, if desired.



#### __To connect MEW with MetaMask:__
#### __This assumes you already have a MetaMask wallet.__

**Step 1.** Login to your MetaMask wallet via their Chrome Extension.

**Step 2.** On the MEW front page, select 'Access My Wallet'.

**Step 3.** Select the 'Browser Extension' option to connect.

**Step 4.** Read and accept the ‘Terms and Conditions’, then select ‘Access My Wallet’.

**Step 5.** Confirm connection in the MetaMask pop-up window.

**Step 6.** You're done!



## __Keystore/JSON + Password__
The Keystore/JSON is a file that holds an encrypted version of one’s private key. This key is encrypted with a chosen password by the user. As such, it is impossible to change the password for these files. The only way to change the password is to make a completely new Keystore file, which can be achieved in our MEW Chrome Extension with one’s private key. Keystore files should not be opened. They are only to be utilized when accessing the Keystore/JSON option on our site and when prompted for one’s ‘JSON file’. You can read more about the functionality of a Keystore/JSON file [here](/@@@@@@/security-and-privacy/what-is-a-keystore-file/).



## __To connect with Keystore/JSON + Password:__
#### __This is not a recommended way to connect. We highly suggest [using MEW offline](/@@@@@@/offline/offline-mew-looks-weird/) for this option.__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘JSON File’ and click ‘Continue’.

**Step 3.** Locate your Keystore/JSON file in the pop-up window. It should begin with ‘UTC--’.

**Step 4.** Enter your password, and click 'Unlock wallet'.

**Step 5.** You're done!



## __Mnemonic Phrase (+ Extra Word)__
This is a list of 12 to 24 words that are generated and given to users upon certain forms of wallet creation (i.e. MEWconnect, MetaMask, Hardware Wallets, JAXX wallets, etc.). Sometimes these phrases have an extra word associated with them, and sometimes they do not. The order and spelling of the words in a mnemonic phrase is directly tied to one’s private key, and therefore is not recommended as a regular way to access a wallet. It is best to only use this phrase for recovery purposes.



## __To connect with Mnemonic Phrase (+ Extra Word):__
#### __This is not a recommended way to connect. We highly suggest [using MEW offline](/@@@@@@/offline/offline-mew-looks-weird/) for this option.__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Mnemonic Phrase’ and click ‘Continue’.

**Step 3.** Choose whether it was a 12 or 24 word phrase, then fill out the form.

**Step 4.** Enter your extra word (leave this blank if you’re using a MEWconnect phrase), and click ‘Unlock wallet’.

**Step 5.** Choose your wallet’s address amongst the list generated, and you’re done!



## __Private Key__
The private key is a string of 64 characters tied permanently to a public address. This is sometimes given to users when wallets are created and sometimes kept encrypted (in the case of MEWconnect, MetaMask, and Hardware Wallets). *Using one’s private key should always be a last-ditch effort of access, only to be utilized when all else fails.* This should not be the main method of entry for anyone to access their wallets. Private keys are the number one most sensitive information anyone can have for a wallet, because private keys allow immediate access and can never be changed. Therefore, it is extremely important to keep this safe, secure, and secret.



## __To connect with Private Key:__
#### __This is not a recommended way to connect. We highly suggest [using MEW offline](/@@@@@@/offline/offline-mew-looks-weird/) for this option.__

**Step 1.** On the MEW front page, select ‘Access My Wallet’.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Private Key’ and click ‘Continue’.

**Step 3.** Copy and paste your private key into the value field.

**Step 4.** Click ‘Unlock Wallet’ and you’re done!