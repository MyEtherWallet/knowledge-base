---
title: "Using a Ledger Hardware Wallet with MEW"

date: 2018-06-01 00:02:00
tags:
- ledger
- hardware
- wallet
categories:
- [hardware-wallets]
primary_category: hardware-wallets
primary_category_display_name: "Hardware Wallets"
alias:
- migration/moving-from-private-key-to-ledger-hardware-wallet.html
---

# __Using a Ledger Hardware Wallet with MEW__
###### {% read_time title "Using a Ledger Hardware Wallet with MEW" %} min read
***

Ledger Hardware Wallets are some of the most secure and intuitive cryptocurrency hardware wallets out there. They are available for purchase [here](https://www.ledger.com/?r=fa4b).

*Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

This particular hardware wallet supports a wide range of cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW). 

**This part is very important.** Your Ledger device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!


## __Using Ledger with MEW__

**Step 1.** Attach and unlock your Ledger device. You should see a few different sections to choose from, choose the Ethereum section as shown above. Click both buttons to open it.

<img src="/images/posts/hardware-wallet/ledger/ethereum-app.jpg" width="50%">

***

**Step 2.** Click into this Setting section with both buttons.

<img src="/images/posts/hardware-wallet/ledger/ethereum-settings.jpg" width="50%">

***

**Step 3.** You will see “Contract Data” in this section. Make sure this option is turned to “Yes”.

***

**Step 4.** Good job, it’s all ready now! Head back to the “Ethereum” section and leave your Ledger alone for a moment. Let’s head to MEW!

***

**Step 5.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Are you? Great! Head to ‘Access My Wallet’ and choose the option that says ‘Hardware’. Click the ‘Ledger Wallet’ option, and choose ‘Connect With Your Device’ with your Ledger device still attached, unlocked, and ready.

<img src="/images/posts/hardware-wallet/ledger/MEW1.png" width="75%">

***

**Step 6.** A screen showing different networks and derivation paths should appear. Choose which network you’d like to connect to, and which path you’d like to use. For regular ETH usage, you should be on an ETH network, under the Ethereum derivation path. You can also access other networks, such as Ethereum Classic (ETC), by choosing the related network path. 

<img src="/images/posts/hardware-wallet/ledger/MEW2.png" width="70%">

<img src="/images/posts/hardware-wallet/ledger/Ledger1.png" width="70%">

***

**Step 7.** You will see a list of addresses. These are your new addresses to choose from for your main wallet! Choose one out of the five that you like. (Most people choose the first one, but you don’t have to.)

<img src="/images/posts/hardware-wallet/ledger/Ledger2.png" width="41.3%"> <img src="/images/posts/hardware-wallet/ledger/Ledger3.png" width="50%">

***

**Step 8.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Great job! You’re officially using your new Ledger hardware wallet! 

<img src="/images/posts/hardware-wallet/ledger/LEdger4.png" width="50%">





## __What About My Old Wallet???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure Ledger address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the Ledger). From here, send your ETH and tokens to your new Ledger address, ready to be accessed in a more secure fashion.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.



## __How Do I Restore My Ledger to a New Device?__

Ledger made a clear and easy to follow guide on how to restore your Ledger device [here][ledgerSupport].



## __Troubleshooting__

Most issues with the Ledger can be fixed by performing a hard refresh (using CTRL+F5), making sure Contract Data is turned to ‘Yes’, confirming that all the firmware is updated to its latest release, and trying a new connecting cable. 
 
As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!

[buyLedger]: https://www.ledger.com/?r=fa4b
[ledgerSupport]: https://support.ledger.com/hc/en-us/articles/360005434914-Restore-from-recovery-phrase
[mewkb]: https://kb.myetherwallet.com