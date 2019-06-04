---
title: "ENS: Auctions 101"
lang: ru
date: 2018-06-01 00:02:00
tags:
- ens
- auction
- auctions
categories:
- [ens]
primary_category: ens
primary_category_display_name: "ENS"
---

# __ENS: Auctions 101__
###### {% read_time title "ENS: Auctions 101" %} min read
***

The Ethereum Name Service, also known as ENS, is a domain service that uses a bidding system to assign a specific domain tied to your wallet’s account address. The process involves anonymously bidding on a unique name, waiting three days, then revealing your bid. The highest bidder gains ownership of this ENS domain, to use it however they wish.

ENS domains take the format of `YourDomainHere.eth`. The intention behind this is to simplify the normal public address into a form that is easier to use and send to others. There are other use cases as well, but this is the main reason for this service as of right now.

An easy example of this is our MEW donation address:

Normal donation address: `0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D`

ENS donation address: `mewtopia.eth`

Both of these addresses lead to the same wallet destination, but the ENS domain is much more convenient.



## __How to Reserve an ENS Domain__

**Step 1.** Head to MyEtherWallet.com.
* Always check the URL to make sure you’re on our legit site!

**Step 2.** Access your wallet. 
* If you don’t already have a wallet, you will need to [create a new wallet][createWallet]. 
* You will also need a small amount of ETH for [gas][gas]. We generally recommend `.01 ETH` for 1 - 2 transactions. Starting and finalizing ENS auctions both count as a transactions.

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right). 
* Here you will see the ‘Register ENS’ option. Click there!

**Step 4.** Enter your desired domain name to see if it is available.
* ENS domains must be 7 characters or longer.
* Keep in mind that the final product will look like `YourDomainHere.eth`.
* You can also search Etherscan.io for available ENS domains.

**Step 5.** Once you’ve chosen your desired ENS name, it’s time to start an auction. Get out a pen and paper, you’ll need to write some information down.

**Step 6.** Enter your actual bid amount and a bid mask amount. A secret phrase will be generated at random below these fields.
* Your actual bid amount is the amount you’re willing to actually lock up and bid for this domain. 
* Your bid mask must be at least the amount of your actual bid value. This is made as a disguise to deter other bidders who may be looking to scoop up cheap domain names.
* If multiple people bid on this domain, the highest bidder will only have to lock up the amount of ETH made by the the second highest bidder. 
* If no one else is planning on bidding (which is usually the case), you can get the domain for as little as `.01 ETH`!

**Step 7.** Write down your actual bid, bid mask, and secret phrase. 
* This information is necessary for you to finalize your auction and ENS domain. 
* Your secret phrase is extremely important, as it must be used with your actual bid amount to finalize the domain auction. If you’re missing even one letter, the process will not be completed.

**Step 8.** On the next screen, review all your information and confirm it. 
* Write it all down! Print it out! Remember this. You’ll need it in three days.
* Make sure to note the time the auction ends. Check the timezone as well, so there is no confusion.

**Step 9.** On the last day of the auction, return to the ENS section of our interface and search for your domain to reveal your bid within the time limit. 
* If you end up losing the auction, 99.5% of your bid will be refunded to you, with the exception of 0.5% which will be burned.
* If you do not reveal your bid in time, your actual bid amount will be permanently lost. If there were no other bidders, you may be able to [re-open the bid][reOpenBid] with no additional costs.

**Step 10.** If you won, MEW will give you the option to finalize your domain name. 
*This will only set your address as the owner of the domain, but you’re not done yet. If you want this domain to point to your address for sending, you still have a bit to do. Check out [this guide][finalizeEns] for more information on how to achieve this final step.

[createWallet]: /posts/Getting_Started/How_To_Create_A_Wallet/
[gas]: /posts/transactions/what-is-gas/
[reOpenBid]: /posts/ens/what-to-do-if-ens-bid-forgot/
[finalizeEns]: /posts/ens/setting-ens-resolver/