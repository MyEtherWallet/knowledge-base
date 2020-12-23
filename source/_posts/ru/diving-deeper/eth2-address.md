---
title: "Генерировать адрес снятия Eth2 для стейкинга в Eth2"
date: 2018-06-01 00:02:00
tags:
  - eth2
  - staking
  - staked
  - beacon
  - withdrawal
categories:
  - 
    - diving-deeper
primary_category: diving-deeper
primary_category_display_name: "Более глубокое ознакомление"
author: MyEtherWallet (MEW)
---

# **Генерировать адрес снятия Eth2 для стейкинга в Eth2**

###### {% read_time title "Generate an Eth2 Withdrawal Address for Staking on Eth2" %} мин. чтения

* * *

## **Интеграция Staked в MEW позволяет пользователям делать ставки кратные 32 ETH в Eth2 для накопления годовых процентов.**

Чтобы узнать больше о стейкинг в Eth2, ознакомьтесь с нашей статьей [о том, как делать ставки в Eth2 с помощью MEW web][eth2web].

Прежде чем делать ставку в Eth2, необходимо иметь адрес для снятия Eth2. Когда вы [делаете стейкинг с помощью приложения MEW wallet][eth2app], ваш адрес снятия Eth2 привязан к вашей фразе восстановления из 24 слов. С другой стороны, пользуясь MEW web, необходимо создать новый адрес для снятия ставки Eth2.

Ваш адрес снятия Eth2 генерированный на MEW web будет иметь файл хранилище ключа + пароль, и фразу из 24 слов. **Очень важно хранить файл, пароль, и фразу восстановления в безопасности, потому что мы не можем восстановить их для вас.** Эта информация необходима для снятия вашей ставки и годовых процентов в будущем. Без нее, ваш ETH может стать недоступен навсегда.

Рекомендуется верифицировать ваш адрес снятия Eth2 с помощью вашего файла хранилища ключа чтобы убедиться, что все работает правильно. Вы найдете информацию о процессе верификации далее в этой статье.

### **Генерировать адрес снятия Eth2 на MEW web**

<br>

