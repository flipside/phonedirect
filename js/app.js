$(document).ready(function() {
  var $start = $('#start'),
   $jumbotron = $('.jumbotron'),
   $main = $('#main'),
   $search = $('#search'),
   $searchResults = $('#search-results'),
   $att = $('#att'),
   $breadcrumb = $('#breadcrumb'),
   $bca = $('#bc-active'),
   $bc1 = $('#bc1'),
   $bc2 = $('#bc2'),
   $bc3 = $('#bc3'),
   $bc4 = $('#bc4')
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
    $breadcrumb.toggleClass('hidden');
  });

  $bca.on('click', function () {
    $bc1.toggleClass('hidden');
    $bca.appendTo($breadcrumb);
    $bca.text($bc2.text());
  });
  $bc1.on('click', function () {
    $bc2.toggleClass('hidden');
    $bca.text($bc3.text());
  });

  $bc2.on('click', function () {
    $bc3.toggleClass('hidden');
    $bca.text($bc4.text());
  });

});