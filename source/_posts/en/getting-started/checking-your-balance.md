---
title: "Checking Your Balance on the Ethereum Blockchain"

date: 2018-06-01 00:02:00
tags:
- faqs
- balance
- block
categories:
- [faqs]
- [get-started]
primary_category: get-started
primary_category_display_name: "Get Started"
alias:
  - en/getting-started/checking-balance-of-my-account.html
---

# **Checking Your Balance on the Ethereum Blockchain**

###### {% read_time title "Checking Your Balance on the Ethereum Blockchain" %} min read

* * *

## It's easy to check your balance and transaction history on an Ethereum blockchain explorer like [EthVM][ethvm], [Etherscan][etherscan], or [Ethplorer][ethplorer].

<br>

These websites offer a full history of your activity. All you have to do is search your public Ethereum address, which is the 42 character string beginning with '0x'. It is not recommended to unlock your wallet on a wallet interface like MEW every time you’d like to check your balance, for the security of your information. 

Be aware that when checking balances from different blockchains, like ETC, you will need to use a different blockchain explorer.

## **EthVM**

**Step 1.** Head to [EthVM][ethvm]. 

**Step 2.** In the search bar, enter your Ethereum public address, (0x…..).

**Step 3.** You will be taken to a wallet overview. 

-   At the top, the checksummed version of your address will be displayed. Read our article about [the differences between checksummed and non-checksummed addresses][checkSum].
-   Just below your address, you will see your total ETH balance, USD value equivalent, and the total number of different types of tokens you hold.
-   In the first tab, 'Transaction History', you will find a list of all your recent transactions.
-   In the 'ERC20 Tokens' tab, you can find your token balances. When looking for custom token information, this is where you can select a specific token to find its contract address, decimal count, and symbol. Check out our guide to learn more about [adding custom tokens to MEW][customTokens].
-   The last tab, 'NFTs', shows all your Non-Fungible ERC721 tokens. 

## **Etherscan**

**Step 1.** Head to [Etherscan.io][etherscan]. 

**Step 2.** In the search bar, enter your Ethereum public address, (0x…..).

**Step 3.** You will be taken to a wallet overview. 

-   At the top, you will see the checksummed version of your address. Read our article about [the differences between checksummed and non-checksummed addresses][checkSum].
-   In the ‘Overview’ section, you will see your ETH balance and value.
-   Under 'Token', you can find your Token Balances. When looking for custom token information, this is where you can select a specific token to find its contract address, decimal count, and symbol. Check out our guide to learn more about [adding custom tokens to MEW][customTokens].
-   The tabs at the bottom of the screen show the history of ETH, ERC20 token, and ERC721 token transactions.

## **Ethplorer**

**Step 1.** Head to [Ethplorer.io][ethplorer].

**Step 2.** In the search bar, enter your Ethereum public address, (0x…..).

**Step 3.** You will be taken to a wallet overview.

-   To the left, you will see the checksummed version of your address. Read our article about [the differences between checksummed and non-checksummed addresses][checkSum].
-   You can also find your ETH balance to the left, under ‘Address Information’.
-   To the right, you can find your Token Balances. When looking for custom token information, this is where you can select a specific token to find its contract address, decimal count, and symbol. Check out our guide to learn more about [adding custom tokens to MEW][customTokens].
-   The bottom of the screen shows the history of ETH, ERC20 token, and ERC721 token transactions. You can apply filters if you want to see just ETH or tokens, using tick marks at the top.

[ethvm]: https://www.ethvm.com

[etherscan]: https://etherscan.io

[ethplorer]: https://ethplorer.io

[customTokens]: /@@@@@@/tokens/how-to-add-custom-token/

[checkSum]: /@@@@@@/common-issues/not-checksummed/
