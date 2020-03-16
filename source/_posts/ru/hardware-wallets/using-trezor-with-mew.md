---
title: "Использование аппаратного кошелька Trezor с MEW"
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
  - migration/moving-from-private-key-to-trezor-hardware-wallet.html
---

# __Using a Trezor Hardware Wallet with MEW__
###### {% read_time title "Использование аппаратного кошелька Trezor с MEW" %} мин. на прочтение
***

Аппаратные кошельки Trezor являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют. Купить их можно [здесь](https://trezor.io/?offer_id=12&aff_id=2029). *Пожалуйста, покупайте аппаратные кошельки у производителя или официального дистрибьютора. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

This particular hardware wallet supports a wide range of cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW).

**Этот пункт очень важен.** Ваше устройство Trezor является ОТДЕЛЬНЫМ кошельком. You cannot import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!


## __The Initial Set-Up__

**Шаг 1.** Распакуйте ваш Trezor! Вы увидите несколько карт и инструкций для настройки. Внимательно следуйте этим инструкциям! Подключите Trezor к своему компьютеру и начните работу с ним. Перейдите на [trezor.io/start](https://trezor.io/start), чтобы начать процесс настройки.

<img src="/images/posts/hardware-wallet/trezor/Trezor1.jpg" width="35%" />

***

**Шаг 2.** Выберите "Создать новый" на этой странице и выполните все необходимые действия для настройки вашего нового устройства. Первое, что стоит сделать, — "Создать резервную копию за 3 минуты".

<img src="/images/posts/hardware-wallet/trezor/Trezor2.png" width="80%" />

***

**Шаг 3.** *Это один из самых важных шагов.* Не записывайте эту фразу на вашем компьютере, не делайте фото фразы. Запишите свои 24 seed-слова в нескольких местах. DO NOT LOSE THEM. If you lose these words, you’ve lost all your cryptocurrency. В комплекте с Ledger поставляются карточки для записи, но я предлагаю записать их еще где-нибудь. Again, do not write this phrase down on your computer. Use pen and paper. Когда вы закончите, то увидите экран приведенный ниже.

<img src="/images/posts/hardware-wallet/trezor/Trezor3.png" width="80%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor4.png" width="75%" />

***

**Шаг 4.** Теперь вам предложат выбрать имя для вашего устройства Trezor. Его вы будете видеть на своем устройстве при каждом подключении. Выберите что-нибудь знакомое и лично ваше!

<img src="/images/posts/hardware-wallet/trezor/Trezor5.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor6.png" width="75%" />

***

**Шаг 5.** Теперь необходимо выбрать PIN-код. Он станет единственным способом получения доступа к вашему устройству (помимо фразы восстановления, которую вы уже записали несколько раз), поэтому очень важно выбрать безопасный, но легко запоминающийся пин-код. Не используйте комбинации `1111` или `1234`, выберите что-то более случайное и безопасное. *Не допускайте эту ошибку! Если вы получите сообщение, что код может быть безопаснее, сделайте его длиннее!*

<img src="/images/posts/hardware-wallet/trezor/Trezor7.png" width="75%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor8.png" width="70%" />

***



**Шаг 6.** Все готово!

<img src="/images/posts/hardware-wallet/trezor/Trezor9.png" width="50%" />



## __Использование Trezor с MEW__

**Шаг 1.** Подключите ваше устройство Trezor и направляйтесь на сайт MEW.

<img src="/images/posts/hardware-wallet/trezor/Trezor10.jpg" width="35%" />

***

**Шаг 2.** Проверьте URL-адрес SSL сертификата MyEtherWallet Inc [US], чтобы убедиться, что вы на нашем настоящем и безопасном сайте. Are you? Great! Head to ‘Access My Wallet’ and choose the option that says ‘Hardware’. Выберите ‘Trezor’ и ‘Продолжить’. В это время Trezor все еще должен быть подключен.

<img src="/images/posts/hardware-wallet/trezor/MEW1.png" width="75%" />

***

**Шаг 3.** Появится всплывающее окно с запросом на предоставление разрешений MEW на чтение публичных ключей с вашего устройства Trezor. Нажмите ‘Allow once for this session’ и выберите опцию ‘Don’t ask me again’, чтобы пропускать этот шаг в будущем. Нажмите ‘Export’ на следующем экране и введите свой пин-код, после чего вас перенаправит обратно на MEW.

<img src="/images/posts/hardware-wallet/trezor/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor11.png" width="70%" />

***

**Шаг 4.** MEW вернет вас на страницу с разными сетями и путями деривации. Choose which network you’d like to connect to, and which path you’d like to use. For regular ETH usage, you should be on an ETH network, under the Ethereum derivation path. You can also access other networks, such as Ethereum Classic (ETC), by choosing the related network path.

<img src="/images/posts/hardware-wallet/trezor/Trezor16.png" width="40%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor12.png" width="40%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor17.png" width="40%" />

***

**Шаг 5.** Вы увидите список адресов. These are your new addresses to choose from for your main wallet! Choose one out of the five that you like. (Most people choose the first one, but you don’t have to.)

<img src="/images/posts/hardware-wallet/trezor/Trezor13.png" width="42.5%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor14.png" width="50%" />

***

**Шаг 6.** Теперь вас должны перенаправить в окно, очень похожее на окно доступа к вашему старому кошельку. Great job! Теперь вы официально используете свой новый аппаратный кошелек Trezor!

<img src="/images/posts/hardware-wallet/trezor/Trezor15.png" width="50%" />



## __What About My Old Wallet???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе Trezor, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на Trezor). Переведите свои ETH и токены на новый адрес Trezor с более безопасным доступом.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.



## __Как мне восстановить доступ к Trezor на новом устройстве?__

Простое и понятное официальное руководство по восстановлению Trezor на новом устройстве можно найти [здесь](https://wiki.trezor.io/User_manual:Recovery).



## __Troubleshooting__

Большинство проблем с Trezor можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), использования последней версии прошивки, а также нового кабеля для подключения.

As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!