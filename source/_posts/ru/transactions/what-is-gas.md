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
  - en/gas/what-is-gas-ethereum.html
---

# **Что такое газ?**

###### Время прочтения: {% read_time title "Что такое газ?" %} мин.

* * *

<img src="/images/posts/transactions/tx_pool_infographic.png" width="80%" />

## **Введение**

Блокчейн Ethereum — это сеть. Эфир (ETH) — это топливо для этой сети. Когда вы отправляете токены, взаимодействуете с контрактом, отправляете ETH или ERC20-токены или же совершаете другие действия в блокчейне, то вы должны заплатить за это вычисление. Эта комиссия выражается в газе, а газ всегда оплачивается в ETH.

Вы платите за вычисления независимо от того, успешно была завершена ваша транзакция или нет. Даже если она не «пройдет», майнеры должны проверить и выполнить вашу транзакцию, что требует вычислительной мощности. Вы должны заплатить за эти вычисления — так же, как вы заплатили бы за успешную транзакцию.

You can see your transaction fee (gas limit \* gas price) in ETH & USD when you search for your transaction on Etherscan.io. Это не сбор, который получает MyEtherWallet или любой другой поставщик таких услуг. Этот сбор выплачивается майнерам за майнинг транзакций, проверку и добавление их в блоки и защиту блокчейна.

## **Обзор**

Когда вы слышите термин «газ», то человек говорит об одном из двух:

-   Лимит газа
-   Цена газа

The total cost of a transaction (the "transaction fee") is the Gas Limit \* Gas Price.

Лимит газа можно представить в виде количестве литров / галлонов / единиц топлива, которое может вместить бензобак автомобиля.

Цену газа можно представить в виде стоимости этого литра / галлона / единицы топлива.

-   Для автомобиля это доллары (цена) за галлон (единица).
-   Для Ethereum это GWEI (цена) за газ (единицу).

Допустим, вы хотите заполнить свой бак вместимостью 10 галлонов. Для этого потребуется 10 галлонов по `2,50 доллара` каждый. Это будет стоить `25 долларов`.

Соответственно, лимита газа в размере `​​21000` означает, что нужно заполнить `21000` единиц газа. Если каждая единица стоит `20 GWEI`, то общая сумма составит `0,00042`.

Следовательно, общий сбор за транзакцию в этом примере будет равен `0,00042 ETH`.

Отправка токенов обычно занимает немного больше газа, чем отправка ETH, поэтому мы рекомендуем иметь 0,1 ETH для 2-3 транзакций с токенами.

You can use our tool to calculate GWEI &lt;-> WEI &lt;-> USD [here](https://www.myetherwallet.com/convert-units), which can be helpful when you want to know your transaction fee in ETH, rather than GWEI.

## **Лимит газа**

The gas limit is called the limit because it's the maximum amount of units of gas you are willing to spend on a transaction. This avoids situations where there is an error somewhere in a contract, and you end up spending `1 ETH`, then `10 ETH`, and then `1000 ETH`, going in circles but arriving no where.

However, the units of gas necessary for a transaction are already defined by how much code is executed on the blockchain. If you do not want to spend as much on gas, lowering the gas limit won't help much. You must include enough gas to cover the computational resources you use or your transaction will fail due to an 'Out of Gas' error.

All unused gas never leaves your wallet. So if you go to MyEtherWallet, send `1 ETH` to our donation address, and use a gas limit of `400000`, you will receive `400000 - 21000* = 379000` back. However, if you were sending `1 ETH` to a contract, and your transaction to the contract fails, you will use the entire `400000` and receive nothing back.

_\*`21000` is the standard gas limit for regular transactions._

## **Цена газа**

If you want to spend less on a transaction, you can do so by lowering the amount you pay per unit of gas. The price you pay for each unit increases or decreases how quickly your transaction will be mined.

## **Will increasing the gas price get it mined faster? Does setting a low gas price mean it won't ever be mined?**

The transaction fees go to the miner who mines your block. When miners mine a block, they have to decide which transactions to include. They can choose to include no transactions, or they can choose to randomly select transactions. In order to encourage miners to include transactions in blocks you want to set a 'gas price' that is high enough to make them want to include it (since it is entirely up to them).

_Most_ miners follow a very simple strategy for inclusion. They include transactions they received sorted from highest gas price to lowest, then include them until either the block is full, or they reach one that has a gas price set lower than they are willing to bother with.

You want to set the gas price high enough so that a miner includes your transaction in a block. If you are in a hurry, you can set the gas price even higher, so that you jump ahead of everyone in line.

If you are not in a hurry, you just need to set a number high enough so that someone eventually includes your transaction.

## **Why should I set a low gas price?**

Because it's cheaper, and because with the increasing price of ETH (compared to USD), a transaction that used to cost half a cent, may now cost a few cents.

More expensive transactions, like interacting with certain Dapps, can now cost a dollar or more! As a user, you should try sending non-urgent transactions with a lower gas price as the more transactions that occur at the lower gas price, the more likely miners will lower their minimums.

## **Where can I see what miners are accepting?**

Start here, at [EthGasStation](http://ethgasstation.info/).

[EthGasStation's Calculator](https://ethgasstation.info/calculatorTxV.php) will let you estimate how long it will be before your transaction is accepted at a specific gas price.
