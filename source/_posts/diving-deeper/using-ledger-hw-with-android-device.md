---
title: "What Happens if MEW Goes Down?"
lang: en
date: 2018-06-01 00:06:00
tags:
- down
categories:
- [diving-deeper]
primary_category: diving-deeper
primary_category_display_name: "Diving Deeper"
alias:
- faq/what-happens-if-myetherwallet-goes-down.html
---


# __Using a Ledger Hardware Wallet With an Android Device__
###### ⏰ 3 min read
***

If you would like to use your Ledger hardware wallet with an android device, there are a couple things you will need to prepare in advance.



## __Requirements__

* Modern android phone or tablet, supporting USB On-The-Go (USB-OTG).
    * If you’re not sure of USB-OTG support, check it yourself using an app like the [USB-OTB Checker](https://play.google.com/store/apps/details?id=com.faitaujapon.otg).

* A USB-OTG adapter (found on [Amazon](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=usb+otg+adapter) for a couple bucks).



## __Setting Up Your Device__

Before connecting to your Ledger, you first have to install a [Ledger application](https://github.com/LedgerHQ/android-u2f-bridge/releases). Click that URL on your Android device, and select the file `android-u2f-bridge-x.x.apk`. Once downloaded, open this file on your device and install it. Click ‘done’ when you are finished.

Now you can connect your Ledger hardware wallet and open the Ethereum app. Make sure ‘Contract Data’ is turned on. Now open your browser and head to MyEtherWallet.com. Under ‘Access My Wallet’, choose the ‘Hardware’ option and click ‘Ledger Wallet’ to connect to your device.



<img src="/images/posts/diving-deeper/ledger-hardware-wallet-using-with-android-01.png" width="50%">



You should see this pop-up, asking to allow the app Ledger U2F to access the USB device. Select ‘OK’, and you will be connected to your Ledger!
