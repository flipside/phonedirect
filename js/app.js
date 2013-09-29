$(document).ready(function() {
  var $start = $('#start'),
   $jumbotron = $('.jumbotron'),
   $main = $('#main'),
   $search = $('#search'),
   $searchResults = $('#search-results'),
   $att = $('#att')
   ;

  // console.log('load');
  $start.on('click', function () {
    console.log('click');
    $jumbotron.toggleClass('hidden');
    $main.toggleClass('hidden');
  });

  $search.find(".btn").on('click', function (evt) {
    evt.preventDefault();
    $searchResults.toggleClass('hidden');
  });

  $att.on('click', function (evt) {
    evt.preventDefault();
    $search.toggleClass('hidden');
    $searchResults.toggleClass('hidden');
  });

});