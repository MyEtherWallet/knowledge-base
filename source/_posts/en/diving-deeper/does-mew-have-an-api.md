---
title: "Does MyEtherWallet have an API?"

date: 2018-06-01 00:02:00
tags:
- api
categories:
- [diving-deeper]
primary_category: diving-deeper
primary_category_display_name: "Diving Deeper"
alias:
  - en/diving-deeper/does-myetherwallet-have-an-api.html
---

# **Does MyEtherWallet have an API?**

###### {% read_time title "Does MyEtherWallet have an API?" %} min read

* * *

## **Here are the API docs for MEW, Etherscan, Infura, Alchemy, and Rivet (the five main providers of public nodes):**

-   MEW
-   [Infura][infurahowto]
-   [Etherscan][etherscanapi]
-   [Alchemy][alchapi]
-   [Rivet][rivetapi]

Our backend infrastructure is on AWS. You can actually do it yourself and run your own public or private node via [these instructions][instructions]. 

Or you could pay a small fee and use [QuikNode][quiknode], which makes it even easier.

For both of these options, you could also connect to your new node via the 'Add Custom Node' option in the network selector in the top-right corner. Troubleshooting for connection to your own node can be found [here][ownNode].

Or use our API directly to it (see the docs in the above APIs).

[mewapi]: http://www.myetherapi.com/

[infurahowto]: https://infura.io/#how-to

[etherscanapi]: https://etherscan.io/apis

[instructions]: https://github.com/MyEtherWallet/docker-geth-lb

[quiknode]: https://quiknode.io/

[ownNode]: /@@@@@@/networks-and-nodes/unable-to-connect-to-custom-node/

[rivetapi]: https://rivet.cloud/

[alchapi]: https://docs.alchemyapi.io/
