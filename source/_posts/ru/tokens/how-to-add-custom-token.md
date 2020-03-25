---
title: "Как добавить кастомный токен"
date: 2018-06-01 00:02:00
tags:
  - кастомный
  - токен
  - добавление
  - добавить
categories:
  - 
    - ЧЗВ
  - 
    - токен
primary_category: токен
primary_category_display_name: "Токены"
alias:
  - send/adding-new-token-and-sending-custom-tokens.html
---

# __Как добавить кастомный токен__
###### Время прочтения: {% read_time title "Как добавить свой токен" %} мин.
***

Любой токен ERC20 можно добавить в локальный интерфейс MEW, следуя этим инструкциям.



## __Убедитесь, что он уже не установлен в постоянном списке токенов__

Сначала вы должны убедиться, что вашего токена нет в нашем интерфейсе по умолчанию.



**Шаг 1.** [Откройте ваш кошелек](/@@@@@@/getting-started/how-to-access-your-wallet/).



<img src="/images/posts/tokens/Custom1.png" width="85%" />



**Шаг 2.** Чтобы найти необходимый токен, выполните поиск по нашему списку токенов по умолчанию.
* Если вы видите токен, но не видите баланса, возможно, у нас размещен токен с тем же символом, но с другим адресом контракта. В этом случае продолжайте выполнять эти шаги, как если бы вы не нашли его в списке.



**Шаг 3.** Если вы не видите ваш токен, продолжайте следовать инструкциям в данной статье.



## __Поиск информации о токене__

Для добавления токена в наш интерфейс вам понадобятся три параметра: адрес контракта, число десятичных знаков и символ. Всю эту информацию можно найти с помощью проводника блокчейна Ethereum, например Etherscan.io или Ethplorer.io. Мы покажем, как ее найти через Etherscan.io.



**Шаг 1.** Направляйтесь на [Etherscan](https://etherscan.io).



<img src="/images/posts/tokens/Custom2.png" width="85%" />



**Шаг 2.** Если у вас есть баланс токена, который вы хотите добавить, выполните поиск вашего публичного адреса (0x...) в поисковом поле.

* Если у вас нет баланса и вы хотите добавить токен до его получения, найдите его при помощи строки поиска. Убедитесь, что вы нашли правильный токен — в противном случае вы добавите в свой список другой токен.
* Нет ничего страшного если вы отправите свой токен ERC20 на свой адрес до того, как добавить его. На самом деле это может облегчить поиск через etherscan.



<img src="/images/posts/tokens/Custom3.png" width="60%" />



**Step 3.** Find your token in the token balances dropdown. Select the token to be taken to a token information screen.



<img src="/images/posts/tokens/Custom4.png" width="85%" />



**Step 4.** Here, you will find the token’s contract address and decimal count to the right of the interface. Remember the decimal count, and click on the contract address to be taken to the token’s main screen.



<img src="/images/posts/tokens/Custom5.png" width="70%" />



**Step 5.** Copy this address to your clipboard, and head back to MEW. At the top of the token list, click ‘+ Custom Tokens’ to bring up the custom token addition screen.



<img src="/images/posts/tokens/Custom6.png" width="50%" />



**Step 6.** Paste the contract address into the top field, input the token’s symbol (abbreviation) into the second field, and enter the decimal count last. Then click ‘Save’. Все готово!



## __Распространенные проблемы__

#### *«Токен уже существует!»*



<img src="/images/posts/tokens/Custom7.png" width="50%" />



If you see this error, there is a simple fix for it. Re-enter your custom token information, but put a ‘2’ after the symbol. I.e. If the token’s symbol is ‘XYZ’, enter is as ‘XYZ2’.



<img src="/images/posts/tokens/Custom8.png" width="50%" />



If you still get this error after submitting it with the modified symbol, then your token is likely already a default token. Try searching the token list again for the symbol. If you see it with a balance of 0, but etherscan.io shows a balance, then you’ll likely need to change networks to another ETH node, in the upper right-hand corner.



## __Мои добавленные токены исчезают!__

If your custom tokens are disappearing every time you access our interface, make sure that you do not have a cache-clearing software installed (i.e. CCleaner). Your custom token information is stored locally in your browser, so this software will clear this information and require you to re-submit the token every time you access your wallet.



## __Я хочу, чтобы он был внесен в список токенов по умолчанию!__

We are always happy to support new tokens in our default list. To achieve this, simply submit a pull request to [our repo on GitHub](https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth). For more information on this process, visit our article on [how to add a default token](/@@@@@@/tokens/adding-token-as-a-default/).