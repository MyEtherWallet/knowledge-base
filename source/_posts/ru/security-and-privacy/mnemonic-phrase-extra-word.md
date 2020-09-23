---
title: "Recovery Phrase: Should I Include an Extra Word?"
date: 2018-06-01 00:06:00
tags:
  - мнемоническая
  - recovery
  - фраза
  - password
categories:
  - 
    - security-and-privacy
primary_category: security-and-privacy
primary_category_display_name: "Безопасность и Приватность"
author: MyEtherWallet (MEW)
---

# **Recovery Phrase: Should I Include an Extra Word?**

###### {% read_time title "Recovery Phrase: Should I Include an Extra Word?" %} min read

* * *

## **Создание нового кошелька**

#### **We do not suggest creating a new wallet with the recovery phrase (mnemonic phrase) option on our website, unless you are planning to [use MEW offline](/@@@@@@/offline/using-mew-offline).**

Когда вы создаете новый кошелек через опцию ‘Мнемоническая фраза’ в MEW, вам будет предоставлен выбор, включать или не включать дополнительное слово. Это дополнительное слово, которое вы сами выбираете добавить в конце фразы. For example, if you’re making a 24 word recovery phrase, this will act as a **mandatory** 25th word every time you want to use this phrase.

Иногда это дополнительное слово также называется "пароль", но это вводит в заблуждение. На самом деле, это 13-ое / 25-ое слово к вашей фразе.

**The upside to this is extra security.** If someone got a hold of your 24 word recovery phrase, they would still need your extra word to act as a 25th word in order to access your funds. Это значительно повышает безопасность вашей фразы.

**The downside to this is integration with other platforms.** Almost every other Ethereum wallet interface requires your recovery phrase to be in a 12 or 24-word format and does not offer the extra word option. Поэтому восстановление этой фразы с помощью других кошельков Ethereum может оказаться сложным. Это слово необходимо для просмотра вашего кошелька, поэтому вы не сможете восстановить доступ через кошельки, которые его не поддерживают.

В любом случае, выбор за вами.

## **Доступ к кошельку или его восстановление**

#### **We do not suggest accessing or restoring your wallet with your recovery phrase directly on our website, unless you are [using MEW offline](/@@@@@@/offline/using-mew-offline).**

Когда вы получаете доступ к своему кошельку или восстанавливаете его с помощью опции «Мнемоническая фраза» на MEW, вы можете выбрать, включать дополнительное слово или нет. В большинстве случаев ответ будет «нет».

Most apps or extensions that use recovery phrases, such as the MEW wallet app, MetaMask, and hardware wallets, do not include an extra word in their recovery phrase. Они просят вас ввести пароль для доступа к приложению, но это отличается от дополнительного слова для восстановления.

Если вы создали свой кошелек непосредственно на MyEtherWallet.com, то для восстановления кошелька вам, возможно, нужно будет использовать дополнительное слово, которое вы выбрали при его создании. Однако, большинство кошельков, сделанных на других платформах, **не** требуют дополнительного слова. Просто выключите эту опцию и продолжите процесс восстановления.
