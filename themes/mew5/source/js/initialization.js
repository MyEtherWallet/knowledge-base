
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


(function ($) {
  function changeLang () {
    var lang = this.value;
    var path = '/';
    path += lang + '/';
    location.href = path;
  }

  $('#lang-select').change(changeLang);
  $('#mobile-lang-select').change(changeLang);

})(jQuery);

(function ($) {


  $('#lang-select-label').click(function(){
    if($('#lang-select').hasClass('hidden') && !$('#lang-select-label').hasClass('hidden')){
      $('#lang-select').removeClass('hidden');
      $('#lang-select-label').addClass('hidden');
    } else {
      $('#lang-select').addClass('hidden');
      $('#lang-select-label').removeClass('hidden');
    }
  });

  const closeLangSelect = function(){
    if(!$('#lang-select').hasClass('hidden') && $('#lang-select-label').hasClass('hidden')){
      $('#lang-select').addClass('hidden');
      $('#lang-select-label').removeClass('hidden');
    } else {
      $('#lang-select').removeClass('hidden');
      $('#lang-select-label').addClass('hidden');
    }
  }

let leaveTimer = null;
  $('#lang-select').change(closeLangSelect);
  $('#lang-select').mouseleave(function(){
    leaveTimer = setTimeout(closeLangSelect, 500);
  });
  $('#lang-select').mouseenter(function(){
     clearTimeout(leaveTimer);
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