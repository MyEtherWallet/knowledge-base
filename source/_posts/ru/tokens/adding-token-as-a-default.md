---
title: "Добавление вашего токена в качестве токена по умолчанию"
date: 2018-06-01 00:01:00
tags:
  - токен
  - добавить
  - добавление
categories:
  - 
    - ЧЗВ
  - 
    - токен
primary_category: токен
primary_category_display_name: "Токены"
alias:
  - tokens/token-creators-add-your-token-to-myetherwallet.html
---

# __Добавление вашего токена в качестве токена по умолчанию__
###### Время прочтения: {% read_time title "Добавление вашего токена в качестве токена по умолчанию" %} мин.
***

Если вы просто экспериментируете с токенами, вы можете [добавить свой токен](/@@@@@@/tokens/how-to-add-custom-token/) в локальную версию MyEtherWallet (MEW).

Если у вас есть токен, который есть множества других людей, или же который появится у них в ближайшее время, то вы можете добавить его в качестве постоянного токена по умолчанию на наш сайт.



## __Вам нужно будет предоставить:__

* **Name** of your token.
* **Symbol** of your token.
* **Address** of your token.
* **Decimals** of your token.
* Your **official Website**.
* Your direct **customer support email**.
    * Из-за того, что очень многие создатели токенов проводят распродажу и НЕ предоставляют поддержку своим инвесторам, мы удалим ваш токен, если вы не будете помогать людям, которые сделали вас миллионерами.
* При желании вы также можете указать свой блог, сайты социальных сетей, каналы чата, ваш логотип и т. д.



## __Submit your tokens as Default Tokens__



**Step 1.** Go to https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth.

 * If your token exists on a different network, you can [add them here](https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens).



**Step 2.** Login or join GitHub.



**Step 3.** Click 'Create New File' in the upper right.



**Step 4.** The file's name must be in the format `<YourTokenAddress>.json`.



**Step 5.** Fill in the template pasted below with your information:

    {
    "symbol": "",
    
    "name": "",
    
    "type": "ERC20",
    
    "address": "",
    "ens_address": "",
    "decimals": ,
    "website": "",
    "logo": {
        "src": "",
        "width": "",
        "height": "",
        "ipfs_hash": ""
    },
    "support": {
        "email": "",
        "url": ""
    },
    "social": {
        "blog": "",
        "chat": "",
        "facebook": "",
        "forum": "",
        "github": "",
        "gitter": "",
        "instagram": "",
        "linkedin": "",
        "reddit": "",
        "slack": "",
        "telegram": "",
        "twitter": "",
        "youtube": ""
    }
    }

<br>



**Step 6.** Once you're finished, click 'Propose New File'.



* Feel free to add any additional information you'd like to let us know about.



**Step 7.** Review what you've just made, then press 'Create Pull Request' twice.



**Step 8.** That's it. Вы успешно создали новый pull-запрос!

* Теперь мы рассмотрим его и включим в свой код, и в следующем релизе он будет доступен на нашем сайте. Если что-то будет по какой-то причине непонятно, то мы можем задать вам несколько вопросов.

<br>

## __Add your token sale address and manual gas limits to ensure a smooth sale__
* Зайдите на эту страницу https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js.
* Найдите уже существующую оконченную запись или же используйте наш адрес для пожертвований (верхний).
* Замените эту информацию своей:
    * Адрес: адрес, на который пользователи будут отправлять средства.
    * Ограничения по газу: рекомендуемое ограничение по газу, чтобы избежать ошибок `Out of Gas`.
    * Данные: необязательно. Если у вас есть стандартное поле данных, добавьте эту строку.
    * Сообщение: необязательно. Если людям нужно генерировать данные, то добавьте сюда примечание, чтобы напомнить им об этом. Вы можете указать время или дату начала блоков и название распродажи токенов.
* Внизу в разделе «Commit changes» введите в поле заголовка «Manual gas limits for upcoming `СИМВОЛ_ВАШЕГО_ТОКЕНА` token».
* Ниже вы можете указать любые другие комментарии для нас.
* Нажмите зеленую кнопку «Propose File change».
* Следующая страница — это обзор того, что вы сделали.
* Дважды нажмите на кнопку «Create Pull Request».
* Вот и все. Вы успешно создали новый pull-запрос!
* Теперь мы рассмотрим его и включим в свой код, и в следующем релизе он будет доступен на нашем сайте. Если что-то будет по какой-то причине непонятно, то мы можем задать вам несколько вопросов.

<br>

## __Adding your Contract / ABI__
Теперь мы предоставляем пользователям возможность указать адрес, после чего MEW автоматически заполнит ABI. If you have a contract that is **NOT** your ERC-20 token contract that users will actually be interacting with:

* Зайдите на страницу https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json.
* Скопируйте все начиная с `{` до `},`.
* Укажите вместо этой информации название своего контракта, адрес и ABI.
* Внизу в разделе «Commit changes» введите в поле заголовка «Added `СИМВОЛ_ВАШЕГО_ТОКЕНА` contract ABI».
* Ниже вы можете указать любые другие комментарии для нас.
* Нажмите зеленую кнопку «Propose File change».
* Следующая страница — это обзор того, что вы сделали.
* Дважды нажмите на кнопку «Create Pull Request».
* Вот и все. Вы успешно создали новый pull-запрос!
* Теперь мы рассмотрим его и включим в свой код, и в следующем релизе он будет доступен на нашем сайте. Если что-то будет по какой-то причине непонятно, то мы можем задать вам несколько вопросов.