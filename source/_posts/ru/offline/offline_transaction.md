---
title: "Совершение транзакций оффлайн"
date: 2018-06-01 00:01:00
tags:
  - автономная работа
  - mew
  - холодное
  - хранилище
  - транзакция
  - myetherwallet
categories:
  - 
    - автономная работа
primary_category: автономная работа
primary_category_display_name: "Автономная работа"
---

# __Совершение транзакций оффлайн__
###### {% read_time title "Совершение транзакций оффлайн" %} мин. на прочтение
***

Если вы [используете MyEtherWallet (MEW) в автономном режиме локально](/@@@@@@/offline/using-mew-offline/), отправление транзакций напрямую будет невозможно. Для размещения транзакции требуется подключение к интернету. Для этого вы должны использовать второй компьютер, который подключен к интернету. Преимущество подобного способа заключается в том, что ваш личный ключ хранится на отдельном автономном устройстве, которое не будет подвержено вредоносным программам или атакам хакеров.

## __Поиск номера транзакции и ее данных__

**Step 1.** Head to MyEtherWallet.com on your **online** computer.

**Step 2.** At the bottom, in the footer, choose the 'Send Offline Helper' tool.

**Step 3.** Choose the network you are interacting with.
* Оставьте ее на 'ETH', если вы будете использовать токены Ether или ERC20.

**Step 4.** Fill in the address you are sending from, and our interface will generate a gas price and nonce for your transaction, along with other details

**Step 5.** Make a note of your nonce, export the JSON file, and move this file onto a USB.

## __Генерирование автономной транзакции__

**Step 1.** Plug in the USB to your **offline** computer.

**Step 2.** Access the offline version of MEW on this same offline device.
* Это можно сделать, открыв файл ‘Index’ в браузере.
* Если вы еще не загрузили MEW для автономного использования, ознакомьтесь с [этой статьей](/@@@@@@/offline/using-mew-offline/).

**Step 3.** Access your wallet like you would normally, and choose ‘Send Offline’ from the menu to the left.

**Step 4.** Import your JSON file from the connected USB.
* Вы можете вручную ввести свой номер транзакции, реквизиты и адрес, на который вы переводите средства, а также другие данные.

**Step 5.** If you’re sending to a contract, extra data may cause you to need a higher gas limit.
* Излишек комиссии за транзакцию будет возвращен, так что вы можете поднять ее до 100 000.

**Step 6.** Click ‘Generate Transaction’, then copy the long string that says ‘Signed Transaction’ and paste it in a text file, or download a new JSON file holding your signed transaction’s details. Перетащите этот текстовый файл или файл JSON на USB-накопитель, чтобы выполнить последний шаг.

## __Подпишите и разместите транзакцию__

**Step 1.** Head to MyEtherWallet.com once more on your **online** computer.

**Step 2.** At the bottom, in the footer, choose again the ‘Send Offline Helper’ tool.

**Step 3.** Paste in your signed transaction, or import the new JSON file you just received.

**Step 4.** Review the details of your transaction then press 'Send'. <br>

Все готово! Ваша транзакция будет отображаться в блокчейне Ethereum, как только она будет проверена. Ее можно найти, используя хэш транзакции, показанный в конце процесса.

<div class="youtube-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9_6EU1QPU0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

