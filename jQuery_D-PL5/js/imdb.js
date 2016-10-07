'use strict';
(function(){
  var searchButton = $('#searchForm button');
  var resultPanel = $('#resultPanel');
  var querySpan = $('.panel-heading span',resultPanel);
  var bodyPanel = $('.panel-body',resultPanel);
  var mediaPanel = $('.media',resultPanel).clone();
  var searchText;

  function renderMovie(index,movie){
    var media = mediaPanel.clone();
    var link = $('a',media);
    var img = $('img',media);
    var title = $('.media-heading',media);
    var yearAndType = $('p',media);
    link.attr('href','http://www.imdb.com/title/'+movie.imdbID);
    if(movie.Poster !== 'N/A'){
      img.attr('src',movie.Poster);
    }
    title.text(movie.Title);
    yearAndType.text(movie.Year+' '+movie.Type);
    bodyPanel.append(media);
  }

  function displayResults(results){
    resultPanel.removeClass('hidden');
    querySpan.text(searchText);
    if(results.Response === 'False' ){
      resultPanel.removeClass('panel-success');
      resultPanel.addClass('panel-danger');
      bodyPanel.html('<strong>No results found!</strong>');
    } else {
      resultPanel.addClass('panel-success');
      resultPanel.removeClass('panel-danger');
      bodyPanel.html('');
      $.each(results.Search,renderMovie);
    }
  }

  function apiCall(searchText){
    var url = 'http://www.omdbapi.com/?s=';
    url +=encodeURI(searchText);
    $.get(url,function(results){
      if(results !== undefined){
        displayResults(results);
      }
    });
  }

  $(function(){
    searchButton.click(function(event){
      event.preventDefault();
      searchText = $('#search').val();
      apiCall(searchText);
    });
  });
})();