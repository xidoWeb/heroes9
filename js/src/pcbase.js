(function($){
// var impact = $('#headBox').find('.menu').find('.impack_check');

var gnb = $('#gnb');
var gnbMenu = $('.menu').find('li').children('a');
var res = $('.reservation_wrap');
var resCloseBtn = res.find('.close_btn').children('button');
var consent = $('#consent').parent();

 
  var menuBtn = gnb.find('.handheld');
  var gnbList = gnb.find('.menu').children('li');
  var gnbLink = gnbList.children('a');

  var res = $('.reservation_wrap');


//--///////////////////////
gnbMenu.on('click', function(){
  $(this).parent('li').siblings().removeClass('action');
  $(this).parent('li').addClass('action');
});

$('.impack_check').on('click', function () {
  res.slideDown(function(){
    resCloseBtn.focus();
  });
});


// --------------------------------------------------
resCloseBtn.on('click', function (e) {
  e.preventDefault();
  res.slideUp();
});

//pc
 consent.find('.close_btn').children('button').on('click', function (e) {
   e.preventDefault();
   consent.slideDown();
 });

//닫기버튼모바일
consent.find('.close_btn').on('click', function (e) {
  e.preventDefault();
  consent.parent().slideUp();
});




 // intro
 var mediaArea = $('.media_area');
 var media = mediaArea.find('.media');
 var introVideo = $('#introVideo');
 var intro = $('#intro');
 var introPlay = intro.find('.play_btn');

 introPlay.on('click', function (e) {
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




 // ====================================


 })(jQuery);