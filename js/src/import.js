(function($){
  var wrap = $('#wrap');

// header
  wrap.append('<div class="head_wrap"></div>');
    $('.head_wrap').load('./page/header.html');

// 사전등록
  wrap.append('<div class="reservation_wrap"></div>');
    $('.reservation_wrap').load('./page/reservation.html');

// 마케팅 동의
   $('.reservation_wrap').after('<div class="consent_wrap"></div>');
   $('.consent_wrap').load('./page/consent.html');

// intro
  wrap.append('<div class="intro_wrap wrapper"></div>');
    $('.intro_wrap').load('./page/intro.html');

// event
  wrap.append('<div class="event_01_wrap wrapper"></div>');
  $('.event_01_wrap').load('./page/event_01.html');

/*   wrap.append('<div class="event_02_wrap wrapper"></div>');
  $('.event_02_wrap').load('./page/event_02.html'); */

// game story
  wrap.append('<div class="gameStory_wrap wrapper"></div>');
  $('.gameStory_wrap').load('./page/gameStory.html');

// character
  wrap.append('<div class="character_wrap wrapper"></div>');
  $('.character_wrap').load('./page/character.html');

// footer
  wrap.append('<div class="footer_wrap wrapper"></div>');
  $('.footer_wrap').load('./page/footer.html');

  setTimeout(function() {
    $('body').append('<script src="../js/src/common.js""></script>');
  },500);
})(jQuery);             