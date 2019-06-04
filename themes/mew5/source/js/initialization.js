function selectMobileDesktop () {
  var width = $(window).width();

  if (width < 600) {
    // Mobile
    //$('.desktop-content').addClass('hidden');
    $('.mobile-content').addClass('block');
    $('.desktop-content').remove();
  } else {
    // Desktop
    $('.desktop-content').addClass('block');
    $('.mobile-content').remove();
  }
}


(function ($) {
  selectMobileDesktop();

})(jQuery);


(function ($) {
  function changeLang () {
    console.log(this); // todo remove dev item

    var lang = this.value;
    var canonical = this.dataset.canonical;
    var modifiedCanonical = canonical.replace(/^\w\w\//, '');
    var path = '/';
    path += lang + '/';
    location.href = path;
    // if (canonical.includes(noRoute[0]) || canonical.includes(noRoute[1])) {
    //   location.href = path;
    // } else {
    //   location.href = path;
    // }
    // // Cookies.set('nf_lang', lang, { expires: 365 });
    // location.href = path + modifiedCanonical;
  }

  $('#lang-select').change(changeLang);
  $('#mobile-lang-select').change(changeLang);

})(jQuery);