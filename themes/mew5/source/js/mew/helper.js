
(function($){

  var popularSearchesTemplate = '<a href="[===url===]">[===name===]</a>';

  // Get popular search links
  $.getJSON("/popular-search-links.json", function(json) {
    var popularSearches = json;
    //console.log(popularSearches);
    popularSearches.forEach(function(searchItem){
      $('.popular-searches').append(
        popularSearchesTemplate.replace('[===name===]', searchItem.name).replace('[===url===]', searchItem.url)
      );
    });    
  });

})(jQuery);
