---
title: "Есть ли у API MEW лимит на количество возможных запросов?"
date: 2018-06-01 00:01:00
tags:
  - api
  - лимит
  - запросы
categories:
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Более глубокое ознакомление"
alias:
  - ru/diving-deeper/myetherapi-api-limits.html
---

# **Есть ли у API MEW лимит на количество возможных запросов?**

###### {% read_time title "Does MEW API Have a Limit on the Amount of Requests I Can Make?" %} минут на чтение

* * *

Если вы часто пользуетесь нашим API или MyEtherWallet (MEW), вы можете получить ограничение по количеству запросов.

## **Если так, обычно это выглядит следующим образом:**

<div class="scrollbox">
Ошибка: недопустимый ответ JSON RPC: ОШИБКА: не удалось выполнить запрос. Источник закрыл подключение. Сгенерировано cloudfront (CloudFront) ID запроса: XXXXXXX \"
  at Object.InvalidResponse (/home/drone/projects/mew/asset-position-disposal/node_modules/web3/lib/web3/errors.js:38:16)
  at XMLHttpRequest.request.onreadystatechange (/home/drone/projects/mew/asset-position-disposal/node_modules/web3/lib/web3/httpprovider.js:115:32)
  at XMLHttpRequestEventTarget.dispatchEvent (/home/drone/projects/mew/asset-position-disposal/node_modules/xhr2/lib/xhr2.js:64:18)
  at XMLHttpRequest._setReadyState (/home/drone/projects/mew/asset-position-disposal/node_modules/xhr2/lib/xhr2.js:354:12)
  at XMLHttpRequest._onHttpResponseEnd (/home/drone/projects/mew/asset-position-disposal/node_modules/xhr2/lib/xhr2.js:509:12)
  at IncomingMessage.&lt;anonymous&gt; (/home/drone/projects/mew/asset-position-disposal/node_modules/xhr2/lib/xhr2.js:469:24)
  at emitNone (events.js:110:20)
  at IncomingMessage.emit (events.js:207:7)
  at endReadableNT (_stream_readable.js:1047:12)
  at _combinedTickCallback (internal/process/next_tick.js:102:11)
</div>

(<a href="https://ethereum.stackexchange.com/questions/24737/myetherwallet-json-rpc-interface-ratelimiting/25113#25113">Источник</a>)

На момент написания данной статьи MyEtherWallet ограничивает количество запросов до 400 в минуту (то есть примерно 6 запросов в секунду). Это делается, чтобы предотвратить DDOS-атаки, которые случались раньше, и избежать злоупотребления нашими узлами.

Этого должно быть более чем достаточно для использования одним человеком, однако вы можете без колебаний связаться с нами и объяснить, почему вам нужно больше, и мы сможем внести изменения.

Если вам нужно в среднем больше 400 запросов в минуту или вы просто хотите обеспечить непрерывную работу, мы настоятельно рекомендуем вам обзавестись собственным узлом.

Наша внутренняя инфраструктура работает на AWS и является общедоступной через Docker + CloudFormation. На самом деле вы можете сделать это сами и управлять собственным публичным или закрытым узлом с помощью [этих инструкций](https://github.com/MyEtherWallet/docker-geth-lb).

Либо вы можете за небольшую плату использовать [QuikNode](https//quicknode.io/), что еще больше упростит процесс.

В обоих случаях вы можете подключиться к своему новому узлу с помощью опции "Добавить кастомный узел" при выборе сети в правом верхнем углу. Более подробную информацию о том, как подключиться к вашему собственному узлу, можно найти [здесь](/@@@@@@/networks-and-nodes/unable-to-connect-to-custom-node/), либо вы можете подключиться напрямую через API.
