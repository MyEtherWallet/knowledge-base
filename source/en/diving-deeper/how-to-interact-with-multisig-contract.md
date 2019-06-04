---
title: "How to Interact with a Multisig Contract?"
lang: en
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
- faq/interacting-with-ethereum-multisig-wallet.html
---

# __How to Interact with a Multisig Contract?__
###### {% read_time title "How to Interact with a Multisig Contract?" %} min read
***

**Step 1.** Access your wallet and head to the ‘Contracts’ section, to the left of your wallet interface.

**Step 2.** There should be a Must Multisig Contract ABI in the dropdown. If not, we have provided the ABI at the bottom of this article, which you can manually input into the interface. 

**Step 3.** Enter your contract address in the ‘Contract Address’ field at the top. 

**Step 4.** Select ‘Execute’ from the dropdown menu. 
* Enter the address you want to send to in the `_To` field.
* Enter the amount you want to send in the `_Value` field. 
* Leave the `Data` field empty. 
* We suggest sending a small amount first, to test the waters.
* Unlock the owner’s address, and click `Write`.
* A pop-up will appear. Leave the `Amount to Send` as `0`.
* Click ‘Generate Transaction’, confirm the transaction, and send. 

**Step 5.** Click the Transaction ID that outputs with the ‘Success’ message. Copy this ID.

**Step 6.** If it’s a multisig contract with two owners, you will need to refresh this page and choose ‘Confirm’.
* In Step 5, you opened the Transaction ID from the ‘Execute’ call. You should have a page like [this][exampleTX] open.
* Click the ‘Event Logs’ tab.
* For reference, at [this][referenceLog] link (note this is not YOUR link, it’s an example), the `_h` value would be `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`.
* Check the link above where it says that string, and then compare it to find what YOUR `_h` value is. It will be different than what we provided as an example. 
* Go back to MEW, where you have the ‘Confirm’ page open, and paste your string into the `_h` field.
* Click ‘Write’ again and unlock the second owner’s account. 
* Generate and send the transaction.

**Step 7.** Double-check to confirm everything went as intended.

**Step 8.** If your multisig is a 3 of 5 multisig, you will repeat the confirm process outlined in Step 6 until it reaches the necessary approvals. Luckily, the `_h` value will remain the same for each of them.

**Step 9.** You can view another approval for our previous example [here][eventLog].

**Step 10.** Feel free to repeat this process whenever you want to send ETH. 



## __Mist / Ethereum Wallet’s Multisig Contract ABI__

`[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]`

You can also copy this ABI and read more about the process from a reddit post found [here][multisigABI].

[exampleTX]: https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3
[referenceLog]: https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog
[eventLog]: https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog
[multisigABI]: https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/