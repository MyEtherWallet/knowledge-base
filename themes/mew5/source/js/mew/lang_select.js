(function($){
  'use strict';

  function changeLang(){
    var lang = this.value;
    var canonical = this.dataset.canonical;
    if (lang === 'en') lang = '';
    if (lang) lang += '/';

    location.href = '/' + lang + canonical;
  }

  function openSelect(){

  }

  $('#lang-select').on('change', changeLang);
  $('#mobile-lang-select').on('change', changeLang);
  $('#langSelectOpen').click()

})(jQuery);