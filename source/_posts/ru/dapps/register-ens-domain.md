---
title: "ENS: регистрация домена"
date: 2018-06-01 00:02:00
tags:
  - ens
  - dapps
  - аукцион
  - аукционы
categories:
  - 
    - dapps
primary_category: dapps
primary_category_display_name: "Dapps"
---

# __ENS: регистрация домена__
###### {% read_time title "ENS: Registering a Domain" %} минут на чтение
***

Ethereum Name Service, также известная как ENS, — это доменная служба, присваивающая пользовательский домен, привязанный к адресу аккаунта вашего кошелька.

Домены ENS имеют формат `YourDomainHere.eth`. Смысл заключается в упрощении обычного публичного адреса до формы, более удобной в использовании и отправке другим. Есть и другие варианты использования, но это основной смысл этой услуги на данный момент.

В качестве простого примера можно привести адрес для поддержки MEW:

Обычный адрес для поддержки: `0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D`

ENS-адрес для поддержки: `mewtopia.eth`

Оба адреса ведут в один кошелек, однако ENS-домен гораздо удобнее.


## __Как зарегистрировать ENS-домен__

**Шаг 1.** Направляйтесь на сайт MyEtherWallet.com.
* Всегда проверяйте ссылку, чтобы убедиться, что вы находитесь на нашем настоящем сайте!

<img src="/images/posts/diving-deeper/ENS1-1.png" width="100%" />

**Шаг 1.** Откройте ваш кошелек.
* Если у вас еще нет кошелька, вам понадобится [создать новый кошелек](/@@@@@@/getting-started/how-to-create-a-wallet/).
* Также вам понадобится небольшая сумма ETH на [газ](/@@@@@@/transactions/what-is-gas/). Обычно мы рекомендуем `.01 ETH` для 1 - 2 транзакций. Инициализация и финализация доменов ENS считаются транзакциями.

<img src="/images/posts/diving-deeper/ENS1-2.png" width="100%" />

**Шаг 3.** Направляйтесь в раздел Dapps в левой части панели управления вашего кошелька. Его также можно найти в нижней части страницы, в разделе 'Dapps'.
* Здесь вы увидите опцию "ENS-менеджер". Нажмите на нее!

<img src="/images/posts/diving-deeper/ENS1-3.png" width="100%" />

**Шаг 4.** Введите желаемое доменное имя, чтобы увидеть, доступно ли оно.
* ENS-домены должны содержать 3 символа или более.
* Имейте в виду, что конечный результат будет выглядеть подобным образом: `YourDomainHere.eth`.
* Вы можете также найти доступные ENS-домены на Etherscan.io.
* Если вы получаете сообщение о том, что нужно перенести ENS-домен на новый сервер-регистратор, это значит, что он недоступен (за исключением случая, когда он уже ваш, тогда вы должны его перенести. Все миграции должны быть осуществлены до 4 мая 2020 года.)

<img src="/images/posts/diving-deeper/ENS1-4.png" width="100%" />

**Шаг 5.** Если выбранный домен доступен, вы можете зарегистрировать его. Выберите период времени, в течение которого хотите владеть доменом, и нажмите `Регистрация`.
* Стоимость обслуживания всех доменных имен составляет эквивалент 5 долларов США в год в ETH.
* Ими можно владеть неограниченное количество времени, пока вносится годовая плата.

<img src="/images/posts/diving-deeper/ENS1-5.png" width="100%" />

**Шаг 6.** После подтверждения транзакции ваш запрос домена будет обработан в течение пары минут. Когда все будет готово, еще раз выберите `Регистрация` и подтвердите вторую транзакцию.

<img src="/images/posts/diving-deeper/ENS1-6.png" width="80%" />

<img src="/images/posts/diving-deeper/ENS1-7.png" width="100%" />

<img src="/images/posts/diving-deeper/ENS1-8.png" width="100%" />

**Шаг 7.** Проверьте вашу транзакцию на Etherscan.io. В поле "Владелец" должен быть отображен ваш публичный адрес.

<img src="/images/posts/diving-deeper/ENS1-9.png" width="100%" />

**Этот процесс установит ваш адрес в качестве владельца домена.**

## __Поддержка домена с разными криптовалютами (BTC, LTC и другие!)__

**Шаг 1.** Чтобы завершить настройку вашего нового доменного имени для других криптовалют, найдите его еще раз на MyEtherWallet в Dapp-приложении ENS Manager.

<img src="/images/posts/diving-deeper/ENS2-1.png" width="100%" />

**Шаг 2.** После того, как вы нашли свой домен, нажмите 'Менеджер'.

<img src="/images/posts/diving-deeper/ENS2-2.png" width="100%" />

**Шаг 3.** Выберите криптовалюту с которой домен будет взаимодействовать из выпадающего меню справа. Введите адрес для направления средств в пустое поле валюты.

<img src="/images/posts/diving-deeper/ENS2-3.png" width="100%" />

**Шаг 4.** Подтвердите три отдельных транзакции, и ваш домен будет готов к получению средств на другой адрес!

<img src="/images/posts/diving-deeper/ENS2-4.png" width="80%" />

<img src="/images/posts/diving-deeper/ENS2-5.png" width="100%" />

## __Передача владения__

**Step 1.** If you want to transfer ownership of your domain, search it once again on MyEtherWallet in the ENS Manager Dapp.

**Step 2.** Click 'Manage', and enter the address you'd like to transfer the ownership to under the 'Transfer ENS domain to:' field.

**Step 3.** Confirm the transaction, and the ownership of your domain will be transferred.

***
###### Если вы ранее выставили ваше доменное имя на аукцион и с тех пор его не выполняли с ним никаких действий, вам необходимо перенести его к новому регистратору.

## __Перенос к новому регистратору__

**Шаг 1.** Направляйтесь на сайт MyEtherWallet.com.
* Всегда проверяйте ссылку, чтобы убедиться, что вы находитесь на нашем настоящем сайте!

**Шаг 1.** Откройте ваш кошелек.
* Если у вас еще нет кошелька, вам понадобится [создать новый кошелек](/@@@@@@/getting-started/how-to-create-a-wallet/).
* Также вам понадобится небольшая сумма ETH на [газ](/@@@@@@/transactions/what-is-gas/). Обычно мы рекомендуем `.01 ETH` для 1 - 2 транзакций. И начало, и окончание ENS-аукционов засчитываются как транзакции.

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right).
* Здесь вы увидите опцию "ENS-менеджер". Нажмите на нее!

**Step 4.** Check the domain name you've previously registered. If all goes to plan, it should tell you that it's still in the old registrar.

<img src="/images/posts/diving-deeper/ens2.png" width="100%" />

**Step 5.** Select 'Transfer' and a transaction screen will pop up. Confirm the transaction, and your domain will begin the transfer process.

<img src="/images/posts/diving-deeper/ens5.png" width="100%" />

<img src="/images/posts/diving-deeper/ens4.png" width="100%" />

**Step 6.** Once the transaction goes through, your domain will show in the new registrar.

<img src="/images/posts/diving-deeper/ens6.png" width="100%" />