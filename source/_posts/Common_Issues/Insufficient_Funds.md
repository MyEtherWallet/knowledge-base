---
title: "Insufficient Funds"
date: 2018-06-01 00:01:00
tags:
- insufficient
- fund
- funds
categories:
- common_issues
primary_category: "common_issues"
primary_category_display_name: "Common Issues"
---

## Error: Insufficient Funds
***

If you are getting the error that looks like this: `Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX`, it means you do not have enough ETH in your account to cover the cost of gas.

Each transaction (including token and contract transactions) requires gas, and that gas is paid in ETH. You can think of this like a transaction fee.

#### Solution: Send 0.01 ETH to that account in order to be able to make the transaction.

A standard transaction will take a gas limit of `21000` and a gas price of `0.00000002 ETH`, which makes the total transaction fee `0.00042 ETH`. With tokens, the amount of gas is typically `50000 gas - 100000 gas`, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.


The number displayed in that error message is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`. This will give you the amount of Ether you need to send to that account to make the transaction.

### More Information About Gas
* A standard TX will be `21000` gas & a gas price of `0.00000002 ETH` so the total TX fee will be `0.00042 ETH`.
* With tokens, the amount of gas is typically 50000 gas - 100000 gas, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.
* The amount of ETH or tokens you are sending does not affect the amount of gas you need.
* **Gas _limit_** is the maximum amount of gas you will send with your transaction. This is in units of gas.
* **Gas _price_**, which you will not see except on the Offline page, is how much each unit of gas costs. We set it at `0.00000002 ETH`.