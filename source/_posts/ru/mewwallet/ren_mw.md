---
title: "Используйте свой Bitcoin на сети Ethereum с приложением MEW wallet"
date: 2018-06-01 00:02:00
tags:
  - ren
  - protocol
  - defi
  - mewconnect
  - mew
  - ethereum
  - dapps
categories:
  - 
    - mewwallet
primary_category: mewwallet
primary_category_display_name: "MEWwallet"
author: MyEtherWallet (MEW)
---

# **Используйте свой Bitcoin на сети Ethereum с приложением MEW wallet**

###### {% read_time title "Move Your Bitcoin to Ethereum using the MEW wallet app" %} мин. чтения

* * *

Приложение MEW wallet предлагает мост Bitcoin-Ethereum прямо в вашем кошельке, с помощью услуг RenVM. Теперь пользователи могут держать свой BTC в виде renBTC в кошельке MEW. RenBTC – это токен который живет на блокчейне Ethereum и привязан к стоимости BTC. Этот токен можно обменивать на другие токены или перевести обратно в BTC в любое время.

Для начала вам понадобится активный кошелек Bitcoin и некоторое количество BTC, а также приложение MEW wallet.

### **Использование Bitcoin на блокчейне Ethereum**

<br>

**Шаг 1.** Когда вы готовы, откройте приложение MEW wallet.

**Шаг 2.** Нажмите на изогнутую стрелку в нижней строке для перехода в раздел 'Swap', затем выберите Move your Bitcoin to Ethereum (Использовать Bitcoin на Ethereum).

<div class="wrap-mobile-phone">
<img src="/images/posts/mewconnect/mw1.PNG" alt="Изображение сканирования QR-кода в MEW wallet" />
</div>
**Шаг 3.** Вам будет выдан временный ‘Адрес пополнения’ BTC, который будет действителен 12 часов. Отправьте выбранное количество BTC на этот временный адрес, чтобы начать процесс перевода BTC для использования на вашем MEW wallet. 

<div class="d-flex justify-content-space-around flex-wrap margin-0">
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw2.PNG" alt="Изображение сканирования QR-кода в MEW wallet" />
  </div>
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw3.PNG" alt="Изображение успешного подключения MEW wallet" />
  </div>
</div>

<div class="d-flex justify-content-space-around flex-wrap margin-0">
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw8.PNG" alt="Изображение сканирования QR-кода в MEW wallet" />
  </div>
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw9.PNG" alt="Изображение успешного подключения MEW wallet" />
  </div>
</div>

<div class="wrap-mobile-phone">
  <img src="/images/posts/mewconnect/mw10.PNG" alt="Изображение сканирования QR-кода в MEW wallet" />
</div>

**Шаг 4.** Для подтверждения депозита понадобится 6 подтверждений. Этот процесс займет некоторое время.

**Шаг 5.** После завершения 6 подтверждений, ваш renBTC будет создан и отправлен непосредственно на ваш кошелек MEW wallet.

**Шаг 6.** Готово! Once you’ve received your renBTC, you can begin swapping it for other tokens, using it in DeFi apps, or you can just hold onto it.

<div class="wrap-mobile-phone">
  <img src="/images/posts/mewconnect/mw5.PNG" alt="Изображение сканирования QR-кода в MEW wallet" style="max-width: 250px;" />
</div>

### **Moving Back to Bitcoin**

<br>

**Step 1.** When you’re ready to move back to Bitcoin, head to the MEW wallet app.

**Шаг 2.** Нажмите на изогнутую стрелку в нижней строке для перехода в раздел 'Swap', затем выберите Move your Bitcoin to Ethereum (Использовать Bitcoin на Ethereum).

<img src="/images/posts/mewconnect/mw1.PNG" alt="Изображение сканирования QR-кода в MEW wallet" style="max-width: 250px;" />

**Step 3.** From here, select 'Move back to BTC'.

<div class="wrap-mobile-phone">
  <img src="/images/posts/mewconnect/mw2.PNG" alt="Изображение сканирования QR-кода в MEW wallet" style="max-width: 250px;"/>
</div>

**Step 4.** Enter the amount of renBTC you'd like to send back, then continue.

<div class="d-flex justify-content-center flex-wrap margin-0">
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw6.PNG" alt="Изображение сканирования QR-кода в MEW wallet" style="max-width: 250px;" />
  </div>
  <div class="wrap-mobile-phone">
    <img src="/images/posts/mewconnect/mw7.PNG" alt="Изображение успешного подключения MEW wallet" style="max-width: 250px;" />
  </div>
</div>

**Step 5.** Set your BTC deposit address, select 'Proceed with move', and your transfer back to BTC will begin.

**Step 6.** After a few confirmations, your BTC transfer will complete, and you'll be all set! This process may take a while.

## **Risks Involved:**

-   When you begin this process, make sure you send your Bitcoin within the 12 hour time limit and use a high gas fee. If the Bitcoin transaction and 6 confirmations don’t go through in 24 hours, the Bitcoin can get stuck. Most of the time, Ren will be able to recover it for you, but in rare edge-cases, this Bitcoin could be permanently lost.
-   Don't send your Bitcoin directly from a centralized exchange. Most centralized exchanges pool many different users together under a few addresses. If something goes wrong with the process, and your BTC is sent back to you, an exchange may have trouble knowing this BTC is meant for you.
-   If you send an amount of BTC that is too small, it will all be used up in the fees for this process, so make sure you send a substantial amount.
-   This transferral process is built by RenVM, so it’s important to do your research into the risks associated with their platform and product. Also, all value for renBTC is protected by RenVM, but if something happens to RenVM, we cannot guarantee the BTC peg for renBTC.

<br>

#### **Here is a breakdown of the fees involved, which are also displayed during the transferral process:**

-   1% MEW service fee
-   0.1% RenVM network fee
-   0.000007 BTC as a flat gas fee by RenVM (which can increase during times of high volume)
-   Ethereum gas fee, determined by network congestion
