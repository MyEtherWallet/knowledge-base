---
title: "Unable to Connect to Custom Node"
date: 2018-06-01 00:02:00
tags:
- unable
- connect
- custom
- node
categories:
- [networks_and_nodes]
primary_category: networks_and_nodes
primary_category_display_name: "Networks And Nodes"
---

# __Unable to Connect to Custom Node__
###### ⏰ 3 min read
***

* Verify the URL you entered is correct.

* Verify the port you entered is correct.

* Verify that if you are connecting to an http:// node you are running MyEtherWallet locally (NOT over https://).

* Verify you are running with:

    * `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"`

    * `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`
    
* Verify your node is actually up and running.

* Try removing the node and adding it again.

* Try changing the node in the top-right corner to ETH (Etherscan.io) or ETH (Infurio.io).

* Try using Google Chrome, or a different browser.

* Ensure you do not have a firewall or something else that may be blocking the connection.