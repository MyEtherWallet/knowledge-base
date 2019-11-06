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

Аппаратные кошельки Trezor являются одними из самых безопасных и простых в использовании аппаратных кошельков для криптовалют среди доступных. Купить их можно [здесь](https://trezor.io/?offer_id=12&aff_id=2029). *Please purchase hardware wallets from the original source. На аппаратные кошельки, купленные на Ebay или у других поставщиков, не распространяются гарантии безопасности.*

Данный аппаратный кошелек поддерживает широкий спектр криптовалют, но это руководство было специально разработано для описания работы с токенам Ethereum и ERC-20 с использованием MyEtherWallet (MEW).

**This part is very important:** Your Trezor device comes as its own SEPARATE wallet. Вы не сможете импортировать свой старый адрес MEW или использовать старый кошелек с устройством. Кошелек обладает собственным закрытым ключом, зашифрованным в самом устройстве. Вам нужно будет выбрать новый адрес ethereum для использования с устройством и пользоваться им как новым основным кошельком.

Без лишних слов, давайте начнем!


## __Начальная настройка__

**Step 1.** Unbox your Trezor! Вы увидите несколько карт и инструкций для настройки. Внимательно следуйте этим инструкциям! Подключите Trezor к своему компьютеру и начните работу с ним. Перейдите на [trezor.io/start](https://trezor.io/start), чтобы начать процесс настройки.

<img src="/images/posts/hardware-wallet/trezor/Trezor1.jpg" width="35%" />

***

**Step 2.** Choose ‘Create new’ on this page, and follow the steps to set up your new device.The first thing you will want to do is ‘Create a backup in 3 minutes.’

<img src="/images/posts/hardware-wallet/trezor/Trezor2.png" width="80%" />

***

**Step 3.** *This is one of the most important steps.* Do not write this phrase down on your computer, do not take a picture of the phrase. Запишите свои 24 seed-слова в нескольких местах. НЕ ПОТЕРЯЙТЕ ИХ. Если вы потеряете эти слова, вы потеряете также и доступ ко всей своей криптовалюте. В комплекте с Ledger поставляются карточки для записи, но я предлагаю записать их еще где-нибудь. И еще раз, не сохраняйте эту фразу на своем компьютере. Используйте ручку и бумагу. Когда вы закончите, то увидите экран приведенный ниже.

<img src="/images/posts/hardware-wallet/trezor/Trezor3.png" width="80%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor4.png" width="75%" />

***

**Step 4.** Now you will be prompted to choose a name for your Trezor. Его вы будете видеть на своем устройстве при каждом подключении. Выберите что-нибудь знакомое и персонально ваше!

<img src="/images/posts/hardware-wallet/trezor/Trezor5.png" width="70%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor6.png" width="75%" />

***

**Step 5.** You will now choose your pin. Он станет единственным способом получения доступа к вашему устройству (помимо фразы восстановления, которую вы уже записали несколько раз), поэтому очень важно выбрать безопасный, но легко запоминающийся пин-код. Не используйте комбинации `1111` или `1234`, выберите что-то более случайное и безопасное. *Don’t make this mistake! Если вы получите сообщение, что код может быть безопаснее, сделайте его длиннее!*

<img src="/images/posts/hardware-wallet/trezor/Trezor7.png" width="75%" />

<img src="/images/posts/hardware-wallet/trezor/Trezor8.png" width="70%" />

***



**Step 6.** You’re all done!

<img src="/images/posts/hardware-wallet/trezor/Trezor9.png" width="50%" />



## __Использование Trezor с MEW__

**Step 1.** Attach your Trezor device and head to MEW.

<img src="/images/posts/hardware-wallet/trezor/Trezor10.jpg" width="35%" />

***

**Step 2.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Вы уверены? Отлично! Перейдите к пункту ‘Доступ к моему кошельку’ и выберите пункт ‘Аппаратные кошельки’. Выберите ‘Trezor’ и ‘Подключить устройство’, когда Trezor будет подключен.

<img src="/images/posts/hardware-wallet/trezor/MEW1.png" width="75%" />

***

**Step 3.** A screen will pop-up asking for you to allow MEW permissions to read the public keys from your Trezor device. Нажмите ‘Allow once for this session’ и выберите опцию ‘Don’t ask me again’, чтобы пропускать этот шаг в будущем. Нажмите ‘Export’ на следующем экране и введите свой пин-код, после чего вас перенаправит обратно на MEW.

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

**Step 6.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Отличная работа! Теперь вы официально используете свой новый аппаратный кошелек Trezor!

<img src="/images/posts/hardware-wallet/trezor/Trezor15.png" width="50%" />



## __А как насчет моего старого кошелька???__

Если вы использовали старый кошелек и хотите, чтобы ваши ETH и токены были доступны на новом безопасном адресе Trezor, вам нужно будет перевести средства на новый адрес посредством обычной транзакции. Это можно сделать, войдя в ваш старый кошелек с помощью MEWconnect, MetaMask, хранилища ключей или закрытого ключа (как вы обычно делали это до перехода на Trezor). Переведите свои ETH и токены на новый адрес Trezor с более безопасным доступом.

Обращаем ваше внимание, что для перевода токенов со старого кошелька потребуется оплата комиссии в ETH. Мы рекомендуем оставить 0.01 ETH, которых хватит для совершения 2—3 транзакций.



## __Как мне восстановить доступ к Trezor на новом устройстве?__

Простое и понятное официальное руководство по восстановлению Trezor на новом устройстве можно найти [здесь](https://wiki.trezor.io/User_manual:Recovery).



## __Решение проблем__

Большинство проблем с Trezor можно решить, выполнив принудительное обновление страницы (с помощью сочетания клавиш CTRL+F5), использования последней версии прошивки, а также нового кабеля для подключения.

Если предложенные варианты устранения неполадок не помогли исправить проблему, вы можете обратиться к обширной базе знаний MEW, которая находится [здесь](https://kb.myetherwallet.com). Существует большая вероятность того, что проблема уже описана в разделе 'Распространенные проблемы'. Если же ее там нет, напишите нам на support@myetherwallet.com. Мы всегда рады помочь!