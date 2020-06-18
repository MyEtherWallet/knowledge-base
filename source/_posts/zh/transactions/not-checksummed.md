---
title: "Error: Not Checksummed"
date: 2018-06-01 00:03:00
tags:
  - error
  - checksummed
  - checksum
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
alias:
  - en/addresses/what-does-checksummed-mean.html
---

# **Error: Not Checksummed**

###### {% read_time title "Error: Not Checksummed" %} min read

* * *

Every Ethereum address has two versions to it, one that includes uppercase letters and one that doesn’t. These are called the checksummed and non-checksummed versions, respectively. Take for example, the MEW donation address:

Non-checksummed version: `0xdecaf9cd2367cdbb726e904cd6397edfcae6068d`

Checksummed version: `0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D`

These two addresses include all the same characters and lead to the same destination, the checksummed one is just a little more useful for determining the accuracy of the address. Both versions of the address are viable and usable, but the checksummed version is the preferred version to use. If even one character of an address is off, any tokens or coins sent to the wrong address will be lost forever. This is not something to be taken lightly.

Sometimes you will receive an error warning you that your address is not checksummed, preventing or warning you from making a transaction or adding a custom token. This is for your own safety. Do not be alarmed, though!

## **It’s very easy to find the checksummed version of any address:**

**Step 1.** Head to Etherscan.io.

**Step 2.** Input the address you’re interested in viewing into the search field.

**Step 3.** You will be taken to a page for the address, with balances and a list of transactions

**Step 4.** At the top of the page, see the checksummed version with capital letters included
