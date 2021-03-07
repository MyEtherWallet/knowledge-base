---
title: "Canceling or Replacing a Transaction After it's Been Sent"
date: 2018-06-01 00:01:00
tags:
  - checking
  - replacing
  - transaction
  - tokens
  - sent
categories:
  - 
    - transactions
primary_category: transactions
primary_category_display_name: "Transactions"
alias:
  - en/transactions/check-status-of-ethereum-transaction.html
author: MyEtherWallet (MEW)
---

# **Canceling or Replacing a Transaction After it's Been Sent**

###### {% read_time title "Canceling or Replacing a Transaction After it's Been Sent" %} min read

* * *

## **Can I cancel, replace, or do anything once a transaction has been sent?**

#### **Most of the time, the answer is no.**

Once a transaction has been mined and is included in a block on the blockchain, it cannot be canceled or replaced.

During times of normal volume, transactions are mined within seconds and do not spend any length of time in the transaction pool. There is simply not enough time to cancel, replace, or override a transaction once it has been sent.

### **However...**

During times of extremely high volume and high gas prices, transactions could be pending for hours or days before being mined.

If your transaction is pending for a seemingly infinite amount of time, it is possible to replace it with a new transaction.

The easiest way to do this is by sending a `0 ETH` transaction to your own address with the same nonce and a higher gas price. This will cancel out your first transaction.

There is no guarantee this will work, nor that it will work every time. You may end up sending two transactions if you don't follow the process carefully, and even then there is no guarantee.

#### **This article is not saying that you can cancel a transaction you accidentally sent to the wrong address, or that you can get your ETH back once it has been sent.**

#### **It only pertains to finding, checking, and potentially replacing transactions that have been stuck in the transaction pool for a very long period of time.**

<br>

* * *

## **How to Check the Status of a Transaction**

