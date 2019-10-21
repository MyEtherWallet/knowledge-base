---
title: "ENS: Registering a Domain"
date: 2018-06-01 00:02:00
tags:
- ens
- dapps
- auction
- auctions
categories:
- [dapps]
primary_category: dapps
primary_category_display_name: "Dapps"
---

# __ENS: Registering a Domain__
###### {% read_time title "ENS: Registering a Domain" %} min read
***

The Ethereum Name Service, also known as ENS, is a domain service that assigns a user-specific domain tied to your wallet’s account address. 

ENS domains take the format of `YourDomainHere.eth`. The intention behind this is to simplify the normal public address into a form that is easier to use and send to others. There are other use cases as well, but this is the main reason for this service as of right now.

An easy example of this is our MEW donation address:

Normal donation address: `0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D`

ENS donation address: `mewtopia.eth`

Both of these addresses lead to the same wallet destination, but the ENS domain is much more convenient.


## __How to Register an ENS Domain__

**Step 1.** Head to MyEtherWallet.com.
* Always check the URL to make sure you’re on our legit site!

<img src="/images/posts/diving-deeper/1ens.png" width="100%">

**Step 2.** Access your wallet. 
* If you don’t already have a wallet, you will need to [create a new wallet][createWallet]. 
* You will also need a small amount of ETH for [gas][gas]. We generally recommend `.01 ETH` for 1 - 2 transactions. Initializing and finalizing ENS domains both count as a transactions.

<img src="/images/posts/diving-deeper/2ens.png" width="100%">

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right). 
* Here you will see the ‘ENS Manager’ option. Click there!

<img src="/images/posts/diving-deeper/3ensnew.png" width="100%">

**Step 4.** Enter your desired domain name to see if it is available.
* ENS domains must be 7 characters or longer.
* Keep in mind that the final product will look like `YourDomainHere.eth`.
* You can also search Etherscan.io for available ENS domains.
* If it says to migrate the ENS domain to the new registrar, that means it is unavailable (unless it's already yours, in which case you should migrate it. All migrations must take place by May 4th, 2020.)

<img src="/images/posts/diving-deeper/4ens.png" width="100%">

**Step 5.** If your domain is available, you can register it. Select the amount of time you wish to own the domain and click `Register`.
* All domains cost the equivalent of $5/year in ETH to maintain. 
* They can be owned indefinitely, as long as this annual fee is paid. 

<img src="/images/posts/diving-deeper/5ens.png" width="100%">

**Step 6.** After confirming the transaction, your domain request will process for a moment. When it's done, select `Register` again and confirm the second transaction.

<img src="/images/posts/diving-deeper/8ens.png" width="100%">

<img src="/images/posts/diving-deeper/11ens.png" width="100%">

**Step 7.** Check your transaction on Etherscan.io. It should show your public address under the 'Owner' field.

**This process will only set your address as the owner of the domain, but you’re not done yet. If you want this domain to point to your address for sending, you still have a bit to do.**

## __Finalizing the Process__

**Step 1.** In order to finish setting up your new domain, search it once again on MyEtherWallet in the ENS Manager Dapp.

**Step 2.** Click 'Manage', and enter the address you'd like all funds to be directed to under the 'Update Resolving address' field. If you'd like it to be the same wallet you've registered on, simply copy and paste the same public address.

**Step 3.** Confirm the transaction, and your domain will be ready to receive funds!

## __Transferring Ownership__

**Step 1.** If you want to transfer ownership of your domain, search it once again on MyEtherWallet in the ENS Manager Dapp.

**Step 2.** Click 'Manage', and enter the address you'd like to transfer the ownership to under the 'Transfer ENS domain to:' field. 

**Step 3.** Confirm the transaction, and the ownership of your domain will be transferred.

***
###### If you've previously placed an auction for your domain and haven't touched it sense , you need to migrate it to the new registrar. 

## __Migrating to the New Registrar__

**Step 1.** Head to MyEtherWallet.com.
* Always check the URL to make sure you’re on our legit site!

**Step 2.** Access your wallet. 
* If you don’t already have a wallet, you will need to [create a new wallet][createWallet]. 
* You will also need a small amount of ETH for [gas][gas]. We generally recommend `.01 ETH` for 1 - 2 transactions. Starting and finalizing ENS auctions both count as a transactions.

**Step 3.** Head to the Dapps section, to the left of your wallet's overview page (or by clicking the ‘Change’ function at the top right). 
* Here you will see the ‘ENS Manager’ option. Click there!

**Step 4.** Check the domain name you've previously registered. If all goes to plan, it should tell you that it's still in the old registrar.

<img src="/images/posts/diving-deeper/ens2.png" width="100%">

**Step 5.** Select 'Transfer' and a transaction screen will pop up. Confirm the transaction, and your domain will begin the transfer process.

<img src="/images/posts/diving-deeper/ens5.png" width="100%">

<img src="/images/posts/diving-deeper/ens4.png" width="100%">

**Step 6.** Once the transaction goes through, your domain will show in the new registrar. 

<img src="/images/posts/diving-deeper/ens6.png" width="100%">



[createWallet]: /@@@@@@/getting-started/how-to-create-a-wallet/
[gas]: /@@@@@@/transactions/what-is-gas/