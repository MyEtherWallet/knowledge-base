---
title: "How to Add a Default Network to MEW web"

date: 2018-06-01 00:01:00
tags:
- node
- network
- networks
- default
- add
categories:
- [networks-and-nodes]
primary_category: networks-and-nodes
primary_category_display_name: "Networks And Nodes"
---

# **How to Add a Default Network to MEW web**

###### {% read_time title "How to Add a Default Network to MEW web" %} min read

* * *

## You can add your Network to our default Network list under the conditions that your network is similar to Ethereum, has it's own unique ChainID, and has a running blockchain explorer.

## **Adding your Network Type**

#### If you’re adding a completely new network, you’ll need to first add it as a ‘Type’.

<br>

**Step 1.** Head to <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/networks/types>

-   Follow this link and check if your network type is already present. If not, you will need to prepare a few pieces of information about your network, such as the name, symbol, homepage, blockExplorer, and chainID.

<br>

**Step 2.** If you don’t see your network in the list, click ‘Create new file’ in the top-right corner of GitHub.

**Step 3.** Name your folder the same name as the network you’re adding. 

-   Example using CLO: ‘CLO.js’

<br>

**Step 4.** Fill in your network type information with the format below, using CLO as an example.

-   Change all the references to CLO with the appropriate information for your network.
-   If you need to import tokens and contracts, you may first need to add those to the Ethereum-lists repo, found here: <https://github.com/MyEtherWallet/ethereum-lists/tree/master/src> 
-   The third import refers to your network logo image, which you can upload and import to here: <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/assets/images/networks>
-   It’s a good idea to keep most of your naming and linking in all lower-case, except for the naming of your Types folder (which you’ve already done in Step 3). 

<br>

* * *

<div class="scrollbox">
import tokens from '@/_generated/tokens/tokens-clo.json';
import contracts from '@/_generated/contracts/contract-abi-clo.json';
import clo from '@/assets/images/networks/clo.svg';

export default {
  name: 'CLO',
  name_long: 'Callisto',
  homePage: '<https://callisto.network/'>,
  blockExplorerTX: '<https://explorer.callisto.network/tx/[[txHash]]'>,
  blockExplorerAddr: '<https://explorer.callisto.network/account/[[address]]'>,
  chainID: 820,
  tokens: tokens,
  contracts: contracts,
  icon: clo,
  currencyName: 'CLO'
};

</div>

<br>

**Note:** When you fill in your blockExplorerTX and blockExplorerAddr, make sure to replace the section of the URL that usually holds transaction hashes with ‘\[[txHash]]’ and the section that shows the user’s public address with ‘\[[address]]’ exactly as shown above. 

* * *

<br>

**Step 5.** Once you’re finished, click ‘Propose New File’.

-   Feel free to add any additional information you’d like to let us know about.

<br>

**Step 6.** Review what you’ve just made, then press ‘Create Pull Request’ twice.

**Step 7.** That’s it. You successfully made a new pull request!

-   We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.

## **Adding your Node as a Default Network on MEW web**

<br>

**Step 1.** Head to <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/networks/nodes>

**Step 2.** Click ‘Create new file’ in the top-right corner of GitHub. 

**Step 3.** Name your file the same name as the network you’re adding. 

-   Example using CLO: ‘clo.js’

<br>

**Step 4.** Fill in your network type information with the format below, using CLO as an example.

-   Change all the references to CLO with the appropriate information for your network.
-   It’s a good idea to keep most of your naming and linking in all lower-case. You should only capitalize the type. 

<br>

* * *

<div class="scrollbox">
import { CLO } from '../types';
export default {
  type: CLO,
  service: '0xinfra.com',
  url: 'https://clo-geth.0xinfra.com/',
  port: 443,
  auth: false,
  username: '',
  password: ''
};
</div>

* * *

<br>

**Step 5.** Once you’re finished, click ‘Propose New File’.

-   Feel free to add any additional information you’d like to let us know about.

<br>

**Step 6.** Review what you’ve just made, then press ‘Create Pull Request’ twice.

**Step 7.** That’s it. You successfully made a new pull request!

-   We will now review and pull it in, and it will be made live on the site with our next release. We may also ask you questions if something is confusing, for whatever reason.
