---
title: "Генерировать адрес снятия Eth2 для стейкинга в Eth2"
date: 2018-06-01 00:02:00
tags:
  - eth2
  - staking
  - staked
  - beacon
  - withdrawal
categories:
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Более глубокое ознакомление"
author: MyEtherWallet (MEW)
---

# **Генерировать адрес снятия Eth2 для стейкинга в Eth2**

###### {% read_time title "Generate an Eth2 Withdrawal Address for Staking on Eth2" %} мин. чтения

* * *

## **Интеграция Staked в MEW позволяет пользователям делать ставки кратные 32 ETH в Eth2 для накопления годовых процентов.**

Чтобы узнать больше о стейкинг в Eth2, ознакомьтесь с нашей статьей [о том, как делать ставки в Eth2 с помощью MEW web][eth2web].

Прежде чем делать ставку в Eth2, необходимо иметь адрес для снятия Eth2. When you [stake using the MEW wallet app][eth2app], your Eth2 withdrawal address is tied to your 24 word recovery phrase. However, on MEW web, it’s necessary to create a new Eth2 withdrawal address for your stake.

Your MEW web Eth2 withdrawal address will have a keystore file + password and a 24 word recovery phrase tied to it. **It’s very important you keep both your keystore file + password and recovery phrase safe, as we cannot recover these for you.** This information is necessary to withdraw your stake and rewards in the future. Without these, your ETH may be locked up indefinitely.

It’s suggested that you verify your Eth2 withdrawal address with your keystore file to make sure everything is working properly. You can find the verification process halfway through this article.

### **Generate an Eth2 Withdrawal Address on MEW web**

<br>

**Step 1.** Head to [www.myetherwallet.com](http://www.myetherwallet.com) and scroll down to the footer. Here you’ll find a ‘Generate Eth2 address’ tool at the bottom of the 'Discover' section.

<img src="/images/posts/diving-deeper/eth21.png" width="85%" />

**Step 2.** Enter a strong password for your Eth2 keystore file, then enter it again to confirm. This password will be the key to unlock your keystore file. It’s very important that you keep track of it.

<img src="/images/posts/diving-deeper/eth22.png" width="70%" />

**Step 3.** You will be taken to a screen that shows a 24 word recovery phrase. Write down your 24 word phrase with pen and paper and store it somewhere physically secure. Taking a screenshot won’t protect you from your computer failing, and it makes your phrase vulnerable to hackers.

<img src="/images/posts/diving-deeper/eth23.png" width="70%" />

**Step 4.** Download your keystore file from this same screen. Keep it somewhere secure and offline, such as a USB. It’s advisable to download multiple copies and keep them on separate USBs, so if one fails, you’ll have backups.

**Step 5.** You’re done! You will see your new Eth2 withdrawal address on the success screen. It is suggested that you write this down and keep track of it. This address is not necessary for future access, but it’s a good idea to know your own withdrawal address.

<img src="/images/posts/diving-deeper/eth24.png" width="70%" />

## **Verify your Eth2 Withdrawal Address using Windows**

For extra security and ease of mind, it’s recommended that you double-check your withdrawal address. This process is a bit complicated, but if you follow these steps exactly, you should be able to follow through to the end.

**Step 1.** Head to our [Eth2 keystore verification tool][eth2github] on Github. Download the Windows ZIP file for your system.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Step 2.** Extract the ZIP file to your computer, and head into the new ‘eth2deposit’ folders until you see ‘deposit.exe’.

<img src="/images/posts/diving-deeper/ethv2.png" width="80%" />

**Step 3.** Hold shift and right-click in the empty space of this folder, then select ‘Open PowerShell’.

**Step 4.** Enter this command for Windows: “.\\deposit verify-keystore”

<img src="/images/posts/diving-deeper/ethv5.png" width="100%" />

**Step 5.** Enter the path of your Eth2 keystore file. To find your path, you can right-click on the keystore and click ‘Properties’. It will look something like: “C:\\Users\\since\\OneDrive\\Desktop” (if you have it on your desktop). Once you find this, make sure you add the keystore file’s name to the end. So it should look like: “C:\\Users\\since\\OneDrive\\Desktop\\keystore-m_12381_3600_0_01607022974412.json”

<div class="d-flex justify-content-center flex-wrap margin-0">
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv3.png" width="50%">
</div>
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv4.png" width="50%">
</div>
</div>

**Step 6.** Once you enter this into the terminal and click ‘Enter’, it should ask you for your keystore file’s password. Enter it, then enter it again to confirm it.

**Step 7.** You’re done! Your terminal should say, “Success! Your keystore is valid.” Underneath of this message, you will see your Eth2 withdrawal address, or ‘public key’. Compare it with the address you saw when you first generated your Eth2 keystore file for accuracy.

<img src="/images/posts/diving-deeper/ethv6.png" width="100%" />

## **Verify your Eth2 Withdrawal Address using Mac**

For extra security and ease of mind, it’s recommended that you double-check your withdrawal address. This process is a bit complicated, but if you follow these steps exactly, you should be able to follow through to the end.

**Step 1.** Head to our [Eth2 keystore verification tool][eth2github] on Github. Download the Mac (darwin) TAR.ZG file for your system.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Step 2.** Extract the ZIP file to your computer, and head into the new ‘eth2deposit’ folders until you see ‘deposit’. Click the gear icon and select the option that says "Copy 'eth2deposit....' as Pathname".

<img src="/images/posts/diving-deeper/ethmac1.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac3.png" width="80%" />

**Step 3.** Hold Cmd + space and type in the word 'Terminal' to open the terminal for your Mac. Here, type "cd " and paste the Pathname you copied from the previous step, then press 'Enter'.

<img src="/images/posts/diving-deeper/ethmac2.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac7.png" width="80%" />

**Step 4.** Enter this command for Mac: “./deposit verify-keystore” and press 'Enter'.

<img src="/images/posts/diving-deeper/ethmac5.png" width="80%" />

**Step 5.** Enter the path of your Eth2 keystore file. To find your path, you can hold Option + right-click on the keystore file and click "Copy 'keystore-m....json' as Pathname". After that, head back to the terminal and paste it in. It will look something like: “/Users/stephen/Desktop/keystore-m_12381_3600_0_0-1607370800275.json” (if you have it on your desktop).

**Step 6.** Once you enter this into the terminal and click ‘Enter’, it should ask you for your keystore file’s password. Enter it, then enter it again to confirm it.

**Step 7.** You’re done! Your terminal should say, “Success! Your keystore is valid.” Underneath of this message, you will see your Eth2 withdrawal address, or ‘public key’. Compare it with the address you saw when you first generated your Eth2 keystore file for accuracy.

<img src="/images/posts/diving-deeper/ethmac6.png" width="80%" />

[eth2web]: /@@@@@@/dapps/stake-eth2-web/

[eth2app]: /@@@@@@/mewwallet/stake-eth2-mw/

[eth2github]: https://github.com/MyEtherWallet/eth2.0-deposit-cli/releases/tag/v1.1.0m1
