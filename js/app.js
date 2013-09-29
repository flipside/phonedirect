$(document).ready(function() {
  var $start = $('#start'),
   $jumbotron = $('.jumbotron'),
   $main = $('#main'),
   $search = $('#search'),
   $popular = $('#popular'),
   $recent = $('#recent'),
   $searchResults = $('#search-results'),
   $userPhone = $('#user-phone'),
   $att = $('#att'),
   $xfinity = $('#xfinity'),
   $breadcrumb = $('#breadcrumb'),
   $bca = $('#bc-active'),
   $bc1 = $('#bc1'),
   $bc2 = $('#bc2'),
   $bc3 = $('#bc3'),
   $bc4 = $('#bc4'),
   $mainmenu = $('#mainmenu'),
   $payments = $('#payments'),
   $phoneNumber = $('#phone-number'),
   $paymentForm = $('#payment-form'),
   $phoneForm = $('#phone-form'),
   $xfinityWait = $('#xfinity-wait'),
   $phoneWait = $('#phone-wait'),
   $cancel = $('#cancel'),
   $attGet = $('#att-get')
   ;

  var phone = '';
  // console.log('load');
  // start
  $start.on('click', function () {
    console.log('click');
    phone = $phoneNumber.find('input').val();
    console.log(phone);
    $userPhone.text(phone);
    $phoneWait.text(phone);
    $phoneForm.val(phone);
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
    $recent.toggleClass('hidden');
    $popular.toggleClass('hidden');
    // $searchResults.toggleClass('hidden');
    $breadcrumb.toggleClass('hidden');
    $mainmenu.toggleClass('hidden');
  });

  $mainmenu.find('a').on('click', function (evt) {
    evt.preventDefault();
    // var curr = evt.currentTarget;
    // console.log(evt.currentTarget.name);
    $bc2.toggleClass('hidden');
    // $bca.appendTo($breadcrumb);
    $bca.text($bc3.text());
    $mainmenu.toggleClass('hidden');
    $payments.toggleClass('hidden');
    // $phoneNumber.toggleClass('hidden');
  });

  $payments.find('a').on('click', function (evt) {
    evt.preventDefault();
    // var curr = evt.currentTarget;
    // console.log(evt.currentTarget.name);
    $bc3.toggleClass('hidden');
    $bca.text($bc4.text());
    $payments.toggleClass('hidden');
    $paymentForm.toggleClass('hidden');
    // $page3.toggleClass('hidden');
  });


  $paymentForm.find('button').on('click', function (evt) {
    evt.preventDefault();

    setTimeout(function () {
      alert("Your current balance is two hundred twenty six dollars and seventy two cents due by October twenty first twenty thirteen");

    }, 25000);

    $attGet.toggleClass('hidden');
    $paymentForm.toggleClass('hidden');
    $search.toggleClass('hidden');
    $recent.toggleClass('hidden');
    $popular.toggleClass('hidden');
    $breadcrumb.toggleClass('hidden');

  });

  $xfinity.on('click', function (evt) {
    evt.preventDefault();
    $search.toggleClass('hidden');
    $recent.toggleClass('hidden');
    $popular.toggleClass('hidden');
    // $breadcrumb.toggleClass('hidden');
    $xfinityWait.toggleClass('hidden');
  });

  $cancel.on('click', function (evt) {
    evt.preventDefault();
    $search.toggleClass('hidden');
    $recent.toggleClass('hidden');
    $popular.toggleClass('hidden');
    // $breadcrumb.toggleClass('hidden');
    $xfinityWait.toggleClass('hidden');
  });


});