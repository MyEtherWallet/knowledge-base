---
title: "Что такое газ?"
date: 2018-06-01 00:07:00
tags:
  - газ
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Транзакции"
alias:
  - gas/what-is-gas-ethereum.html
---

# __Что такое газ?__
###### Время прочтения: {% read_time title "Что такое газ?" %} мин.
***

<img src="/images/posts/transactions/tx_pool_infographic.png" width="80%" />



## __Введение__

Блокчейн Ethereum — это сеть. Эфир (ETH) — это топливо для этой сети. Когда вы отправляете токены, взаимодействуете с контрактом, отправляете ETH или ERC20-токены или же совершаете другие действия в блокчейне, то вы должны заплатить за это вычисление. Эта комиссия выражается в газе, а газ всегда оплачивается в ETH.

Вы платите за вычисления независимо от того, успешно была завершена ваша транзакция или нет. Даже если она не «пройдет», майнеры должны проверить и выполнить вашу транзакцию, что требует вычислительной мощности. Вы должны заплатить за эти вычисления — так же, как вы заплатили бы за успешную транзакцию.

Вы можете посмотреть оплаченную комиссию за транзакцию (лимит газа * цена газа) в ETH и USD, когда вы выполните поиск своей транзакции на Etherscan.io. Это не сбор, который получает MyEtherWallet или любой другой поставщик таких услуг. Этот сбор выплачивается майнерам за майнинг транзакций, проверку и добавление их в блоки и защиту блокчейна.



## __Обзор__
Когда вы слышите термин «газ», то человек говорит об одном из двух:

* Лимит газа
* Цена газа

Общая стоимость транзакции («комиссия») — это лимит газа * цена газа.

Лимит газа можно представить в виде количестве литров / галлонов / единиц топлива, которое может вместить бензобак автомобиля.

Цену газа можно представить в виде стоимости этого литра / галлона / единицы топлива.

* With a car, it's dollars (price) per gallon (unit).
* With Ethereum, it's GWEI (price) per gas (unit).

Допустим, вы хотите заполнить свой бак вместимостью 10 галлонов. Для этого потребуется 10 галлонов по `2,50 доллара` каждый. Это будет стоить `25 долларов`.

Соответственно, лимита газа в размере `​​21000` означает, что нужно заполнить `21000` единиц газа. Если каждая единица стоит `20 GWEI`, то общая сумма составит `0,00042`.

Следовательно, общий сбор за транзакцию в этом примере будет равен `0,00042 ETH`.

Sending tokens will typically take a bit more gas than sending ETH, so we generally recommend having 0.1 ETH for 2 - 3 token transactions.

Вы можете использовать наш инструмент для расчета GWEI <-> WEI <-> USD [здесь](https://www.myetherwallet.com/convert-units) — это может быть полезно, когда вы хотите узнать комиссию за транзакцию в ETH, а не в GWEI.



## __Лимит газа__
Лимит газ называется так, потому что это максимальное количество единиц газа, которое вы готовы потратить на транзакцию. Это позволяет избежать ситуаций, когда где-то в контракте возникает ошибка, и в итоге вы тратите `1 ETH`, затем `10 ETH`, а потом `1000 ETH` и идете по кругу, но никуда не приходите.

Однако число необходимых для транзакции единиц газа уже определено тем, сколько кода выполняется в блокчейне. Если вы не хотите столько тратить на газ, то снижение лимита газа вам особо не поможет. Вы должны включить достаточно газа для покрытия используемых вычислительных ресурсов, иначе ваша транзакция не пройдет из-за ошибки Out of Gas.

Неиспользованный газ никогда не покинет ваш кошелек. Поэтому если вы перейдете на MyEtherWallet, отправите `1 ETH` на наш адрес для пожертвований и укажите газовый лимит в размере `400000`, вы получите обратно `400000 - 21000* = 379000`. However, if you were sending `1 ETH` to a contract, and your transaction to the contract fails, you will use the entire `400000` and receive nothing back.

_*`21000` — это стандартный лимит газа для обычных транзакций._


## __Цена газа__
Если вы хотите потратить меньше средств на транзакцию, вы можете добиться этого, уменьшив оплату за единицу газа. Цена, которую вы платите за каждую единицу, повышает или понижает скорость добычи вашей транзакции.


## __Will increasing the gas price get it mined faster? Does setting a low gas price mean it won't ever be mined?__
The transaction fees go to the miner who mines your block. When miners mine a block, they have to decide which transactions to include. They can choose to include no transactions, or they can choose to randomly select transactions. In order to encourage miners to include transactions in blocks you want to set a 'gas price' that is high enough to make them want to include it (since it is entirely up to them).

_Most_ miners follow a very simple strategy for inclusion. They include transactions they received sorted from highest gas price to lowest, then include them until either the block is full, or they reach one that has a gas price set lower than they are willing to bother with.

You want to set the gas price high enough so that a miner includes your transaction in a block. If you are in a hurry, you can set the gas price even higher, so that you jump ahead of everyone in line.

If you are not in a hurry, you just need to set a number high enough so that someone eventually includes your transaction.



## __Why should I set a low gas price?__
Because it's cheaper, and because with the increasing price of ETH (compared to USD), a transaction that used to cost half a cent, may now cost a few cents.

More expensive transactions, like bidding on an ENS name, can now cost a dollar or more! As a user, you should try sending non-urgent transactions with a lower gas price as the more transactions that occur at the lower gas price, the more likely miners will lower their minimums.


## __Where can I see what miners are accepting?__
Start here, at [EthGasStation](http://ethgasstation.info/).

[EthGasStation's Calculator](https://ethgasstation.info/calculatorTxV.php) will let you estimate how long it will be before your transaction is accepted at a specific gas price.