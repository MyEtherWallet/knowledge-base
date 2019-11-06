---
title: "Как добавить свой токен"
date: 2018-06-01 00:02:00
tags:
  - пользовательский
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

# __Как добавить свой токен__
###### Время прочтения: {% read_time title "Как добавить свой токен" %} мин.
***

Любой токен ERC20 можно добавить в локальный интерфейс MEW, следуя этим инструкциям.



## __Убедитесь, что он уже не установлен в качестве токена по умолчанию__

Сначала вы должны убедиться, что вашего токена нет в нашем интерфейсе.



**Step 1.** [Access your wallet](/@@@@@@/getting-started/how-to-access-your-wallet/).



<img src="/images/posts/tokens/Custom1.png" width="85%" />



**Step 2.** Search our default token list for the token you are looking for.
* Если вы видите токен, но не видите баланса, возможно, у нас размещен токен с тем же символом, но с другим адресом контракта. В этом случае продолжайте выполнять эти шаги, как если бы вы не нашли его в списке.



**Step 3.** If you don’t see your token, continue with this article.



## __Поиск информации о токене__

Для добавления токена в наш интерфейс вам понадобятся три параметра: адрес контракта, число знаков после запятой и символ. Всю эту информацию можно найти с помощью проводника блокчейна Ethereum, например Etherscan.io или Ethplorer.io. Мы покажем, как ее найти через Etherscan.io.



**Step 1.** Head to [Etherscan](https://etherscan.io).



<img src="/images/posts/tokens/Custom2.png" width="85%" />



**Step 2.** If you have a balance of the token you are trying to add, search for your public address (0x...) in the search bar.

* Если у вас нет баланса и вы хотите добавить токен до его получения, найдите его при помощи строки поиска. Убедитесь, что вы нашли правильный токен — в противном случае вы добавите в свой список другой токен.
* Вы можете отправить свой токена ERC20 на свой адрес перед тем, как добавить его. На самом деле это может облегчить поиск через etherscan.



<img src="/images/posts/tokens/Custom3.png" width="60%" />



**Step 3.** Find your token in the token balances dropdown. Выберите токен, и вы попадете на экран информации о токене.



<img src="/images/posts/tokens/Custom4.png" width="85%" />



**Step 4.** Here, you will find the token’s contract address and decimal count to the right of the interface. Запомните число знаков после запятой, а затем нажмите на адрес договора, чтобы перейти на главный экран токена.



<img src="/images/posts/tokens/Custom5.png" width="70%" />



**Step 5.** Copy this address to your clipboard, and head back to MEW. В верхней части списка токенов нажмите «+ свои токены», чтобы открыть экран добавления своих токенов.



<img src="/images/posts/tokens/Custom6.png" width="50%" />



**Step 6.** Paste the contract address into the top field, input the token’s symbol (abbreviation) into the second field, and enter the decimal count last. Затем нажмите «Сохранить». Все готово!



## __Распространенные проблемы__

#### *«Токен уже существует!»*



<img src="/images/posts/tokens/Custom7.png" width="50%" />



Если вы увидите эту ошибку, то ее можно легко исправить. Введите информацию о своем токене еще раз, но поставьте «2» после символа. Например, если символ токена — «XYZ», то укажите «XYZ2».



<img src="/images/posts/tokens/Custom8.png" width="50%" />



Если вы все еще видите эту ошибку после отправки токена с измененным символом, то возможно, что ваш токен уже является токеном по умолчанию. Попробуйте снова поискать его символ в списке токенов. Если он отображается с нулевым балансом, но на etherscan.io есть положительный баланс, то вам, вероятно, придется поменять узел ETH в верхнем правом углу.



## __Мои добавленные токены исчезают!__

Если токены, которые вы добавили, исчезают при каждом доступе к нашему интерфейсу, убедитесь, что у вас не установлено программное обеспечение для очистки кэша (например, CCleaner). Ваша пользовательская информация о токене хранится локально в вашем браузере, поэтому эта программа удалит эту информацию, и вам нужно будет добавлять токен при каждом доступе к кошельку.



## __Я хочу, чтобы он стал токеном по умолчанию!__

Мы всегда рады добавить в наш список токенов по умолчанию новые токены. Для этого просто отправьте pull-запрос в [наш репозиторий на GitHub](https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth). Для получения дополнительной информации об этом процессе прочитайте нашу статью о том, [как добавить токен по умолчанию](/@@@@@@/tokens/adding-token-as-a-default/).