(function($){
  var gnb = $('#gnb');
  var menuBtn = gnb.find('.handheld');

  var res = $('.reservation_wrap');
  var resCloseBtn = res.find('.close_btn').children('button');
  // console.log('mobile');
  var consent = $('#consent');

  // header


  menuBtn.on('click', function(e){
    e.preventDefault();
    var _this = $(this);
    var act = _this.hasClass('action');
    if(act){
      _this.removeClass('action');
    }else{
      _this.addClass('action');
    }
  });
  
  $('.impack_check').on('click', function () {
    res.slideDown();
    menuBtn.removeClass('action');
  });
  
  // reservation
  var res = $('.reservation_wrap');
  var resCloseBtn = res.find('.close_btn').children('button');

  resCloseBtn.on('click', function(e){
    e.preventDefault();
    res.slideUp();
  });

  // intro
var mediaArea = $('.media_area');
var media = mediaArea.find('.media');
var introVideo = $('#introVideo');
var intro = $('#intro');
var introPlay = intro.find('.play_btn');

introPlay.on('click', function(e){
  e.preventDefault();
  media.fadeIn();
  media.currentTime = 0;
  introVideo.get(0).play();
});

intro.find('.close_btn').on('click', function (e) {
  e.preventDefault();
  introVideo.get(0).pause();
  media.currentTime = 0;
  media.fadeOut();
});

consent.find('.close_btn').on('click', function (e) {
    e.preventDefault();
    // consent.slideUp();
    consent.parent().slideUp();
    // consent.remove();
    console.log('check')
  });


})(jQuery);