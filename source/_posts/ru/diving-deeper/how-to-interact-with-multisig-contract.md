---
title: "Как взаимодействовать с контрактом с мультиподписью?"
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

# __Как взаимодействовать с контрактом с мультиподписью?__
###### {% read_time title "How to Interact with a Multisig Contract?" %} минут на чтение
***

**Шаг 1.** Войдите в кошелек и направляйтесь в раздел "Контракт" в левой части интерфейса вашего кошелька.

**Step 2.** Locate your preferred Multisig Contract ABI in the dropdown, or manually enter the contract's ABI.

**Step 3.** Check the contract address to make sure it's the one you're looking for, then press 'Continue'.
* You may need to enter your contract address in the ‘Contract Address’ field at the top.

**Шаг 4.** Выберите "Выполнить" в выпадающем меню.
* Enter the address you want to send to in the `_To` field.
* Enter the amount you want to send in the `_Value` field.
* In the `Data` field, type `0x`. This sets it to empty.
* We suggest sending a small amount first, to test the waters.
* Unlock the owner’s address, and click `Write`.
* Leave the `Value in ETH` as `0`.
* Click 'Generate Transaction', confirm the transaction, and send.

**Шаг 5.** Нажмите на ID транзакции с сообщением "Успех". Копируйте этот идентификатор.

**Шаг 6.** Если это контракт с мультиподписью и двумя владельцами, вам необходимо будет обновить эту страницу и выбрать"Подтвердить".
* In Step 5, you opened the Transaction ID from the ‘Execute’ call. You should have a page like [this](https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3) open.
* Click the ‘Event Logs’ tab.
* For reference, at [this](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog) link (note this is not YOUR link, it’s an example), the `_h` value would be `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`.
* Check the link above where it says that string, and then compare it to find what YOUR `_h` value is. It will be different than what we provided as an example.
* Go back to MEW, where you have the ‘Confirm’ page open, and paste your string into the `_h` field.
* Click ‘Write’ again and unlock the second owner’s account.
* Generate and send the transaction.

**Шаг 7.** Тщательно проверьте данные, чтобы подтвердить, что все прошло так, как было задумано.

**Шаг 8.** Если ваш контракт — это контракт с мультиподписью "3 из 5", вам нужно будет повторить подтверждение, описанное в шаге 6, несколько раз, пока не будет получено необходимое количество подписей. К счастью, значение `_h` будет одинаковым для всех.

**Шаг 9.** Вы можете посмотреть еще одно подтверждение нашего предыдущего примера [здесь](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog).

**Шаг 10.** Вы можете повторять этот процесс каждый раз, когда хотите отправить ETH.