---
title: "Manually Revealing Your ENS Bid"
date: 2018-06-01 00:03:00
tags:
- ens
- bid
- auctions
- auction
categories:
- [ens]
primary_category: ens
primary_category_display_name: "ENS"
---

# __Manually Revealing Your ENS Bid__
###### ⏰ 3 min read
***

## __Find the Transaction Hash for Your Bid__
First, look up your address on Etherscan.io in order to find the transaction in which you placed your bid.

#### __Look for:__
* An outgoing transaction (which shows as orange) to [ENS-Registrar](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef).
* It should have an ETH value `>= 0.01 ETH` (not one that says `0 ETH`).
* If you are just now revealing your bid, it will be a transaction sent 2 - 4 days ago.
* When you click on the transaction hash, it should show 'Function: newBid(bytes32 sealedBid)' under 'Input Data'.

Once you find this, copy and paste the value in the 'Input Data' into a text document and remove 'MethodId:' and '[0]:', so that it looks like this: 
 
`0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`



## __Generate the Reveal Information and Ensure it Matches Your Bid Transaction Hash__

**Step 1.** Head to MEW, access your wallet, and go under the 'ENS' section to the left.

**Step 2.** Depending on what you initially saved, enter the following information:
* The address you bid from
ENS Name you Bid On (no '.eth' at the end!), or the namehash from your long string under "Hashed ENS Name (Label Hash)"
* The amount you bid
* Your Secret, or the sha3 secret from your long string under "Your Secret (Hashed)"

**Step 3.** When you do this, the following four fields will populate with long data. You want compare the string you copied earlier, `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`, to the string shown under 'New Bid Data'. These two should match.

**Step 4.** Pro-Tip: Copy the finalize data from this page and save it somewhere. This will allow you to easily finalize the transaction in a few days.

**Step 5.** Copy the 'Reveal Data' string.



## __Send Transaction to Reveal__

**Step 1.** In a new tab, head to our website and access the wallet for the address that you placed the bid on. This address should also be the same address entered in Step 2 of the previous section.

**Step 2.** Enter the following information into the fields:
* To: `0x6090a6e47849629b7245dfa1ca21d94cd15878ef`
* Amount: `0 ETH`
* Gas Limit: `200000`
* Data: From the 'Reveal Data' field from Step 5 of the previous section.

**Step 3.** Generate and sign your transaction.

**Step 4.** Click your transaction hash after you send it. Ensure there are no errors (you may have to refresh after a minute or two.)

**Step 5.** In a new tab, head to [Etherscan's ENS Lookup](https://etherscan.io/enslookup?q=yourname.eth) interface and type in the name you bid on. Make sure that you see a very recent transaction from your address with 'Unseal Bid' next to it.