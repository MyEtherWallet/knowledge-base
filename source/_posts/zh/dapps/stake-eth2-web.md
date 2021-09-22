---
title: "Stake on Eth2 using MEW web"
date: 2018-06-01 00:02:00
tags:
  - 0x52dcf5bedc061604d8c592b0079a0ff2cea22eb7
  - MEW
  - eth2
  - stake
categories:
  - 
    - dapps
primary_category: dapps
primary_category_display_name: "DApps"
author: MyEtherWallet (MEW)
---

# **Stake on Eth2 using MEW web**

###### {% read_time title "Stake on Eth2 using MEW web" %} min read

* * *

## **MEW has integrated Staked.us to make it easier than ever to create a validator on Eth2 and earn rewards.**

Once you stake on Eth2 to create a validator, no further action is required. Staked.us will maintain and update your validator for you.

In order to create a validator, you’ll need at least 32 ETH to stake. Your stake will live on the Beacon Chain, which is the foundation for Eth2. For more information on Eth2, the Beacon Chain, and creating a validator, read our write-up on [Phase 0 of Eth2][eth2].

**You will also need an Eth2 withdrawal address.** Eth2 withdrawal addresses are used to withdraw your staked ETH and rewards. Each user will receive an Eth2 withdrawal address, a keystore file, and a recovery phrase for their Eth2 stake. If you stake more than 32 ETH, additional validators will all be tied to this same address. You can [generate your very own Eth2 withdrawal address][geneth2] on the MEW web interface.

When you generate your Eth2 withdrawal address, you will enter a password. This password is tied to your keystore file. You will also receive a recovery phrase, which in this case is a list of 24 words. Make sure you write these words down and keep them safe.

You can also [verify your Eth2 withdrawal address][geneth2] with your keystore file to make sure everything is working properly.

**Don't lose your Eth2 keystore file + password and recovery phrase!** They hold your keys and are necessary for future access. No one can recover these for you, so it's very important you take care of them.

## **Staking and the Risks Involved**

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
