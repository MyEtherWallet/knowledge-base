---
title: "A Glossary of Common Terms in the Ethereum / Crypto Community"

date: 2018-06-01 00:05:00
tags:
- glossary
- terms
categories:
- [get-started]
primary_category: get-started
primary_category_display_name: "Get Started"
alias:
- getting-started/ethereum-glossary.html
---

# __Un glosario de términos comunes en la comunidad Ethereum / Crypto__
##### <i> Aquí hay una lista de términos que puede encontrar al usar MyEtherWallet (MEW). <br /> También puede [leer en español] [enEspanol], gracias a faraggi. </i>
###### {% read_time title "Un glosario de términos comunes en la comunidad Ethereum / Crypto"%} min read
***

## __Billetera__
* La interfaz / cliente / contenedor / titular que utiliza para administrar su (s) cuenta (s).
* Ejemplo: MyEtherWallet.com, MEWconnect, MetaMask, una billetera de hardware (es decir, Ledger, Trezor, BitBox, Secalot, etc.), un Contrato de Multisig Wallet.



## __Cuenta__
* Un par de llaves públicas y privadas que "retiene" sus fondos.
* Sus fondos realmente se almacenan en la cadena de bloques, no en la billetera o cuenta.
* Al igual que su cuenta de Reddit tiene un nombre de usuario (público) y una contraseña (privada), también lo tiene su cuenta de Ethereum. Para mayor seguridad, puede usar una contraseña para cifrar su clave privada que resultaría en un nombre de usuario (público) y una contraseña (privada) y una contraseña para esa contraseña (privada + más segura). Lea más sobre esto [aquí] [pubPvtKeys].



## __ (Cuenta / Ethereum / Public) Dirección__
* Usas esto para enviar fondos a una cuenta.
* A veces referido como la "clave pública"
* Una cadena formada por 0x + 40 caracteres hexadecimales. (42 caracteres en total).
* En Ethereum, la dirección comienza con 0x.
* Ejemplo: `0x06A85356DCb5b307096726FB86A78c59D38e08ee`



## __Llave pública__
* En criptografía, tienes un par de llaves: la clave pública y la privada.
* Puede derivar una clave pública de una clave privada, pero no puede derivar una clave privada de una clave pública.
* (Avanzado) En Ethereum, la dirección "actúa" como la clave pública, pero en realidad no es la clave pública.
* (Avanzado) En Ethereum, la clave pública se deriva de la clave privada y tiene 128 caracteres hexadecimales. Luego toma el hash "SHA3" (Keccak-256) de este (64 caracteres), toma los últimos 40 caracteres y el prefijo con 0x, te da tu dirección de 42 caracteres.



## __Llave privada__
* Se usa para acceder y enviar fondos desde una cuenta.
* La mitad secreta de su dirección / par de claves públicas.
* Una cadena de 64 caracteres hexadecimales.
* (Casi) cada cadena de 64 caracteres hexadecimales es una clave privada.
* Si escribe una clave privada de forma diferente hoy que ayer, tendrá acceso a una billetera diferente.
* ** Nunca escriba su clave privada a mano. **
* Esta es la clave que necesitas para mantenerte seguro. Sin ella no puedes acceder a tus fondos. Sin embargo, no es necesario que guarde esta clave privada sin cifrar en este formato. Puede guardar las versiones sofisticadas del mismo (es decir, el archivo de almacén de claves / frase mnemotécnica).
* Ejemplo: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`



## __Keystore File__
* Versión encriptada de su clave privada en formato JSON (aunque no tiene una extensión JSON).
* Una versión elegante de su clave privada que está protegida por una contraseña de su elección.
* Más seguro que una clave privada porque necesita la contraseña.
* El nombre del archivo usualmente está en el formato:
`UTC + - + DATE_CREATED + - + YOUR_ADDRESS_WITHOUT_THE_Ox`
* Ejemplo de nombre de archivo:
`UTC - 2017-07-02T20-33-09.177Z - 06a85356dcb5b307096726fb86a78c59d38e08ee`
* Ejemplo de contenidos:
`{ "Versión": 3, "id": "aa811d53-fe9a-44a2-bd1c-e737007b5591", "dirección": "06a85356dcb5b307096726fb86a78c59d38e08ee", "Crypto": { "texto cifrado": "f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248", "cipherparams": { "iv": "975ab00192e2dd74170e91ca59c0b0bd"} "cifrado": "AES-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "sal": "0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a", "n ": 1024," r ": 8," ": 1}," mac ":" 8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3 "}}`



## __Frase mnemónica (frase de recuperación) __
* Otra versión elegante de su clave privada, que en realidad se usa para derivar múltiples claves privadas.
* Generalmente, una frase de 12 o 24 palabras que le permite acceder a un número infinito de cuentas.
* Utilizado por Ledger, Trezor, MEWconnect, MetaMask, Jaxx y otros.
* Se origina a partir de BIP 39 Spec.
* Las cuentas a las que puede acceder con esta frase están determinadas por la "ruta".
* Ejemplo de 12 palabras:
`La envolvente del cerebro ha cambiado la respuesta del cuerpo del horror. Doble fuego tonto traer peligro».
* Ejemplo de 24 palabras:
`tarjeta enriquecer gesto conectar patear derribar cuerpo del ventilador motor ciego enjambre de limón lugar de alabanza agente adicto no consciente de frijol igual cantar gobernar pierna enlace de ingresos`



## __Hardware Wallet__
* Por lo general, un dispositivo de un solo propósito que "guarda" su (s) clave (s) privada (s), asegurando que estas claves sean seguras.
* Generalmente, usan una frase de 24 palabras. Esta frase debe escribirla en un papel (no en su computadora) y almacenar por separado de su billetera de hardware, en múltiples ubicaciones.
* Si pierde su billetera de hardware, aún puede obtener acceso a sus cuentas y fondos a través de la frase que anotó.
* ** Nunca escriba la frase de recuperación en su computadora. ** Derrota el propósito de su billetera de hardware.
* Vea [aquí] [hwWallets] para obtener más información sobre las carteras de hardware.

## __Address Identicon / Address Icon__
* The colorful blob of colors that corresponds to your address.
* It is an easy way to see if your address is correct.
* [Example 1][example1]
* [Example 2][example2]
* Note: The above addresses are a single character different but have remarkably different icons & colors. Even one difference in character will result in a completely separate wallet.



## __Hexadecimal__
* Used all over Ethereum for a variety of things, a hexadecimal string is comprised of the numbers `0 1 2 3 4 5 6 7 8 9` and `A B C D E F`.



## __Seed__
* The input given to derive a private key. 
* Some use this as another way of saying 'Recovery Phrase' or 'Mnemonic Phrase'.
* This should always be generated in a truly random way, not something you make up with your brain.
* If you chose the seed, it is known as a brain wallet.



## __Brain Wallet__
* An account generated from a seed / password / passphrase of your choosing.
* Humans are not capable of generating enough entropy, so the wallets derived from these phrases are insecure.
* Brain wallets can generally be brute-forced easily by super fast computers.
* *Don't use brain wallets.*



## __Entropy__
* Also known as "randomness".
* The more random something is, the more entropy it has, and the more secure it is.
* Usually defined in "bits of entropy", or the number of years it would take to brute-force a ____ (i.e. private key) derived with that much entropy.
* Ethereum private keys are 256-bit keys
* 24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). `11 * 24 = 264`. The last word is a checksum (read more about checksum [here][checkSum].



## __Derive / Derivation__
* To derive something is to obtain it from an original source.
* For example, if we were to derive a Keystore from a private key and a password, this means that the Keystore is made from these two sources.
* The Keystore is a product of the two, thus it is derived from them.



## __Encryption__
* Encryption is the act of taking a string of letters/numbers, like your private key, and turning them into another string of letters/numbers through a method of private translation.
* There are various different encryption methods.
* Encryption offers protection against those trying to steal your information!



## __Encrypted vs Unencrypted Keys__
* An unencrypted private key is 64 characters long, and it is used to restore wallets.
* An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above.
* Example: If the world ‘Apple’ was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be ‘Dssoh’. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption.
* Usually, encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user’s wallet information safe.



## __Decentralize / Decentralization__
* The process of transferring authority from a single entity (ex. Government or large corporation) to multiple smaller entities.



## __Trustless__
* A distributed trustless consensus which the blockchain is responsible for.
* Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party. You can verify the transactions yourself, however the Ethereum blockchain and Bitcoin blockchain were created to ensure rules and agreements between all parties are executed only when all conditions are met.



## __Smart Contracts__
* A piece of code (or program) that is stored on the blockchain network.
* Conditions of the contract are predefined by the users, if all conditions are met, certain actions are executed by the contract (program).
* Read more about smart contracts [here][smartContracts].



## __Blockchain__
* A decentralized, publicly-owned ledger.
* Immutable, unable to be edited, permanent.
* Maintained by remote miners all over the world.


##### All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome.

[enEspanol]: https://github.com/faraggi/words-are-hard-es/blob/master/words-are-hard-es.md
[pubPvtKeys]: /@@@@@@/security-and-privacy/what-is-a-keystore-file/
[hwWallets]: /@@@@@@/hardware-wallets/using-ledger-with-mew/
[smartContracts]: /@@@@@@/diving-deeper/what-is-a-smart-contract/
[checkSum]: /@@@@@@/common-issues/not-checksummed/
[example1]: http://i.imgur.com/lHUrIiZ.jpg
[example2]: http://i.imgur.com/FvyLewS.jpg