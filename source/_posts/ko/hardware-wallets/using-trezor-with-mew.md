---
title: "Using a Trezor Hardware Wallet with MEW"
date: 2018-06-01 00:01:00
tags:
  - trezor
  - hardware
  - wallet
categories:
  - 
    - hardware-wallets
primary_category: hardware-wallets
primary_category_display_name: "Hardware Wallets"
alias:
  - en/migration/moving-from-private-key-to-trezor-hardware-wallet.html
---

# **Using a Trezor Hardware Wallet with MEW**

###### {% read_time title "Using a Trezor Hardware Wallet with MEW" %} min read

* * *

Trezor Hardware Wallets are some of the most secure and intuitive cryptocurrency hardware wallets out there. They are available for purchase [here](https://trezor.io/?offer_id=12&aff_id=2029).

_Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure._

This particular hardware wallet supports a wide range of cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW).

**This part is very important:** Your Trezor device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!

## **The Initial Set-Up**

**Step 1.** Unbox your Trezor! You will see some cards and instructions for set-up. Follow these instructions carefully! Plug in the Trezor to your computer and get started. Visit [trezor.io/start](https://trezor.io/start) to begin the process.

<img src="/images/posts/hardware-wallet/trezor/Trezor1.jpg" width="35%" />

* * *

**Step 2.** Choose ‘Create new’ on this page, and follow the steps to set up your new device.The first thing you will want to do is ‘Create a backup in 3 minutes.’

<img src="/images/posts/hardware-wallet/trezor/Trezor2.png" width="80%" />

* * *

**Step 3.** _This is one of the most important steps._ Do not write this phrase down on your computer, do not take a picture of the phrase. Make sure you write down your 24 seed words in multiple places. DO NOT LOSE THEM. If you lose these words, you’ve lost all your cryptocurrency. Ledger provides cards for you to write them down for remembering, but I suggest writing them down in one extra place as well. Again, do not write this phrase down on your computer. Use pen and paper. When you’re done, you’ll see the screen below.

<img src="/images/posts/hardware-wallet/trezor/Trezor3.png" width="80%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor4.png" width="75%" />

* * *

**Step 4.** Now you will be prompted to choose a name for your Trezor. This is the name you will see on your device whenever you plug it in. Choose something familiar and personal!

<img src="/images/posts/hardware-wallet/trezor/Trezor5.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor6.png" width="75%" />

* * *

**Step 5.** You will now choose your pin. This pin will be the only way to access your device (besides the recovery phrase you wrote down, multiple times) so it’s very important to choose a secure, but easy to remember pin. Don’t just use `1111` or `1234`, use something a bit more random and secure. _Don’t make this mistake! If it says it could be safer, make it longer!_

<img src="/images/posts/hardware-wallet/trezor/Trezor7.png" width="75%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor8.png" width="70%" />

* * *

**Step 6.** You’re all done!

<img src="/images/posts/hardware-wallet/trezor/Trezor9.png" width="50%" />

## **Using Trezor with MEW**

**Step 1.** Attach your Trezor device and head to MEW.

<img src="/images/posts/hardware-wallet/trezor/Trezor10.jpg" width="35%" />

* * *

**Step 2.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Are you? Great! Head to ‘Access My Wallet’ and choose the option that says ‘Hardware’. Click the ‘Trezor’ option, and choose ‘Connect With Your Device’ with your Trezor device still attached.

<img src="/images/posts/hardware-wallet/trezor/MEW1.png" width="75%" />

* * *

**Step 3.** A screen will pop-up asking for you to allow MEW permissions to read the public keys from your Trezor device. Click ‘Allow once for this session’, and feel free to select ‘Don’t ask me again’, so this step is automatic in the future. Select ‘Export’ on the next screen, enter your pin, and you’ll be redirected back to MEW.

<img src="/images/posts/hardware-wallet/trezor/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor11.png" width="70%" />

* * *

**Step 4.** MEW will bring you back to a page showing different networks and derivation paths. Choose which network you’d like to connect to, and which path you’d like to use. For regular ETH usage, you should be on an ETH network, under the Ethereum derivation path. You can also access other networks, such as Ethereum Classic (ETC), by choosing the related network path.

<img src="/images/posts/hardware-wallet/trezor/Trezor16.png" width="40%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor12.png" width="40%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor17.png" width="40%" />

* * *

**Step 5.** You will see a list of addresses. These are your new addresses to choose from for your main wallet! Choose one out of the five that you like. (Most people choose the first one, but you don’t have to.)

<img src="/images/posts/hardware-wallet/trezor/Trezor13.png" width="42.5%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor14.png" width="50%" />

* * *

**Step 6.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Great job! You’re officially using your new Trezor hardware wallet!

<img src="/images/posts/hardware-wallet/trezor/Trezor15.png" width="50%" />

## **What About My Old Wallet???**

If you are coming from an old wallet and want your ETH and tokens on your new, secure Trezor address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the Trezor). From here, send your ETH and tokens to your new Trezor address, ready to be accessed in a more secure fashion.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.

## **How Do I Restore My Trezor to a New Device?**

Trezor made a clear and easy to follow guide on how to restore your Trezor device [here](https://wiki.trezor.io/User_manual:Recovery).

## **Troubleshooting**

Most issues with the Trezor can be fixed by performing a hard refresh (using CTRL+F5), making sure all the firmware is updated to its latest release, and trying a new connecting cable.

As always, feel free to contact us at [support@myetherwallet.com.](mailto:support@myetherwallet.com.) We are always happy to help!
