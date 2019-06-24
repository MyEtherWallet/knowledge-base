
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