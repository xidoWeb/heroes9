(function($){

  var gnb = $('#gnb');
  var gnbMenu = gnb.find('.menu').find('li').children('a');

//---------------------------------------------------------
gnbMenu.on('click, focus', function (e) {
    e.preventDefault();
    // console.log(e);
    $(this).parent('li').siblings().removeClass('action');
    $(this).parent('li').addClass('action');
  });
  gnbMenu.on('blur', function (e) {
    e.preventDefault();
    $(this).parent('li').removeClass('action');
  });  
// -----------------------------------------------------



})(jQuery);