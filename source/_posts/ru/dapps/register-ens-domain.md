---
title: "ENS: регистрация домена"
date: 2018-06-01 00:02:00
tags:
  - ens
  - децентрализованные приложения
  - аукцион
  - аукционы
categories:
  - 
    - децентрализованные приложения
primary_category: децентрализованные приложения
primary_category_display_name: "Децентрализованные приложения"
---

# __ENS: регистрация домена__
###### {% read_time title "ENS: Registering a Domain" %} минут на чтение
***

Ethereum Name Service, также известная как ENS, — это доменная служба, присваивающая пользовательский домен, привязанный к адресу аккаунта вашего кошелька.

Домены ENS имеют формат `YourDomainHere.eth`. Смысл этого заключается в упрощении обычного публичного адреса до формы, более удобной в использовании и отправке другим. Есть и другие варианты использования, но это основной смысл этой службы на данный момент.

В качестве простого примера можно привести адрес для пожертвований MEW:

Обычный адрес для пожертвований: `0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D`

ENS-адрес для пожертвований: `mewtopia.eth`

Оба адреса ведут в один кошелек, однако ENS-домен гораздо удобнее.


## __Как зарегистрировать ENS-домен__

**Step 1.** Head to MyEtherWallet.com.
* Всегда проверяйте ссылку, чтобы убедиться, что вы находитесь на нашем настоящем сайте!

<img src="/images/posts/diving-deeper/1ens.png" width="100%" />

**Step 2.** Access your wallet.
* Если у вас еще нет кошелька, вам понадобится [создать новый кошелек](/@@@@@@/getting-started/how-to-create-a-wallet/).
* Также вам понадобится небольшая сумма ETH на [газ](/@@@@@@/transactions/what-is-gas/). Обычно мы рекомендуем `.01 ETH` на 1-2 транзакции. Initializing and finalizing ENS domains both count as a transactions.

<img src="/images/posts/diving-deeper/2ens.png" width="100%" />

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right).
* Здесь вы увидите опцию "ENS-менеджер". Нажмите на нее!

<img src="/images/posts/diving-deeper/3ensnew.png" width="100%" />

**Step 4.** Enter your desired domain name to see if it is available.
* ENS domains must be 3 characters or longer.
* Имейте в виду, что конечный продукт будет выглядеть подобным образом: `YourDomainHere.eth`.
* Вы можете также найти доступные ENS-домены на Etherscan.io.
* Если вы получаете сообщение о том, что нужно перенести ENS-домен на новый сервер-регистратор, это значит, что он недоступен (за исключением случая, когда он уже ваш, тогда вы должны его перенести. Все миграции должны быть осуществлены до 4 мая 2020 года.)

<img src="/images/posts/diving-deeper/4ens.png" width="100%" />

**Step 5.** If your domain is available, you can register it. Выберите период времени, в течение которого хотите владеть доменом, и нажмите `Зарегистрировать`.
* All domains cost the equivalent of $5/year in ETH to maintain.
* Ими можно владеть неограниченное количество времени, пока вносится годовая плата.

<img src="/images/posts/diving-deeper/5ens.png" width="100%" />

**Step 6.** After confirming the transaction, your domain request will process for a moment. Когда все будет готово, еще раз выберите `Зарегистрировать` и подтвердите вторую транзакцию.

<img src="/images/posts/diving-deeper/8ens.png" width="100%" />

<img src="/images/posts/diving-deeper/11ens.png" width="100%" />

**Step 7.** Check your transaction on Etherscan.io. В поле "Владелец" должен быть отображен ваш публичный адрес.

**Это процесс только сделает ваш адрес владельцем домена, однако осталось еще кое-что. Если вы хотите, чтобы этот домен вел к вашему адресу для отправки, вам нужно выполнить дополнительные действия.**

## __Завершение процесса__

**Step 1.** In order to finish setting up your new domain, search it once again on MyEtherWallet in the ENS Manager Dapp.

**Step 2.** Click 'Manage', and enter the address you'd like all funds to be directed to under the 'Update Resolving address' field. Если вы хотите, чтобы это был тот же кошелек, который вы зарегистрировали, просто копируйте и вставьте тот же публичный адрес.

**Step 3.** Confirm the transaction, and your domain will be ready to receive funds!

## __Передача владения__

**Step 1.** If you want to transfer ownership of your domain, search it once again on MyEtherWallet in the ENS Manager Dapp.

**Step 2.** Click 'Manage', and enter the address you'd like to transfer the ownership to under the 'Transfer ENS domain to:' field.

**Step 3.** Confirm the transaction, and the ownership of your domain will be transferred.

***
###### If you've previously placed an auction for your domain and haven't touched it sense , you need to migrate it to the new registrar.

## __Migrating to the New Registrar__

**Step 1.** Head to MyEtherWallet.com.
* Всегда проверяйте ссылку, чтобы убедиться, что вы находитесь на нашем настоящем сайте!

**Step 2.** Access your wallet.
* Если у вас еще нет кошелька, вам понадобится [создать новый кошелек](/@@@@@@/getting-started/how-to-create-a-wallet/).
* Также вам понадобится небольшая сумма ETH на [газ](/@@@@@@/transactions/what-is-gas/). Обычно мы рекомендуем `.01 ETH` на 1-2 транзакции. И начало, и окончание ENS-аукционов засчитываются как транзакции.

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right).
* Здесь вы увидите опцию "ENS-менеджер". Нажмите на нее!

**Step 4.** Check the domain name you've previously registered. If all goes to plan, it should tell you that it's still in the old registrar.

<img src="/images/posts/diving-deeper/ens2.png" width="100%" />

**Step 5.** Select 'Transfer' and a transaction screen will pop up. Confirm the transaction, and your domain will begin the transfer process.

<img src="/images/posts/diving-deeper/ens5.png" width="100%" />

<img src="/images/posts/diving-deeper/ens4.png" width="100%" />

**Step 6.** Once the transaction goes through, your domain will show in the new registrar.

<img src="/images/posts/diving-deeper/ens6.png" width="100%" />