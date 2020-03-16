---
title: "Есть ли у MyEtherWallet API?"
date: 2018-06-01 00:02:00
tags:
  - api
categories:
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Diving Deeper"
alias:
  - diving-deeper/does-myetherwallet-have-an-api.html
---

# __Does MyEtherWallet have an API?__
###### {% read_time title "Does MyEtherWallet have an API?" %} минут на чтение
***

## __Вот API-документация для MEW, Etherscan, Infura, Alchemy, и Rivet (пяти основных поставщиков публичных узлов):__

* MEW
* [Infura](https://infura.io/#how-to)
* [Etherscan](https://etherscan.io/apis)
* [Alchemy](https://docs.alchemyapi.io/)
* [Rivet](https://rivet.cloud/)

Наша внутренняя инфраструктура работает на AWS. You can actually do it yourself and run your own public or private node via [these instructions](https://github.com/MyEtherWallet/docker-geth-lb).

Либо вы можете за небольшую плату использовать [QuikNode](https://quiknode.io/), что еще больше упростит процесс.

В обоих случаях вы можете подключиться к своему новому узлу с помощью опции "Добавить пользовательский узел" при выборе сети в правом верхнем углу. Устранение неполадок при подключении к вашему узлу можно найти [здесь](/@@@@@@/networks-and-nodes/unable-to-connect-to-custom-node/).

Либо используйте наш API напрямую (смотрите документацию в API выше).
