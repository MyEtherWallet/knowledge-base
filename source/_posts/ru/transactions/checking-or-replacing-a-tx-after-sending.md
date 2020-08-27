---
title: "Отмена или замена транзакции после её отправки"
date: 2018-06-01 00:01:00
tags:
  - проверка
  - замена
  - транзакция
  - токены
  - отправлено
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Транзакции"
alias:
  - transactions/check-status-of-ethereum-transaction.html
---

# **Отмена или замена транзакции после её отправки**

###### {% read_time title "Canceling or Replacing a Transaction After it's Been Sent" %} мин. чтения

* * *

## **Могу ли я отменить, заменить или сделать что-нибудь после отправки транзакции?**

#### **В большинстве случаев ответ будет «нет».**

Как только майнеры добавили транзакцию в блок, который был включен в блокчейн, то ее нельзя отменить или заменить.

В периоды обычной нагрузки транзакции «майнятся» в течение нескольких секунд и не находятся в пуле транзакций долго. После отправки транзакции, просто напросто недостаточно времени для ее отмены или замены.

### **Однако...**

В периоды чрезвычайно больших объемов и высоких цен на газ, транзакции могут ожидать добычи часами, если не днями.

Если ваша транзакция застряла в статусе Pending, можно заменить ее новой транзакцией.

Самый простой способ сделать это — отправить транзакцию на сумму`0 ETH` на свой собственный адрес, с тем же значением nonce и более высокой ценой газа. Это отменит вашу первую транзакцию.

Нет никаких гарантий, что это сработает, или же что это будет работать каждый раз. Возможно что вы в итоге отправите две транзакции, если не будете внимательно следовать инструкциям, и даже тогда нет гарантии успеха.

#### **В этой статье не идет речь о том что вы можете отменить транзакцию, которую случайно послали на неправильный адрес, или что вы можете вернуть ETH после его отправки.**

#### **Данные инструкции касаются только поиска, проверки и возможной замены транзакций, которые застряли в пуле транзакций в течение слишком длительного периода времени.**

<br>

* * *

## **Как проверить статус транзакции**

