---
title: "Debugging a 'Bad Instruction' Reveal"
lang: ru
date: 2018-06-01 00:01:00
tags:
- api
- limit
- requests
categories:
- [ens]
primary_category: ens
primary_category_display_name: "ENS"
alias:
- ens/ens-debugging-a-bad-instruction-reveal.html
---

# __Debugging a 'Bad Instruction' Reveal__
###### {% read_time title "Debugging a 'Bad Instruction' Reveal" %} min read
***

## __Step 1. Make sure you actually placed a bid.__
* Look up your address on Etherscan.io in order to find the transaction in which you placed your bid.
* It will be an outgoing transaction (which show as orange) to [ENS-Registrar][ensRegistrar].
* The transaction should have an ETH value `>= 0.01 ETH` (not one that says `0 ETH`).
* If you are just now revealing your bid, it will say it was sent 2 - 4 days ago.
* Under 'Input Data', it should say: Function: newBid(bytes32 sealedBid).
* If you also started the auction, this transaction should be around the same time, but not before, the time you started the auction. You can find the start auction transaction by typing in your name on [Etherscan's ENS Lookup][ensLookup] interface and clicking on the transaction hash furthest to the bottom.

Once you find this, copy and paste the value under 'Input Data' into a text document and remove the 'MethodId:' and '[0]:' so that it looks like this:

 `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`



## __Step 2. Check to see if the information you saved matches the information you sent with your bid.__
* Head to MEW, access your wallet, and go under the 'ENS' section to the left.

* Enter the following information here:
    * The address you bid from.
    * The ENS name you bid on (without the '.eth' at the end), or the 'namehash' from the long string under 'Hashed ENS Name (Label Hash)'.
    * The actual amount you bid.
    * Your secret words, or the sha3 secret from the long string under 'Your Secret (Hashed)'.

When you do this, the following four fields will populate with long data. You want compare the string you copied earlier,  `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`, to the string shown under 'New Bid Data'.



## __Step 3. Try alternate values.__
* Try entering `0.01`, `0.1`, `1`, and any other amount you may have bid on other auctions, under 'Amount you Bid (ETH)'.
* Check the amount that you sent with your bid (the amount shown that you sent in your transaction from Step 1).
* Look through your transaction history or any information you have saved for other auctions, and try using those values at the amount you bid.
* Check again to make sure that you definitely sent from the address you entered.
* Try changing secrets to other secrets from other auctions. 
    * Did you change the secret instead of using the pre-filled one? Try entering common words and phrases you may have used.



## __Step 4. Once you match the string successfully, you can reveal your bid manually using this exact information.__

Copy the 'Reveal Data' string and head to MEW. Access the wallet for the address that you placed the bid on. This address should also be the same address entered during Step 2.

Enter the following information into the fields:

* To: `0x6090a6e47849629b7245dfa1ca21d94cd15878ef`
* Amount: `0 ETH`
* Gas Limit: `200000`
* Data: From the 'Reveal Data' field in the ENS section.



## __Step 5. Generate and sign your transaction.__
* Click your transaction hash after you send it. Ensure there are no errors (you may have to refresh a few times.)

* Then, in a new tab, head back to [Etherscan's ENS Lookup][ensLookup] interface and type in the name you bid on. Ensure that you see a very recent transaction from your address with 'Unseal Bid' next to it.

* You should probably also save the finalize data. This will allow you to easily finalize the transaction in a few days.

[ensRegistrar]: https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef
[ensLookup]: https://etherscan.io/enslookup?q=yourname.eth