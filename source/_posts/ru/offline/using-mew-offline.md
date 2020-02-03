---
title: "Использование MEW оффлайн (холодное хранилище)"
date: 2018-06-01 00:01:00
tags:
  - работа оффлайн
  - mew
  - холодное
  - хранилище
categories:
  - 
    - работа оффлайн
primary_category: работа оффлайн
primary_category_display_name: "Работа оффлайн"
---

# __Использование MEW оффлайн (холодное хранилище)__
###### {% read_time title "Использование MEW оффлайн (холодное хранилище)" %} мин. на прочтение
***

Для повышения уровня безопасности вы можете запускать MyEtherWallet (MEW) на локальном компьютере, а не с серверов GitHub через наш веб-сайт. Главный компьютер, используемый для генерации транзакций, не должен быть подключен к сети Интернет. Вы можете создать кошелек в автономном режиме, но отправлять транзакции с другого компьютера, который будет подключен к интернету, используя раздел ‘Отправить оффлайн’. Таким образом, ваша конфиденциальная информация (закрытый ключ, файл хранилища ключей, мнемоническая фраза) будет храниться на автономном устройстве и никогда не будет покидать его.

Есть два способа использовать MEW оффлайн — с помощью PWA или с помощью скачанного клиента.

## __Использование MEW оффлайн с помощью прогрессивного веб-приложения (PWA)__

**Step 1.** In order to use MEW as a PWA, you'll first need to head to our website on Google Chrome and install MEW.

<img src="/images/posts/offline/offline1pwa.png" width="80%" />

**Step 2.** On your **online** computer, scroll down to the footer to find our Offline Helper tool.

<img src="/images/posts/offline/offline2pwa.png" width="80%" />

**Step 3.** Enter the address you're sending **from** and click 'Export JSON File'.

* Храните его в безопасности, он вам скоро понадобится на компьютере, не подключенном к сети. Экспортируйте его на USB-носитель для удобной передачи.

<img src="/images/posts/offline/offline3pwa.png" width="80%" />

**Step 4.** On your **offline** computer, access your wallet as you would normally.

* Он будет выглядеть немного странно, потому что вы не подключены к сети.

<img src="/images/posts/offline/offline4pwa.png" width="80%" />

**Step 5.** To the left, select 'Send Offline'.

<img src="/images/posts/offline/offline5pwa.png" width="80%" />

**Step 6.** Scroll down and import the JSON file you received earlier. This will fill in a few details. After that, paste the address you're sending **to** and the amount you'd like to send.

<img src="/images/posts/offline/offline6pwa.png" width="80%" />

**Step 7.** Now select 'Generate Transaction' and download the JSON file, or copy the Signed Transaction.

* Для этого шага вам также потребуется ранее использованный USB-носитель.

<img src="/images/posts/offline/offline7pwa.png" width="80%" />

**Step 8.** Back to your **online** computer, head to the Offline Helper tool again and enter the Signed Transaction section.

* Загрузите файл JSON здесь или вставьте подписанную транзакцию, затем нажмите 'Продолжить'. Подробные данные должны сгенерироваться в следующем разделе.

<img src="/images/posts/offline/offline8pwa.png" width="80%" />

**Step 9.** Double-check all your transaction details, then click 'Send'.

<img src="/images/posts/offline/offline9pwa.png" width="80%" />

**Step 10.** You're done! You've just sent an offline transaction.

<img src="/images/posts/offline/offline10pwa.png" width="80%" />


## __Загрузка и запуск MEW оффлайн__

**Step 1.** In order to set up your local MEW, start by downloading the latest release of MEW [here](https://github.com/MyEtherWallet/MyEtherWallet/releases).

<img src="/images/posts/offline/MEWoffline1.png" width="80%" />

**Step 2.** Click on `MyEtherWallet-vX.X.X.X.zip` to download the file. Move this file to a USB stick (or another storage transfer device), and transfer it to your permanently-offline computer.

<img src="/images/posts/offline/MEWoffline2.png" width="80%" />

**Step 3.** Plug the USB into your offline computer and extract all the files into the archive of the computer. Extracting the files is important, otherwise MEW will not open correctly and will look like a bunch of nonsense. You should end up with a folder containing these files:

<img src="/images/posts/offline/MEWoffline3.png" width="80%" />

**Step 4.** To open MEW, double-click the ‘index.html’ file. This will open MEW in your browser. You will get a warning saying it is unable to connect to the network, which is normal. You’re not connected to the internet. You won’t be able to see your ETH or token balances because of this, but these are viewable in a secure, public way by using an Ethereum blockchain explorer such as etherscan.io or ethplorer.io.

<img src="/images/posts/offline/MEWoffline4.png" width="80%" />

Congratulations, you’re running MEW offline! Make sure to repeat this process periodically, to ensure you’re on the most up-to-date version of our interface.

Read this article for more information on [how to create a wallet](/@@@@@@/getting-started/how-to-create-a-wallet/). Read this article if you'd like to know [how to send an offline transaction](/@@@@@@/offline/offline_transaction/).