---
title: "Использование аппаратного кошелька Ledger с устройствами на базе Android"
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


# **Использование аппаратного кошелька Ledger с устройствами на базе Android**

###### {% read_time title "Использование аппаратного кошелька Ledger с устройствами на базе Android" %} мин. на прочтение

* * *

Если вы хотите использовать аппаратный кошелек Ledger с устройством на базе Android, вам нужно подготовиться.

## **Требования**

* Современный телефон или планшет на базе Android с поддержкой USB On-The-Go (USB-OTG).
    
    * Если вы не уверены, поддерживает ли ваше устройство USB-OTG, вы можете проверить это самостоятельно с помощью приложения, например, [USB-OTB Checker](https://play.google.com/store/apps/details?id=com.faitaujapon.otg).

* Адаптер USB-OTG (можно найти на [Amazon](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=usb+otg+adapter) за пару долларов).

## **Настройка устройства**

Перед подключением Ledger необходимо установить [приложение Ledger](https://github.com/LedgerHQ/android-u2f-bridge/releases). Перейдите по этому URL-адресу с устройства на базе Android и выберите файл `android-u2f-bridge-x.x.apk`. После окончания загрузки откройте этот файл на своем устройстве и установите его. Нажмите 'Готово', когда установка завершится

Теперь вы можете подключить свой аппаратный кошелек Ledger и открыть приложение Ethereum. Убедитесь, что функция ‘Contract Data’ включена. Теперь откройте ваш браузер и перейдите на MyEtherWallet.com. В разделе 'Доступ к моему кошельку' выберите 'Аппаратные кошельки' и нажмите 'Ledger Wallet', чтобы подключить устройство.

<img src="/images/posts/hardware-wallets/ledger-hardware-wallet-using-with-android-01.png" width="50%" />

Вы должны увидеть это всплывающее окно с просьбой предоставить разрешение приложению Ledger U2F на доступ к USB-устройству. Нажмите 'Разрешить', и Ledger будет подключен!