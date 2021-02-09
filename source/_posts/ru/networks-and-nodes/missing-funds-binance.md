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

Once you’ve accessed your wallet, change your network by clicking ‘Change’ in the ‘Network’ section, near the upper-right hand corner of the interface. Locate ‘BSC’ in the list of networks that appears, and select ‘bscscan.com’.

<img src="/images/posts/transactions/bsc4.png" alt="Image of BscScan Network" style="max-width: 120%;" />

Now your interface should change to show ‘BNB’ under the ‘Balance’ section, instead of ETH.

<img src="/images/posts/transactions/bsc5.png" alt="Image of MEW web on BSC" style="max-width: 110%;" />

If you’re looking for ETH or another token, you’ll need to add it as a custom token in the Token list to the right. The same rules apply for adding tokens on the BSC network as in our article detailing [how to add custom tokens][custom] on Ethereum, however you’ll be using [BscScan][bscscan] instead of Etherscan.io.

<img src="/images/posts/transactions/bsc6.png" alt="Image of adding ETH custom token" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc7.png" alt="Image of ETH token in MEW web" style="max-width: 120%;" />

### **Transferring Back to Ethereum**

<br>

After your find your tokens, it's up to you whether or not you'd like to keep them on the BSC chain or send them back to Ethereum.

If you want to switch back to Ethereum, you'll need to send these funds back to Binance to swap them over.

You will need a bit of BNB in your wallet to use as gas. This amount can be very small, such as 0.1 BNB. After sending the BNB to your wallet address, you might need to manually refresh your balance to see it reflected in the MEW web interface.

<img src="/images/posts/transactions/bsc8.png" alt="Image of BNB in MEW web" style="max-width: 110%;" />

Once you're ready, get a deposit address for Ethereum on the BSC chain on Binance. Make sure you've selected the BSC chain. Fill out your transaction, and send your funds through the BSC chain to Binance.

<img src="/images/posts/transactions/bsc9.png" alt="Image of Binance deposit address" style="max-width: 120%;" />

<img src="/images/posts/transactions/bsc10.png" alt="Image of transaction to Binance" style="max-width: 110%;" />

<img src="/images/posts/transactions/bsc11.png" alt="Image of successful transaction" style="max-width: 120%;" />

Afterwards, you can also send any leftover BNB to Binance as well, if you want.

<img src="/images/posts/transactions/bsc12.png" alt="Image of empty MEW web balance" style="max-width: 110%;" />

Next time you send your funds back to MEW, make sure you choose the 'Ethereum' option, to see your funds on the Ethereum blockchain.

<img src="/images/posts/transactions/bsc13.png" alt="Image of ETH back on Ethereum in MEW web" style="max-width: 110%;" />

[bscscan]: https://www.bscscan.com/

[offline]: /@@@@@@/offline/using-mew-offline/

[custom]: /@@@@@@/tokens/how-to-add-custom-token/
