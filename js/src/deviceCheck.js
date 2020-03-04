(function($){

  var winW = $(window).outerWidth();
  var afterWinW;
  var deviceCheck = {
    mobile : { min : 240,  max : 1023  },
    pcbase : { min : 1024, max : 1599  },
    full   : { min : 1600            }
  };

  var deviceName = ['mobile', 'pcbase', 'full'];
  var myDevice;
  var device = function(size){
    if (size >= deviceCheck.mobile.min && size < deviceCheck.pcbase.min) {
      myDevice = deviceName[0];  deviceNum = 0;
    } else{ // if (size >= deviceCheck.pcbase.min && size < deviceCheck.full.min) {
      myDevice = deviceName[1];  deviceNum = 1;
    } /* else {
      myDevice = deviceName[2];  deviceNum = 2;
    } */

    $(document).ready(function(){
      setTimeout(function() {
        $('body').append('<script class="deviceScript" src="./js/src/' + myDevice + '.js"></script>');
      }, 100);
    });
    
  };

  device(winW);

  $(window).on('resize', function(){
    $('.deviceScript').remove();
    afterWinW = $(window).outerWidth();
    if(winW !== afterWinW){
      window.location.reload();
      device(afterWinW);
    }
  });

})(jQuery);
