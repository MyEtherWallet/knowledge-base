---
title: "Missing Funds Sent from Binance (BSC Network)"
date: 2018-06-01 00:01:00
tags:
  - change
  - network
  - networks
  - bsc
  - binance
  - bep20
categories:
  - 
    - networks-and-nodes
primary_category: networks-and-nodes
primary_category_display_name: "Networks And Nodes"
author: MyEtherWallet (MEW)
---

# **Missing Funds Sent from Binance (BSC Network)**

###### {% read_time title "Missing Funds Sent from Binance (BSC Network)" %} min read

* * *

**Did you send ETH or tokens from Binance to your MEW address, but don’t see them on MEW?**

This might be because you sent them as BEP20 tokens on the **BSC network**, instead of the Ethereum network. Luckily, **MEW web supports the BSC network**, so it’s easy to switch over and start using your funds.

_Note that MEW does not support the BEP2 Binance chain (BNB), as this is separate from the Binance Smart Chain (BSC). The Binance chain uses addresses that begin with 'bnb..', and each transfer requires an additional memo field. It's impossible to send funds from the Binance chain to MEW._

First, double-check that your funds are on the BSC network.

In order to check this, head to [BscScan][bscscan] and enter the public address (0x..) used to receive your funds from Binance.

If you sent ETH or another token, it will show your balance under the ‘Token’ drop-down towards the mid-left of the page.

<img src="/images/posts/transactions/bsc2.png" alt="Image of BscScan" style="max-width: 110%;" />

Once you have confirmed that your funds are on the BSC network, you can move on to accessing these funds with MEW web.

### **Accessing the BSC network on MEW web**

<br>

_If you’re using MEW CX, MetaMask, or Dapper to connect, you won’t be able to change your network to access the BSC chain. In these scenarios, if you must gain access to your funds, it is recommended to [use MEW offline][offline] to achieve your transfers. This process is a bit complicated, but it’s worth it for the long-term security of your wallet._

The first step to recover your funds is to access your wallet on the MEW web interface.

<img src="/images/posts/transactions/bsc3.png" alt="Image of MEW web accessed" style="max-width: 110%;" />

Once you’ve accessed your wallet, change your network by clicking ‘Change’ in the ‘Network’ section, near the upper-right hand corner of the interface. Locate ‘BSC’ in the list of networks that appears, and select ‘bscscan.com’.

<img src="/images/posts/transactions/bsc4.png" alt="Image of BscScan Network" style="max-width: 120%;" />

Now your interface should change to show ‘BNB’ under the ‘Balance’ section, instead of ETH.

<img src="/images/posts/transactions/bsc5.png" alt="Image of MEW web on BSC" style="max-width: 110%;" />

If you’re looking for ETH or another token, you’ll need to add it as a custom token in the Token list to the right. The same rules apply for adding tokens on the BSC network as in our article detailing [how to add custom tokens][custom] on Ethereum, however you’ll be using [BscScan][bscscan] instead of Etherscan.io.

<img src="/images/posts/transactions/bsc6.png" alt="Image of adding ETH custom token" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc7.png" alt="Image of ETH token in MEW web" style="max-width: 120%;" />

### **Transferring Back to Ethereum**

<br>

After your find your tokens, it's up to you whether or not you'd like to keep them on the BSC chain or send them back to Ethereum.

If you want to switch back to Ethereum, you'll need to send these funds back to Binance to swap them over.

You will need a bit of BNB in your wallet to use as gas. This amount can be very small, such as 0.1 BNB. After sending the BNB to your wallet address, you might need to manually refresh your balance to see it reflected in the MEW web interface.

<img src="/images/posts/transactions/bsc8.png" alt="Image of BNB in MEW web" style="max-width: 110%;" />

Once you're ready, get a deposit address for Ethereum on the BSC chain on Binance. Make sure you've selected the BSC chain. Fill out your transaction, and send your funds through the BSC chain to Binance.

<img src="/images/posts/transactions/bsc9.png" alt="Image of Binance deposit address" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc10.png" alt="Image of transaction to Binance" style="max-width: 110%;" />

<img src="/images/posts/transactions/bsc11.png" alt="Image of successful transaction" style="max-width: 120%;" />

Afterwards, you can also send any leftover BNB to Binance as well, if you want.

<img src="/images/posts/transactions/bsc12.png" alt="Image of empty MEW web balance" style="max-width: 110%;" />

Next time you send your funds back to MEW, make sure you choose the 'Ethereum' option, to see your funds on the Ethereum blockchain.

<img src="/images/posts/transactions/bsc13.png" alt="Image of ETH back on Ethereum in MEW web" style="max-width: 110%;" />

[bscscan]: https://www.bscscan.com/

[offline]: /@@@@@@/offline/using-mew-offline/

[custom]: /@@@@@@/tokens/how-to-add-custom-token/
