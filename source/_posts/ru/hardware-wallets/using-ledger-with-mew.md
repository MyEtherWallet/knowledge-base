---
title: "Использование аппаратного кошелька Ledger с MEW"
date: 2018-06-01 00:02:00
tags:
  - ledger
  - аппаратный
  - кошелек
categories:
  - 
    - аппаратные-кошельки
primary_category: аппаратные-кошельки
primary_category_display_name: "Аппаратные кошельки"
alias:
  - migration/moving-from-private-key-to-ledger-hardware-wallet.html
---

# __Использование аппаратного кошелька Ledger с MEW__
###### {% read_time title " Использование аппаратного кошелька Ledger с MEW" %} мин. на прочтение
***

Аппаратные кошельки Ledger являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют. Купить их можно [здесь](https://www.ledger.com/?r=fa4b).

*Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Данный аппаратный кошелек поддерживает широкий спектр криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important.** Your Ledger device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Ну что ж, давайте начнем!


## __Использование Ledger с MEW__

**Step 1.** Attach and unlock your Ledger device. You should see a few different sections to choose from, choose the Ethereum section as shown above. Click both buttons to open it.

<img src="/images/posts/hardware-wallet/ledger/ethereum-app.jpg" width="50%" />

***

**Step 2.** Click into this Setting section with both buttons.

<img src="/images/posts/hardware-wallet/ledger/ethereum-settings.jpg" width="50%" />

***

**Step 3.** You will see “Contract Data” in this section. Make sure this option is turned to “Yes”.

***

**Step 4.** Good job, it’s all ready now! Head back to the “Ethereum” section and leave your Ledger alone for a moment. Let’s head to MEW!

***

**Step 5.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Вы уверены? Отлично! Перейдите на ‘Доступ к кошельку’ и выберите пункт ‘Аппаратные кошельки’. Click the ‘Ledger Wallet’ option, and choose ‘Connect With Your Device’ with your Ledger device still attached, unlocked, and ready.

<img src="/images/posts/hardware-wallet/ledger/MEW1.png" width="75%" />

***

**Step 6.** A screen showing different networks and derivation paths should appear. Выберите сеть, к которой хотите подключиться, и путь деривации. Для использования обычного ETH вы должны быть в сети ETH с путем деривации Ethereum. Вы также можете получить доступ к другим сетям, таким как Ethereum Classic (ETC), выбрав соответствующую опцию.

<img src="/images/posts/hardware-wallet/ledger/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/ledger/Ledger1.png" width="70%" />

***

**Step 7.** You will see a list of addresses. Это новые адреса, доступные для выбора в качестве вашего основного кошелька! Выберите один из пяти, который вам нравится. (Большинство людей выбирают первый, но это не обязательно.)

<img src="/images/posts/hardware-wallet/ledger/Ledger2.png" width="41.3%" /> <img src="/images/posts/hardware-wallet/ledger/Ledger3.png" width="50%" />

***

**Step 8.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Отличная работа! You’re officially using your new Ledger hardware wallet!

<img src="/images/posts/hardware-wallet/ledger/LEdger4.png" width="50%" />





## __А что насчет моего старого кошелька???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure Ledger address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the Ledger). From here, send your ETH and tokens to your new Ledger address, ready to be accessed in a more secure fashion.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии газа в ETH. Мы рекомендуем иметь 0.01 ETH, которых хватит для совершения 2—3 транзакций.



## __Как мне восстановить доступ к Ledger на новом устройстве?__

Ledger made a clear and easy to follow guide on how to restore your Ledger device [here](https://support.ledger.com/hc/en-us/articles/360005434914-Restore-from-recovery-phrase).



## __Решение проблем__

Most issues with the Ledger can be fixed by performing a hard refresh (using CTRL+F5), making sure Contract Data is turned to ‘Yes’, confirming that all the firmware is updated to its latest release, and trying a new connecting cable.

Как обычно, вы можете связаться с нами по адресу support@myetherwallet.com. Мы всегда рады помочь!