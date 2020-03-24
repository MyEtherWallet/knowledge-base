---
title: "Использование аппаратного кошелька KeepKey с MEW"
date: 2018-06-01 00:02:00
tags:
  - keepkey
  - аппаратный
  - кошелек
categories:
  - 
    - аппаратные-кошельки
primary_category: аппаратные-кошельки
primary_category_display_name: "Аппаратные кошельки"
---

# __Использование аппаратного кошелька KeepKey с MEW__
###### {% read_time title "Использование аппаратного кошелька KeepKey с MEW" %} мин. на прочтение
***

Аппаратные кошельки KeepKey являются ведущими решениями по соответствию стандартам безопасности и удобству использования. Купить их можно [здесь](https://keepkey.myshopify.com/collections/frontpage/products/keepkey-the-simple-bitcoin-hardware-wallet/?source=hasoffers).

*Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure.*

Аппаратные кошельки часто поддерживают несколько криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important.** Your KeepKey device comes as its own SEPARATE wallet. You should not import your old MEW address into this, or use your old wallet with it. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Ну что ж, давайте начнем!

***

## __Начальная настройка__

**Step 1.** Unbox your KeepKey! Plug it into your computer and download the [KeepKey Client browser extension](https://chrome.google.com/webstore/detail/keepkey-client/idgiipeogajjpkgheijapngmlbohdhjg?hl=en-US) application.
* Это не типичное расширение браузера, которое отображается в его интерфейсе, как MetaMask, например. Возможно, вы захотите закрепить его на панели задач.

**Step 2.** In the KeepKey Client interface, select 'Initialize Device'.
* Установите название вашего устройства.

**Step 3.** Set up a PIN code to access your KeepKey. Выберите такой, который сможете легко запомнить. Запишите его в нескольких местах. Не забудьте его!! Это позволит вам разблокировать свой кошелек каждый раз, когда захотите получить к нему доступ. PIN-код должен содержать от 4 до 8 символов.
* Вводите их в правильном порядке!
* Цифры PIN-кода будут отображаться на самом устройстве.

**Шаг 4.** Это один из самых важных шагов. Не сохраняйте эту фразу на своем компьютере и не делайте ее фотографий. Запишите свои 12 seed-слов в нескольких местах. НЕ ПОТЕРЯЙТЕ ИХ. Если вы потеряете эти слова, вы потеряете также и доступ ко всей своей криптовалюте. Мы предлагаем хранить его на нескольких листках бумаги. И еще раз, не сохраняйте эту фразу на своем компьютере. Используйте ручку и бумагу.
* Фраза также будет отображаться на самом устройстве.

**Шаг 5.** Отлично, теперь ваше устройство готово! Теперь давайте разберемся, как использовать его с MyEtherWallet.

***

## __Использование KeepKey с MEW__

**Step 1.** Attachand unlock your KeepKey device. Open your KeepKey Client and download the Ethereum account software to your device by choosing 'Add Account' in the bottom right corner.
* После того, как все будет готово, закройте KeepKey Client и отключите, а затем снова подключите свое устройство.

**Step 2.** Now head to MyEtherWallet.com. Select 'Access My Wallet' > 'Hardware' > 'KeepKey'.

**Step 3.** Enter your pin to connect to your wallet.

**Шаг 4.** Здесь вы увидите много адресов. Убедитесь, что вы работаете с сетью Ethereum, используете стандартный путь деривации Ethereum (derivation path), а затем выберите свой адрес.
* Правильного или неправильного выбора адреса не бывает, все зависит от ваших предпочтений. Но выбор первого — это, как правило, лучший вариант для удобства и запоминания.

**Шаг 5.** Теперь вас должны перенаправить в окно, очень похожее на окно доступа к вашему старому кошельку. Отличная работа! You’re officially using your new KeepKey hardware wallet!

***

## __А что насчет моего старого кошелька???__

If you are coming from an old wallet and want your ETH and tokens on your new, secure KeepKey address, you will need to send your funds to your new address through regular transactions. This can be achieved by accessing your old wallet through MEW wallet, MetaMask, Keystore file, or private key (however you usually did it before the KeepKey). From here, send your ETH and tokens to your new KeepKey address, ready to be accessed in a more secure fashion.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии газа в ETH. Мы рекомендуем иметь 0.01 ETH, которых хватит для совершения 2—3 транзакций.

## __Как мне восстановить доступ к KeepKey на новом устройстве?__

Вы можете использовать фразу для восстановления, чтобы получить доступ к своему кошельку на неограниченном количестве устройств, принимающих мнемоническую фразу из 12 слов.

## __Решение проблем__

Most issues with the KeepKey can be fixed by performing a hard refresh (using CTRL+F5), confirming that all the firmware is updated to its latest release, and trying a new connecting cable.

Как обычно, вы можете связаться с нами по адресу support@myetherwallet.com. Мы всегда рады помочь!