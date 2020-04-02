/* global hexo */

'use strict';

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.filter.register('after_post_render', function(data){
  const langs = Object.keys(data.site.data.languages)
  if(data.slug){
    const lang = data.slug.slice(0,2);
    if(langs.includes(lang)){
      data.content = data.content.replace(/@@@@@@/g, lang);
    }
  }
  return data;
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
    // const replaceStr = '/' + ln + '/';
    // url = url.replace(replaceStr, '/');
  }
  if (lang) url = '/' + lang + url;
  return url;
});

hexo.extend.helper.register('active_languages', function() {
  const activeLanguages= {};
  for(let lang in this.site.data.languages){
    if(['ru', 'en'].includes(lang)){
      activeLanguages[lang] = this.site.data.languages[lang]
    }
  }
  return activeLanguages;
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
