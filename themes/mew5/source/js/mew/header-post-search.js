function occurrences (string, subString, allowOverlapping) {

  string += '';
  subString += '';
  if (subString.length <= 0) return (string.length + 1);

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

function searchPosts (_this) {
  var searchText = $(_this).val().toLowerCase();
  if (searchText) {
    $('.mew___components_header_header-search-form').find('.search-results').removeClass('hidden');
  } else {
    $('.mew___components_header_header-search-form').find('.search-results').addClass('hidden');
  }


  var topEntries = [0];
  var entryCount = $('.header-post-search-item').children().length;
  var currentEntry = 1;
  var topCount = 0;
  console.log(entryCount); // todo remove dev item
  $('.header-post-search-item').each(function () {
      currentEntry++;
      var postContent = $(this).find('.post-content').text().toLowerCase();
      if (postContent.includes(searchText)) {
        var occurCount = occurrences(postContent, searchText);
        $(this).removeClass('hidden');
        $(this).find('.occur-count span').text(occurCount);
        // topEntries.push({count: occurCount, content: $(this)});

        if (topEntries.every(entry => occurCount >= entry)) {
          $('#results-list').prepend(this);
          topEntries.push(occurCount);
          if (topEntries.length < 10) {
            topEntries.sort().pop();
          }
        }

        // }
        // if (topEntries.length < 10) {
        //   topEntries.sort((a, b) => {
        //     if (a.count < b.count)
        //       return 1;
        //     if (a.count > b.count)
        //       return -1;
        //     return 0;
        //   });
        //   topEntries.pop()
        // }
        // console.log(currentEntry, entryCount); // todo remove dev item
        // if(currentEntry >= 78){
        //   topEntries = topEntries.map(entry => entry.content[0]).reverse();
        //   topEntries.forEach(entry =>{
        //     console.log(entry, "1'"); // todo remove dev item
        //     $('#results-list').prepend(entry)
        //   })
        // }
      } else {
        $(this).addClass('hidden');
      }


    }
  );


}


(function ($) {

  // Focus search input all the time
  $('#header-post-search-form').focus();

  // Check if search input is not empty.
  // If it's not empty, run search.
  // This happens when user clicked back button.
  if ($('#header-post-search-form').val()) {
    searchPosts($('#header-post-search-form'));
  }

  $('#header-post-search-form').on('keyup', function () {
    searchPosts(this);
  });

})(jQuery);


(function ($) {
  $('.mew___components_header_header-search-form .search-form-input').focusout(function () {
    $(document).click(function (event) {
      var clickedClassName = $(event.target).attr('class');

      if (clickedClassName != 'search-block' && clickedClassName != 'search-form-input') {
        $('.mew___components_header_header-search-form .search-results').addClass('hidden');
      }
    });
  });

  $('.mew___components_header_header-search-form .search-form-input').focusin(function (e) {
    if ($(this).val()) {
      $('.mew___components_header_header-search-form .search-results').removeClass('hidden');
    }
  });
})(jQuery);





