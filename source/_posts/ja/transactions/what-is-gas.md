---
title: "What is Gas?"
date: 2018-06-01 00:07:00
tags:
  - gas
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
alias:
  - ja/gas/what-is-gas-ethereum.html
---

# **What is Gas?**

###### {% read_time title "What is Gas?" %} min read

* * *

<img src="/images/posts/transactions/tx_pool_infographic.png" width="80%" />

## **Introduction**

The Ethereum blockchain is a network. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH or ERC20 tokens, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH.

You are paying for the computation, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction, which takes computational power. You must pay for that computation just like you would pay for a successful transaction.

You can see your transaction fee (gas limit \* gas price) in ETH & USD when you search for your transaction on Etherscan.io. This is not a fee that MyEtherWallet (MEW), or any other service provider, receives. This fee is paid to the remote miners for mining transactions, putting them into blocks, and securing the blockchain.

## **Overview**

When you hear the term 'gas', the person speaking is either talking about:

-   Gas Limit
-   Gas Price

The total cost of a transaction (the "transaction fee") is the Gas Limit \* Gas Price.

You can think of the gas limit as the total amount of liters/gallons/units of gas a car can hold.

You can think of the gas price as the cost of that liter/gallon/unit of gas.

-   With a car, it's dollars (price) per gallon (unit).
-   With Ethereum, it's GWEI (price) per gas (unit).

So let's say you want to fill up your 10 gallon tank. It would take 10 gallons of gas, at `$2.50` each. That total would come out to `$25`.

Likewise, fulfilling a gas limit of `21000` means filling `21000` units of gas. If each unit is set at `20 GWEI`, your total would come out to `0.00042`.

Therefore, the total transaction fee in this scenario would be `0.00042 ETH`.

Sending tokens will typically take a bit more gas than sending ETH, so we generally recommend having 0.1 ETH for 2 - 3 token transactions.

You can use our tool to calculate GWEI &lt;-> WEI &lt;-> USD [here](https://www.myetherwallet.com/convert-units), which can be helpful when you want to know your transaction fee in ETH, rather than GWEI.

## **Gas Limit**

The gas limit is called the limit because it's the maximum amount of units of gas you are willing to spend on a transaction. This avoids situations where there is an error somewhere in a contract, and you end up spending `1 ETH`, then `10 ETH`, and then `1000 ETH`, going in circles but arriving no where.

However, the units of gas necessary for a transaction are already defined by how much code is executed on the blockchain. If you do not want to spend as much on gas, lowering the gas limit won't help much. You must include enough gas to cover the computational resources you use or your transaction will fail due to an 'Out of Gas' error.

All unused gas never leaves your wallet. So if you go to MyEtherWallet, send `1 ETH` to our donation address, and use a gas limit of `400000`, you will receive `400000 - 21000* = 379000` back. However, if you were sending `1 ETH` to a contract, and your transaction to the contract fails, you will use the entire `400000` and receive nothing back.

_\*`21000` is the standard gas limit for regular transactions._

## **Gas Price**

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
