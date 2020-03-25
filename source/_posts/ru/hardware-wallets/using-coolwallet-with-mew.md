---
title: "Using a CoolWallet Hardware Wallet with MEW"
date: 2018-06-01 00:02:00
tags:
  - CoolWallet
  - аппаратный
  - кошелек
categories:
  - 
    - аппаратные-кошельки
primary_category: аппаратные-кошельки
primary_category_display_name: "Аппаратные кошельки"
---

# __Using a CoolWallet Hardware Wallet with MEW__
###### {% read_time title "Using a CoolWallet Hardware Wallet with MEW" %} минут на чтение
***

CoolWallet Hardware Wallets are leading wallets for their sleek design, uncompromising security, and bluetooth capabilities. Купить их можно [здесь](https://www.coolwallet.io/product/coolwallet/).

*Пожалуйста, приобретайте аппаратные кошельки в официальном магазине. На аппаратные кошельки, купленные на Ebay или у других поставщиков, не распространяются гарантии безопасности.*

Аппаратные кошельки часто поддерживают несколько криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important.** Your CoolWallet device comes as its own SEPARATE wallet. Вы не сможете импортировать свой старый адрес MEW или использовать старый кошелек с устройством. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Ну что ж, давайте начнем!

***

## __Начальная настройка__

**Step 1.** Unbox your CoolWallet! Pull out your phone, make sure Bluetooth is turned on, and download the CoolWallet Mobile App, CoolBitX, by scanning the QR code from the CoolWallet tutorial, included with your device.

**Step 2.** Turn on your device by pressing and holding the main button. You will be asked to pair your device. Open the mobile app to  connect the device.
* If you don't see it, try restarting the device, the app, or turning your bluetooth on and off again.

**Step 3.** Enter the pin you see on your CoolWallet device into the app, then press the button on your device. This will complete the pairing process. After you're done, you can click 'Create' to create your wallet.

**Шаг 4.** Это один из самых важных шагов. To recover your device in the future, you will need this recovery phrase. The app lets you select a length of phrase, this is your choice. Do not write this recovery phrase down on your computer, do not take a picture of the phrase. Make sure you write down your recovery phrase in multiple places. НЕ ПОТЕРЯЙТЕ ЕГО. If you lose this phrase, you’ve lost all your cryptocurrency. Мы предлагаем хранить его на нескольких листках бумаги. И еще раз, не сохраняйте эту фразу на своем компьютере. Используйте ручку и бумагу.
* There is paper provided in the CoolWallet set-up box to write down this phrase.
* CoolWallet gives their recovery phrase in numeric format instead of traditional words. For more information on why, [check out their answer](https://help.coolwallet.io/article/73-why-is-the-seed-generated-from-coolwallet-s-in-numeric-format). We recommend copying both the numbers and their word equivalents, just in case.
* After you're done, you'll need to add up all the numbers in your phrase to verify it was written correctly.

**Шаг 5.** Отлично, теперь ваше устройство готово! Теперь давайте разберемся, как использовать его с MyEtherWallet.

***

## __Using CoolWallet with MEW__

**Step 1.** In the CoolWallet mobile app, go into your settings and make sure you are allowing new pairings. Then head to our site, www.myetherwallet.com.

**Step 2.** On MEW, select 'Access My Wallet' > 'Hardware' > 'CoolWallet'. It should ask for a pairing password.
* Make sure the bluetooth on your computer is also turned on. You may need to manually pair it with your computer the first time you use it. This can be done with a pairing password generated from the CoolWallet device.

**Step 3.** On your CoolWallet mobile app, select 'Show Pairing Password'. This will generate a password to pair with MEW. Type this password in then close your app before continuing. Once you're done, select 'Unlock CoolWallet'.

**Шаг 4.** Здесь вы увидите много адресов. Feel free to choose your address.
* Правильного или неправильного выбора адреса не бывает, все зависит от ваших предпочтений. Но выбор первого — это, как правило, лучший вариант для удобства и запоминания.

**Step 5.**  You should now be taken to a screen that shows your CoolWallet public address. Отличная работа! You’re officially using your new CoolWallet hardware wallet!

***

## __А что насчет моего старого кошелька???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure CoolWallet address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the CoolWallet). From here, send your ETH and tokens to your new CoolWallet address, ready to be accessed in a more secure fashion.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии газа в ETH. Мы рекомендуем иметь 0.01 ETH, которых хватит для совершения 2—3 транзакций.

## __How Do I Restore My CoolWallet to a New Device?__

You will need to use your recovery phrase to recover your wallet.

## __Решение проблем__

Most issues with the CoolWallet can be fixed by performing a hard refresh (using CTRL+F5), confirming that all the firmware is updated to its latest release, and turning Bluetooth on and off again.

Как обычно, вы можете связаться с нами по адресу support@myetherwallet.com. Мы всегда рады помочь!