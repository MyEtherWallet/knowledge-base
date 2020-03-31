---
title: "Internal Transactions: What Do They Mean?"
date: 2019-07-02 00:11:15
tags:
  - mew
  - transactions
  - internal
  - sending
  - myetherwallet
  - Ethereum
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
---

# **Internal Transactions: What Do They Mean?**

###### {% read_time title "Internal Transactions: What Do They Mean?" %} min read

* * *

This is a little easier to understand if you make the distinction that every wallet has two addresses. The first address is the ‘external’ or public address most people are familiar with (0x..), while the second can be considered an ‘internal’ address. All activity through the Ethereum blockchain starts with external addresses making some sort of action, but internal addresses are used behind-the-scenes with smart contracts to make small things happen. Whenever a smart contract needs to send ETH or make some sort of mechanic on its own, they call a function originally labeled as a ‘message,’ which eventually was renamed as an ‘internal transaction’.

This is a misnomer, because internal transactions are not actually considered transactions, as they are not included directly in the blockchain. Instead, they are more like a byproduct of smart contract functionality. Most importantly, they **are** reflected in the overall balance. They can usually be found under an 'Internal Transaction' tab, via [Etherscan.io](https://www.etherscan.io)
