(function($){
  
  $('.mew-tabs ul:nth-child(1) li').on('click', function(){
    var activeClass = $(this).attr('ref');
    // Remove ".active" from all tabs (Menu)
    $(this).parent().find('li').removeClass('active');

    // Add ".active" to targeted tab (Menu)
    $(this).addClass('active');    

    // Remove ".active" from all tabs (Data)
    $(this).parent().parent().find('ul:nth-child(2) li').removeClass('active');

    // Add ".active" to targeted tab (Data)
    $(this).parent().parent().find('ul:nth-child(2) .' + activeClass).addClass('active');
  });
  
})(jQuery);