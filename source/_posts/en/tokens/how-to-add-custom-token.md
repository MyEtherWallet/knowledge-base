---
title: "How to Add a Custom Token"

date: 2018-06-01 00:02:00
tags:
- custom
- token
- adding
- add
categories:
- [faqs]
- [token]
primary_category: token
primary_category_display_name: "Tokens"
alias:
- send/adding-new-token-and-sending-custom-tokens.html
---

# __How to Add a Custom Token__
###### {% read_time title "How to Add a Custom Token" %} min read
***

Any ERC20 token can be added to your local MEW interface by following these instructions.



## __Make sure it isn’t already a default token__

First you’ll want to make sure your token isn’t already listed in our interface.



**Step 1.** [Access your wallet][accessMEW]. 



<img src="/images/posts/tokens/Custom1.png" width="85%">



**Step 2.** Search our default token list for the token you are looking for.
* If you see the token, but don’t see a balance, it’s possible our default listing is for a token with the same symbol but a different contract address. In this case, continue with these steps as if you didn’t see it in the list.



**Step 3.** If you don’t see your token, continue with this article.



## __Looking for the token’s information__

You will need three pieces of information to add a custom token with our interface: the contract address, decimal count, and symbol. All of this information can be found via an Ethereum blockchain explorer, like Etherscan.io or Ethplorer.io. We will show how to find this via Etherscan.io.



**Step 1.** Head to [Etherscan][etherscan]. 



<img src="/images/posts/tokens/Custom2.png" width="85%">



**Step 2.** If you have a balance of the token you are trying to add, search for your public address (0x...) in the search bar. 

* If you do not have a balance and would like to add the token before receiving it, search for the token in the search bar. Make sure you find the correct token, or you will be adding another token to your list.
* There is no harm in sending your ERC20 token to your address before adding it as a custom token. In fact, this may make it easier to find via etherscan.



.
<img src="/images/posts/tokens/Custom3.png" width="60%">



**Step 3.** Find your token in the token balances dropdown. Select the token to be taken to a token information screen. 



<img src="/images/posts/tokens/Custom4.png" width="85%">



**Step 4.** Here, you will find the token’s contract address and decimal count to the right of the interface. Remember the decimal count, and click on the contract address to be taken to the token’s main screen.



<img src="/images/posts/tokens/Custom5.png" width="70%">



**Step 5.** Copy this address to your clipboard, and head back to MEW. At the top of the token list, click ‘+ Custom Tokens’ to bring up the custom token addition screen. 



<img src="/images/posts/tokens/Custom6.png" width="50%">



**Step 6.** Paste the contract address into the top field, input the token’s symbol (abbreviation) into the second field, and enter the decimal count last. Then click ‘Save’. You’re done!



## __Common Issues__

#### *“Token Already Exists!”*



<img src="/images/posts/tokens/Custom7.png" width="50%">



If you see this error, there is a simple fix for it. Re-enter your custom token information, but put a ‘2’ after the symbol. I.e. If the token’s symbol is ‘XYZ’, enter is as ‘XYZ2’.



<img src="/images/posts/tokens/Custom8.png" width="50%">



If you still get this error after submitting it with the modified symbol, then your token is likely already a default token. Try searching the token list again for the symbol. If you see it with a balance of 0, but etherscan.io shows a balance, then you’ll likely need to change networks to another ETH node, in the upper right-hand corner. 



## __My custom tokens are disappearing!__

If your custom tokens are disappearing every time you access our interface, make sure that you do not have a cache-clearing software installed (i.e. CCleaner). Your custom token information is stored locally in your browser, so this software will clear this information and require you to re-submit the token every time you access your wallet. 



## __I’d like it to be a default token!__

We are always happy to support new tokens in our default list. To achieve this, simply submit a pull request to [our repo on GitHub][githubMEW]. For more information on this process, visit our article on [how to add a default token][addDefault]. 

[accessMEW]: /@@@@@@/getting-started/how-to-access-your-wallet/
[etherscan]: https://etherscan.io
[addDefault]: /@@@@@@/tokens/adding-token-as-a-default/
[githubMEW]: https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth