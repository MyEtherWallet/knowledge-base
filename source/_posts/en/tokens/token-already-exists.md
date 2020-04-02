---
title: "Error: Token Already Exists!"

date: 2018-06-01 00:05:00
tags:
- error
- token
categories:
- [token]
primary_category: token
primary_category_display_name: "Tokens"
---

# **Default or Custom Token Already Exists**

###### {% read_time title "Error: Token Already Exists!" %} min read

* * *

A 'Token Already Exists' error can occur when an incorrect contract address was added as a custom token. 

To find the correct contract address, follow these instructions:

## **Using [Ethplorer.io][ethplorer]**

**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="/images/posts/common-issues/Ethplorer1Error.jpg" width="60%">

**Step 2.** Use the contract address (not the creator address) for the custom token field in MEW. Be sure to use the correct decimal count as well.

<img src="/images/posts/common-issues/Ethplorer2Error.jpg" width="80%">

## **Using [Etherscan.io][etherscan]**

**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="/images/posts/common-issues/Etherscan1Error.jpg" style="width: 40%;">

**Step 2.** Use the contract address for the custom token and be sure to use the correct decimals as well.

<img src="/images/posts/common-issues/Etherscan2Error.jpg" style="width: 70%;">

## **Other causes:**

This error can also occur if the symbol of your token is the same as a symbol already in our default list. To solve this, try adding the symbol with a '2' after. 

Using our above example, instead of 'SNT', you would add the token as 'SNT2'.

This has no actual effect on the token itself, but is just a placeholder to make organizing your tokens easier.

[ethplorer]: https://www.ethplorer.io/

[etherscan]: https://www.etherscan.io/
