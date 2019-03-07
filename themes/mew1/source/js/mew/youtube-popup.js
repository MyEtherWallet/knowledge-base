(function($){
  
  $('.video-button').on('click', function(){
    $(this).parent().toggleClass('open');
  });
  
  $('.video-iframe').on('click', function(){
    $(this).parent().parent().toggleClass('open');
  });
  

})(jQuery);
