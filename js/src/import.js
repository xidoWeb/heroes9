(function($){
  var wrap = $('#wrap');

// header
  wrap.append('<div class="head_wrap"></div>');
    $('.head_wrap').load('./page/header.html');

// 사전등록
  wrap.append('<div class="reservation_wrap"></div>');
    $('.reservation_wrap').load('./page/reservation.html');

// intro
  wrap.append('<div class="intro_wrap"></div>');
    $('.intro_wrap').load('./page/intro.html');

// event
  wrap.append('<div class="event_01_wrap"></div>');
  $('.event_01_wrap').load('./page/event_01.html');

  wrap.append('<div class="event_02_wrap"></div>');
  $('.event_02_wrap').load('./page/event_02.html');

// game story
  wrap.append('<div class="gameStory_wrap"></div>');

// character
  wrap.append('<div class="character_wrap"></div>');
})(jQuery);