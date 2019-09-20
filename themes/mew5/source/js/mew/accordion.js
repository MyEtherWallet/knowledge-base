(function($){
  
  // Add ".open" to clicked category
  $('.accordion-header').on('click', function(){
    $(this).parent().toggleClass('open');
    console.log($(this)); // todo remove dev item
    console.log($(this).children()); // todo remove dev item
    console.log($($(this).children()[0])); // todo remove dev item
    $('.goto-page-link').toggleClass('hidden')
  });
  
})(jQuery);
