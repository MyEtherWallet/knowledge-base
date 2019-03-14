---
title: "Error: Out of Gas"
date: 2018-06-01 00:04:00
tags:
- error
- gas
- out
categories:
- [common_issues]
primary_category: common_issues
primary_category_display_name: "Common Issues"
---

## Error: Out of Gas
***

Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. You can think of this like a transaction fee. The more computational effort a transaction takes, the more gas you need.

MyEtherWallet estimates how much gas you will need - but sometimes it doesn't get it right.

#### Solution: Try manually increasing the "Gas limit" by doubling it.

Any excess gas will be returned to you, so you could even triple or quadruple it.

We are always trying to improve how we estimate gas as contracts become more complex. However, sometimes we still get it wrong. Manually increasing gas limits and price can dramatically change how quickly and stable your transactions are verified.



### More Information About Gas
* A standard TX will be `21000` gas & a gas price of `0.00000002 ETH` so the total TX fee will be `0.00042 ETH`.
* With tokens, the amount of gas is typically 50000 gas - 100000 gas, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.
* The amount of ETH or tokens you are sending does not affect the amount of gas you need.
* **Gas _limit_** is the maximum amount of gas you will send with your transaction. This is in units of gas.
* **Gas _price_**, which you will not see except on the Offline page, is how much each unit of gas costs. We set it at `0.00000002 ETH`.