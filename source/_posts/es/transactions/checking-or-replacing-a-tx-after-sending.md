---
title: "Checking or Replacing a Transaction After it's Been Sent"
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
---

# **Checking or Replacing a Transaction After it's Been Sent**

###### {% read_time title "Checking or Replacing a Transaction After it's Been Sent" %} min read

* * *

## **Can I cancel, replace, or do anything once a transaction has been sent?**

#### **99.999% of the time the answer is NO.**

Once a transaction has been mined and is included in a block on the blockchain, it cannot be canceled or replaced.

During times of normal volume, transactions are mined within seconds and do not spend any length of time in the transaction pool. There is simply not enough time to cancel or replace or override a transaction once it has been sent.

## **However...**

During times of extremely high volume, transactions could be pending for hours, if not days, before being mined.

During these times it is theoretically possible to replace an existing transaction with a new transaction with a higher gas price.

The second transaction, theoretically, will be mined before the first transaction, effectively "canceling" the first transaction.

The easiest way to do this is by sending a `0 ETH` transaction to your own address with the same nonce and higher gas price. This will "cancel" your first transaction.

There is no guarantee this will work, nor that it will work every time. This tool is very, very new. Please use at your own risk.

* * *

#### **Do not take this article or features on MyEtherWallet as an indication that you can cancel a transaction you accidentally sent to the wrong address, or get your ETH back once it has been sent.**

#### **It is only regarding finding, checking, and potentially replacing transactions that have been stuck in the transaction pool for very long period of time.**

* * *

## **How to Check the Status of a Transaction**

**Step 1.** Head to an Ethereum blockchain explorer, like Etherscan.io or Ethplorer.io.

**Step 2.** Copy and paste the transaction hash into the search field provided.

**Step 3.** Details will appear depending on the state of the transaction. It could be...

-   **Success:** Your transaction was successfully mined and is on the blockchain.
    -   If you do not see any errors, your transaction was successfully sent. Your ETH or Tokens are where you sent them. If this balance has not been credited to your hosted wallet or exchange account 24 hours after sending, please contact that service. Send them the link to your transaction and ask them, nicely, to look into your situation.
-   **Failed:**
    -   If you see a red ( ! ) symbol, or a "BAD INSTRUCTION" or "OUT OF GAS" error message, it means that the transaction was not successfully sent. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.
    -   If you see 'Reverted', it's a good idea to double-check the actions you're taking. This is an error having to do with a smart contract user-error.
-   **Transaction Not Found:** This transaction cannot be found. It's possible that it did not go through, or that it cannot be found in the Ethereum blockchain explorer you are using. Try using the other one (Etherscan.io or Ethplorer.io). If you still can't find it, it never went through.
-   **Pending:** Your transaction was located in the transaction pool of the explorer you are using. It is currently pending (waiting to be mined). There is a chance you can cancel or replace this transaction, but it's a very small chance.

## **"Replacing" vs "Canceling" Transactions**

-   **Canceling:** Generating a `0 ETH` transaction to your own address with the purpose of preventing a previous transaction from "going through" / "being mined" / being included in the blockchain.
-   **Replacing:** Generating a `XX ETH` transaction to someon else's address with the purpose of doing something (i.e. sending funds, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through.

The reason we recommend 'Canceling' over 'Replacing' is that it is not guaranteed your second transaction will actually replace your first one. Your first transaction could still be mined first, invalidating your second transaction. Choosing to replace a transaction with a new one could lead to more confusion, headaches, and pending ETH, or ETH spent unnecessarily in the form of gas. This is especially true if your first transaction is mined anyways, which is possible.

## **Canceling a Transaction**

Canceling means generating a `0 ETH` transaction to your own address with the purpose of preventing a previous transaction from "going through" / "being mined" / "being included in the blockchain" / "being stuck".

**Step 1.** Head to Etherscan.io or Ethplorer.io.

**Step 2.** Paste your transaction hash.

-   If it says pending, you can still try to cancel it.
-   If it says not found, click the button again, waiting a few minutes between each click. If that doesn't work, it's likely your transaction never went through.
-   Si dice exitoso, no puede tratar de cancelarlo.

**Step 3.** If it says pending, access the wallet you used to send the original transaction on MEW.

**Step 4.** Send a transaction to yourself with a balance of `0 ETH`.

**Step 5.** Click the 'Send Transaction' button.

**Step 6.** A dialog will appear. Click the "Yes, I'm Sure" button to send.

**Step 7.** A new transaction hash will appear. Click the link to view it and see if you were successful. If it doesn't show up immediately, try refreshing in a few minutes.

## **Replacing a Transaction<br> (Advanced Users Only)**

Replacing a transaction means generating a `XX ETH` transaction to someone else's address with the purpose of doing something (i.e. sending a transaction, revealing an ENS bid, etc.) while simultaneously not having a previous transaction go through.

**Step 1.** Unlock the wallet you used to send the original transaction.

**Step 2.** Fill the 'To Address' field with whatever address you wish to send to.

**Step 3.** Change the 'Amount' from `0` to the amount of ETH you wish to send.

**Step 4.** If sending a standard ETH transaction, you can use `21000` for the gas limit. If sending tokens, raise it to around `100000`. Otherwise, just leave as is.

**Step 5.** For the 'Gas Price' field, raise this to 10 GWEI higher than your previous transaction. If this is an urgent matter, then you may choose to raise it. Keep in mind, the higher the gas price, the higher the transaction fee (Gas Limit \* Gas Price).

**Step 6.** Check and make sure the 'Nonce' field is the same as your previous transaction. If it is, leave the field as is. If you change this, it will not replace the transaction you are hoping it will replace.

**Step 7.** Click the 'Send Transaction' button.

**Step 8.** A dialog will appear. Carefully review all information displayed. Click the "Yes, I'm Sure" button to send.

**Step 9.** A new transaction hash will appear. Click the link to view it and see if you were successful. If it doesn't show up immediately, try waiting a few minutes then refreshing.

## **Final Notes**

-   MEW does not receive any transaction fees. They are paid to the miners for including your transaction in a block. We are a free, open-source service.
-   The transaction pool varies from node to node. This means that a transaction may be pending in ETH (Infura.io)'s transaction pool, but not ETH (MyEtherWallet.com)'s transaction pool. For this reason, you should try all the ETH nodes we offer.