**Step 1.** Head to an Ethereum blockchain explorer, like [Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), or [EthVM](https://www.ethvm.com).

**Step 2.** Copy and paste the transaction hash into the search field provided.

**Step 3.** Details will appear depending on the state of the transaction. It will say:

-   **Success:** Your transaction was successfully mined and is on the blockchain.
    -   If you do not see any errors, your transaction was successfully sent. Your ETH or tokens are where you sent them. If this balance has not been credited to your hosted wallet or exchange account 24 hours after sending, please contact that service. Send them the link to your transaction and ask them to look into your situation.
-   **Failed:**
    -   If you see a red ( ! ) symbol, or a "BAD INSTRUCTION" or "OUT OF GAS" error message, it means that the transaction was not successfully sent. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.
    -   If you see 'Reverted', it's a good idea to double-check the actions you're taking. This is an error having to do with a smart contract user-error.
-   **Transaction Not Found:** This transaction cannot be found. It's possible that it did not go through, or that it cannot be found in the Ethereum blockchain explorer you are using. Try using the other one ([Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), or [EthVM](https://www.ethvm.com)). If you still can't find it, it never went through.
-   **Pending:** Your transaction was located in the transaction pool of the explorer you are using. It is currently pending (waiting to be mined). There is a chance you can cancel or replace this transaction, but it's a very small chance.

If your transaction says 'Pending', check the gas price you used for this transaction and compare it to the gas prices seen on [EthGasStation.info](https://ethgasstation.info/). If it's much lower than the 'Safe Low' price listed, then you have a good chance of replacing or canceling it.

## **"Replacing" vs "Canceling" Transactions**

-   **Canceling:** This is when you want to 'undo' your transaction. You don't want it to go through, so you generate a `0 ETH` transaction to your own address with the purpose of preventing a previous transaction from "going through" / "being mined" / being included in the blockchain.
-   **Replacing:** This is when you want your same transaction to go through faster, or you want to replace it with another transaction. You generate a `XX ETH` transaction to someone else's address with the purpose of doing something (i.e. sending funds, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through.

The reason we recommend 'Canceling' over 'Replacing' is that it is not guaranteed your second transaction will actually replace your first one. Choosing to replace a transaction with a new one could lead to more confusion, headaches, and pending ETH, or ETH spent unnecessarily in the form of gas. This is especially true if your first transaction is mined anyways, which is possible.

* * *

## **Canceling a Transaction**

Canceling means generating a `0 ETH` transaction to your own address with the purpose of preventing a previous transaction from "going through" / "being mined" / "being included in the blockchain" / "being stuck".

**Step 1.** Head to [Etherscan.io](https://www.etherscan.io), [Ethplorer.io](https://www.ethplorer.io), or [EthVM](https://www.ethvm.com).

**Step 2.** Paste your transaction hash.

-   If it says pending, you can still try to cancel it.
-   If it says not found, click the button again, waiting a few minutes between each click. If that doesn't work, it's likely your transaction never went through.
-   Si dice exitoso, no puede tratar de cancelarlo.

**Step 3.** If it says pending, make note of the 'Nonce' being used by the transaction, then access the wallet you used to send the original transaction on MEW.

**Step 4.** In the left-side menu, click 'Send', then choose 'Send offline'.

-   You do not have to be offline for this method to work.

**Step 5.** Send a transaction to yourself with a balance of `0 ETH` and a high gas price, referenced from [EthGasStation.info](https://ethgasstation.info/), and use the same nonce you noted from step 3.

-   Keep in mind, the higher the gas price, the higher the transaction fee (Gas Limit \* Gas Price).

**Step 6.** Click the 'Generate Transaction' button, then copy the 'Signed transaction', which is a long string that begins with '0x'.

**Step 7.** Now close out of this pop-up and scroll down to our footer. Select 'Send Offline Helper'.

**Step 8.** Head to section 3 'Signed Transaction', then paste the string from step 6 and 'Continue'.

**Step 9.** A new transaction hash will appear. Search it on the blockchain explorer of your choice and see if it posts as successful.

-   If it doesn't show up immediately, try refreshing in a few minutes.

## **Replacing a Transaction<br> (Advanced Users Only)**

Replacing a transaction means generating a `XX ETH` transaction to someone else's address with the purpose of doing something (i.e. sending a transaction, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through. This can be the same transaction as the one that's pending or a completely different transaction.

**Step 1.** Repeat steps 1 - 4 from the 'Canceling a Transaction' section above.

**Step 2.** Fill the 'To Address' field with whatever address you wish to send to.

**Step 3.** Change the 'Amount' from `0` to the amount of ETH you wish to send, and change the nonce to the same nonce as the pending transaction.

**Step 4.** If you are sending a standard ETH transaction, you can use `21000` for the gas limit. If sending tokens, raise it to around `100000`.

**Step 5.** For the 'Gas Price' field, use a high gas price as referenced from [EthGasStation.info](https://ethgasstation.info/).

-   Keep in mind, the higher the gas price, the higher the transaction fee (Gas Limit \* Gas Price).

**Step 6.** Click the 'Generate Transaction' button, then copy the 'Signed transaction', which is a long string that begins with '0x'.

**Step 7.** Now close out of this pop-up and scroll down to our footer. Select 'Send Offline Helper'.

**Step 8.** Head to section 3 'Signed Transaction', then paste the string from step 6 and 'Continue'.

**Step 9.** A new transaction hash will appear. Search it on the blockchain explorer of your choice and see if it posts as successful.

-   If it doesn't show up immediately, try refreshing in a few minutes.

## **Final Notes**

-   MEW does not receive any transaction fees. They are paid to the miners for including your transaction in a block. We are a free, open-source service.
-   The transaction pool varies from node to node. Esto significa que una transacción puede estar pendiente en la pool de transacciones ETH (infura.io), pero no en la pool de transacciones ETH (MyEtherWallet.com). For this reason, you should try all the ETH nodes we offer.
