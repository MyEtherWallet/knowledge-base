---
title: "How to Add a Custom Token"
date: 2019-03-01 00:04:00
tags:
- custom
- token
- adding
- add
categories:
- tokens
primary_category: "tokens"
primary_category_display_name: "Tokens"
---

## How to Add a Custom Token
***

Any ERC20 token can be added to your local MEW interface by following these instructions.



### Make sure it isn’t already a default token

First you’ll want to make sure your token isn’t already listed in our interface.



**Step 1.** [Access your wallet](). 



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom1.png?raw=true" width="85%">



**Step 2.** Search our default token list for the token you are looking for.
* If you see the token, but don’t see a balance, it’s possible our default listing is for a token with the same symbol but a different contract address. In this case, continue with these steps as if you didn’t see it in the list.



**Step 3.** If you don’t see your token, continue with this article.



### Looking for the token’s information

You will need three pieces of information to add a custom token with our interface: the contract address, decimal count, and symbol. All of this information can be found via an Ethereum blockchain explorer, like Etherscan.io or Ethplorer.io. We will show how to find this via Etherscan.io.



**Step 1.** Head to [Etherscan](https://etherscan.io). 



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom2.png?raw=true" width="85%">



**Step 2.** If you have a balance of the token you are trying to add, search for your public address (0x...) in the search bar. 

* If you do not have a balance and would like to add the token before receiving it, search for the token in the search bar. Make sure you find the correct token, or you will be adding another token to your list.
* There is no harm in sending your ERC20 token to your address before adding it as a custom token. In fact, this may make it easier to find via etherscan.



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom3.png?raw=true" width="60%">



**Step 3.** Find your token in the token balances dropdown. Select the token to be taken to a token information screen. 



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom4.png?raw=true" width="85%">



**Step 4.** Here, you will find the token’s contract address and decimal count to the right of the interface. Remember the decimal count, and click on the contract address to be taken to the token’s main screen.



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom5.png?raw=true" width="70%">



**Step 5.** Copy this address to your clipboard, and head back to MEW. At the top of the token list, click ‘+ Custom Tokens’ to bring up the custom token addition screen. 



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom6.png?raw=true" width="50%">



**Step 6.** Paste the contract address into the top field, input the token’s symbol (abbreviation) into the second field, and enter the decimal count last. Then click ‘Save’. You’re done!



### Common Issues

#### <i>“Token Already Exists!”</i>



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom7.png?raw=true" width="50%">



If you see this error, there is a simple fix for it. Re-enter your custom token information, but put a ‘2’ after the symbol. I.e. If the token’s symbol is ‘XYZ’, enter is as ‘XYZ2’.



<img src="https://github.com/stephenmew/KBimages/blob/master/Custom8.png?raw=true" width="50%">



If you still get this error after submitting it with the modified symbol, then your token is likely already a default token. Try searching the token list again for the symbol. If you see it with a balance of 0, but etherscan.io shows a balance, then you’ll likely need to change networks to another ETH node, in the upper right-hand corner. 



### My custom tokens are disappearing!

If your custom tokens are disappearing every time you access our interface, make sure that you do not have a cache-clearing software installed (i.e. CCleaner). Your custom token information is stored locally in your browser, so this software will clear this information and require you to re-submit the token every time you access your wallet. 



### I’d like it to be a default token!

We are always happy to support new tokens in our default list. To achieve this, simply submit a pull request to [our repo on GitHub](https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth). For more information on this process, visit our article on [how to add a default token](). 
