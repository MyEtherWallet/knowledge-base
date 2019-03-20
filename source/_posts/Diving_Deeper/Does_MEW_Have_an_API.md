---
title: "Does MyEtherWallet have an API?"
date: 2018-06-01 00:02:00
tags:
- api
categories:
- [diving_deeper]
primary_category: diving_deeper
primary_category_display_name: "Diving Deeper"
---

# __Does MyEtherWallet have an API?__
***

## __Here are the API docs for MEW, Etherscan, and Infura (the three main providers of public nodes):__

* [MEW](http://www.myetherapi.com/)
* [Infura](https://infura.io/#how-to)
* [Etherscan](https://etherscan.io/apis)

Our backend infrastructure is on AWS. You can actually do it yourself and run your own public or private node via [these instructions](https://github.com/MyEtherWallet/docker-geth-lb). 

Or you could pay a small fee and use [QuikNode](https://quiknode.io/), which makes it even easier.

For both of these options, you could also connect to your new node via the 'Add Custom Node' option in the network selector in the top-right corner. Further details on how to connect to your own node can be found [here]().

Or use our API directly to it (see the docs in the above APIs).