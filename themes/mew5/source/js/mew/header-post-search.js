(function($){

  $('#header-post-search-form').on('keyup', function(){
    var searchText = $(this).val().toLowerCase();

    $('.header-post-search-item').each(function(){
        
      var postContent = $(this).find('.post-content').text().toLowerCase();
      if(postContent.includes(searchText)) {
        $(this).removeClass('hidden');
      }
      else {
        $(this).addClass('hidden');
      }

    });
  });

})(jQuery);
