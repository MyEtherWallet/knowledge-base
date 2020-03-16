---
title: "Импорт файла V2 JSON"
date: 2018-06-01 00:01:00
tags:
  - импорт
  - импорт
  - v2
  - json
categories:
  - 
    - migration
primary_category: migration
primary_category_display_name: "Переход с и на MEW"
alias:
  - migration/importing-v2-json-wallet-file-myetherwallet.html
---

# __Импорт файла V2 JSON__
###### {% read_time title "Импорт файла V2 JSON" %} мин. на прочтение
***

С файлами V2 JSON часто возникают проблемы. Мы заранее извиняемся за них.

Вам придется конвертировать его в стандартный файл V3 ('Файл-хранилище ключей / UTC'). Geth является самым простым способом сделать это.

Загрузите соответствующую вашей операционной системе [версию geth](https://github.com/ethereum/go-ethereum/releases).

Распакуйте zip-архив, когда загрузка будет завершена. Скопируйте файл V2 JSON в ту же папку.

Точные инструкции для пользователей ПК и Mac можно найти [здесь](https://ethereum.stackexchange.com/questions/465/How-to-import-a-plain-private-key-into-geth-or-mist).

Теперь вам нужно открыть командную строку и ввести следующую команду:

`geth account import nameofyourwalletfile`

Она позволит импортировать ваш файл в geth и преобразовать его в хранилище ключей последней версии (V3).

## __Теперь вам нужно перейти в одну из следующих директорий:__

* Mac: `~/Library/Ethereum`
* Linux: `~/.ethereum`
* Windows: `%APPDATA%\Ethereum`

Скопируйте путь к файлу, который найдете там, а затем выберите его в [MEW](https://www.myetherwallet.com), вот и все!

В дальнейшей работе используйте этот файл. Сохраните его резервную копию (и старый файл тоже, на всякий случай).

