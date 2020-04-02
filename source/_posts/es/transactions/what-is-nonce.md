---
title: "What is Nonce?"
date: 2018-06-01 00:08:00
tags:
  - nonce
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
alias:
  - es/transactions/what-is-nonce.html
---

# **What is Nonce?**

###### {% read_time title "What is Nonce?" %} min read

* * *

In Ethereum, every transaction has a nonce. The nonce is the number of transactions sent from a given address.

In English, a nonce is a number that can only be used once. In cryptography, a nonce is a one-time code selected in a random or pseudo-random manner that is used to securely transmit a main password, preventing replay attacks.

Each time you send a transaction, the nonce value increases by `1`. There are rules about what transactions are considered valid transactions, and the nonce is used to enforce some of these rules. Specifically:

-   **Transactions must be in order.** You cannot have a transaction with a nonce of `1` mined before one with a nonce of `0`.

-   **No skipping!** You cannot have a transaction with a nonce of `2` mined if you have not already sent transactions with a nonce of `1` and `0`.

## **Why does it matter?**

This value prevents double-spending, as the nonce will always specify the order of transactions. If a double-spend _does_ occur, it's typically due to the following process:

-   A transaction is sent to one party.
-   They wait for it to register.
-   Something is collected from this first transaction.
-   Another transaction is quickly sent with a high gas price.
-   The second transaction is mined first, therefore invalidating the first transaction.

This is why exchanges wait for you to have a certain number of confirmations before allowing you to trade freshly-deposited funds.

## **When using the Ethereum blockchain, the above is not possible.**

In Ethereum, this method of "double-spending" is not possible because each transaction has a nonce included with it. Even if you attempt to do the above, it will not work as the second transaction (nonce of `3`) cannot be mined before the first transaction (nonce of `2`).
