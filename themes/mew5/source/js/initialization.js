
function selectMobileDesktop() {
  var width = $( window ).width();

  if(width < 600) {
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


/*
  Language select
*/
(function ($) {
  // Remove 'hidden' class that prevents showing language list on load
  $('.lang-select-box').removeClass('hidden');

  // Change path for selected language
  $('.lang-select').click(function(){
    var lang = $(this).data('lang');
    var currentLang = $(this).data('current-lang');
    var pagePath = $(this).data('path');

    if(pagePath.startsWith(currentLang)){
      pagePath = pagePath.slice(3);
    }

    var path = '/';
    path += lang + '/' + pagePath;
    location.href = path;
  });
})(jQuery);


(function ($) {
  var closeBanner = getCookie('close-banner');

  if(closeBanner == '1') {
    $('.js-app-banner').remove();
  } else {
    $('.js-app-banner').addClass('visible');
  }

  $('.js-close-app-banner').click(function(){
    setCookie('close-banner', '1', {});
    $('.js-app-banner').remove();
  });

  $('.js-get-app').click(function(){
    $('.js-get-app').next().addClass('visible');
    $('.js-get-app').remove();
  });
  
})(jQuery);

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
