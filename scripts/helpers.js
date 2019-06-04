/* global hexo */

'use strict';

var pathFn = require('path');

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('page_nav', function() {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = {};
  var prefix = 'sidebar.' + type + '.';

  for (var i in sidebar) {
    for (var j in sidebar[i]) {
      list[sidebar[i][j]] = j;
    }
  }

  var keys = Object.keys(list);
  var index = keys.indexOf(path);
  var result = '';

  if (index > 0) {
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev" title="' + this.__(prefix + list[keys[index - 1]]) + '">'
      + '<i class="fa fa-chevron-left"></i><span>' + this.__('page.prev') + '</span></a>';
  }

  if (index < keys.length - 1) {
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next" title="' + this.__(prefix + list[keys[index + 1]]) + '">'
      + '<span>' + this.__('page.next') + '</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  var path = this.page.canonical_path;
  if (lang) path = lang + '/' + path;

  return this.config.url + '/' + path;
});

hexo.extend.helper.register('url_for_lang', function(path) {
  if(startsWith(path, 'mailto')) return path;
  var lang = this.page.lang;
  if(startsWith(path, lang)){
    if(path[0] !== '/'){
      path = '/' + path;
    }
    return path;
  }

  var url = this.url_for(path);
  const langs = Object.keys(this.site.data.languages);
  if(url[0] === '/'){
    url = url.replace(/\.\.\//,'').replace(/\.\.\//,'');
  } else {
    url = '/' + url.replace(/\.\.\//,'').replace(/\.\.\//,'');
  }


  for(let ln of langs){
    const replaceStr = '/' + ln + '/';
    url = url.replace(replaceStr, '/');
  }
  if (lang) url = '/' + lang + url;
  return url;
});

hexo.extend.helper.register('raw_link', function(path) {
  return 'https://github.com/hexojs/site/edit/master/source/' + path;
});


hexo.extend.helper.register('canonical_path_for_nav', function() {
  return this.page.canonical_path;
});

hexo.extend.helper.register('lang_name', function(lang) {
  var data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('get_langs', function(lang) {
  return Object.keys(this.site.data.languages);
});

hexo.extend.helper.register('disqus_lang', function() {
  var lang = this.page.lang;
  var data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});

hexo.extend.helper.register('switch_lang', function(lang){
  this.page.lang = lang;
})

hexo.extend.helper.register('hexo_version', function() {
  return this.env.version;
});
