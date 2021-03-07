---
title: "Error: Token Already Exists!"
date: 2018-06-01 00:05:00
tags:
  - error
  - token
categories:
  - 
    - token
primary_category: token
primary_category_display_name: "Tokens"
author: MyEtherWallet (MEW)
---

# **Default or Custom Token Already Exists**

###### {% read_time title "Error: Token Already Exists!" %} min read

* * *

A 'Token Already Exists' error can occur when an incorrect contract address was added as a custom token.

To find the correct contract address, follow these instructions:

## **Using [Ethplorer.io](https://www.ethplorer.io/)**

**Paso 1.** Ingresa el nombre del token que quieres agregar a tu interfaz de MyEtherWallet.

<img src="/images/posts/common-issues/Ethplorer1Error.jpg" alt="Image of Ethplorer token selection" width="60%" />

**Step 2.** Use the contract address (not the creator address) for the custom token field in MEW. Be sure to use the correct decimal count as well.

<img src="/images/posts/common-issues/Ethplorer2Error.jpg" alt="Image of Ethplorer token contract address" width="80%" />

## **Using [Etherscan.io](https://www.etherscan.io/)**

**Paso 1.** Ingresa el nombre del token que quieres agregar a tu interfaz de MyEtherWallet.

<img src="/images/posts/common-issues/Etherscan1Error.jpg" alt="Image of Etherscan token selection" style="width: 40%;" />

**Step 2.** Use the contract address for the custom token and be sure to use the correct decimals as well.

<img src="/images/posts/common-issues/Etherscan2Error.jpg" alt="Image of Etherscan token contract address" style="width: 70%;" />

## **Other causes:**

This error can also occur if the symbol of your token is the same as a symbol already in our default list. To solve this, try adding the symbol with a '2' after.

Using our above example, instead of 'SNT', you would add the token as 'SNT2'.

This has no actual effect on the token itself, but is just a placeholder to make organizing your tokens easier.
