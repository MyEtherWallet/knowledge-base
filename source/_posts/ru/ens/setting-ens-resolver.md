---
title: "Setting the Resolver for an ENS Name"
lang: ru
date: 2018-06-01 00:04:00
tags:
- setting
- resolver
- ens
- name
categories:
- [ens]
primary_category: ens
primary_category_display_name: "ENS"
alias:
- ens/setting-the-resolver-for-an-ens-name.html
---

# __Setting the Resolver for an ENS Name__
###### {% read_time title "Setting the Resolver for an ENS Name" %} min read
***

## __Set the Resolver for your Name__

**Step 1.** On MEW, [access your wallet][accessWallet] and head to the 'Contracts' tab on the left.

**Step 2.** Choose ENS - Registry: `0x314159265dD8dbb310642f98f50C066173C1259b`. Click 'Access'.

**Step 3.** Select 'setResolver'.

**Step 4.** Find your name on Etherscan.io and copy the 'namehash'.

**Step 5.** Enter the 'namehash' of your name under 'node (bytes32)'.

**Step 6.** Enter the Public Resolver Address under resolver (address): `0x5FfC014343cd971B7eb70732021E26C35B744cc4`

**Step 7.** Unlock the owner's account. 

**Step 8.** Click 'WRITE'.

**Step 9.** Generate and send this transaction – leave "Amount to Send" as `0`.

**Step 10.** Your transaction should look like [this][exampleTX1].



## __Set the Address That Your Name Will Resolve To__

**Step 1.** On MEW, [access your wallet][accessWallet] and head to the 'Contracts' tab on the left.

**Step 2.** Choose ENS-Public Resolver: `0x5FfC014343cd971B7eb70732021E26C35B744cc4`. Click "Access".

**Step 3.** Select 'setAddr'.

**Step 4.** Find you name on Etherscan.io and copy the 'namehash'.

**Step 5.** Enter the 'namehash' of your name under 'node (bytes32)'.

**Step 6.** Enter the address you would like to resolve to under addr (address).

**Step 7.** Unlock the owner's account.

**Step 8.** Click 'WRITE'.

**Step 9.** Generate and send this transaction – leave "Amount to Send" as `0`.

**Step 10.** Your transaction should look like [this][exampleTX].

[accessWallet]: /ru/getting-started/how-to-access-your-wallet/
[exampleTX1]: https://etherscan.io/tx/0x60eec50b492375bce25684f806599873b7f682e1ba504c8bed7cc90c33368118
[exampleTX]: https://etherscan.io/tx/0xe4b8cbbb9c30a9066e4d430e347e07442ccc99b927ed73280792aee718ecbd30