
// var impact = $('#headBox').find('.menu').find('.impack_check');

var gnb = $('#gnb');
var gnbMenu = $('.menu').find('li').children('a');
var res = $('.reservation_wrap');
var resCloseBtn = res.find('.close_btn').children('button');
// console.log('mobile');



gnbMenu.on('click', function(){
  $(this).parent('li').siblings().removeClass('action');
  $(this).parent('li').addClass('action');
});

$('.impack_check').on('click', function () {
  res.slideDown(function(){
    resCloseBtn.focus();
  });
});


    // reservation
//    var res = $('.reservation_wrap');
//    var resCloseBtn = res.find('.close_btn').children('button');

    resCloseBtn.on('click', function (e) {
      e.preventDefault();
      res.slideUp();
    });
