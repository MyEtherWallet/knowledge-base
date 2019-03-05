## Error: Unable to Locate Corresponding Transfer Event Log
***

This error appears on [Etherscan](https://etherscan.io) when a sender tries to transfer out more tokens than they have.
#### This can be due to a few possible events:
* When adding a custom token:
    * You specified the incorrect token contract address (resulting in an attempt to send a token that you have none of).
    * You specified the incorrect token decimal (resulting in an attempt to send 50,000,000 of a token, as opposed to 5,000 of it).

* When sending a default token:
    * You specified an amount to send higher than you actually own.


#### How can I stop this from happening?
* Remove and re-add the custom token.
    * Be sure to specify the correct decimals and token contract address this time.
    * Read our article on [adding custom tokens]().

* Make sure that you are attempting to send either the same amount of tokens that you have, or less.