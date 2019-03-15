(function($){

  $('#sidebar-post-search-form').on('keyup', function(){
    var searchText = $(this).val().toLowerCase();

    $('.primary-category-post-title').each(function(){
      var postTitle = $(this).find('.post-title').text().toLowerCase();
      if(postTitle.includes(searchText)) {
        $(this).removeClass('hidden');
      }
      else {
        $(this).addClass('hidden');
      }
    });
  });

})(jQuery);
