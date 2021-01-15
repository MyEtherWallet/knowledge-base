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

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
To learn more about staking on Eth2, visit our article on \[how to stake on Eth2 using MEW web]\[eth2web].

# Before you stake on Eth2, it’s necessary to have an Eth2 Withdrawal Address. When you \[stake using the MEW wallet app]\[eth2app], your Eth2 withdrawal address is tied to your 24 word recovery phrase. However, on MEW web, it’s necessary to create a new Eth2 withdrawal address for your stake.

# To learn more about staking on Eth2, visit our article on [how to stake on Eth2 using MEW web][eth2web].

Чтобы узнать больше о стейкинг в Eth2, ознакомьтесь с нашей статьей [о том, как делать ставки в Eth2 с помощью MEW web][eth2web].

> > > > > > > origin/l10n_master

Прежде чем делать ставку в Eth2, необходимо иметь адрес для снятия Eth2. Когда вы [делаете стейкинг с помощью приложения MEW wallet][eth2app], ваш адрес снятия Eth2 привязан к вашей фразе восстановления из 24 слов. С другой стороны, пользуясь MEW web, необходимо создать новый адрес для снятия ставки Eth2.

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD

> > > > > > > origin/l10n_master

# Your MEW web Eth2 withdrawal address will have a keystore file + password and a 24 word recovery phrase tied to it. **It’s very important you keep both your keystore file + password and recovery phrase safe, as we cannot recover these for you.** This information is necessary to withdraw your stake and rewards in the future. Without these, your ETH may be locked up indefinitely.

Ваш адрес снятия Eth2 генерированный на MEW web будет иметь файл хранилище ключа + пароль, и фразу из 24 слов. **Очень важно хранить файл, пароль, и фразу восстановления в безопасности, потому что мы не можем восстановить их для вас.** Эта информация необходима для снятия вашей ставки и годовых процентов в будущем. Без нее, ваш ETH может стать недоступен навсегда.

> > > > > > > origin/l10n_master

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

**Шаг 1.** Перейдите на наш [инструмент верификации Eth2 keystore][eth2github] на Github. Загрузите ZIP файл Windows для вашей системы.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Шаг 2.** Распакуйте ZIP-файл и найдите в папке программу 'deposit.exe'.

<img src="/images/posts/diving-deeper/ethv2.png" width="80%" />

**Шаг 3.** Удерживайте Shift и щелкните правой кнопкой мыши на пустом месте этой папки, затем выберите ‘Open PowerShell’.

**Шаг 4.** Введите эту команду для Windows: “.\\deposit verify-keystore”

<img src="/images/posts/diving-deeper/ethv5.png" width="100%" />

**Шаг 5.** Введите путь к вашему файлу хранилища ключа Eth2. Чтобы найти этот путь, щелкните правой кнопкой мыши на файл и нажмите "Свойства". Он выглядит примерно так: “C:\\Users\\since\\OneDrive\\Desktop” (в том случае если он у вас на десктопе). После того, как вы найдете путь, убедитесь, что вы добавили имя файла хранилища в конце. Таким образом, путь будет выглядеть так: “C:\\Users\\since\\OneDrive\\Desktop\\keystore-m_12381_3600_0_01607022974412.json”

<div class="d-flex justify-content-center flex-wrap margin-0">
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv3.png" width="50%">
</div>
<div class="wrap-mobile-phone">
<img src="/images/posts/diving-deeper/ethv4.png" width="50%">
</div>
</div>

**Шаг 6.** Когда вы введете команду в терминал и нажмете 'Ввод', терминал должен запросить пароль файла хранилища ключа. Введите его, затем введите его еще раз, для подтверждения.

**Шаг 7.** Готово! В терминале вы должны увидеть: "Успех! Ваш файл хранилища ключа верифицирован." Под этим текстом вы увидите ваш адрес снятия Eth2, или «открытый ключ». Сравните его с адресом, который вы увидели, когда вы впервые создали свой файл хранилища ключа Eth2, и убедитесь что он совпадает.

<img src="/images/posts/diving-deeper/ethv6.png" width="100%" />

## **Верификация адреса снятия Eth2 используя Mac**

Для дополнительной безопасности и уверенности рекомендуется проверить адрес снятия. Этот процесс довольно сложен, но если вы точно выполните эти шаги, то у вас должно получиться.

**Шаг 1.** Перейдите на наш [инструмент верификации Eth2 keystore][eth2github] на Github. Загрузите ZIP файл Mac (darwin) TAR.ZG для вашей системы.

<img src="/images/posts/diving-deeper/eth2v1.png" width="80%" />

**Шаг 2.** Распакуйте ZIP-файл и найдите в папке программу 'deposit'. Нажмите на значок шестеренки и выберите опцию "Копировать 'eth2deposit....' как Pathname".

<img src="/images/posts/diving-deeper/ethmac1.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac3.png" width="80%" />

**Шаг 3.** Удерживайте Cmd + пробел и введите слово «Terminal», чтобы открыть терминал для вашего Mac. Здесь введите "cd " и вставьте путь, скопированный с предыдущего шага, а затем нажмите 'Enter'.

<img src="/images/posts/diving-deeper/ethmac2.png" width="80%" />

<img src="/images/posts/diving-deeper/ethmac7.png" width="80%" />

**Шаг 4.** Введите эту команду для Mac: “./deposit verify-keystore” и нажмите 'Enter'.

<img src="/images/posts/diving-deeper/ethmac5.png" width="80%" />

**Шаг 5.** Введите путь к вашему файлу хранилища ключа Eth2. Чтобы найти путь, держите кнопку Option + нажмите правой кнопкой мыши на файл хранилища ключа и выберите "Copy 'keystore-m....json' as Pathname". После этого вернитесь к терминалу и вставьте его. Он должен выглядеть примерно так: “/Users/stephen/Desktop/keystore-m_12381_3600_0_0-1607370800275.json” (если он у вас на рабочем столе).

**Шаг 6.** Когда вы введете команду в терминал и нажмете 'Ввод', терминал должен запросить пароль файла хранилища ключа. Введите его, затем введите его еще раз, для подтверждения.

**Шаг 7.** Готово! В терминале вы должны увидеть: "Успех! Ваш файл хранилища ключа верифицирован." Под этим текстом вы увидите ваш адрес снятия Eth2, или «открытый ключ». Сравните его с адресом, который вы увидели, когда вы впервые создали свой файл хранилища ключа Eth2, и убедитесь что он совпадает.

<img src="/images/posts/diving-deeper/ethmac6.png" width="80%" />

[eth2web]: /@@@@@@/dapps/stake-eth2-web/

[eth2app]: /@@@@@@/mewwallet/stake-eth2-mw/

[eth2github]: https://github.com/MyEtherWallet/eth2.0-deposit-cli/releases/tag/v1.1.0m1
