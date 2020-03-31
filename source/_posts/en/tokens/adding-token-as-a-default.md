---
title: "Adding Your Token as a Default Token"

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

# **Adding Your Token as a Default Token**

###### {% read_time title "Adding Your Token as a Default Token" %} min read

* * *

If you are someone who is just experimenting with tokens, you can [add a custom token][addCustom] to your local version of MyEtherWallet (MEW).

If you have a token that a lot of other people also have, or will have in the coming days, you can add it as a permanent, default token to our site. 

## **You will need to provide:**

-   **Name** of your token.
-   **Symbol** of your token.
-   **Address** of your token.
-   **Decimals** of your token.
-   Your **official Website**.
-   Your direct **customer support email**.
    -   Due to high numbers of token sale holders NOT providing support to their investors, we will remove your token if you do not help the people who made you millionaires.
-   Optionally, you may also include your blog, social media sites, chat channels, your logo, etc.

## **Submit your tokens as Default Tokens**

**Step 1.** Go to <https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth>.

-   If your token exists on a different network, you can [add them here][addhere].

**Step 2.** Login or join GitHub.

**Step 3.** Click 'Create New File' in the upper right.

**Step 4.** The file's name must be in the format `<YourTokenAddress>.json`. 

**Step 5.** Fill in the template pasted below with your information:

    {
    "symbol": "",

    "name": "",

    "type": "ERC20",

    "address": "",
    "ens_address": "",
    "decimals": ,
    "website": "",
    "logo": {
        "src": "",
        "width": "",
        "height": "",
        "ipfs_hash": ""
    },
    "support": {
        "email": "",
        "url": ""
    },
    "social": {
        "blog": "",
        "chat": "",
        "facebook": "",
        "forum": "",
        "github": "",
        "gitter": "",
        "instagram": "",
        "linkedin": "",
        "reddit": "",
        "slack": "",
        "telegram": "",
        "twitter": "",
        "youtube": ""
    }
    }

<br>

**Step 6.** Once you're finished, click 'Propose New File'.

-   Feel free to add any additional information you'd like to let us know about.

**Step 7.** Review what you've just made, then press 'Create Pull Request' twice.

**Step 8.** That's it. You successfully made a new pull request!

-   We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.

<br>

## **Add your token sale address and manual gas limits to ensure a smooth sale**

-   Go here <https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js>.
-   Find an existing entry that is over, or use our donation address (the top one).
-   Replace the information with your information:
    -   Address: The address users will be sending to.
    -   Gas Limit: The gas limit you are recommending that ensures there will be no `Out of Gas` errors.
    -   Data: Optional. If there is a standard data field, add that string.
    -   Message: Optional. If people need to generate data, include a note here to remind them. You can include the block start times or date and what token sale it is for.
-   At the bottom under "Commit changes" type "Manual gas limits for upcoming `YOUR_TOKEN_SYMBOL` token" in the title box.
-   Any other notes you would like us to see can be included below.
-   Click the green "Propose File change" button.
-   This next page is a review of what you did.
-   Click the "Create Pull Request" button, twice.
-   That's it. You successfully made a new pull request!
-   We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.

<br>

## **Adding your Contract / ABI**

We now provide users with the ability to enter the address, and MEW will auto-populate with the ABI. If you have a contract that is **NOT** your ERC-20 token contract that users will actually be interacting with:

-   Go to <https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json>.
-   Copy from `{` to `},`.
-   Replace information with your contract name, address, and ABI.
-   At the bottom under "Commit changes" type "Added `YOUR_CONTRACT_NAME` contract ABI" in the title box.
-   Any other notes you would like us to see can be included below.
-   Click the green "Propose File change" button.
-   This next page is a review of what you did.
-   Click the "Create Pull Request" button, twice.
-   That's it. You successfully made a new pull request! 
-   We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.

[addCustom]: /@@@@@@/tokens/how-to-add-custom-token/

[addhere]: https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens
