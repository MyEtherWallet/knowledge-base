---
title: "Использование аппаратного кошелька Trezor с MEW"
date: 2018-06-01 00:01:00
tags:
  - trezor
  - аппаратный
  - кошелек
categories:
  - 
    - аппаратные-кошельки
primary_category: аппаратные-кошельки
primary_category_display_name: "Аппаратные кошельки"
alias:
  - migration/moving-from-private-key-to-trezor-hardware-wallet.html
---

# __Использование аппаратного кошелька Trezor с MEW__
###### {% read_time title "Использование аппаратного кошелька Trezor с MEW" %} мин. на прочтение
***

Аппаратные кошельки Trezor являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют. Купить их можно [здесь](https://trezor.io/?offer_id=12&aff_id=2029).

*Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Данный аппаратный кошелек поддерживает широкий спектр криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important:** Your Trezor device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Ну что ж, давайте начнем!


## __Начальная настройка__

**Step 1.** Unbox your Trezor! You will see some cards and instructions for set-up. Follow these instructions carefully! Plug in the Trezor to your computer and get started. Visit [trezor.io/start](https://trezor.io/start) to begin the process.

<img src="/images/posts/hardware-wallet/trezor/Trezor1.jpg" width="35%" />

***

**Step 2.** Choose ‘Create new’ on this page, and follow the steps to set up your new device.The first thing you will want to do is ‘Create a backup in 3 minutes.’

<img src="/images/posts/hardware-wallet/trezor/Trezor2.png" width="80%" />

***

**Step 3.** *This is one of the most important steps.* Do not write this phrase down on your computer, do not take a picture of the phrase. Make sure you write down your 24 seed words in multiple places. НЕ ПОТЕРЯЙТЕ ИХ. Если вы потеряете эти слова, вы потеряете также и доступ ко всей своей криптовалюте. Ledger provides cards for you to write them down for remembering, but I suggest writing them down in one extra place as well. И еще раз, не сохраняйте эту фразу на своем компьютере. Используйте ручку и бумагу. When you’re done, you’ll see the screen below.

<img src="/images/posts/hardware-wallet/trezor/Trezor3.png" width="80%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor4.png" width="75%" />

***

**Step 4.** Now you will be prompted to choose a name for your Trezor. This is the name you will see on your device whenever you plug it in. Choose something familiar and personal!

<img src="/images/posts/hardware-wallet/trezor/Trezor5.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor6.png" width="75%" />

***

**Step 5.** You will now choose your pin. This pin will be the only way to access your device (besides the recovery phrase you wrote down, multiple times) so it’s very important to choose a secure, but easy to remember pin. Don’t just use `1111` or `1234`, use something a bit more random and secure. *Don’t make this mistake! If it says it could be safer, make it longer!*

<img src="/images/posts/hardware-wallet/trezor/Trezor7.png" width="75%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor8.png" width="70%" />

***



**Step 6.** You’re all done!

<img src="/images/posts/hardware-wallet/trezor/Trezor9.png" width="50%" />



## __Использование Trezor с MEW__

**Step 1.** Attach your Trezor device and head to MEW.

<img src="/images/posts/hardware-wallet/trezor/Trezor10.jpg" width="35%" />

***

**Step 2.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Вы уверены? Отлично! Перейдите на ‘Доступ к кошельку’ и выберите пункт ‘Аппаратные кошельки’. Click the ‘Trezor’ option, and choose ‘Connect With Your Device’ with your Trezor device still attached.

<img src="/images/posts/hardware-wallet/trezor/MEW1.png" width="75%" />

***

**Step 3.** A screen will pop-up asking for you to allow MEW permissions to read the public keys from your Trezor device. Click ‘Allow once for this session’, and feel free to select ‘Don’t ask me again’, so this step is automatic in the future. Select ‘Export’ on the next screen, enter your pin, and you’ll be redirected back to MEW.

<img src="/images/posts/hardware-wallet/trezor/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor11.png" width="70%" />

***

**Step 4.** MEW will bring you back to a page showing different networks and derivation paths. Выберите сеть, к которой хотите подключиться, и путь деривации. Для использования обычного ETH вы должны быть в сети ETH с путем деривации Ethereum. Вы также можете получить доступ к другим сетям, таким как Ethereum Classic (ETC), выбрав соответствующую опцию.

<img src="/images/posts/hardware-wallet/trezor/Trezor16.png" width="40%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor12.png" width="40%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor17.png" width="40%" />

***

**Step 5.** You will see a list of addresses. Это новые адреса, доступные для выбора в качестве вашего основного кошелька! Выберите один из пяти, который вам нравится. (Большинство людей выбирают первый, но это не обязательно.)

<img src="/images/posts/hardware-wallet/trezor/Trezor13.png" width="42.5%" /> <img src="/images/posts/hardware-wallet/trezor/Trezor14.png" width="50%" />

***

**Step 6.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Отличная работа! You’re officially using your new Trezor hardware wallet!

<img src="/images/posts/hardware-wallet/trezor/Trezor15.png" width="50%" />



## __А что насчет моего старого кошелька???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure Trezor address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the Trezor). From here, send your ETH and tokens to your new Trezor address, ready to be accessed in a more secure fashion.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии газа в ETH. Мы рекомендуем иметь 0.01 ETH, которых хватит для совершения 2—3 транзакций.



## __Как мне восстановить доступ к Trezor на новом устройстве?__

Trezor made a clear and easy to follow guide on how to restore your Trezor device [here](https://wiki.trezor.io/User_manual:Recovery).



## __Решение проблем__

Most issues with the Trezor can be fixed by performing a hard refresh (using CTRL+F5), making sure all the firmware is updated to its latest release, and trying a new connecting cable.

Как обычно, вы можете связаться с нами по адресу support@myetherwallet.com. Мы всегда рады помочь!