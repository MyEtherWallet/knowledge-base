# hexo-helper-seo-structured-data

Injects Website and Organization structured data.

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Code Climate](https://codeclimate.com/github/ludoviclefevre/hexo-helper-seo-structured-data/badges/gpa.svg)](https://codeclimate.com/github/ludoviclefevre/hexo-helper-seo-structured-data)
[![Codacy Badge](https://www.codacy.com/project/badge/afb430e84ace4295acb02b9f7e70566b)](https://www.codacy.com/app/contact_18/hexo-helper-seo-structured-data)

[Google Structured Data](https://developers.google.com/structured-data/customize/overview)

## Install

``` bash
$ npm install hexo-helper-seo-structured-data --save
```

## Usage

```
<%- seoStructuredData(config) %>
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
seo_structured_data:
  organization:
    name: Fake organization
    url: http://www.fakeorganization.com
    logoUrl: http://www.fakeorganization.com/logo.png
```

## License

MIT © [Ludovic LEFEVRE](http://www.ludoviclefevre.fr)

[coveralls-image]: https://coveralls.io/repos/ludoviclefevre/hexo-helper-seo-structured-data/badge.svg
[coveralls-url]: https://coveralls.io/r/ludoviclefevre/hexo-helper-seo-structured-data?branch=master
[travis-url]: https://travis-ci.org/ludoviclefevre/hexo-helper-seo-structured-data
[travis-image]: https://travis-ci.org/ludoviclefevre/hexo-helper-seo-structured-data.svg?branch=master
[daviddm-url]: https://david-dm.org/ludoviclefevre/hexo-helper-seo-structured-data.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ludoviclefevre/hexo-helper-seo-structured-data
