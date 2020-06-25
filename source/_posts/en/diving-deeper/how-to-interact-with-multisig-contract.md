---
title: "How to Interact with a Multisig Contract?"

date: 2018-06-01 00:03:00
tags:
- faqs
- service
- stop
- down
categories:
- [faqs]
- [diving-deeper]
primary_category: diving-deeper
primary_category_display_name: "Diving Deeper"
alias:
  - en/faq/interacting-with-ethereum-multisig-wallet.html
---

# **How to Interact with a Multisig Contract?**

###### {% read_time title "How to Interact with a Multisig Contract?" %} min read

* * *

**Step 1.** Access your wallet and head to the ‘Contracts’ section, to the left of your wallet interface.

**Step 2.** Locate your preferred Multisig Contract ABI in the dropdown, or manually enter the contract's ABI. 

**Step 3.** Check the contract address to make sure it's the one you're looking for, then press 'Continue'. 

-   You may need to enter your contract address in the ‘Contract Address’ field at the top. 

**Step 4.** Select ‘Execute’ from the dropdown menu. 

-   Enter the address you want to send to in the `_To` field.
-   Enter the amount you want to send in the `_Value` field. 
-   In the `Data` field, type `0x`. This sets it to empty. 
-   Leave the `Value in ETH` as `0`.
-   Click `Write`.
-   Confirm the transaction and send. 

**Step 5.** Click the Transaction ID that outputs with the ‘Success’ message. Copy this ID.

**Step 6.** If it’s a multisig contract with two owners, you will need to refresh this page and choose ‘Confirm’.

-   In Step 5, you opened the Transaction ID from the ‘Execute’ call. Your page should look like [this example of a transaction hash][exampleTX].
-   Click the ‘Event Logs’ tab.
-   For reference, in [this example of event logs][referenceLog] (note this is not YOUR information, it’s an example), the `_h` value would be `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`.
-   Check the link above where it says that string, and then compare it to find what YOUR `_h` value is. It will be different than what we provided as an example. 
-   Go back to MEW, where you have the ‘Confirm’ page open, and paste your string into the `_h` field.
-   Click ‘Write’ again.
-   Confirm and send the transaction.

**Step 7.** Double-check to confirm everything went as intended.

**Step 8.** If your multisig is a 3 of 5 multisig, you will repeat the confirm process outlined in Step 6 until it reaches the necessary approvals. Luckily, the `_h` value will remain the same for each of them.

**Step 9.** You can [view another approval from our example][eventLog] of the event logs from before.

**Step 10.** Feel free to repeat this process whenever you want to send ETH. 

[exampleTX]: https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3

[referenceLog]: https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog

[eventLog]: https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog
