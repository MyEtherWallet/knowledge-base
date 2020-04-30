---
title: "Как добавить сеть в интерфейс MEW"
date: 2018-06-01 00:01:00
tags:
  - узел
  - сеть
  - сети
  - по умолчанию
  - добавить
categories:
  - 
    - networks-and-nodes
primary_category: networks-and-nodes
primary_category_display_name: "Сети и узлы"
---

# **Как добавить сеть в интерфейс MEW**

###### {% read_time title "How to Add a Default Network to MEW web" %} мин. чтения

* * *

## Вы можете добавить вашу сеть в наш список по умолчанию при условии что ваша сеть похожа на Ethereum, имеет свой уникальный ChainID, и имеет работающий навигатор блокчейн.

## **Добавление вашего типа сети**

#### Если вы добавляете совершенно новую сеть, то сначала вам нужно добавить её как «Тип».

<br>

**Шаг 1.** Перейдите на <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/networks/types>

-   Перейдите по этой ссылке и проверьте, присутствует ли ваш тип сети. Если нет, вам нужно будет подготовить некоторую информацию о вашей сети: такую как имя, символ, домашняя страница, blockExplorer и chainID.

<br>

**Шаг 2.** Если вы не видите вашу сеть в списке, нажмите кнопку «Создать новый файл» в правом верхнем углу GitHub.

**Step 3.** Name your folder the same name as the network you’re adding.

-   Пример использования, для сети CLO: «CLO.js»

<br>

**Шаг 4.** Заполните информацию о сетевом типе в приведенном ниже формате, используя в качестве примера CLO.

-   Измените все ссылки на CLO соответствующей информацией для вашей сети.
-   Если вам нужно импортировать токены и контракты, сначала вам может понадобиться добавить их в репозиторий Ethereum-lists, здесь: <https://github.com/MyEtherWallet/ethereum-lists/tree/master/src>
-   Третий импорт имеет в виду ваш сетевой логотип, который вы можете загрузить и импортировать здесь: <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/assets/images/networks>
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
  homePage: '<https:>,
  blockExplorerTX: '<https:>,
  blockExplorerAddr: '<https:>,
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

**Step 7.** That’s it. Вы успешно создали новый pull-запрос!

-   Теперь мы рассмотрим его и включим в свой код, и в следующем релизе он будет доступен на нашем сайте. Если что-то будет по какой-то причине непонятно, то мы можем задать вам несколько вопросов.

## **Adding your Node as a Default Network on MEW web**

<br>

**Step 1.** Head to <https://github.com/MyEtherWallet/MyEtherWallet/tree/master/src/networks/nodes>

**Step 2.** Click ‘Create new file’ in the top-right corner of GitHub.

**Шаг 3.** Назовите свой файл тем же именем, что и добавляемая сеть.

-   Example using CLO: ‘clo.js’

<br>

**Шаг 4.** Заполните информацию о сетевом типе в приведенном ниже формате, используя в качестве примера CLO.

-   Измените все ссылки на CLO соответствующей информацией для вашей сети.
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

**Step 7.** That’s it. Вы успешно создали новый pull-запрос!

-   Теперь мы рассмотрим его и включим в свой код, и в следующем релизе он будет доступен на нашем сайте. Если что-то будет по какой-то причине непонятно, то мы можем задать вам несколько вопросов.
