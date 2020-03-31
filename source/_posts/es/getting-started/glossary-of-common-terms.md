---
title: "A Glossary of Common Terms in the Ethereum / Crypto Community"
date: 2018-06-01 00:05:00
tags:
  - glossary
  - terms
categories:
  - 
    - get-started
primary_category: get-started
primary_category_display_name: "Get Started"
alias:
  - getting-started/ethereum-glossary.html
---

# **A Glossary of Common Terms in the Ethereum / Crypto Community**

##### <i>Here is a list of terms you may encounter while using MyEtherWallet (MEW).<br />You can also [read in Spanish][enEspanol], thanks to faraggi.</i>

###### {% read_time title "A Glossary of Common Terms in the Ethereum / Crypto Community" %} min read

* * *

## **Wallet**

-   The interface / client that you use to manage your account(s).
-   Example: MyEtherWallet.com, MEWconnect, MetaMask, a hardware wallet (i.e. Ledger, Trezor, BitBox, Secalot, etc..), a Multisig Wallet Contract.

## **Account**

-   A public & private keypair that "holds" your funds.
-   Your funds are actually stored on the blockchain, not in the wallet or account.
-   Just like your Reddit account has a username (public) and password (private), so does your Ethereum account. For additional security, you can use a password to encrypt your private key which would result in a username (public) and password (private) and password for that password (private + more secure). Read more about this [here](/@@@@@@/security-and-privacy/what-is-a-keystore-file/).

## **(Account / Ethereum / Public) Address**

-   You use this to send funds to an account.
-   Sometimes referred to as the "public key", which is not accurate (as explained below).
-   A string made up of 0x + 40 hexadecimal characters (42 total characters).
-   In Ethereum, the address begins with '0x'.
-   Example: `0x06A85356DCb5b307096726FB86A78c59D38e08ee`

## **Public Key**

-   In cryptography, you have a keypair: the public and private key.
-   You can derive a public key from a private key, but cannot derive a private key from a public key.
-   In Ethereum, the address "acts" like the public key, but it's not actually the public key.
-   (Advanced) In Ethereum, the public key is derived from the private key and is 128 hex characters. You then take the "SHA3" (Keccak-256) hash of this (64 characters), take the last 40 characters, and prefix with 0x, give you your 42-character address.

## **Private Key**

-   The secret half of your Address / public key pairing.
-   A string of 64 hexadecimal characters.
-   (Almost) every string of 64 hexadecimal characters is a private key.
-   If you hand-type a private key differently today than yesterday, you will access a different wallet.
-   **Never hand-type your private key.**
-   This is the key you need to keep safe. Without it you cannot access your funds. Although, you don't need to save this raw, unencrypted private key in this format. You can save a more secure version of it (i.e. the Keystore File / Mnemonic Phrase).
-   Example: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`

## **Keystore File**

-   Encrypted version of your private key in JSON format (though it does not have a JSON extension).
-   A fancy version of your private key that is protected by a password of your choosing.
-   Safer than a private key because you need the password.
-   File name usually is in the format: `UTC + -- + DATE_CREATED + -- + YOUR_ADDRESS_WITHOUT_THE_Ox`
-   Example of file name: `UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee`
-   Example of Contents: `{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}`

## **Mnemonic Phrase (Recovery Phrase)**

-   Another fancy version of your private key, that is actually used to derive multiple private keys.
-   Usually, a 12 or 24 word phrase that allows you to access an infinite number of accounts.
-   Sometimes includes an extra 13th or 25th word chosen by the user, for added security.
-   Used by Ledger, Trezor, MEWconnect, MetaMask, Jaxx, and others.
-   Originates from BIP 39 Spec.
-   The accounts you can access with this phrase are determined by the ["derivation path"](https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2).
-   Example 12-words: `brain surround have swap horror body response double fire dumb bring hazard`
-   Example 24-words: `card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg`

## **Hardware Wallet**

-   Typically, a device that "holds" your private key(s), ensuring these keys are safe.
-   They generally use a 24-word phrase. This phrase you should write down on paper (not on your computer) and store separately from your hardware wallet, in multiple locations.
-   If you lose your hardware wallet, you can still gain access to your accounts & funds via the mnemonic phrase you wrote down.
-   **Never type the recovery phrase on your computer.** It defeats the purpose of your hardware wallet.
-   See [here](/@@@@@@/hardware-wallets/using-ledger-with-mew/) for more information about Hardware Wallets.

## **Address Identicon / Address Icon**

-   The colorful blob of colors that corresponds to your address.
-   It is an easy way to see if your address is correct.
-   [Example 1](http://i.imgur.com/lHUrIiZ.jpg)
-   [Example 2](http://i.imgur.com/FvyLewS.jpg)
-   Note: The above addresses are a single character different but have remarkably different icons & colors. Even one difference in character will result in a completely separate wallet.

## **Hexadecimal**

-   Used all over Ethereum for a variety of things, a hexadecimal string is comprised of the numbers `0 1 2 3 4 5 6 7 8 9` and `A B C D E F`.

## **Seed**

-   The input given to derive a private key.
-   Some use this as another way of saying 'Recovery Phrase' or 'Mnemonic Phrase'.
-   This should always be generated in a truly random way, not something you make up with your brain.
-   If you chose the seed, it is known as a brain wallet.

## **Brain Wallet**

-   An account generated from a seed / password / passphrase of your choosing.
-   Humans are not capable of generating enough entropy, so the wallets derived from these phrases are insecure.
-   Brain wallets can generally be brute-forced easily by super fast computers.
-   _Don't use brain wallets._

## **Entropy**

-   Also known as "randomness".
-   The more random something is, the more entropy it has, and the more secure it is.
-   Usually defined in "bits of entropy", or the number of years it would take to brute-force a \_\_\_\_ (i.e. private key) derived with that much entropy.
-   Ethereum private keys are 256-bit keys
-   24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). `11 * 24 = 264`. The last word is a checksum (read more about checksum [here](/@@@@@@/common-issues/not-checksummed/).

## **Derive / Derivation**

-   To derive something is to obtain it from an original source.
-   For example, if we were to derive a Keystore from a private key and a password, this means that the Keystore is made from these two sources.
-   The Keystore is a product of the two, thus it is derived from them.

## **Encryption**

-   Encryption is the act of taking a string of letters/numbers, like your private key, and turning them into another string of letters/numbers through a method of private translation.
-   There are various different encryption methods.
-   Encryption offers protection against those trying to steal your information!

## **Encrypted vs Unencrypted Keys**

-   An unencrypted private key is 64 characters long, and it is used to restore wallets.
-   An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above.
-   Example: If the world ‘Apple’ was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be ‘Dssoh’. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption.
-   Usually, encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user’s wallet information safe.

## **Decentralize / Decentralization**

-   The process of transferring authority from a single entity (ex. Government or large corporation) to multiple smaller entities.

## **Smart Contracts**

-   A piece of code (or program) that is stored on the blockchain network.
-   Conditions of the contract are predefined by the users, if all conditions are met, certain actions are executed by the contract (program).
-   Read more about smart contracts [here](/@@@@@@/diving-deeper/what-is-a-smart-contract/).

## **Blockchain**

-   A decentralized, publicly-owned ledger.
-   Immutable, unable to be edited, permanent.
-   Maintained by remote miners all over the world.

## All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome.
