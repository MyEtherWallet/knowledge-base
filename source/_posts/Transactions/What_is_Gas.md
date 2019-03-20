---
title: "What is Gas?"
date: 2018-06-01 00:07:00
tags:
- gas
categories:
- [transactions]
primary_category: transactions
primary_category_display_name: "Transactions"
---

# __What is Gas?__
###### ⏰ 3 min read
***

<img src="/images/posts/transactions/tx_pool_infographic.png" width="80%">



## __Introduction__

The Ethereum blockchain is a network. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH or ERC20 tokens, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH.

You are paying for the computation, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction, which takes computational power. You must pay for that computation just like you would pay for a successful transaction.

You can see your transaction fee (gas limit * gas price) in ETH & USD when you search for your transaction on Etherscan.io. This is not a fee that MyEtherWallet (MEW), or any other service provider, receives. This fee is paid to the remote miners for mining transactions, putting them into blocks, and securing the blockchain.



## __Overview__
When you hear the term 'gas', the person speaking is either talking about:

* Gas Limit
* Gas Price

The total cost of a transaction (the "transaction fee") is the Gas Limit * Gas Price.

You can think of the gas limit as the total amount of liters/gallons/units of gas a car can hold. 

You can think of the gas price as the cost of that liter/gallon/unit of gas.

* With a car, it's `$2.50` (price) per gallon (unit).
* With Ethereum, it's `20 GWEI` (price) per gas (unit).

So let's say you want to fill up your 10 gallon tank. 
It would take 10 gallons of gas, at `$2.50` each. That total would come out to `$25`.

Likewise, fulfilling a gas limit of `21000` means filling `21000` units of gas. 
If each unit is set at `20 GWEI`, your total would come out to `0.00042`.

Therefore, the total transaction fee in this scenario would be `0.00042 ETH`.

Sending tokens will typically take a gas limit of `50000 - 100000`, so the total transaction fee increases to `0.001 ETH - 0.002 ETH`.

You can use our tool to calculate GWEI <-> WEI <-> USD [here](), which can be helpful when you want to know your transaction fee in ETH, rather than GWEI.



## __Gas Limit__
The gas limit is called the limit because it's the maximum amount of units of gas you are willing to spend on a transaction. This avoids situations where there is an error somewhere in a contract, and you end up spending `1 ETH`, then `10 ETH`, and then `1000 ETH`, going in circles but arriving no where.

However, the units of gas necessary for a transaction are already defined by how much code is executed on the blockchain. If you do not want to spend as much on gas, lowering the gas limit won't help much. You must include enough gas to cover the computational resources you use or your transaction will fail due to an 'Out of Gas' error.

All unused gas never leaves your wallet. So if you go to MyEtherWallet, send `1 ETH` to our donation address, and use a gas limit of `400000`, you will receive `400000 - 21000* = 379000` back. However, if you were sending `1 ETH` to a contract, and your transaction to the contract fails (say, the Token Creation Period is already over), you will use the entire `400000` and receive nothing back.

_*`21000` is the standard gas limit for regular transactions._



## __Gas Price__
If you want to spend less on a transaction, you can do so by lowering the amount you pay per unit of gas. The price you pay for each unit increases or decreases how quickly your transaction will be mined.



## __During normal times, a gas price of:__

* `40 GWEI` will almost always get you into the next block.
* `20 GWEI` will usually get you within the next few blocks.
* `2 GWEI` will usually get you within the next few minutes.



## __During token creation periods, these costs get crazy due to supply / demand:__

* `50 GWEI` is the max gas price most new token creation period contracts will accept. Anything above that and your transaction will fail. 
    * _Most_ is the keyword here. Check with the token creation period you wish to invest in before said token creation period begins.
    * `50 GWEI` would be the amount you should send in these cases.

* If you are trying to send during a token creation period (but not to the token creation), you have 2 choices: 
    * Wait a bit until the token creation period is over. 
    * Increase the gas price over `50 GWEI`.

You can adjust the gas price on MyEtherWallet in the footer via a slider. 



