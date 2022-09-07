(function($){

  $('.show-list-button').click(function(){
    $(this).toggleClass('expended');
    $('.sidebar-close-button').toggleClass('expended');
    $('.sidebar-primary-category').toggleClass('expended');
  });

  $('.sidebar-close-button').click(function(){
    $(this).removeClass('expended');
    $('.sidebar-close-button').removeClass('expended');
    $('.sidebar-primary-category').removeClass('expended');
  });

})(jQuery);
