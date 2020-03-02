(function($){

  // .consent_wrap
  var consentBtn = $('.consent_btn');
  var reservation = $('#reservation').parent();
  var consent = $('#consent').parent();

  consentBtn.on('click', function(e){
    e.preventDefault();
    $('.consent_wrap').slideDown();

    // reservation.after('<div class="consent_wrap"></div>');
    // $('.consent_wrap').load('./page/consent.html', function(){      
    // });
  });

  // consent.find('.close_btn').children('button').on('click', function(e){
  //   e.preventDefault();
  //   consent.slideUp();
  //   // consent.remove();
  // })

})(jQuery);