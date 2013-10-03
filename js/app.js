$(document).ready(function() {
  var $start = $('#start'),
   $jumbotron = $('.jumbotron'),
   $main = $('#main'),
   $search = $('#search'),
   $popular = $('#popular'),
   $recent = $('#recent'),
   $searchResults = $('#search-results'),
   $userPhone = $('.user-phone'),
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
   $attGet = $('#att-get'),
   $rowtop = $('#rowtop')
   ;

  var phone = '';

  var alert1 = [
    '<div class="alert alert-block alert-info fade in">',
      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>',
      '<h4>Your AT&T Account Balance</h4>',
      '<p>Your current balance is one hundred eighty seven dollars and seventy four cents due by October twenty second twenty thirteen</p>',
    '</div>'
  ].join('');

  var alert2 = '';[
    '<div class="alert alert-block alert-info fade in">',
      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>',
      '<h4>Xfinity Call Initiated</h4>',
      '<p>Estimated wait time: 13 minutes</p>',
      "<p>We'll call you when they pick up at: <span id='phone-wait'>"+phone+"</span></p>",
        // '<a class="btn btn-default" data-dismiss="alert" href="#">Close</a>',
      '<button type="button" class="btn btn-default" data-dismiss="alert" aria-hidden="true" id="cancel">Cancel</button>',
    '</div>'
  ].join('');

  // console.log('load');
  // start
  $start.on('click', function () {
    console.log('click');
    phone = $phoneNumber.find('input').val();
    phone = phone.substring(0,3)+'-'+phone.substring(3,6)+'-'+phone.substring(6,10);
    console.log(phone);
    $userPhone.text(phone);
    $phoneWait.text(phone);
    $phoneForm.val(phone);
    $jumbotron.toggleClass('hidden');
    $main.toggleClass('hidden');

    alert2 = [
      '<div class="alert alert-block alert-info fade in">',
        '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>',
        '<h4>Xfinity Call Initiated</h4>',
        '<p>Estimated wait time: 13 minutes</p>',
        "<p>We'll call you when they pick up at: <span id='phone-wait'>"+phone+"</span></p>",
          // '<a class="btn btn-default" data-dismiss="alert" href="#">Close</a>',
        '<button type="button" class="btn btn-default" data-dismiss="alert" aria-hidden="true" id="cancel">Cancel</button>',
      '</div>'
    ].join('');
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
      $rowtop.prepend(alert1);
    }, 5000);

    $attGet.removeClass('hidden');
    $paymentForm.addClass('hidden');
    $search.removeClass('hidden');
    $recent.removeClass('hidden');
    $popular.removeClass('hidden');
    $breadcrumb.addClass('hidden');

  });

  $attGet.on('click', function (evt) {
    evt.preventDefault();

    setTimeout(function () {
      $rowtop.prepend(alert1);
    }, 25000);

    // $attGet.removeClass('hidden');
    $paymentForm.addClass('hidden');
    $search.removeClass('hidden');
    $recent.removeClass('hidden');
    $popular.removeClass('hidden');
    $breadcrumb.addClass('hidden');

  });

  $xfinity.on('click', function (evt) {
    evt.preventDefault();
    // $search.toggleClass('hidden');
    // $recent.toggleClass('hidden');
    // $popular.toggleClass('hidden');
    // $breadcrumb.toggleClass('hidden');
    // $xfinityWait.toggleClass('hidden');
    $rowtop.prepend(alert2);
  });

  // $cancel.on('click', function (evt) {
  //   evt.preventDefault();
  //   // $search.toggleClass('hidden');
  //   // $recent.toggleClass('hidden');
  //   // $popular.toggleClass('hidden');
  //   // $breadcrumb.toggleClass('hidden');
  //   // $xfinityWait.toggleClass('hidden');
  //   $('.alert').alert();
  // });




});