## __Will increasing the gas price get it mined faster? Does setting a low gas price mean it won't ever be mined?__
The transaction fees go to the miner who mines your block. When miners mine a block, they have to decide which transactions to include. They can choose to include no transactions, or they can choose to randomly select transactions. In order to encourage miners to include transactions in blocks you want to set a 'gas price' that is high enough to make them want to include it (since it is entirely up to them).

_Most_ miners follow a very simple strategy for inclusion. They include transactions they received sorted from highest gas price to lowest, then include them until either the block is full, or they reach one that has a gas price set lower than they are willing to bother with.

You want to set the gas price high enough so that a miner includes your transaction in a block. If you are in a hurry, you can set the gas price even higher, so that you jump ahead of everyone in line.

If you are not in a hurry, you just need to set a number high enough so that someone eventually includes your transaction.



## __Why should I set a low gas price?__
Because it's cheaper, and because with the increasing price of ETH (compared to USD), a transaction that used to cost half a cent, may now cost a few cents. 

More expensive transactions, like bidding on an ENS name, can now cost a dollar or more! As a user, you should try sending non-urgent transactions with a lower gas price as the more transactions that occur at the lower gas price, the more likely miners will lower their minimums.



## __Should I increase the gas limit for token sales?__
You should put whatever the token sale holders tell you to put. If you do not know, then ask before the token sale. This ensures that your transaction won't fail due to an 'Out of Gas' error. Typically, a `200000` gas limit will be enough, but some may require more.

Increasing the amount to `1500000` or more will not increase the likelihood of getting in. All it will do is fill up the blocks faster, and you will lose that transaction fee if it doesn't go through. We have never seen a token sale that requires over a `800000` gas limit.



## __So I should send with a huge gas price for token sales, right?__
Not necessarily. The risk in increasing it is that you could still not get in, and pay the fee anyways.

The gas will **not** be returned to you if you send with a too-low gas limit, too early, or too late in the token creation period.

First, see if the token sale has a max gas price. If they do, use that as the gas price. Both Status and Bancor had a max gas of `50 GWEI`.

If they let you send with any amount of gas price, you should decide how much you are will to invest, and how much you are willing to spend on that attempt to invest. **_You must assume that you will pay the full fee and get nothing in return during token creation periods._** Take the gas limit (i.e. `200000`), multiply that by the gas price (i.e. `50 GWEI` or `0.00000005 ETH`), and that is how much you will pay for your attempt to get in.

Before the BAT token creation period, the average gas price was `20 GWEI` (the default) for token creation periods. Now it's all over the place:

* `40 GWEI` * `200000` = `0.008 ETH` (or `$5.60 USD`).
* `70 GWEI` * `200000` = `0.014 ETH` (or `$9.80 USD`).
* `100 GWEI` * `200000` = `0.02 ETH` (or `$14.00 USD`).



## __Example: Absurd gas prices from the BAT token creation period (USD prices at time of transactions)__
* `118 GWEI` * `200000` = `0.0236 ETH` (or `$6.13 USD`).
* `7590 GWEI` * `200000` = `1.518 ETH` (or `$394.68 USD`).
* `58000 GWEI` * `200000` = `11.6 ETH` (or `$3,016 USD`).



<img src="https://github.com/stephenmew/KBimages/blob/master/GasChartCrazy.jpg?raw=true" width="100%">



Someone paid `$6000+` to send a failed transaction. That can't feel good.



## __Where can I see what miners are accepting?__
Start here, at [EthGasStation](http://ethgasstation.info/). 

(At the time of this writing) Below `20 GWEI` the blocks are almost all full, which means if you set lower than that you'll have to wait in line with everyone else.

A very awesome miner, miningpoolhub, accepts a `2 GWEI` price, but their blocks are always full and they only account for `9%` of mining, which means about `1` in every `10` blocks (`~150 seconds`) will accept transactions with a `2 GWEI` gas price. And when it does, it is full, so you may have to wait for a few of those.

[EthGasStation's Calculator](https://ethgasstation.info/calculatorTxV.php) will let you estimate how long it will be before your transaction is accepted at a specific gas price.