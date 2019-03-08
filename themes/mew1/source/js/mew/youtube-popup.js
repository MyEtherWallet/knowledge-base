(function($){
  
  $('.video-button').on('click', function(){
    $(this).parent().toggleClass('open');

    var youtubeLink = $(this).parent().find('.video-iframe').attr('youtube-link');
    $(this).parent().find('iframe').attr('src', youtubeLink);
  });
  
  $('.video-iframe').on('click', function(){
    $(this).parent().parent().toggleClass('open');

    $(this).find('iframe').attr('src', '');
  });
  

})(jQuery);
