---
title: "Как получить доступ к кошельку"
date: 2018-06-01 00:06:00
tags:
  - доступ
  - кошелек
categories:
  - 
    - get-started
primary_category: get-started
primary_category_display_name: "С чего начать"
alias:
  - getting-started/accessing-your-new-eth-wallet.html
---

# __Как получить доступ к кошельку__
##### <i>Эта статья предназначена для тех, у кого уже есть ETH-кошелек. Если вы хотите создать новый кошелек, ознакомьтесь, пожалуйста, с этой [статьей].</i>
###### {% read_time title "How to Access Your Wallet" %} минут на чтение
***
MyEtherWallet (MEW) предлагает множество способов доступа к Ethereum-кошельку с помощью опции "Доступ к моему кошельку" на главной странице.

Способы доступа, от наиболее к наименее рекомендованным:

* Аппаратные кошельки ([Ledger Nano S](https://www.ledger.com/?r=fa4b), [Trezor](https://trezor.io/?offer_id=12&aff_id=2029), [Digital Bitbox](https://shiftcrypto.ch/?ref=mew), [Finney](http://shop.sirinlabs.com/?rfsn=2397639.54fdf&utm_source=refersion&utm_medium=affiliate&utm_campaign=2397639.54fdf) и т. д.)
* MEWconnect
* Расширения для браузера с поддержкой Web3 (MEW CX, MetaMask и т.д.)
* Файл-хранилище ключа / JSON-файл + пароль
* Мнемоническая фраза + доп. слово
* Закрытый ключ

## __Аппаратные кошельки__

Аппаратные кошельки используют самые сильные меры безопасности для шифрования закрытого ключа на самом устройстве, защищая вас от фишинга и хакеров. Пользователи большинства аппаратных кошельков получают не сам закрытый ключ, а мнемоническую фразу из 24 слов, нужную для восстановления. Также на устройствах обычно есть пин-код или пароль для разблокировки устройства, а вся информация о каждом кошельке хранится на самом физическом устройстве.

Чтобы узнать больше о доступе к MEW с помощью аппаратных кошельков, смотрите нашу категорию [Миграция на/с MEW](/@@@@@@/migration/moving-from-exchange-to-mew/).



## __MEWconnect__
Это наше бесплатное сопутствующее приложение MEW для смартфонов на базе iOS и Android. Мы называем его аппаратным кошельком без аппаратной части. Когда вы создаете кошелек в MEWconnect, ваш закрытый ключ хранится в зашифрованном виде в защищенном локальном хранилище на вашем телефоне. Для резервного копирования вам дается мнемоническая фраза (как на аппаратных кошельках выше). У кошелька также есть пароль, который используется для его разблокировки на вашем устройстве.

Чтобы узнать больше о доступе к MEW с помощью MEWconnect, смотрите [Руководство пользователя MEWconnect](/@@@@@@/mewconnect/mewconnect-user-guide/).




## __Расширение для браузера (Web3)__
#### __[Что такое Web3?](https://www.mewtopia.com/the-essential-wallet-guide-part-4/)__



#### __MEW CX__
MEW CX — это официальный кошелек-расширение для Chrome от MyEtherWallet с поддержкой Web3. Расширение предлагает полную функциональность веб-версии MEW с удобством расширения на панели инструментов. Кроме того, оно предоставляет возможность взаимодействия с сетевыми Dapp-приложениями, как, например, CryptoKitties.

MEW CX вступает в конфликт с любыми другими кошельками Web3, такими как MetaMask или Brave Browser. Убедитесь, что все остальные Web3 кошельки отключены перед использованием MEW CX.




#### __Подключить MEW к MEW CX__

**Шаг 1.** Установите кошелек MEW CX с помощью нашего расширения для Chrome.

**Шаг 2.** Откройте расширение и выберите "Добавить кошелек", чтобы создать новый кошелек или добавить существующий.

**Шаг 2.** После сохранения кошелька направляйтесь на сайт MEW. На главной странице выберите "Доступ к кошельку".

**Шаг 3.** Выберите опцию Web3 для подключения.

**Шаг 4.** Прочитайте и примите "Условия использования", а затем выберите "Доступ к кошельку".

**Шаг 5.** Подтвердите кошелек которым вы хотите подключиться во всплывающем окне MEW CX или выберите "Временный аккаунт" для временного кошелька.

**Шаг 6.** Готово!




#### __MetaMask__
Это расширение для Chrome позволяет создавать Ethereum-кошельки, которые хранят закрытые ключи в зашифрованном виде в самом расширении. Оно также генерирует мнемоническую фразу из 12 слов для восстановления. MetaMask позволяет пользователям давать разным кошелькам имена, просматривать баланс средств в расширении, и дает возможность при желании импортировать ранее созданный кошелек путем закрытого ключа.



#### __Подключить MEW к MetaMask:__
#### __Предполагается, что у вас уже есть кошелек MetaMask.__

**Шаг 1.** Войдите в ваш кошелек MetaMask с помощью их расширения для Chrome.

**Шаг 2.** На главной странице MEW выберите "Доступ к кошельку".

**Шаг 3.** Выберите опцию Web3 для подключения.

**Шаг 4.** Прочитайте и примите "Условия использования", а затем выберите "Доступ к кошельку".

**Шаг 5.** Подтвердите подключение во всплывающем окне MetaMask.

**Шаг 6.** Готово!



## __Файл-хранилище ключа / JSON-файл + пароль__
Файл Keystore/JSON — это файл, который содержит зашифрованную версию закрытого ключа. Этот ключ зашифрован с помощью выбранного пользователем пароля. Таким образом, невозможно изменить пароль для этих файлов. Единственный способ изменить пароль — это создать абсолютно новый файл Keystore, что можно сделать с помощью закрытого ключа в нашем расширении MEW для Chrome (MEW CX). Файлы Keystore не должны открываться. Их следует использовать только во время выбора доступа с помощью файла хранилища ключа/JSON на нашем сайте и при запросе файла JSON. Прочитать подробнее о функциональности файла хранилища ключей / JSON-файла можно [здесь](/@@@@@@/security-and-privacy/what-is-a-keystore-file/).



## __Подключение с помощью файла хранилища ключей / JSON и пароля:__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Шаг 1.** На главной странице MEW выберите "Доступ к кошельку".

**Шаг 2.** Выберите вариант "Программный доступ" для подключения, затем выберите "Файл-хранилище ключа" и нажмите "Продолжить".

**Шаг 3.** Найдите ваш файл хранилище/JSON во всплывающем окне. Он должен начинаться с "UTC--".

**Шаг 4.** Введите пароль и нажмите "Доступ к кошельку".

**Шаг 5.** Готово!



## __Mnemonic Phrase (+ Password)__
This is a list of 12 to 24 words that are generated and given to users upon certain forms of wallet creation (i.e. MEWconnect, MetaMask, Hardware Wallets, JAXX wallets, etc.). Sometimes these phrases have an extra word associated with them, and sometimes they do not. The order and spelling of the words in a mnemonic phrase is directly tied to one’s private key, and therefore is not recommended as a regular way to access a wallet. It is best to only use this phrase for recovery purposes.



## __To connect with Mnemonic Phrase (+ Password):__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Шаг 1.** На главной странице MEW выберите "Доступ к кошельку".

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Mnemonic Phrase’ and click ‘Continue’.

**Step 3.** Choose whether it was a 12 or 24 word phrase, then fill out the form.

**Step 4.** Enter your extra word (leave this blank if you’re using a MEWconnect phrase), and click ‘Unlock wallet’.

**Step 5.** Choose your wallet’s address amongst the list generated, and you’re done!



## __Закрытый ключ__
The private key is a string of 64 characters tied permanently to a public address. This is sometimes given to users when wallets are created and sometimes kept encrypted (in the case of MEWconnect, MetaMask, and Hardware Wallets). *Using one’s private key should always be a last-ditch effort of access, only to be utilized when all else fails.* This should not be the main method of entry for anyone to access their wallets. Private keys are the number one most sensitive information anyone can have for a wallet, because private keys allow immediate access and can never be changed. Therefore, it is extremely important to keep this safe, secure, and secret.



## __Для подключения с помощью закрытого ключа:__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Step 1.** On the MEW front page, select ‘Access My Wallet’.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Private Key’ and click ‘Continue’.

**Step 3.** Copy and paste your private key into the value field.

**Step 4.** Click ‘Unlock Wallet’ and you’re done!