(function ($) {

  console.log('tablet');
  var gnb = $('#gnb');
  var menuBtn = gnb.find('.handheld');

  menuBtn.on('click', function (e) {
    e.preventDefault();
    var _this = $(this);
    var act = _this.hasClass('action');
    if (act) {
      _this.removeClass('action');
    } else {
      _this.addClass('action');
    }
  });
})(jQuery);