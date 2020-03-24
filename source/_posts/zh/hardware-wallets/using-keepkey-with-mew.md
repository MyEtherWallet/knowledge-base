---
title: "Using a KeepKey Hardware Wallet with MEW"
date: 2018-06-01 00:02:00
tags:
  - keepkey
  - hardware
  - wallet
categories:
  - 
    - hardware-wallets
primary_category: hardware-wallets
primary_category_display_name: "Hardware Wallets"
---

# __Using a KeepKey Hardware Wallet with MEW__
###### {% read_time title "Using a KeepKey Hardware Wallet with MEW" %} min read
***

KeepKey Hardware Wallets are leading wallets for their security and interface usability standards. They are available for purchase [here](https://keepkey.myshopify.com/collections/frontpage/products/keepkey-the-simple-bitcoin-hardware-wallet/?source=hasoffers).

*Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Hardware wallets often support multiple cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW).

**This part is very important.** Your KeepKey device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!

***

## __The Initial Set-Up__

**Step 1.** Unbox your KeepKey! Plug it into your computer and download the [KeepKey Client browser extension](https://chrome.google.com/webstore/detail/keepkey-client/idgiipeogajjpkgheijapngmlbohdhjg?hl=en-US) application.
* It's not a typical browser extension that shows on your browser like MetaMask. You may want to pin it to your taskbar.

**Step 2.** In the KeepKey Client interface, select 'Initialize Device'.
* Set your label (name) for your device.

**Step 3.** Set up a PIN code to access your KeepKey. Make it something that is very easy to remember for you. Write it down in a couple places. Remember it!! This is how you will unlock your wallet everytime you want to access it. The PIN code must be between 4 and 8 characters.
* Keep them in the correct order, too!
* The pin numbers will appear on the actual device itself.

**Step 4.** This is one of the most important steps. Do not write this phrase down on your computer, do not take a picture of the phrase. Make sure you write down your 12 seed words in multiple places. DO NOT LOSE THEM. If you lose these words, you’ve lost all your cryptocurrency. We suggest using multiple pieces of paper to write this down. Again, do not write this phrase down on your computer. Use pen and paper.
* The phrase also appears on the device itself.

**Step 5.** Great, your device is now ready! Now let’s figure out how to use it with MyEtherWallet.

***

## __Using KeepKey with MEW__

**Step 1.** Attachand unlock your KeepKey device. Open your KeepKey Client and download the Ethereum account software to your device by choosing 'Add Account' in the bottom right corner.
* After you're done, close the KeepKey client and unplug/replug your device.

**Step 2.** Now head to MyEtherWallet.com. Select 'Access My Wallet' > 'Hardware' > 'KeepKey'.

**Step 3.** Enter your pin to connect to your wallet.

**Step 4.** You will see a bunch of addresses here. Make sure you're on the Ethereum network, using the standard Ethereum derivation path, and then choose your address.
* There's no right or wrong choice for choosing an address, it's up to you. But choosing the first one is usually the best practice, for convenience and memory's sake.

**Step 5.**  You should now be taken to a screen that looks very similar to your old wallet’s access screen. Great job! You’re officially using your new KeepKey hardware wallet!

***

## __What About My Old Wallet???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure KeepKey address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the KeepKey). From here, send your ETH and tokens to your new KeepKey address, ready to be accessed in a more secure fashion.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.

## __How Do I Restore My KeepKey to a New Device?__

You can use your recovery phrase to restore your wallet to as many devices as you'd like, as long as they accept the 12-word mnemonic phrase for recovery.

## __Troubleshooting__

Most issues with the KeepKey can be fixed by performing a hard refresh (using CTRL+F5), confirming that all the firmware is updated to its latest release, and trying a new connecting cable.

As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!