**Шаг 1.** Перейдите на обозреватель блокчейна Ethereum, такой как [Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), или [EthVM](https://www.ethvm.com).

**Шаг 2.** Скопируйте и вставьте хеш транзакции в поисковое поле.

**Шаг 3.** Вы увидите детали транзакции и ее статус. Это будет один из вариантов:

-   **Success (Успех):** Ваша транзакция успешно замайнена и находится на блокчейне.
    -   Если вы не видите ошибок, то ваша транзакция была успешно отправлена. Ваш ETH или токены попали на тот адрес, на который вы их отправили. Если этот баланс не был зачислен на другой кошелек или же аккаунт биржи спустя 24 часа после отправки, пожалуйста, свяжитесь с тем сервисом. Отправьте им ссылку на свою транзакцию и попросите их исследовать ситуацию.
-   **Failed (Сбой):**
    -   Если вы видите красный символ ( ! ) или же сообщение об ошибке BAD INSTRUCTION или OUT OF GAS, то это означает, что транзакция не была успешно отправлена. Вы не можете отменить или заменить эту транзакцию. Вместо этого отправьте новую транзакцию. Если вы получили ошибку Out of Gas, вам нужно удвоить лимит газа, который вы указали изначально.
    -   Если вы видите 'Reverted' ("Возвращено"), то лучше перепроверить принятые вами действия. Эта ошибка связана с ошибкой смарт-контракта.
-   **Transaction not found (Транзакция не найдена):** Не удалось найти эту транзакцию. Возможно, она не была отправлена или же ее нельзя найти в проводнике блокчейна Ethereum, который вы используете. Попробуйте использовать другой обозреватель ([Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), или [EthVM](https://www.ethvm.com)). Если вы все еще не можете ее найти, то это значит, что она не прошла.
-   **Pending (В ожидании):** Ваша транзакция обнаружена в пуле транзакций используемого обозревателя. В настоящее время она находится в ожидании (ожидает, пока ее добудут майнеры). Есть шанс, что вы можете отменить или заменить эту транзакцию, но он очень мал.

Если ваша транзакция 'В ожидании', проверьте цену газа, которую вы использовали для этой транзакции и сравните ее с ценами на газ указанными на [EthGasStation.info](https://ethgasstation.info/). Если цена намного меньше, чем цена 'Safe Low', то у вас есть хороший шанс заменить или отменить ее.

## **«Замена» и «Отмена» транзакций**

-   **Отмена:** Это когда вы хотите 'отменить' транзакцию. Вы не хотите чтобы транзакция прошла, и создаете транзакцию на сумму `0 ETH` на ваш собственный адрес с целью предотвращения «прохождения» предыдущей транзакции (ее добычи / включения в блокчейн).
-   **Replacing:** This is when you want your same transaction to go through faster, or you want to replace it with another transaction. You generate a `XX ETH` transaction to someone else's address with the purpose of doing something (i.e. sending funds, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through.

The reason we recommend 'Canceling' over 'Replacing' is that it is not guaranteed your second transaction will actually replace your first one. Choosing to replace a transaction with a new one could lead to more confusion, headaches, and pending ETH, or ETH spent unnecessarily in the form of gas. This is especially true if your first transaction is mined anyways, which is possible.

* * *

## **Canceling a Transaction**

Canceling means generating a `0 ETH` transaction to your own address with the purpose of preventing a previous transaction from "going through" / "being mined" / "being included in the blockchain" / "being stuck".

**Step 1.** Head to [Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), or [EthVM](https://www.ethvm.com).

**Step 2.** Paste your transaction hash.

-   Если статус транзакции — Pending (В ожидании), то вы можете попробовать ее отменить.
-   Если транзакция не найдена, нажмите кнопку еще раз, подождав несколько минут между каждым нажатием. Если это не сработает, скорее всего, ваша транзакция не была отправлена.
-   Если статус транзакции — Success (Успешно), то вы не сможете ее отменить.

**Step 3.** If it says pending, make note of the 'Nonce' being used by the transaction, then access the wallet you used to send the original transaction on MEW.

**Step 4.** In the left-side menu, click 'Send', then choose 'Send offline'.

-   You do not have to be offline for this method to work.

**Step 5.** Send a transaction to yourself with a balance of `0 ETH` and a high gas price, referenced from [EthGasStation.info](https://ethgasstation.info/), and use the same nonce you noted from step 3.

-   Keep in mind, the higher the gas price, the higher the transaction fee (Gas Limit \* Gas Price).

**Step 6.** Click the 'Generate Transaction' button, then copy the 'Signed transaction', which is a long string that begins with '0x'.

**Step 7.** Now close out of this pop-up and scroll down to our footer. Select 'Send Offline Helper'.

**Step 8.** Head to section 3 'Signed Transaction', then paste the string from step 6 and 'Continue'.

**Step 9.** A new transaction hash will appear. Search it on the blockchain explorer of your choice and see if it posts as successful.

-   If it doesn't show up immediately, try refreshing in a few minutes.

## **Replacing a Transaction<br> (Advanced Users Only)**

Replacing a transaction means generating a `XX ETH` transaction to someone else's address with the purpose of doing something (i.e. sending a transaction, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through. This can be the same transaction as the one that's pending or a completely different transaction.

**Step 1.** Repeat steps 1 - 4 from the 'Canceling a Transaction' section above.

**Step 2.** Fill the 'To Address' field with whatever address you wish to send to.

**Step 3.** Change the 'Amount' from `0` to the amount of ETH you wish to send, and change the nonce to the same nonce as the pending transaction.

**Step 4.** If you are sending a standard ETH transaction, you can use `21000` for the gas limit. If sending tokens, raise it to around `100000`.

**Step 5.** For the 'Gas Price' field, use a high gas price as referenced from [EthGasStation.info](https://ethgasstation.info/).

-   Keep in mind, the higher the gas price, the higher the transaction fee (Gas Limit \* Gas Price).

**Step 6.** Click the 'Generate Transaction' button, then copy the 'Signed transaction', which is a long string that begins with '0x'.

**Step 7.** Now close out of this pop-up and scroll down to our footer. Select 'Send Offline Helper'.

**Step 8.** Head to section 3 'Signed Transaction', then paste the string from step 6 and 'Continue'.

**Step 9.** A new transaction hash will appear. Search it on the blockchain explorer of your choice and see if it posts as successful.

-   If it doesn't show up immediately, try refreshing in a few minutes.

## **Final Notes**

-   MEW does not receive any transaction fees. They are paid to the miners for including your transaction in a block. We are a free, open-source service.
-   The transaction pool varies from node to node. This means that a transaction may be pending in ETH (Infura.io)'s transaction pool, but not ETH (MyEtherWallet.com)'s transaction pool. For this reason, you should try all the ETH nodes we offer.
