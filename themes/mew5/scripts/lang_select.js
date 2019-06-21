(function(){
  'use strict';

  function changeLang(){
    var lang = this.value;
    console.log(lang); // todo remove dev item
    if(lang === 'none') return;
    var canonical = this.dataset.canonical;
    if (lang === 'en') lang = '';
    if (lang) lang += '/';

    location.href = '/' + lang + canonical;
  }
if(typeof document !== 'undefined'){
  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
}

})();