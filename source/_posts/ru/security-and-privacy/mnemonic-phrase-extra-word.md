---
title: "Мнемоническая фраза: Стоит ли мне включить дополнительное слово?"
date: 2018-06-01 00:06:00
tags:
  - мнемоническая
  - фраза
  - пароль
categories:
  - 
    - security-and-privacy
primary_category: security-and-privacy
primary_category_display_name: "Безопасность и Приватность"
---

# __Мнемоническая фраза: Стоит ли мне включить дополнительное слово?__
###### {% read_time title "Мнемоническая фраза: Стоит ли мне включить пароль??" %} мин. на прочтение
***

## __Создание нового кошелька__
#### __Мы не рекомендуем создавать новый кошелек с использованием мнемонической фразы через наш сайт, если вы не планируете использовать [MEW оффлайн](/@@@@@@/offline/using-mew-offline).__

Когда вы создаете новый кошелек через опцию ‘Мнемоническая фраза’ в MEW, вам будет предоставлен выбор, включать или не включать дополнительное слово. Это дополнительное слово, которое вы сами выбираете добавить в конце фразы. Например, если вы создаете мнемоническую фразу из 24 слов, он будет выступать в качестве **обязательного** 25-го слова каждый раз, когда вы захотите использовать эту фразу.

Occasionaly, this extra word is also referred to as a 'password', but this is misleading. It's actually a 13th / 25th word to your phrase.

**The upside to this is extra security.** If someone got a hold of your 24 word mnemonic phrase, they would still need your extra word to act as a 25th word in order to access your funds. This greatly increases the security of your phrase.

**The downside to this is integration with other platforms.** Almost every other Ethereum wallet interface requires your mnemonic phrase to be in a 12 or 24-word format and does not offer the extra word option. Therefore, restoring this phrase through other Ethereum wallets can prove difficult. This extra word becomes necessary to see your wallet, so you will not be able to regain access through non-supporting wallets.

In the end, the choice is yours.


## __Доступ к кошельку или его восстановление__
#### __Мы не рекомендуем обращаться к своему кошельку или восстанавливать его с помощью мнемонической фразы непосредственно на нашем веб-сайте, если только вы не [используете офлайн-версию MEW](/@@@@@@/offline/using-mew-offline).__

When accessing or restoring your wallet through the ‘Mnemonic Phrase’ option on MEW, you are given the choice of whether or not to include an extra word. Most of the time, the answer is no.

Most apps or extensions that use Mnemonic phrases, such as MEWconnect, MetaMask, and hardware wallets, do not include an extra word in their mnemonic phrase. They ask you to input a password for app access, but this is different than requiring an extra word for recovery purposes.

If you made your wallet directly on MyEtherWallet.com, you may need to use the extra word you chose during creation to restore your wallet. However, most wallets made through other platforms will **not** require the extra word. Simply toggle this option to the ‘off’ position and proceed with your recovery process.