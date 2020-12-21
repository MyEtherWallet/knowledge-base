---
title: "Стейкинг в Eth2 на MEW web"
date: 2018-06-01 00:02:00
tags:
  - staked.us
  - MEW
  - eth2
  - stake
categories:
  - 
    - dapps
primary_category: dapps
primary_category_display_name: "DАpps"
author: MyEtherWallet (MEW)
---

# **Стейкинг в Eth2 на MEW web**

###### {% read_time title "Stake on Eth2 using MEW web" %} мин. чтения

* * *

## **MEW интегрировал Staked.us для упрощения создания валидатора на Eth2 и получения процентного дохода.**

Как только вы сделаете ставку на Eth2 для создания валидатора, никаких дальнейших действий не требуется. Staked.us будет поддерживать и обновлять ваш валидатор для вас.

Чтобы создать валидатор, необходимо сделать ставку минимум 32 ETH. Ваша ставка будет находиться на Beacon Chain, которая лежит в основе Eth2. Для дополнительной информации об Eth2, Beacon Chain и создании валидатора, ознакомьтесь с нашей статьей о [0 Фазе Eth2][eth2].

**Вам также понадобится адрес для снятия Eth2.** Адреса снятия Eth2 используются для вывода вашей ставки ETH и накопленных процентов. Каждый пользователь получит адрес для снятия Eth2, файл-хранилище ключа и фразу восстановления для своей ставки на Eth2. Если вы сделаете ставку более 32 ETH, дополнительные валидаторы будут привязаны к одному и тому же адресу. Вы можете [генерировать свой собственный адрес для снятия Eth2][geneth2] в интерфейсе MEW web.

Когда вы генерируете адрес для снятия Eth2, вы введете пароль. Этот пароль привязан к файлу-хранилища ключа. Вы также получите фразу восстановления, которая в данном случае - список из 24 слов. Убедитесь, что вы записали эти слова правильно и храните их в безопасности.

Вы также можете [проверить ваш адрес снятия Eth2 ][geneth2] с помощью файла-хранилища ключа, чтобы убедиться, что все работает правильно.

**Не теряйте свой файл хранилище ключа Eth2 + пароль и фразу восстановления!** Они шифруют ваши ключи и необходимы для будущего доступа. Никто не может восстановить их для вас, поэтому очень важно хранить их в безопасности.

## **Риски стейкинга на Eth2**

<br>

Staked.us is the provider for our Staking integration. Staked.us will not have access to your stake or rewards, but they will be responsible for maintaining your validator. If a validator is down for a prolonged period of time, **there are risks of having your staked ETH slashed**. Therefore, your stake is in the hands of Staked.us.

In addition, all staked ETH and rewards from your validator will be unable to be withdrawn until a later phase of Eth2 released on an unknown date in the future. It's very important that you understand all ETH staked during Phase 0 will be unavailable for withdrawal until Eth2 transfers are enabled in a later phase.

### **Stake your ETH on Eth2 with MEW web**

<br>

**Step 1.** Access [MEW web][mew] through your preferred access method. If you use the MEW wallet app, you can [stake on Eth2 directly from the MEW wallet app][mwstake].

<img src="/images/posts/diving-deeper/stake1.png" width="85%" />

**Step 2.** Head to the DApps section, and select ‘Staked’.

<img src="/images/posts/diving-deeper/stake2.png" width="50%" />

**Step 3.** Enter or select a multiple of 32 ETH. For each stake of 32 ETH, Staked.us will create a validator on your behalf.

<img src="/images/posts/diving-deeper/stake3.png" width="85%" />

**Step 4.** Upload your Eth2 keystore file from when you generated your Eth2 withdrawal address.

<img src="/images/posts/diving-deeper/stake4.png" width="85%" />

**Step 5.** Review your staking information and double-check your Eth2 withdrawal address for accuracy. Then select ‘Enable Staking’.

<img src="/images/posts/diving-deeper/stake5.png" width="85%" />

**Step 6.** You will need to wait a few seconds to a few minutes for Staked to create your validator(s). After that, you can click ‘Stake on Eth2’ to confirm the transaction and finish the staking process.

<img src="/images/posts/diving-deeper/stake6.png" width="85%" />

<img src="/images/posts/diving-deeper/stake7.png" width="85%" />

**Step 7.** Your validator is now ready to go on Eth2, although it may take up to 48 hours for it to be finalized. You can view your transaction on Etherscan. Staked.us will maintain and update your validator(s) for you, so all you have to do is reap the rewards.

<img src="/images/posts/diving-deeper/stake9.png" width="85%" />

[eth2]: /@@@@@@/diving-deeper/what-is-staking-eth2/

[geneth2]: /@@@@@@/diving-deeper/eth2-address/

[geneth2]: /@@@@@@/diving-deeper/eth2-address/

[mew]: https://www.myetherwallet.com

[mwstake]: /@@@@@@/mewwallet/stake-eth2-mw/
