---
title: "Средства отправленные от Binance (сеть BSC) не видны в кошельке"
date: 2018-06-01 00:01:00
tags:
  - изменение
  - сеть
  - сети
  - bsc
  - binance
  - bep20
categories:
  - 
    - networks-and-nodes
primary_category: networks-and-nodes
primary_category_display_name: "Сети и узлы"
author: MyEtherWallet (MEW)
---

# **Средства отправленные от Binance (сеть BSC) не видны в кошельке**

###### {% read_time title "Missing Funds Sent from Binance (BSC Network)" %} минут на чтение

* * *

**Вы отправили ETH или токены с Binance на ваш MEW адрес, но не видите их на MEW?**

Это может быть потому, что вы отправили их как токены BEP20 в **сети BSC**, а не в сети Ethereum. К счастью, **MEW web поддерживает сеть BSC**, так что вы можете переключиться и начать использовать ваши средства.

_Обратите внимание, что MEW не поддерживает сеть Binance (BNB), так как она отделена от Smart Chain (BSC). Сеть Binance использует адреса, которые начинаются с 'bnb..', и для каждого перевода требуется дополнительное поле memo. Невозможно отправить средства с сети Binance на MEW._

First, double-check that your funds are on the BSC network.

Чтобы проверить это, перейдите на [BscScan][bscscan] и введите публичный адрес (0x..) на который вы получали средства переведенные с Binance.

Если вы отправили ETH или другой токен, он покажет ваш баланс в раскрывающемся списке «Токен» в середине страницы.

<img src="/images/posts/transactions/bsc2.png" alt="Изображение BscScan" style="max-width: 110%;" />

Когда вы убедитесь, что ваши средства находятся в сети BSC, вы можете получить доступ к ним с помощью MEW web.

### **Доступ к сети BSC на MEW**

<br>

_Если вы используете MEW CX, MetaMask или Dapper для подключения, вы не сможете изменить сеть для доступа к сети BSC. В этих случаях, если вы должны получить доступ к вашим средствам, рекомендуется [использовать MEW оффлайн][offline] для осуществления переводов. Этот процесс немного сложен, но он необходим для долгосрочной безопасности вашего кошелька._

Первым шагом для восстановления ваших средств является доступ к вашему кошельку на MEW web-интерфейсе.

<img src="/images/posts/transactions/bsc3.png" alt="Изображение MEW web" style="max-width: 110%;" />

После того как вы получили доступ к вашему кошельку, измените свою сеть, нажав кнопку «Изменить» в разделе «Сеть» рядом с правом верхнего угла интерфейса. Найдите «BSC» в списке появляющихся сетей и выберите «bscscan.com».

<img src="/images/posts/transactions/bsc4.png" alt="Изображение сети BscScan" style="max-width: 120%;" />

Теперь ваш интерфейс должен быть изменен, чтобы показывать "BNB" в разделе "Balance", а не ETH.

<img src="/images/posts/transactions/bsc5.png" alt="Изображение MEW web на BSC" style="max-width: 110%;" />

Если вы ищете ETH или другой токен, вам нужно добавить его справа в качестве кастомного токена в списке токенов. Те же правила применяются для добавления токенов в сеть BSC, что и в нашей статье, описывающей [кастомные токены][custom] на Ethereum, однако вы будете использовать [BscScan][bscscan] вместо Etherscan.io.

<img src="/images/posts/transactions/bsc6.png" alt="Изображение добавления кастомного токена ETH" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc7.png" alt="Изображение токена ETH в MEW web" style="max-width: 120%;" />

### **Перевод обратно на Ethereum**

<br>

После того как вы найдете свои токены, выбор за вами, хотите ли вы оставить их в сети BSC или отправить их обратно в Ethereum.

Если вы хотите вернуться на Ethereum, вам нужно отправить эти средства обратно на Binance, чтобы обменять их.

Вам понадобится немного BNB в вашем кошельке для использования в качестве газа. Эта сумма может быть очень маленькой, например 0,1 BNB. После отправки BNB на адрес кошелька, может потребоваться вручную обновить баланс, чтобы увидеть его в интерфейсе MEW web.

<img src="/images/posts/transactions/bsc8.png" alt="Изображение BNB в MEW web" style="max-width: 110%;" />

Когда будете готовы, получите адрес депозита Ethereum в сети BSC на Binance. Убедитесь, что вы выбрали сеть BSC. Заполните транзакцию и отправьте средства через сеть BSC в Binance.

<img src="/images/posts/transactions/bsc9.png" alt="Изображение адреса депозита Binance" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc10.png" alt="Изображение транзакции на Binance" style="max-width: 110%;" />

<img src="/images/posts/transactions/bsc11.png" alt="Изображение успешной транзакции" style="max-width: 120%;" />

После этого, вы также можете отправить остаток BNB на Binance, если хотите.

<img src="/images/posts/transactions/bsc12.png" alt="Изображение пустого баланса MEW web" style="max-width: 110%;" />

В следующий раз, когда вы посылаете свои средства в MEW, убедитесь, что вы выберете опцию 'Ethereum', чтобы увидеть ваши средства на блокчейне Ethereum.

<img src="/images/posts/transactions/bsc13.png" alt="Изображение ETH на Ethereum в MEW web" style="max-width: 110%;" />

[bscscan]: https://www.bscscan.com/

[offline]: /@@@@@@/offline/using-mew-offline/

[custom]: /@@@@@@/tokens/how-to-add-custom-token/
