---
title: "Error: Token Already Exists!"
date: 2019-01-01 00:01:00
tags:
- error
- token
categories:
- common_issues
primary_category: "common_issues"
primary_category_display_name: "Common Issues"
---

## Error: Token Already Exists!
***

A 'Token Already Exists' error can occur when an incorrect contract address was added as a custom token. 

To find the correct contract address, follow these instructions:



### Using [Ethplorer.io](https://ethplorer.io)

**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="https://github.com/stephenmew/KBimages/blob/master/Ethplorer1Error.jpg?raw=true" width="60%">

**Step 2.** Use the contract address (not the creator address) for the custom token field in MEW. Be sure to use the correct decimal count as well.

<img src="https://github.com/stephenmew/KBimages/blob/master/Ethplorer2Error.jpg?raw=true" width="80%">



### Using [Etherscan.io](https://etherscan.io)
**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="https://github.com/stephenmew/KBimages/blob/master/Etherscan1Error.jpg?raw=true" style="width: 40%;">

**Step 2.** Use the contract address for the custom token and be sure to use the correct decimals as well.

<img src="https://github.com/stephenmew/KBimages/blob/master/Etherscan2Error.jpg?raw=true" style="width: 70%;">



### Other causes:

This error can also occur if the symbol of your token is the same as a symbol already in our default list. To solve this, try adding the symbol with a '2' after. 

Using our above example, instead of 'SNT', you would add the token as 'SNT2'.

This has no actual effect on the token itself, but is just a placeholder to make organizing your tokens easier.