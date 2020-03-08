(function($){
  var gnb = $('#gnb');
  var menuBtn = gnb.find('.handheld');
  var gnbList = gnb.find('.menu').children('li');
  var gnbLink = gnbList.children('a');

  var res = $('.reservation_wrap');
  var resCloseBtn = res.find('.close_btn').children('button');
  // console.log('mobile');
  var consent = $('#consent');

  // header 메뉴버튼으로 메뉴/X 토글
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
  // ------------------------------------
  
  
  gnbList.on('click', function (e) {
    e.preventDefault();
    if ($(this)[0] == $('.impack_check')[0]){
      res.slideDown();
    }
    menuBtn.removeClass('action');
  });
  var introResBtn = $('.all_mv_btn');
  introResBtn.on('click', function(e){
    e.preventDefault();
    res.slideDown();
  });

  resCloseBtn.on('click', function(e){
    e.preventDefault();
    res.slideUp();
  });

/*   // intro동영상
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
}); */

//닫기버튼
consent.find('.close_btn').on('click', function (e) {
    e.preventDefault();
    // consent.slideUp();
    consent.parent().slideUp();
    // consent.remove();
    console.log('check')
  });


})(jQuery);