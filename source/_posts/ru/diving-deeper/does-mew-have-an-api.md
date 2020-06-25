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

Наша внутренняя инфраструктура работает на AWS. You can actually do it yourself and [run your own public or private node](https://github.com/MyEtherWallet/docker-geth-lb).

Либо вы можете за небольшую плату использовать [QuikNode](https://quiknode.io/), что еще больше упростит процесс.

For both of these options, you could also connect to your own node via the 'Add Custom Node' option in the network selector in the top-right corner. For more information, read our article on [troubleshooting custom node issues](/@@@@@@/networks-and-nodes/unable-to-connect-to-custom-node/).

Либо используйте наш API напрямую (смотрите документацию в API выше).
