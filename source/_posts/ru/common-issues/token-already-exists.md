---
title: "Ошибка: токен уже существует!"
date: 2018-06-01 00:05:00
tags:
  - ошибка
  - токен
categories:
  - 
    - common-issues
primary_category: common-issues
primary_category_display_name: "Распространенные проблемы"
---

# __Ошибка: токен уже существует!__
###### {% read_time title "Error: Token Already Exists!" %} минут на чтение
***

Ошибка "Токен уже существует" может произойти, если неверный адрес контракта был добавлен в качестве пользовательского токена.

Чтобы найти верный адрес контракта, выполните следующие действия:



## __Использование [Ethplorer.io](https://www.ethplorer.io/)__

**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="/images/posts/common-issues/Ethplorer1Error.jpg" width="60%" />


**Step 2.** Use the contract address (not the creator address) for the custom token field in MEW. Также убедитесь, что используете верное количество знаков после запятой.

<img src="/images/posts/common-issues/Ethplorer2Error.jpg" width="80%" />



## __Использование [Etherscan.io](https://www.etherscan.io/)__
**Step 1.** Enter the name of the token you want to add to your MyEtherWallet interface.

<img src="/images/posts/common-issues/Etherscan1Error.jpg" style="width: 40%;" />


**Step 2.** Use the contract address for the custom token and be sure to use the correct decimals as well.

<img src="/images/posts/common-issues/Etherscan2Error.jpg" style="width: 70%;" />



## __Другие причины:__

Также данная ошибка может произойти, если символ вашего токена совпадает с символом, уже находящимся в нашем списке по умолчанию. Для решения этой проблемы попробуйте добавить после символа "2".

Используя наш пример выше, вместо "SNT" вам нужно было бы добавить токен как "SNT2"

Это не оказывает никакого влияния на сам токен, это просто заполнитель для упрощения упорядочивания ваших токенов.