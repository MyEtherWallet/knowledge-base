(function($){
  
  // Add ".open" to clicked category
  $('.accordion-header').on('click', function(){
    $(this).parent().toggleClass('open');
  });
  
})(jQuery);
