---
title: "Использование аппаратного кошелька Secalot с MEW"
date: 2018-06-01 00:02:00
tags:
  - Secalot
  - hardware
  - wallet
categories:
  - 
    - hardware-wallets
primary_category: hardware-wallets
primary_category_display_name: "Hardware Wallets"
---

# __Using a Secalot Hardware Wallet with MEW__
###### {% read_time title " Использование аппаратного кошелька Secalot с MEW" %} мин. на прочтение
***

Аппаратные кошельки Secalot являются ведущими решениями по соответствию стандартам безопасности и удобству использования. Купить их можно [здесь](https://www.secalot.com/product/secalot-dongle/). *Пожалуйста, покупайте аппаратные кошельки у производителя или официального дистрибьютора. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Hardware wallets often support multiple cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW).

**Этот пункт очень важен.** Ваше устройство Secalot является ОТДЕЛЬНЫМ кошельком. You cannot import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!

***

## __The Initial Set-Up__

**Шаг 1.** Распакуйте ваш Secalot! Подключите его к компьютеру и загрузите [приложение Secalot Control Panel](https://www.secalot.com/downloads/).
* You may want to pin it to your taskbar.

**Шаг 2.** Выберите "Создать кошелек" в разделе Ethereum в интерфейсе панели управления Secalot.

**Шаг 3.** Настройте PIN-код для доступа к вашему устройству Secalot. Make it something that is very easy to remember for you. Write it down in a couple places. Remember it!! This is how you will unlock your wallet everytime you want to access it. The PIN code must be between 4 and 8 characters.

**Шаг 4.** Это один из самых важных шагов. Do not write this phrase down on your computer, do not take a picture of the phrase. Make sure you write down your 12 seed words in multiple places. DO NOT LOSE THEM. If you lose these words, you’ve lost all your cryptocurrency. We suggest using multiple pieces of paper to write this down. Again, do not write this phrase down on your computer. Use pen and paper.
* Keep them in the correct order, too!

**Шаг 5.** Отлично, теперь ваше устройство готово! Now let’s figure out how to use it with MyEtherWallet.

***

## __Использование Secalot с MEW__

**Шаг 1.** Подключите ваше устройство Secalot и направляйтесь на MyEtherWallet.com.

**Шаг 2.** На сайте MEW выберите "Доступ к кошельку" > "Аппаратный" > "Secalot".

**Шаг 3.** Вас попросят ввести пароль. Введите pin-код для подключения к вашему кошельку.

**Шаг 4.** Здесь вы увидите много адресов. Make sure you're on the Ethereum network, using the standard Ethereum derivation path, and then choose your address.
* There's no right or wrong choice for choosing an address, it's up to you. But choosing the first one is usually the best practice, for convenience and memory's sake.

**Шаг 5.** Теперь вас должны перенаправить в окно, очень похожее на окно доступа к вашему старому кошельку. Great job! Теперь вы официально используете свой новый аппаратный кошелек Secalot!

***

## __What About My Old Wallet???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе Secalot, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на Secalot). Переведите свои ETH и токены на новый адрес Secalot с более безопасным доступом.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.

## __Как мне восстановить доступ к Secalot на новом устройстве?__

You can use your recovery phrase to restore your wallet to as many devices as you'd like, as long as they accept the 12-word mnemonic phrase for recovery.

## __Troubleshooting__

Большинство проблем с Secalot можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), использования последней версии прошивки, а также нового кабеля для подключения.

As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!