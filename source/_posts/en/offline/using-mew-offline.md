---
title: "Using MEW Offline (Cold Storage)"
lang: en
date: 2018-06-01 00:01:00
tags:
- offline
- mew
- cold
- storage
categories:
- [offline]
primary_category: offline
primary_category_display_name: "Offline"
---

# __Using MEW Offline (Cold Storage)__
###### {% read_time title "Using MEW Offline (Cold Storage)" %} min read
***

For increased security, you can run MyEtherWallet (MEW) on your local computer, instead of from the GitHub servers through our website. The computer being used should not be connected to the internet. You can generate a wallet completely offline and send transactions on a different computer, which must be connected to the internet, from our ‘Send Offline’ section. In this way, your sensitive information (i.e. private key, keystore file, mnemonic phrase) is kept on an offline device, and it is never transmitted off your device.

## __Downloading and Running MEW Offline__

**Step 1.** In order to set up your local MEW, start by downloading the latest release of MEW [here][latestMEW].

<img src="/images/posts/offline/MEWoffline1.png" width="80%">

**Step 2.** Click on `MyEtherWallet-vX.X.X.X.zip` to download the file. Move this file to a USB stick (or another storage transfer device), and transfer it to your permanently-offline computer.

<img src="/images/posts/offline/MEWoffline2.png" width="80%">

**Step 3.** Plug the USB into your offline computer and extract all the files into the archive of the computer. Extracting the files is important, otherwise MEW will not open correctly and will look like a bunch of nonsense. You should end up with a folder containing these files: 

<img src="/images/posts/offline/MEWoffline3.png" width="80%">

**Step 4.** To open MEW, double-click the ‘index.html’ file. This will open MEW in your browser. You will get a warning saying it is unable to connect to the network, which is normal. You’re not connected to the internet. You won’t be able to see your ETH or token balances because of this, but these are viewable in a secure, public way by using an Ethereum blockchain explorer such as etherscan.io or ethplorer.io.

<img src="/images/posts/offline/MEWoffline4.png" width="80%">

Congratulations, you’re running MEW offline! Make sure to repeat this process periodically, to ensure you’re on the most up-to-date version of our interface.

Read this article for more information on [how to create a wallet][create].
Read this article if you'd like to know [how to send an offline transaction][sendoffline].

[latestMEW]: https://github.com/MyEtherWallet/MyEtherWallet/releases
[create]: /en/getting-started/how-to-create-a-wallet/
[sendoffline]: /en/offline/offline_transaction/