---
title: "Использование аппаратного кошелька Ledger с MEW"
date: 2018-06-01 00:02:00
tags:
  - ledger
  - hardware
  - wallet
categories:
  - 
    - hardware-wallets
primary_category: hardware-wallets
primary_category_display_name: "Hardware Wallets"
alias:
  - migration/moving-from-private-key-to-ledger-hardware-wallet.html
---

# __Using a Ledger Hardware Wallet with MEW__
###### {% read_time title " Использование аппаратного кошелька Ledger с MEW" %} мин. на прочтение
***

Аппаратные кошельки Ledger являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют. Купить их можно [здесь](https://www.ledger.com/?r=fa4b). *Пожалуйста, покупайте аппаратные кошельки у производителя или официального дистрибьютора. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Данный аппаратный кошелек поддерживает широкий спектр криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**Этот пункт очень важен.** Ваше устройство Ledger является ОТДЕЛЬНЫМ кошельком. You cannot import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!


## __Использование Ledger с MEW__

**Шаг 1.** Подключите и выполните вход в ваше устройство Ledger. Вы должны увидеть несколько пунктов, выберите раздел Ethereum, как показано выше. Нажмите обе кнопки, чтобы открыть его.

<img src="/images/posts/hardware-wallet/ledger/ethereum-app.jpg" width="50%" />

***

**Шаг 2.** Нажмите на обе кнопки для перехода в этот раздел настроек.

<img src="/images/posts/hardware-wallet/ledger/ethereum-settings.jpg" width="50%" />

***

**Шаг 3.** В этом разделе вы увидите "Данные о контракте". Убедитесь, что эта опция установлена на “Yes”.

***

**Шаг 4.** Отлично, теперь все готово! Вернитесь в раздел “Ethereum” и пока отложите Ledger. Давайте перейдем на MEW!

***

**Шаг 5.** Проверьте URL-адрес SSL сертификата MyEtherWallet Inc [US], чтобы убедиться, что вы на нашем настоящем безопасном сайте. Вы уверены? Отлично! Перейдите на ‘Доступ к кошельку’ и выберите пункт ‘Аппаратные кошельки’. Нажмите на ‘Ledger Wallet’ и выберите ‘Продолжить’. В это время Ledger должен быть подключен, разблокирован и готов к работе.

<img src="/images/posts/hardware-wallet/ledger/MEW1.png" width="75%" />

***

**Шаг 6.** Должно появиться окно с разными сетями и путями деривации. Выберите сеть, к которой хотите подключиться, и путь деривации. Для использования обычного ETH вы должны быть в сети ETH с путем деривации Ethereum. Вы также можете получить доступ к другим сетям, таким как Ethereum Classic (ETC), выбрав соответствующую опцию.

<img src="/images/posts/hardware-wallet/ledger/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/ledger/Ledger1.png" width="70%" />

***

**Шаг 7.** Вы увидите список адресов. Это новые адреса, доступные для выбора в качестве вашего основного кошелька! Выберите один из пяти, который вам нравится. (Большинство людей выбирают первый, но это не обязательно.)

<img src="/images/posts/hardware-wallet/ledger/Ledger2.png" width="41.3%" /> <img src="/images/posts/hardware-wallet/ledger/Ledger3.png" width="50%" />

***

**Шаг 8.** Теперь вас должны перенаправить в окно, очень похожее на окно доступа к вашему старому кошельку. Great job! Теперь вы официально используете свой новый аппаратный кошелек Ledger!

<img src="/images/posts/hardware-wallet/ledger/LEdger4.png" width="50%" />





## __What About My Old Wallet???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе Ledger, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на Ledger). Переведите свои ETH и токены на новый адрес Ledger с более безопасным доступом.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.



## __Как мне восстановить доступ к Ledger на новом устройстве?__

Простое и понятное официальное руководство по восстановлению Ledger на новом устройстве можно найти [здесь](https://support.ledger.com/hc/en-us/articles/360005434914-Restore-from-recovery-phrase).



## __Troubleshooting__

Большинство проблем с Ledger можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), установки опции "Данные о контракте" на ‘Yes’, использования последней версии прошивки, а также нового кабеля для подключения.

As always, feel free to contact us at support@myetherwallet.com. We are always happy to help!