---
title: "Adding Your Token as a Default Token"
lang: ru
date: 2018-06-01 00:01:00
tags:
- token
- add
- adding
categories:
- [faqs]
- [token]
primary_category: token
primary_category_display_name: "Tokens"
alias:
- tokens/token-creators-add-your-token-to-myetherwallet.html
---

# __Adding Your Token as a Default Token__
###### {% read_time title "Adding Your Token as a Default Token" %} min read
***

If you are someone who is just experimenting with tokens, you can [add a custom token][addCustom] to your local version of MyEtherWallet (MEW).

If you have a token that a lot of other people also have, or will have in the coming days, you can add it as a permanent, default token to our site. 



## __You will need to provide:__

* **Name** of your token.
* **Symbol** of your token.
* **Address** of your token.
* **Decimals** of your token.
* Your **official Website**.
* Your direct **customer support email**.
    * Due to high numbers of token sale holders NOT providing support to their investors, we will remove your token if you do not help the people who made you millionaires.
* Optionally, you may also include your blog, social media sites, chat channels, your logo, etc.



### 1. Submit your tokens as Default Tokens.
* Go to https://github.com/MyEtherWallet/ethereum-lists/blob/master/src/tokens/eth.
    * If your token exists on a different network, you can [add them here][addhere].
* Login or join GitHub.
* Click the pencil icon in upper right.
* Scroll to the letter of your token (they are in alphabetical order).
* Copy an existing token starting at the `{` and ending with `},`.
* Remove any information that you copied that isn't yours.
* Add your address, decimals, name, and symbol.
* Add your website.
* Add your support email.
* Add any other additional links.
* At the bottom under "Commit changes" type "Added `YOUR_TOKEN_SYMBOL` Token to Defaults" in the title box.
* In the bigger box below that, you can add any additional information you'd like to let us know about.
* Click the green "Propose File change" button.
* This next page is a review of what you did.
* Click the "Create Pull Request" button, twice.
* That's it. You successfully made a new pull request!
* We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.



### 2. Add your token sale address and manual gas limits to ensure a smooth sale.
* Go here https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js.
* Find an existing entry that is over, or use our donation address (the top one).
* Replace the information with your information:
    * Address: The address users will be sending to.
    * Gas Limit: The gas limit you are recommending that ensures there will be no `Out of Gas` errors.
    * Data: Optional. If there is a standard data field, add that string.
    * Message: Optional. If people need to generate data, include a note here to remind them. You can include the block start times or date and what token sale it is for.
* At the bottom under "Commit changes" type "Manual gas limits for upcoming `YOUR_TOKEN_SYMBOL` token" in the title box.
* Any other notes you would like us to see can be included below.
* Click the green "Propose File change" button.
* This next page is a review of what you did.
* Click the "Create Pull Request" button, twice.
* That's it. You successfully made a new pull request!
* We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.



### 3. Adding your Contract / ABI.
We now provide users with the ability to enter the address, and MEW will auto-populate with the ABI. If you have a contract that is **NOT** your ERC-20 token contract that users will actually be interacting with:

* Go to https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json.
* Copy from `{` to `},`.
* Replace information with your contract name, address, and ABI.
* At the bottom under "Commit changes" type "Added `YOUR_CONTRACT_NAME` contract ABI" in the title box.
* Any other notes you would like us to see can be included below.
* Click the green "Propose File change" button.
* This next page is a review of what you did.
* Click the "Create Pull Request" button, twice.
* That's it. You successfully made a new pull request! 
* We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.

[addCustom]: /ru/tokens/how-to-add-custom-token/
[addhere]: https://github.com/MyEtherWallet/ethereum-lists/blob/master/src/tokens