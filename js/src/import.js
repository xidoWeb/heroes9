(function($){
  var wrap = $('#wrap');
  wrap.append('<div class="head_wrap"></div>');
    $('.head_wrap').load('./page/header.html');

  wrap.append('<div class="reservation_wrap"></div>');
    $('.reservation_wrap').load('./page/reservation.html');

  wrap.append('<div class="intro_wrap"></div>');
    $('.intro_wrap').load('./page/intro.html');
})(jQuery);