---
title: "Использование аппаратного кошелька KeepKey с MEW"
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
###### {% read_time title "Использование аппаратного кошелька KeepKey с MEW" %} мин. на прочтение
***

Аппаратные кошельки KeepKey являются ведущими решениями по соответствию стандартам безопасности и удобству использования. Купить их можно [здесь](https://keepkey.myshopify.com/collections/frontpage/products/keepkey-the-simple-bitcoin-hardware-wallet/?source=hasoffers). *Пожалуйста, покупайте аппаратные кошельки у производителя или официального дистрибьютора. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Hardware wallets often support multiple cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW).

**Этот пункт очень важен.** Ваше устройство KeepKey является ОТДЕЛЬНЫМ кошельком. You cannot import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!

***

## __The Initial Set-Up__

**Шаг 1.** Распакуйте ваш KeepKey! Подключите его к компьютеру и загрузите [расширение для браузера KeepKey Client](https://chrome.google.com/webstore/detail/keepkey-client/idgiipeogajjpkgheijapngmlbohdhjg?hl=en-US).
* Это не типичное расширение браузера, которое отображается в его интерфейсе, как MetaMask, например. Возможно, вы захотите закрепить его на панели задач.

**Шаг 2.** В интерфейсе KeepKey Client выберите "Инициализировать устройство".
* Установите название вашего устройства.

**Шаг 3.** Настройте PIN-код для доступа к вашему устройству KeepKey. Make it something that is very easy to remember for you. Write it down in a couple places. Remember it!! This is how you will unlock your wallet everytime you want to access it. PIN-код должен содержать от 4 до 8 символов.
* Вводите их в правильном порядке!
* Цифры PIN-кода будут отображаться на самом устройстве.

**Шаг 4.** Это один из самых важных шагов. Не сохраняйте эту фразу на своем компьютере и не делайте ее фотографий. Запишите свои 12 seed-слов в нескольких местах. НЕ ПОТЕРЯЙТЕ ИХ. Если вы потеряете эти слова, вы потеряете также и доступ ко всей своей криптовалюте. We suggest using multiple pieces of paper to write this down. И еще раз, не сохраняйте эту фразу на своем компьютере. Use pen and paper.
* Фраза также будет отображаться на самом устройстве.

**Шаг 5.** Отлично, теперь ваше устройство готово! Now let’s figure out how to use it with MyEtherWallet.

***

## __Использование KeepKey с MEW__

**Шаг 1.** Подключите и выполните вход в ваше устройство KeepKey. Откройте KeepKey Client и скачайте программное обеспечение Ethereum на свое устройство, выбрав 'Добавить учетную запись' в правом нижнем углу.
* После того, как все будет готово, закройте KeepKey Client и отключите, а затем снова подключите свое устройство.

**Шаг 2.** Теперь направляйтесь на сайт MyEtherWallet.com. Выберите "Доступ к кошельку" > "Аппаратный" > "KeepKey".

**Шаг 3.** Введите ваш PIN-код, чтобы подключиться к кошельку.

**Шаг 4.** Здесь вы увидите много адресов. Make sure you're on the Ethereum network, using the standard Ethereum derivation path, and then choose your address.
* There's no right or wrong choice for choosing an address, it's up to you. But choosing the first one is usually the best practice, for convenience and memory's sake.

**Шаг 5.** Теперь вас должны перенаправить в окно, очень похожее на окно доступа к вашему старому кошельку. Great job! Теперь вы официально используете свой новый аппаратный кошелек KeepKey!

***

## __What About My Old Wallet???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе KeepKey, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на KeepKey). Переведите свои ETH и токены на новый адрес KeepKey с более безопасным доступом.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.

## __Как мне восстановить доступ к KeepKey на новом устройстве?__

Вы можете использовать фразу для восстановления, чтобы получить доступ к своему кошельку на неограниченном количестве устройств, принимающих мнемоническую фразу из 12 слов.

## __Troubleshooting__

Большинство проблем с KeepKey можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), использования последней версии прошивки, а также нового кабеля для подключения.

As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!