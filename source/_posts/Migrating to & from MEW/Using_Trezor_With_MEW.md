## <p align="center">Using a Trezor Hardware Wallet with MEW</p>
***

Trezor Hardware Wallets are some of the most secure and intuitive cryptocurrency hardware wallets out there. They are available for purchase [here](). 
\*_Please purchase hardware wallets from the original source. Hardware wallets bought off ebay or from other vendors cannot be guaranteed secure._\*

This particular hardware wallet supports a wide range of cryptocurrencies, but this guide is specifically made for accessing Ethereum and ERC-20 tokens while using MyEtherWallet (MEW). 

**This part is very important:** Your Trezor device comes as its own SEPARATE wallet. You cannot import your old MEW address into this, or use your old wallet with it. It has its own private key, encrypted into the device itself. You will be choosing a new ethereum address on this device, and using it as your new main wallet.

Without further ado, let’s begin!

<br>

### <p align="center">The Initial Set-Up</p>

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor1.jpg?raw=true" width="35%"></p>

<br>

**Step 1.** Unbox your Trezor! You will see some cards and instructions for set-up. Follow these instructions carefully! Plug in the Trezor to your computer and get started. Visit [trezor.io/start](https://trezor.io/start) to begin the process. 

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor2.png?raw=true" width="80%"></p>

<br>

**Step 2.** Choose ‘Create new’ on this page, and follow the steps to set up your new device.The first thing you will want to do is ‘Create a backup in 3 minutes.’ 

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor3.png?raw=true" width="80%"></p>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor4.png?raw=true" width="75%"></p>

<br>

**Step 3.** *This is one of the most important steps.* Do not write this phrase down on your computer, do not take a picture of the phrase. Make sure you write down your 24 seed words in multiple places. DO NOT LOSE THEM. If you lose these words, you’ve lost all your cryptocurrency. Ledger provides cards for you to write them down for remembering, but I suggest writing them down in one extra place as well. Again, do not write this phrase down on your computer. Use pen and paper. When you’re done, you’ll see the screen below.

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor5.png?raw=true" width="70%"></p>

<br>

**Step 4.** Now you will be prompted to choose a name for your Trezor. This is the name you will see on your device whenever you plug it in. Choose something familiar and personal!

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor6.png?raw=true" width="75%"></p>

<br>

**Step 5.** You will now choose your pin. This pin will be the only way to access your device (besides the recovery phrase you wrote down, multiple times) so it’s very important to choose a secure, but easy to remember pin. Don’t just use `1111` or `1234`, use something a bit more random and secure.

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor7.png?raw=true" width="75%"></p>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor8.png?raw=true" width="70%"></p>

<p align="center"><i>Don’t make this mistake! If it says it could be safer, make it longer!</i></p>

<br>

**Step 6.** You’re all done!

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor9.png?raw=true" width="50%"></p>

<br>

### <p align="center">Using Trezor with MEW</p>

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor10.jpg?raw=true" width="35%"></p>

<br>

**Step 1.** Attach your Trezor device and head to MEW.

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/MEW1.png?raw=true" width="75%"></p>

<br>

**Step 2.** Check the URL for the “MyEtherWallet Inc [US]” SSL certification to make sure you’re on our real, secure site. Are you? Great! Head to ‘Access My Wallet’ and choose the option that says ‘Hardware’. Click the ‘Trezor’ option, and choose ‘Connect With Your Device’ with your Trezor device still attached.

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/MEW2.png?raw=true" width="70%"></p>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor11.png?raw=true" width="70%"></p>

<br>

**Step 3.** A screen will pop-up asking for you to allow MEW permissions to read the public keys from your Trezor device. Click ‘Allow once for this session’, and feel free to select ‘Don’t ask me again’, so this step is automatic in the future. Select ‘Export’ on the next screen, enter your pin, and you’ll be redirected back to MEW. 

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor16.png?raw=true" width="40%"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor12.png?raw=true" width="40%"></p>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor17.png?raw=true" width="40%"></p>

<br>

**Step 4.** MEW will bring you back to a page showing different networks and derivation paths. Choose which network you’d like to connect to, and which path you’d like to use. For regular ETH usage, you should be on an ETH network, under the Ethereum derivation path. You can also access other networks, such as Ethereum Classic (ETC), by choosing the related network path.

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor13.png?raw=true" width="42.5%"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor14.png?raw=true" width="50%"></p>

<br>

**Step 5.** You will see a list of addresses. These are your new addresses to choose from for your main wallet! Choose one out of the five that you like. (Most people choose the first one, but you don’t have to.)

<br>

<p align="center"><img src="https://github.com/stephenmew/KBimages/blob/master/Trezor15.png?raw=true" width="50%"></p>

<br>

**Step 6.** You should now be taken to a screen that looks very similar to your old wallet’s access screen. Great job! You’re officially using your new Trezor hardware wallet! 

<br>

### <p align="center">What About My Old Wallet???</p>

If you are coming from an old wallet and want your ETH and tokens on your new, secure Trezor address, you will need to send your funds to your new address through a regular transaction. This can be achieved by accessing your old wallet through MEWconnect, MetaMask, Keystore file, or private key (however you usually did it before the Trezor). From here, send your ETH and tokens to your new Trezor address, ready to be accessed in a more secure fashion.

Please be advised ETH will be required for gas to move any tokens held in your old wallet. We recommend holding .01 ETH to cover 2 - 3 transactions.

<br>

### <p align="center">How Do I Restore My Trezor to a New Device?</p>

Trezor made a clear and easy to follow guide on how to restore your Trezor device [here](https://wiki.trezor.io/User_manual:Recovery).

<br>

### <p align="center">Troubleshooting</p>

Most issues with the Trezor can be fixed by performing a hard refresh (using CTRL+F5), making sure all the firmware is updated to its latest release, and trying a new connecting cable. 
 
If these troubleshooting options did not fix your issue, MEW has an extensive knowledge base that you can find [here](). There is a big chance that it's already listed under ‘Common Issues’. If not, feel free to contact us at support@myetherwallet.com. We are always happy to help!