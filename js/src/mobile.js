(function($){
  var gnb = $('#gnb');
  var menuBtn = gnb.find('.handheld');

  var res = $('.reservation_wrap');
  var resCloseBtn = res.find('.close_btn').children('button');
  // console.log('mobile');


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


})(jQuery);