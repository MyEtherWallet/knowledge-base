


hexo.extend.helper.register('strip_lang_prefix', (path, langs = []) => {
  // const { config } = hexo;
  // const lang =
  // console.log(hexo.page); // todo remove dev item
  // const url_for_lang = hexo.extend.helper.get('url_for_lang').bind(hexo);
  // const url = url_for_lang(path).bind(hexo);
  console.log(path); // todo remove dev item
  let newPath = path.replace(/^\/default\//, '');
  langs.forEach(lang => {
    const regEx = `/${lang}/`
    newPath = newPath.replace(regEx, '')
  })
  return newPath;
  // return base;
});