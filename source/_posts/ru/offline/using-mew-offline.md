---
title: "Использование MEW в автономном режиме (холодное хранилище)"
date: 2018-06-01 00:01:00
tags:
  - автономная работа
  - mew
  - холодное
  - хранилище
categories:
  - 
    - автономная работа
primary_category: автономная работа
primary_category_display_name: "Автономная работа"
---

# __Использование MEW в автономном режиме (холодное хранилище)__
###### {% read_time title "Использование MEW оффлайн (холодное хранилище)" %} мин. на прочтение
***

Для повышения уровня безопасности вы можете запускать MyEtherWallet (MEW) на локальном компьютере, а не с серверов GitHub через наш веб-сайт. The main computer being used to generate the transactions should not be connected to the internet. Вы можете создать кошелек в автономном режиме, но отправлять транзакции с другого компьютера, который будет подключен к интернету, используя раздел ‘Отправка в автономном режиме’. Таким образом, ваша конфиденциальная информация (закрытый ключ, файл хранилища ключей, мнемоническая фраза) будут храниться на автономном устройстве и никогда не будет передаваться на другие.

There are two ways to use MEW offline, through the use of PWA or by downloading the client.

## __Using MEW Offline as a Progressive Web App (PWA)__

**Step 1.** In order to use MEW as a PWA, you'll first need to head to our website on Google Chrome and install MEW, as shown below.

<img src="/images/posts/offline/offline1pwa.png" width="80%" />

**Step 2.** On your **online** computer, scroll down to the footer to find our Offline Helper tool.

<img src="/images/posts/offline/offline2pwa.png" width="80%" />

**Step 3.** Enter the address you're sending **from** and click 'Export JSON File'.

* Keep this safe, you'll need it momentarily on your offline computer. Export it onto a USB for easy transfer.

<img src="/images/posts/offline/offline3pwa.png" width="80%" />

**Step 4.** On your **offline** computer, access your wallet as you would normally.

* It will look a bit strange, since you're offline.

<img src="/images/posts/offline/offline4pwa.png" width="80%" />

**Step 5.** To the left, select 'Send Offline'.

<img src="/images/posts/offline/offline5pwa.png" width="80%" />

**Step 6.** Scroll down and import the JSON file you received earlier. This will fill in a few details. After that, paste the address you're sending **to** and the amount you'd like to send.

<img src="/images/posts/offline/offline6pwa.png" width="80%" />

**Step 7.** Now select 'Generate Transaction' and download the JSON file, or copy the Signed Transaction.

* You'll need to use the USB from before for this step as well.

<img src="/images/posts/offline/offline7pwa.png" width="80%" />

**Step 8.** Back to your **online** computer, head to the Offline Helper tool again and enter the Signed Transaction section.

* Upload the JSON file here, or paste the Signed Transaction. Details should generate in the next section.

<img src="/images/posts/offline/offline8pwa.png" width="80%" />

**Step 9.** Double-check all your transaction details, then click 'Send'.

<img src="/images/posts/offline/offline9pwa.png" width="80%" />

**Step 10.** You're done! You've just sent an offline transaction.

<img src="/images/posts/offline/offline10pwa.png" width="80%" />


## __Загрузка и запуск MEW оффлайн__

**Step 1.** In order to set up your local MEW, start by downloading the latest release of MEW [here](https://github.com/MyEtherWallet/MyEtherWallet/releases).

<img src="/images/posts/offline/MEWoffline1.png" width="80%" />

**Step 2.** Click on `MyEtherWallet-vX.X.X.X.zip` to download the file. Переместите этот файл на USB-накопитель (или другое устройство хранения данных) и перенесите его на компьютер без доступа к сети.

<img src="/images/posts/offline/MEWoffline2.png" width="80%" />

**Step 3.** Plug the USB into your offline computer and extract all the files into the archive of the computer. Процесс извлечения файлов очень важен, при неправильном извлечении MEW будет выглядеть странно. В итоге вы должны получить директорию, содержащую следующие файлы:

<img src="/images/posts/offline/MEWoffline3.png" width="80%" />

**Step 4.** To open MEW, double-click the ‘index.html’ file. MEW откроется в вашем браузере. Вы получите предупреждение о невозможности подключения к сети, что закономерно. Вы не подключены к интернету. Вы не сможете увидеть баланс ETH или токенов, но его можно узнать, используя безопасные и общедоступные способы, например, обозреватели блокчейна Ethereum therscan.io или ethplorer.io.

<img src="/images/posts/offline/MEWoffline4.png" width="80%" />

Поздравляем, вы запустили MEW в автономном режиме! Не забывайте периодически повторять этот алгоритм для использования последней версии нашего интерфейса.

Прочтите эту статью для получения дополнительной информации о том, [как создать кошелек](/@@@@@@/getting-started/how-to-create-a-wallet/). Прочтите эту статью, если хотите узнать, как совершать [автономные транзакции](/@@@@@@/offline/offline_transaction/).