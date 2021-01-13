---
title: "Почему MEW wallet использует PIN-код вместо пароля?"
date: 2018-03-01 00:01:00
tags:
  - mewwallet
  - pin
  - password
  - security
categories:
  - 
    - mewwallet
primary_category: mewwallet
primary_category_display_name: "MEWwallet"
author: MyEtherWallet (MEW)
---

# **Почему MEW wallet использует PIN-код вместо пароля?**

###### {% Почему MEW wallet использует PIN-код вместо пароля?" %} мин чтения

* * *

## Во-первых, важно понимать [методы безопасности и шифрования используемые MEW wallet][mws] для защиты вашего закрытого ключа.

<br>

Пин-код и биометрический доступ, такие как FaceID или отпечаток пальца, являются первым шагом доступа к информации о вашем ключе, хранящейся в безопасном локальном хранилище на вашем мобильном устройстве. Эта информация защищается следующим образом (некоторые уровни безопасности и шифрования здесь пропущены для простоты):

**PIN/биометрия -> Защищенный ключ Enclave -> Master ключ -> Закрытый ключ**

Поскольку ваш PIN-код **не используется непосредственно для шифрования вашего закрытого ключа**, для доступа нет необходимости использовать сложный пароль. Если хакеру удалось-бы завладеть вашим устройством и как-то получить доступ к вашему зашифрованному закрытому ключу, ему пришлось бы взламывать шифрование **AES 128 bit SE**, что заняло бы дольше времени чем возраст нашей вселенной.

Другой сценарий: кто-то получает доступ к вашему телефону и пытается использовать MEW wallet для прямого перевода средств. Сначала они должны разблокировать главный экран блокировки вашего телефона, затем им нужно разблокировать MEW wallet. (Для максимальной безопасности используйте разные коды для блокировки экрана телефона и приложения MEW wallet!)

Взламывание PIN-кода требует множества проб и ошибок для определения правильной комбинации. However, **both your mobile device and the MEW wallet app have placed heavy restrictions on the number of attempts you can make to unlock them**. For this reason, the possibility of someone accessing your app with your phone is very small, even if they have prolonged access to it.

Therefore, using a password or a pin code are both viable options. However, we chose the pin code route for simplicity, efficiency, and the ability to place restrictions on the number of attempts to unlock.

The best way to keep your funds safe using the MEW wallet app is to make sure you write down your 24 word recovery phrase on paper with pen, double-check every word, and store it somewhere safe for the long-term. **Never enter your phrase on any websites online, and never share them with anyone.** They offer complete and permanent access to your wallet.

[mws]: /@@@@@@/mewwallet/mewwallet-security/
