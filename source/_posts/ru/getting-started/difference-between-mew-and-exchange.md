---
title: "В чем разница между биржами (такими как Coinbase, Kraken, Gemini, Binance и т. п.) и MyEtherWallet?"
date: 2018-06-01 00:03:00
tags:
  - разница
  - биржа
  - coinbase
  - kraken
  - gemini
  - binance
categories:
  - 
    - get-started
primary_category: get-started
primary_category_display_name: "С чего начать"
alias:
  - getting-started/whats-the-difference-between-an-exchange-and-myetherwallet.html
---

# __В чем разница между биржами (такими как Coinbase, Kraken, Gemini, Binance и т. п.) и MyEtherWallet?__
###### {% read_time title "What's the Difference Between an Exchange (i.e. Coinbase, Kraken, Gemini, Binance, etc.) and MyEtherWallet?" %} минут на чтение
***

Ваши токены ETH и ERC20 находятся на блокчейне Ethereum независимо от того, какой сервис вы используете для доступа к ним. Когда вы их перемещаете, вы отправляете их с одного адреса на блокчейне на другой. Это просто строки кода. В файле вашего кошелька, в аппаратном кошельке, в интерфейсе, с которым вы взаимодействуете, и в вашем закрытом ключе средств нет. Это просто способы доступа, которые дают вам возможность доказать владение монетами, находящимися на самом блокчейне.

**If you use a client-side tool like MyEtherWallet or Mist, Metamask, Exodus, or Jaxx,** then you have the private key (or a similar method of access), and you control your funds *and* your key. Вы не полагаетесь на Coinbase или Gemini при отправке ваших средств с их аккаунта на ваш.

Преимущество в том, что только вы контролируете ваши ключи. Взлом биржи не отразится на вас. The downside is that you, **and only you,** control your keys. Больше их ни у кого нет, и никто не сможет их восстановить, если они будут утеряны.

Если вы потеряете свой закрытый ключ или файл кошелька и пароль, то не сможете доказать владение аккаунтом и навсегда потеряете доступ к средствам.

**If you use an exchange like Coinbase, Gemini, Kraken, Polonix, Bittrex,** then you have an account with that company, and they hold your ETH and your keys for you. У них есть собственный аккаунт на блокчейне, где хранятся все их средства и средства их клиентов. В этом случае у вас есть имя пользователя и пароль на их серверах, и они следят, сколько ETH они вам "должны".

Это позволяет вам иметь более традиционный аккаунт с именем пользователя и паролем, и вы можете, например, восстановить пароль, если забыли его, изменить пароль, если он был скомпрометирован, и включить двухфакторную аутентификацию. Однако это также значит, что если биржа потеряет эфир, потерян будет и ваш эфир.

**If you choose to move from an exchange to a wallet where you control your keys,** you need to make sure that you have multiple backups, stored in separate locations, of your private key / keystore file / recovery phrase. Это предотвратит потерю при сбое компьютера, пожаре в доме и иных обстоятельствах.

## __Также вам нужно надежно хранить эти ключи. Это значит:__

* Не вводите их на неизвестных сайтах.
* Всегда удостоверяйтесь, что вы на верном сайте и скачиваете с настоящего репозитория/сайта.
* Не посылайте ключ по почте, никому не отправляйте и не публикуйте его в сети.
* Не сохраняйте его в облачное хранилище.
* Не устанавливайте Team Viewer или другое программное обеспечение для удаленного доступа на свой компьютер.

Если это кажется очень сложным, мы рекомендуем купить аппаратный кошелек [Ledger](https://www.ledger.com/?r=fa4b) или [Trezor](https://shop.trezor.io/?a=myetherwallet.com). Он поможет хранить ваши ключи в безопасности, на не подключенном к сети устройстве, а не на вашем компьютере. В этом случае вам не нужно беспокоиться по поводу файлов или строк символов; вместо это вы будете просто подключать аппаратный кошелек к своему компьютеру.