**Шаг 1.** Перейдите на [www.myetherwallet.com.](http://www.myetherwallet.com) и прокрутите к низу страницы. Здесь вы найдете инструмент «Generate Eth2 address» внизу раздела «Discover».

<img src="/images/posts/diving-deeper/eth21.png" width="85%" />

**Шаг 2.** Введите надежный пароль для вашего файла хранилища ключа Eth2, затем введите его еще раз, чтобы подтвердить. Этот пароль будет ключом для разблокировки вашего файла ключа. Очень важно не потерять его.

<img src="/images/posts/diving-deeper/eth22.png" width="70%" />

**Шаг 3.** Вы будете перенаправлена на экран на котором будет показана ваша фраза восстановления из 24 слов. Запишите эти 24 слова на бумаге и храните ее в безопасном месте. Скриншот не защитит вас от сбоя вашего компьютера, и сделает вашу фразу более уязвимой для хакеров.

<img src="/images/posts/diving-deeper/eth23.png" width="70%" />

**Шаг 4.** Загрузите файл хранилища ключа с этого же экрана. Храните его в безопасном месте оффлайн, например на USB. Рекомендуется загрузить несколько копий и хранить их на отдельных USB, так что в случае сбоя у вас есть резервные копии.

**Шаг 5.** Готово! Вы увидите свой новый адрес снятия Eth2 на экране. Стоит записать и сохранить его. Этот адрес не является необходимым для дальнейшего доступа, но полезно знать свой собственный адрес снятия средств.

<img src="/images/posts/diving-deeper/eth24.png" width="70%" />

## **Верификация адреса снятия Eth2 используя Windows**

Для дополнительной безопасности и уверенности рекомендуется проверить адрес снятия. Этот процесс довольно сложен, но если вы точно выполните эти шаги, то у вас должно получиться.

**Шаг 1.** Перейдите на наш [инструмент верификации Eth2 keystore][eth2github] на Github. Download the Windows ZIP file for your system.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Step 2.** Extract the ZIP file to your computer, and head into the new ‘eth2deposit’ folders until you see ‘deposit.exe’.

<img src="/images/posts/diving-deeper/ethv2.png" width="80%" />

**Step 3.** Hold shift and right-click in the empty space of this folder, then select ‘Open PowerShell’.

**Step 4.** Enter this command for Windows: “.\\deposit verify-keystore”

<img src="/images/posts/diving-deeper/ethv5.png" width="100%" />

**Step 5.** Enter the path of your Eth2 keystore file. To find your path, you can right-click on the keystore and click ‘Properties’. It will look something like: “C:\\Users\\since\\OneDrive\\Desktop” (if you have it on your desktop). Once you find this, make sure you add the keystore file’s name to the end. So it should look like: “C:\\Users\\since\\OneDrive\\Desktop\\keystore-m_12381_3600_0_01607022974412.json”

<div class="d-flex justify-content-center flex-wrap margin-0">
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv3.png" width="50%">
</div>
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv4.png" width="50%">
</div>
</div>

**Step 6.** Once you enter this into the terminal and click ‘Enter’, it should ask you for your keystore file’s password. Enter it, then enter it again to confirm it.

**Step 7.** You’re done! Your terminal should say, “Success! Your keystore is valid.” Underneath of this message, you will see your Eth2 withdrawal address, or ‘public key’. Compare it with the address you saw when you first generated your Eth2 keystore file for accuracy.

<img src="/images/posts/diving-deeper/ethv6.png" width="100%" />

## **Verify your Eth2 Withdrawal Address using Mac**

Для дополнительной безопасности и уверенности рекомендуется проверить адрес снятия. Этот процесс довольно сложен, но если вы точно выполните эти шаги, то у вас должно получиться.

**Шаг 1.** Перейдите на наш [инструмент верификации Eth2 keystore][eth2github] на Github. Download the Mac (darwin) TAR.ZG file for your system.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Step 2.** Extract the ZIP file to your computer, and head into the new ‘eth2deposit’ folders until you see ‘deposit’. Click the gear icon and select the option that says "Copy 'eth2deposit....' as Pathname".

<img src="/images/posts/diving-deeper/ethmac1.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac3.png" width="80%" />

**Step 3.** Hold Cmd + space and type in the word 'Terminal' to open the terminal for your Mac. Here, type "cd " and paste the Pathname you copied from the previous step, then press 'Enter'.

<img src="/images/posts/diving-deeper/ethmac2.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac7.png" width="80%" />

**Step 4.** Enter this command for Mac: “./deposit verify-keystore” and press 'Enter'.

<img src="/images/posts/diving-deeper/ethmac5.png" width="80%" />

**Step 5.** Enter the path of your Eth2 keystore file. To find your path, you can hold Option + right-click on the keystore file and click "Copy 'keystore-m....json' as Pathname". After that, head back to the terminal and paste it in. It will look something like: “/Users/stephen/Desktop/keystore-m_12381_3600_0_0-1607370800275.json” (if you have it on your desktop).

**Step 6.** Once you enter this into the terminal and click ‘Enter’, it should ask you for your keystore file’s password. Enter it, then enter it again to confirm it.

**Step 7.** You’re done! Your terminal should say, “Success! Your keystore is valid.” Underneath of this message, you will see your Eth2 withdrawal address, or ‘public key’. Compare it with the address you saw when you first generated your Eth2 keystore file for accuracy.

<img src="/images/posts/diving-deeper/ethmac6.png" width="80%" />

[eth2web]: /@@@@@@/dapps/stake-eth2-web/

[eth2app]: /@@@@@@/mewwallet/stake-eth2-mw/

[eth2github]: https://github.com/MyEtherWallet/eth2.0-deposit-cli/releases/tag/v1.1.0m1
