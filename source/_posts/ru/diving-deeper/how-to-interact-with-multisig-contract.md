---
title: "Как обращаться с контрактом с мультиподписью?"
date: 2018-06-01 00:03:00
tags:
  - ЧЗВ
  - сервис
  - остановить
  - вниз
categories:
  - 
    - ЧЗВ
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Более глубокое ознакомление"
alias:
  - faq/interacting-with-ethereum-multisig-wallet.html
---

# **Как обращаться с контрактом с мультиподписью?**

###### {% read_time title "How to Interact with a Multisig Contract?" %} минут на чтение

* * *

**Шаг 1.** Зайдите в свой кошелек и перейдите в раздел "Контракты" слева от интерфейса кошелька.

**Шаг 2.** В выпадающем списке должен быть ABI контракта с мультиподписью Mist. Если его нет, мы предоставили ABI внизу этой статьи, вы можете вставить его в интерфейс вручную.

**Шаг 3.** Введите адрес вашего контракта в поле "Адрес контракта" сверху.

**Шаг 4.** Выберите "Исполнить" из выпадающего меню.

* Введите адрес, на который хотите отправить средства, в поле `_To`.
* Введите сумму, которую хотите отправить, в поле `_Value`. 
* В поле `Данные` введите `0x`. Это делает его пустым. 
* Мы предлагаем в качестве проверки сначала отправить маленькую сумму.
* Разблокируйте адрес владельца и нажмите `Записать`.
* Оставьте `значение в ETH` равным `0`.
* Нажмите "Создать транзакцию", подтвердите транзакцию и осуществите отправку. 

**Шаг 5.** Нажмите на идентификатор транзакции, который выводится вместе с сообщением "Успех". Копируйте этот идентификатор.

**Шаг 6.** Если это контракт с мультиподписью с двумя владельцами, вам нужно будет обновить эту страницу и выбрать "Подтвердить".

* В шаге 5 вы открыли идентификатор транзакции из вызова "Исполнить". У вас должна открыться страница, подобная [этой](https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3).
* Нажмите на вкладку "Журналы событий".
* Для справки по [этой](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog) ссылке (учтите, что это НЕ ВАША ссылка, а пример) значение `_h` было бы `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`.
* Пройдите по ссылке выше, где показана эта строка, а затем сравните, чтобы найти, каково ВАШЕ значение `_h`. Оно будет отличаться от того, которое мы предложили в качестве примера. 
* Вернитесь в MEW, где у вас открыта страница "Подтвердить", и вставьте вашу строку в поле `_h`.
* Еще раз нажмите "Записать" и разблокируйте аккаунт второго владельца. 
* Создайте и отправьте транзакцию.

**Шаг 7.** Перепроверьте, чтобы убедиться, что все прошло так, как было задумано.

**Шаг 8.** Если у вас контракт с мультиподписью "3 из 5", вам нужно повторить процесс подтверждения, описанный в шаге 6, пока не наберется нужное количество подтверждений. К счастью, значение `_h` будет одинаковым для всех.

**Шаг 9.** Вы можете посмотреть еще одно одобрение для нашего предыдущего примера [здесь](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog).

**Шаг 10.** Смело повторяйте этот процесс каждый раз, когда хотите отправить ETH.

## **ABI контракта с мультиподписью в кошельке Mist/Ethereum**

`[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]`

Также вы можете копировать этот ABI и прочитать подробнее о процессе в посте на reddit, который находится [здесь](https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/).