---
title: "Error: Unable to Locate Corresponding Transfer Event Log"
lang: en
date: 2018-06-01 00:07:00
tags:
- unable
- transfer
- event
- log
categories:
- [common-issues]
primary_category: common-issues
primary_category_display_name: "Common Issues"
alias:
- tokens/errcode-unable-to-locate-corresponding-transfer-event-log.html
---

# __Error: Unable to Locate Corresponding Transfer Event Log__
###### {% read_time title "Error: Unable to Locate Corresponding Transfer Event Log" %} min read
***

This error appears on [Etherscan][etherscan] when a sender tries to transfer out more tokens than they have.
## __This can be due to a few possible events:__
* When adding a custom token:
    * You specified the incorrect token contract address (resulting in an attempt to send a token that you have none of).
    * You specified the incorrect token decimal (resulting in an attempt to send 50,000,000 of a token, as opposed to 5,000 of it).

* When sending a default token:
    * You specified an amount to send higher than you actually own.


## __How can I stop this from happening?__
* Remove and re-add the custom token.
    * Be sure to specify the correct decimals and token contract address this time.
    * Read our article on [adding custom tokens][addCustom].

* Make sure that you are attempting to send either the same amount of tokens that you have, or less.

[etherscan]: https//www.etherscan.io/
[addCustom]: /posts/tokens/how-to-add-custom-token/