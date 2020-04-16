---
title: "Ensuring MEW Doesn’t Give Different People the Same Public Address"
date: 2018-06-01 00:02:00
tags:
  - mew
  - public
  - address
categories:
  - 
    - security-and-privacy
primary_category: security-and-privacy
primary_category_display_name: "Security And Privacy"
alias:
  - en/security/ethereum-two-people-same-private-key.html
---

# **Ensuring MEW Doesn’t Give Different People the Same Public Address**

###### {% read_time title "Ensuring MEW Doesn't Give Different People the Same Public Address" %} min read

* * *

The first thing to understand is that MyEtherWallet (MEW) does not ‘create’ any private keys or public addresses. MEW (and other ETH wallet services) randomly generate private key/public address pairings for a user when ‘creating a new wallet’.

Every ETH address begins with ‘0x’ and is followed by 40 hexadecimal characters, for a total of 42 characters. Hexadecimal characters can be any character between the ranges of ‘a - f’ and ‘0 - 9’.  This means there are `16^40` possible ETH addresses, which is the same as `2^160` possible addresses.

That means there are `1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976` possible addresses to choose from.

Keys are not ‘picked’, though. The reason randomizing this process is so crucial is because our brains are flawed. We are not capable of achieving true randomization with our choices. If you choose your own private key, you will have access to a wallet of your choice. However, if someone else also picks that private key, all of your information and funds will be at their mercy. So we let technology generate these addresses for us, for true entropic generation.

To put all of this in perspective, there are approximately `7.5 x 10^18` grains of sand on Earth. That’s

`7,500,000,000,000,000,000` grains of sand

compared to

`1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976` addresses

That’s quite a difference. In fact, this number is so mind-blowingly big that, at one address per second, it would still take longer than the galaxy has existed (~13.21 billion years) to even make a tiny dent – and you would still be unlikely to run across an address with any activity on it! Not only that, but it would take more energy than the Sun can offer to even try and brute-force any specific address.

The estimated age of the Universe itself is `~4.32 x 10^17` seconds old. In order to use up even half of the possible addresses in that amount of time, you would need to generate around `1.6 x 10^31` addresses every second. That’s 16 nonillion addresses every second, since the dawn of the Universe. And that’s just to use up half of them!

Even if the blockchain is vigorously active for the next ten thousand years, the chances of receiving a duplicate address are basically zero.
