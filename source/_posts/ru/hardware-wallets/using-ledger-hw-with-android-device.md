---
title: "Использование аппаратного кошелька Ledger на Android-устройстве"
date: 2018-06-01 00:06:00
tags:
  - вниз
categories:
  - 
    - аппаратные-кошельки
primary_category: аппаратные-кошельки
primary_category_display_name: "Аппаратные кошельки"
alias:
  - faq/what-happens-if-myetherwallet-goes-down.html
---


# __Использование аппаратного кошелька Ledger на Android-устройстве __
###### {% read_time title "Using a Ledger Hardware Wallet With an Android Device" %} минут на чтение
***

Если вы хотите использовать аппаратный кошелек Ledger на android-устройстве, вам нужно заранее подготовить несколько вещей.



## __Требования__

* Современный телефон или планшет на базе android, поддерживающий USB On-The-Go (USB-OTG).
    * Если вы не уверены насчет поддержки USB-OTG, проверьте ее наличие сами с помощью приложения, например, [USB-OTB Checker](https://play.google.com/store/apps/details?id=com.faitaujapon.otg).

* Адаптер USB-OTG (можно найти на [Amazon](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=usb+otg+adapter) за несколько долларов).



## __Настройка вашего устройства__

Перед подключением к Ledger вам сначала нужно установить [приложение Ledger](https://github.com/LedgerHQ/android-u2f-bridge/releases). Нажмите на эту ссылку на своем Android-устройстве и выберите файл `android-u2f-bridge-x.x.apk`. После скачивания откройте этот файл на устройстве и установите его. Когда закончите, нажмите "Готово".

Теперь вы можете подключить свой аппаратный кошелек Ledger и открыть приложение Ethereum. Убедитесь, что "Данные о контракте" включены. Теперь откройте браузер и перейдите на MyEtherWallet.com. В разделе "Доступ к кошельку" выберите опцию "Аппаратный" и нажмите "Кошелек Ledger", чтобы подключиться к вашему устройству.



<img src="/images/posts/hardware-wallets/ledger-hardware-wallet-using-with-android-01.png" width="50%" />



Вы должны увидеть такое всплывающее окно, запрашивающее доступ приложения Ledger U2F к USB-устройству. Выберите "ОК", и вы будете подключены к кошельку Ledger!