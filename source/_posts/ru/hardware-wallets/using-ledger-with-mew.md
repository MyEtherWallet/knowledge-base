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

Аппаратные кошельки Ledger являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют. Купить их можно [здесь](https://www.ledger.com/?r=fa4b). *Please purchase hardware wallets from the original source. На аппаратные кошельки, купленные на Ebay или у других поставщиков, не распространяются гарантии безопасности.*

Данный аппаратный кошелек поддерживает широкий спектр криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important.** Your Ledger device comes as its own SEPARATE wallet. Вы не сможете импортировать свой старый адрес MEW или использовать старый кошелек с устройством. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Без лишних слов, давайте начнем!


## __Использование Ledger с MEW__

**Step 1.** Attach and unlock your Ledger device. Вы должны увидеть несколько пунктов, выберите раздел Ethereum, как показано выше. Нажмите обе кнопки, чтобы открыть его.

<img src="/images/posts/hardware-wallet/ledger/ethereum-app.jpg" width="50%" />

***

**Step 2.** Click into this Setting section with both buttons.

<img src="/images/posts/hardware-wallet/ledger/ethereum-settings.jpg" width="50%" />

***

**Step 3.** You will see “Contract Data” in this section. Убедитесь, что эта опция установлена на “Yes”.

***

**Step 4.** Good job, it’s all ready now! Вернитесь в раздел “Ethereum” и пока отложите Ledger. Давайте перейдем на MEW!

***

**Step 5.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Вы уверены? Отлично! Перейдите к пункту ‘Доступ к моему кошельку’ и выберите пункт ‘Аппаратные кошельки’. Нажмите на ‘Ledger Wallet’ и выберите ‘Подключить устройство’, когда Ledger будет подключен, разблокирован и готов к работе.

<img src="/images/posts/hardware-wallet/ledger/MEW1.png" width="75%" />

***

**Step 6.** A screen showing different networks and derivation paths should appear. Выберите сеть, к которой хотите подключиться, и путь деривации. Для использования обычного ETH вы должны быть в сети ETH с путем деривации Ethereum. Вы также можете получить доступ к другим сетям, таким как Ethereum Classic (ETC), выбрав соответствующую опцию.

<img src="/images/posts/hardware-wallet/ledger/MEW2.png" width="70%" />

<img src="/images/posts/hardware-wallet/ledger/Ledger1.png" width="70%" />

***

**Step 7.** You will see a list of addresses. Это новые адреса, доступные для выбора в качестве вашего основного кошелька! Выберите один из пяти, который вам нравится. (Большинство людей выбирают первый, но это не обязательно.)

<img src="/images/posts/hardware-wallet/ledger/Ledger2.png" width="41.3%" /> <img src="/images/posts/hardware-wallet/ledger/Ledger3.png" width="50%" />

***

**Step 8.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Отличная работа! Теперь вы официально используете свой новый аппаратный кошелек Ledger!

<img src="/images/posts/hardware-wallet/ledger/LEdger4.png" width="50%" />





## __А как насчет моего старого кошелька???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе Ledger, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на Ledger). Переведите свои ETH и токены на новый адрес Ledger с более безопасным доступом.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии в ETH. Мы рекомендуем оставить 0.01 ETH, которых хватит для совершения 2—3 транзакций.



## __Как мне восстановить доступ к Ledger на новом устройстве?__

Простое и понятное официальное руководство по восстановлению Ledger на новом устройстве можно найти [здесь](https://support.ledger.com/hc/en-us/articles/360005434914-Restore-from-recovery-phrase).



## __Решение проблем__

Большинство проблем с Ledger можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), установки опции Contract Data на ‘Yes’, использования последней версии прошивки, а также нового кабеля для подключения.

Если предложенные варианты устранения неполадок не помогли исправить проблему, вы можете обратиться к обширной базе знаний MEW, которая находится [здесь](https://kb.myetherwallet.com). Существует большая вероятность того, что проблема уже описана в разделе 'Распространенные проблемы'. Если же ее там нет, напишите нам на support@myetherwallet.com. Мы всегда рады помочь!