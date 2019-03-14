---
title: "What to Do if You Forgot to Reveal Your ENS Bid"
date: 2019-03-01 00:07:00
tags:
- forgot
- bid
- ens
categories:
- ens
primary_category: "ens"
primary_category_display_name: "ENS"
---

## What to Do if You Forgot to Reveal Your ENS Bid
***

### If There Are Other Bidders

You can get 0.5% back by manually revealing, as written up [here]().

Unfortunately, you must reveal during the reveal period in order to win the name, or get the full amount back.



### If There Are No Other Bidders
As soon as the auction is over, start a new auction for the same name.

Three days later, reveal your original bid and you will get it. During this period, do not tell anyone else about your name (unless you are emailing us for support because we can't help you otherwise).



#### To start an auction via MEW without bidding:
**Step 1.** [Access your wallet]() and head to the 'Send Transaction' area. 

**Step 2.** Send to the following address: `0x6090a6e47849629b7245dfa1ca21d94cd15878ef`.

**Step 3.** Amount: `0`.

**Step 4.** Gas Limit: `500000`.

**Step 5.** Data: [See Below].



#### To get your data string:
**Step 1.** Head to [Etherscan's ENS Lookup](https://etherscan.io/enslookup?q=yourname.eth) interface. 

**Step 2.** Type in your name and press 'lookup'.

**Step 3.** Copy the string after 'Label Hash [yourname]'

**Step 4.** Remove the `0x` from the beginning.

**Step 5.** Add `0xede8acdb` to the beginning.

**Step 6.** It should look like this:  `0xede8acdb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a`.