---
title: "Есть ли у MyEtherWallet API?"
date: 2018-06-01 00:02:00
tags:
  - api
categories:
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Более глубокое ознакомление"
alias:
  - diving-deeper/does-myetherwallet-have-an-api.html
---

# **Есть ли у MyEtherWallet API?**

###### {% read_time title "Does MyEtherWallet have an API?" %} минут на чтение

* * *

## **MEW не имеет API, но вот API-документация для четырех основных поставщиков публичных узлов: Etherscan, Infura, Alchemy, и Rivet:**

-   [Infura](https://infura.io/#how-to)
-   [Etherscan](https://etherscan.io/apis)
-   [Alchemy](https://docs.alchemyapi.io/)
-   [Rivet](https://rivet.cloud/)

Наша внутренняя инфраструктура работает на AWS. Вы можете сделать это самостоятельно и [запустить свой собственный публичный или частный узел](https://github.com/MyEtherWallet/docker-geth-lb).

Либо вы можете за небольшую плату использовать [QuikNode](https://quiknode.io/), что еще больше упростит процесс.

В обоих случаях вы можете подключиться к своему новому узлу с помощью опции "Добавить кастомный узел" при выборе сети в правом верхнем углу. Для дополнительной информации обратитесь к нашей статье о [устранении неполадок кастомных узлов](/@@@@@@/networks-and-nodes/unable-to-connect-to-custom-node/).

Либо используйте наш API напрямую (смотрите документацию в API выше).
