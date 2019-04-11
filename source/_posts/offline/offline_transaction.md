---
title: "Making an Offline Transaction"
lang: en
date: 2018-06-01 00:01:00
tags:
- offline
- mew
- cold
- storage
- transaction
- myetherwallet
categories:
- [offline]
primary_category: offline
primary_category_display_name: "Offline"
alias:
- offline/local-offline-myetherwallet-does-not-work-properly.html
---

# __Making an Offline Transaction__
###### {% read_time title "Making an Offline Transaction" %} min read
***

If you are [using MyEtherWallet (MEW) offline and locally][mewOffline], it is not possible to send transactions directly from the offline computer. To send or broadcast a transaction, an internet connection is required. To do this, you should use a second computer that is connected to the internet. This has the advantage of keeping your private key on a separate offline device that won’t be afflicted by malware or hackers. 

## __Find the Nonce & Transaction Details__

**Step 1.** Head to MyEtherWallet.com on your **online** computer.

**Step 2.** At the bottom, in the footer, choose the 'Send Offline Helper' tool.

**Step 3.** Choose the network you are interacting with. Leave it on 'ETH' if you are using Ether or ERC20 tokens.

**Step 4.** Fill in the address you are sending from, and our interface will generate a gas price and nonce for your transaction, along with other details

**Step 5.** Make a note of your nonce, export the JSON file, and move this file onto a USB.
<br> 

## __Generate Your Offline Transaction__

**Step 1.** Plug in the USB to your offline computer.

**Step 2.** Access the offline version of MEW on this same offline device. This is done by opening ‘Index’ from the file list with your browser.

**Step 3.** Access your wallet like you would normally, and choose ‘Send Offline’ from the menu to the left.

**Step 4.** Import your JSON file from the connected USB. Alternatively, you can manually fill in your nonce, transaction details, and the address you are sending to, as well as other relevant data.

**Step 5.** If you’re sending to a contract, extra data may cause you to need a higher gas limit. Excess gas will be refunded, so don’t be afraid to raise it as high as 100,000.

**Step 6.** Click ‘Generate Transaction’, then copy the long string that says ‘Signed Transaction’ and paste it in a text file, or download a new JSON file holding your signed transaction’s details. Drag this text file or JSON file into your USB for the final step in the process.
<br>

## __Sign and Send Your Transaction__

**Step 1.** Head to MyEtherWallet.com once more on your **online** computer.

**Step 2.** At the bottom, in the footer, choose again the ‘Send Offline Helper’ tool.

**Step 3.** Paste in your signed transaction, or import the new JSON file you just received.

**Step 4.** Review the details of your transaction then press 'Send'. 
<br> 

You’re done! Your transaction will show on an Ethereum blockchain explorer once it’s been verified. It can be searched using the transaction hash shown at the end of the process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9_6EU1QPU0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[mewOffline]: /posts/offline/using-mew-offline/
