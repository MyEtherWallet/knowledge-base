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
## MyEtherWallet (MEW) предлагает множество способов доступа к Ethereum-кошельку с помощью опции "Доступ к моему кошельку" на главной странице.

## __Способы доступа, от наиболее к наименее рекомендованным:__

<br>

* Аппаратные кошельки ([Ledger Nano S](https://www.ledger.com/?r=fa4b), [Trezor](https://trezor.io/?offer_id=12&aff_id=2029), [Digital Bitbox](https://shiftcrypto.ch/?ref=mew), [Finney](http://shop.sirinlabs.com/?rfsn=2397639.54fdf&utm_source=refersion&utm_medium=affiliate&utm_campaign=2397639.54fdf) и т. д.)
* MEW wallet, MEW's official mobile app for iOS and Android, and WalletLink / WalletConnect
* Расширения для браузера с поддержкой Web3 (MEW CX, MetaMask и т.д.)
* Программный доступ
    * Файл-хранилище ключа / JSON-файл + пароль
    * Мнемоническая фраза + дополнительное слово (необязательно)
    * Закрытый ключ

##### __

## __Наиболее рекомендуемые способы:__

## __Аппаратные кошельки__

Аппаратные кошельки используют самые сильные меры безопасности для шифрования закрытого ключа на самом устройстве, защищая вас от фишинга и хакеров. Пользователи большинства аппаратных кошельков получают не сам закрытый ключ, а мнемоническую фразу из 24 слов, нужную для восстановления. Также на устройствах обычно есть пин-код или пароль для разблокировки устройства, а вся информация о каждом кошельке хранится на самом физическом устройстве.

Чтобы узнать больше о доступе к MEW с помощью аппаратных кошельков, смотрите нашу категорию [Миграция на/с MEW](/@@@@@@/migration/moving-from-exchange-to-mew/).

##### __

<img src="/images/posts/mewconnect/meww3.jpg" width="300px" />

## __MEWwallet__
Это наше полнофункциональное мобильное приложение MEW для смартфонов iOS и Android. Оно простое в использовании, быстрое и безопасное. При создании кошелька с помощью MEW wallet ваш закрытый ключ хранится в зашифрованном виде в безопасном локальном хранилище на вашем телефоне. Для резервного копирования вам дается мнемоническая фраза (как на аппаратных кошельках выше). Кошелек также имеет PIN-код или пароль, который используется для выполнения входа на вашем устройстве.

Чтобы узнать больше о доступе к MEW с помощью MEW wallet, ознакомьтесь с нашим [Руководством пользователя MEW wallet](/@@@@@@/mewwallet/mewwallet-user-guide/).

##### __

## __WalletLink / WalletConnect__
WalletLink is a connection protocol used by the mobile app Coinbase Wallet, and WalletConnect is another connection protocol that's already being used by over 20 mobile wallets like Trust Wallet, MetaMask, Coinomi, etc. By integrating support for all these wallets to connect with MEW, it's now possible to explore all of Ethereum from many different outlets.

These wallets each have their own connection processes, but it always boils down to the same action- scanning a QR code with your app to connect to MEW.

##### __


## __Browser Extension (Web3) Wallets:__
#### __Что такое [Web3](https://www.mewtopia.com/the-essential-wallet-guide-part-4/)?__



## __MEW CX__
MEW CX is MyEtherWallet's offical Web3 Chrome Extension wallet. It offers all the functionality of the web-version of MEW in the convenience of an toolbar extension. It also hosts the ability to interact with web-based Dapps, such as CryptoKitties.

MEW CX will come in conflict with any other Web3 wallets you have, such as MetaMask or Brave Browser's in-house wallet. Make sure all other Web3 wallets are disabled before using MEW CX.


## __To connect MEW with MEW CX__

**Step 1.** Install the MEW CX wallet via our Chrome Extension.

**Step 2.** Open the extension and select 'Add Wallet' to create a new wallet or add an existing one.

**Step 2.** Once you've saved a wallet, head to the MEW website. On the front page, select 'Access My Wallet'.

**Step 3.** Select the 'Browser Extension' option to connect.

**Шаг 4.** Прочитайте и примите "Условия использования", а затем выберите "Доступ к кошельку".

**Step 5.** Confirm which wallet you'd like to connect with in the MEW CX pop-up window, or select 'Burner Account' for a temporary wallet.

**Step 6.** You're done!




## __MetaMask__
This is a Chrome Extension that allows the creation of an ethereum-based wallet that keeps one’s private key encrypted within the extension itself. It also generates a 12-word mnemonic phrase for recovery purposes. MetaMask allows users to name their separate wallets, see funds within the extension, and offers the option to import the private key information of a previously created wallet, if desired.



## __To connect MEW with MetaMask:__
#### __Предполагается, что у вас уже есть кошелек MetaMask.__

**Шаг 1.** Войдите в ваш кошелек MetaMask с помощью их расширения для Chrome.

**Step 2.** On the MEW front page, select 'Access My Wallet'.

**Step 3.** Select the 'Browser Extension' option to connect.

**Шаг 4.** Прочитайте и примите "Условия использования", а затем выберите "Доступ к кошельку".

**Шаг 5.** Подтвердите подключение во всплывающем окне MetaMask.

**Step 6.** You're done!

##### __

## __These methods are not recommended:__

## __Keystore/JSON + Password__
The Keystore/JSON is a file that holds an encrypted version of one’s private key. This key is encrypted with a chosen password by the user. As such, it is impossible to change the password for these files. The only way to change the password is to make a completely new Keystore file, which can be achieved in our MEW Chrome Extension with one’s private key. Keystore files should not be opened. They are only to be utilized when accessing the Keystore/JSON option on our site and when prompted for one’s ‘JSON file’. You can read more about the functionality of a Keystore/JSON file [here](/@@@@@@/security-and-privacy/what-is-a-keystore-file/).



## __To connect with Keystore/JSON + Password:__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘JSON File’ and click ‘Continue’.

**Step 3.** Locate your Keystore/JSON file in the pop-up window. It should begin with ‘UTC--’.

**Step 4.** Enter your password, and click 'Unlock wallet'.

**Step 5.** You're done!



## __Mnemonic Phrase (+ Extra Word)__
This is a list of 12 to 24 words that are generated and given to users upon certain forms of wallet creation (i.e. MEWconnect, MetaMask, Hardware Wallets, JAXX wallets, etc.). Sometimes these phrases have an extra word associated with them, and sometimes they do not. The order and spelling of the words in a mnemonic phrase is directly tied to one’s private key, and therefore is not recommended as a regular way to access a wallet. It is best to only use this phrase for recovery purposes.



## __To connect with Mnemonic Phrase (+ Extra Word):__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Step 1.** On the MEW front page, select 'Access My Wallet'.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Mnemonic Phrase’ and click ‘Continue’.

**Step 3.** Choose whether it was a 12 or 24 word phrase, then fill out the form.

**Step 4.** Enter your extra word (leave this blank if you’re using a MEWconnect phrase), and click ‘Unlock wallet’.

**Step 5.** Choose your wallet’s address amongst the list generated, and you’re done!



## __Закрытый ключ__
The private key is a string of 64 characters tied permanently to a public address. This is sometimes given to users when wallets are created and sometimes kept encrypted (in the case of MEWconnect, MetaMask, and Hardware Wallets). *Using one’s private key should always be a last-ditch effort of access, only to be utilized when all else fails.* This should not be the main method of entry for anyone to access their wallets. Private keys are the number one most sensitive information anyone can have for a wallet, because private keys allow immediate access and can never be changed. Therefore, it is extremely important to keep this safe, secure, and secret.



## __To connect with Private Key:__
#### __Это не рекомендуемый способ подключения. Мы настоятельно рекомендуем [использовать MEW оффлайн](/@@@@@@/offline/offline-mew-looks-weird/) для этого варианта.__

**Step 1.** On the MEW front page, select ‘Access My Wallet’.

**Step 2.** Choose the ‘Software’ option to connect, then select ‘Private Key’ and click ‘Continue’.

**Step 3.** Copy and paste your private key into the value field.

**Step 4.** Click ‘Unlock Wallet’ and you’re done!