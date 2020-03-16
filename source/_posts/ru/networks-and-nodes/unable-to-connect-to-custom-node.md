---
title: "Невозможно подключиться к кастомному узлу"
date: 2018-06-01 00:02:00
tags:
  - не удается
  - connect
  - custom
  - node
categories:
  - 
    - networks-and-nodes
primary_category: networks-and-nodes
primary_category_display_name: "Networks And Nodes"
alias:
  - networks/cant-connect-to-custom-node-on-myetherwallet.html
---

# __Unable to Connect to Custom Node__
###### {% read_time title "Невозможно подключиться к пользовательскому узлу" %} мин. на прочтение
***

* Убедитесь, что введенный вами URL-адрес корректен.

* Убедитесь, что введенный вами номер порта корректен.

* Убедитесь, что при подключении к узлу http:// вы работаете с MyEtherWallet локально (НЕ через https://).

* Убедитесь, что используются следующие аргументы:

    * `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"`

    * `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`

* Убедитесь, что узел работает.

* Попробуйте удалить узел и добавить его снова.

* Попробуйте изменить узел в верхнем правом углу на ETH (Etherscan.io) или ETH (Infurio.io).

* Попробуйте использовать Google Chrome или другой браузер.

* Убедитесь, что у вас нет брандмауэра или других приложений, способных блокировать соединение.