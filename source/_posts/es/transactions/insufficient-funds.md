---
title: "Not Enough ETH to Send"
date: 2018-06-01 00:01:00
tags:
  - insufficient
  - fund
  - funds
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
alias:
  - es/gas/error-insufficient-funds-message.html
---

# **Error: Not Enough ETH to Send**

###### {% read_time title "Not Enough ETH to Send" %} min read

* * *

If you are getting the error that looks like this: "Not enough ETH to send", it means you do not have enough ETH in your account to cover the cost of gas.

Each transaction (including token and contract transactions) requires gas, and that gas is paid in ETH. You can think of this like a transaction fee.

## **Solution: Send 0.01 ETH to that account in order to be able to make the transaction.**

A standard transaction will take a gas limit of `21000` and a gas price of `0.00000002 ETH`, which makes the total transaction fee `0.00042 ETH`. With tokens, the amount of gas is typically `50000 gas - 100000 gas`, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.

## **More Information About Gas**

-   A standard TX will be `21000` gas & a gas price of `0.00000002 ETH` so the total TX fee will be `0.00042 ETH`.
-   With tokens, the amount of gas is typically 50000 gas - 100000 gas, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.
-   The amount of ETH or tokens you are sending does not affect the amount of gas you need.
-   **Gas _limit_** is the maximum amount of gas you will send with your transaction. This is in units of gas.
-   **Gas _price_** is how much each unit of gas costs. It can be adjusted via the Settings page, or by adjusting the 'Transaction Fee' on the 'send transaction' page. 
