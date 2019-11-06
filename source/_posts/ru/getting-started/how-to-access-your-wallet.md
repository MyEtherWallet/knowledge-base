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
##### <i>Эта статья предназначена для тех, у кого уже есть ETH-кошелек. If you would like to create a wallet from scratch, please refer to [this article][createWallet].</i>
###### {% read_time title "How to Access Your Wallet" %} минут на чтение
***
MyEtherWallet (MEW) предлагает множество способов доступа к Ethereum-кошельку с помощью опции "Доступ к моему кошельку" на главной странице.

Вот они, от наиболее к наименее рекомендованным:

* Аппаратные кошельки ([Ledger Nano S](https://www.ledger.com/?r=fa4b), [Trezor](https://trezor.io/?offer_id=12&aff_id=2029), [Digital Bitbox](https://shiftcrypto.ch/?ref=mew), [Finney](http://shop.sirinlabs.com/?rfsn=2397639.54fdf&utm_source=refersion&utm_medium=affiliate&utm_campaign=2397639.54fdf) и т. д.)
* MEWconnect
* MetaMask
* Файла хранилища ключей / JSON-файл + пароль
* Мнемоническая фраза + пароль
* Закрытый ключ

## __Аппаратные кошельки__

Аппаратные кошельки используют самые сильные меры безопасности для шифрования закрытого ключа на самом устройстве, защищая вас от фишинга и хакеров. Пользователи большинства аппаратных кошельков получают не сам закрытый ключ, а мнемоническую фразу из 24 слов, нужную для восстановления. Также на устройствах обычно есть пин-код или пароль для разблокировки устройства, а вся информация о каждом кошельке хранится на самом физическом устройстве.

To learn more about accessing MEW with hardware wallets, reference our [Migrating to/from MEW](/@@@@@@/migration/moving-from-exchange-to-mew/) category.



## __MEWconnect__
Это наше бесплатное сопутствующее приложение MEW для смартфонов на базе iOS и Android. Мы называем его аппаратным кошельком без аппаратной части. Когда вы создаете кошелек в MEWconnect, ваш закрытый ключ хранится в зашифрованном виде в защищенном локальном хранилище на вашем телефоне. Для резервного копирования вам дается мнемоническая фраза (как на аппаратных кошельках выше). У кошелька также есть пароль, который используется для его разблокировки на вашем устройстве.

Чтобы узнать больше о доступе к MEW с помощью MEWconnect, смотрите [Руководство пользователя MEWconnect](/@@@@@@/mewconnect/mewconnect-user-guide/).



## __MetaMask__
Это расширение для Chrome, позволяющее создать кошелек на базе ethereum, который хранит ваш закрытый ключ в зашифрованном виде в самом расширении. Оно также создает мнемоническую фразу из 12 слов, нужную для восстановления. MetaMask позволяет пользователям давать разным кошелькам имена, просматривать остаток средств в расширении, а также дает возможность при желании импортировать информацию о закрытом ключе ранее созданного кошелька.



## __Для подключения MEW с помощью MetaMask:__
#### __Предполагается, что у вас уже есть кошелек MetaMask.__

**Step 1.** Login to your MetaMask wallet via their Chrome Extension.

**Step 2.** On the MEW front page, select 'Access My Wallet'.

**Step 3.** Select the 'MetaMask' option to connect.

**Step 4.** Read and accept the ‘Terms and Conditions’, then select ‘Access My Wallet’.

**Step 5.** Confirm connection in the MetaMask pop-up window.

**Step 6.** You're done!



## __Хранилище ключей / JSON + пароль__
Хранилище ключей / JSON — это файл, который содержит зашифрованную версию закрытого ключа. Этот ключ зашифрован с помощью выбранного пользователем пароля. Фактически изменить пароль этих файлов невозможно. Единственный способ изменить пароль — это создать совершенно новый файл хранилища ключей. Это можно сделать в нашем расширении MEW для Chrome с помощью вашего закрытого ключа. Файлы хранилищ ключей не следует открывать. Их нужно использовать только в опции "Хранилище ключей / JSON" на нашем сайте и тогда, когда запрашивают ваш файл JSON. Прочитать подробнее о функционале файла хранилища ключей / JSON-файла можно [здесь](/@@@@@@/security-and-privacy/what-is-a-keystore-file/).



## __Для подключения с помощью хранилища ключей / JSON и пароля:__
#### __Такой способ подключения не рекомендуется. Мы настоятельно рекомендуем при таком варианте [использовать MEW в автономном режиме](/@@@@@@/offline/offline-mew-looks-weird/).__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘JSON File’ and click ‘Continue’.

**Step 3.** Locate your Keystore/JSON file in the pop-up window. Он должен начинаться с "UTC--".

**Step 4.** Enter your password, and click 'Unlock wallet'.

**Step 5.** You're done!



## __Мнемоническая фраза (+ пароль)__
Это список, в который входит от 12 до 24 слов, созданный и выданный пользователям при определенных способах создания кошелька (например, MEWconnect, MetaMask, аппаратные кошельки, кошельки JAXX и т. п.). Иногда с этими фразами связаны пароли, иногда — нет. Порядок и написание слов в мнемонической фразе напрямую связаны с закрытым ключом, поэтому такой способ не рекомендуется для регулярного доступа к кошельку. Эту фразу лучше использовать только для восстановления.



## __Для подключения с помощью мнемонической фразы (и пароля):__
#### __Такой способ подключения не рекомендуется. Мы настоятельно рекомендуем при таком варианте [использовать MEW в автономном режиме](/@@@@@@/offline/offline-mew-looks-weird/).__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Mnemonic Phrase’ and click ‘Continue’.

**Step 3.** Choose whether it was a 12 or 24 word phrase, then fill out the form.

**Step 4.** Enter your password (leave this blank if you’re using a MEWconnect phrase), and click ‘Unlock wallet’.

**Step 5.** Choose your wallet’s address amongst the list generated, and you’re done!



## __Закрытый ключ__
Закрытый ключ — это строка из 64 символов, неразрывно связанная с публичным адресом. Это то, что дается пользователям при создании кошельков и иногда хранится в зашифрованном виде (в случае MEWconnect, MetaMask и аппаратных кошельков). *Using one’s private key should always be a last-ditch effort of access, only to be utilized when all else fails.* This should not be the main method of entry for anyone to access their wallets. Закрытые ключи — это самые ценные сведения, относящиеся к кошельку, потому что они дают непосредственный доступ и не могут быть изменены. Поэтому крайне важно хранить их в тайне, в надежном и защищенном месте.



## __Для подключения с помощью закрытого ключа:__
#### __Такой способ подключения не рекомендуется. Мы настоятельно рекомендуем при таком варианте [использовать MEW в автономном режиме](/@@@@@@/offline/offline-mew-looks-weird/).__

**Step 1.** On the MEW front page, select ‘Access My Wallet’.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Private Key’ and click ‘Continue’.

**Step 3.** Copy and paste your private key into the value field.

**Step 4.** Click ‘Unlock Wallet’ and you’re done!
