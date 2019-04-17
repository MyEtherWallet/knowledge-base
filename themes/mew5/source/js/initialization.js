
function selectMobileDesktop() {
  var width = $( window ).width();
  
  if(width < 600) {
    // Mobile
    //$('.desktop-content').addClass('hidden');
    $('.mobile-content').addClass('block');
    $('.desktop-content').remove();
  }
  else {
    // Desktop
    $('.desktop-content').addClass('block');
    $('.mobile-content').remove();
  }
}


(function($){
  selectMobileDesktop();

})(jQuery);

