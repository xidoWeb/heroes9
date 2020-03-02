(function($){
  // $('body').append(`<script class="deviceScript"></script>`);
  // $('body').append(`<script class="deviceScript" src="./js/src/import.js"></script>`);
  var winW = $(window).outerWidth();
  // console.log(winW);
  var afterWinW;

  var deviceCheck = {
    mobile : { min : 320,  max : 639   },
    tablet : { min : 640,  max : 1023  },
    pcbase : { min : 1024, max : 1365  },
    laptop : { min : 1366, max : 1599  },
    full   : { min : 1600            }
  };

  // var deviceName = ['mobile', 'tablet', 'pcbase', 'laptop', 'full'];
  var deviceName = ['mobile', 'mobile', 'pcbase', 'pcbase', 'pcbase'];
  var myDevice;
  var deviceNum=0;
  var testColor = ['#bbb', '#fac', '#acf', '#afc', '#fc7'];
  

  var device = function(size){
    var winH = $(window).outerHeight();

    // 모바일기기 가로형 제한설정
    // if (size < deviceCheck.pcbase.min && size - winH > 0){ 
    //   $('body').html('<h2>가로형 기기는 지원하지 않습니다. <br />  세로로 돌려주세요.</h2>')
    // }

   // 각 디바이스 환경설정 
    if(size >= deviceCheck.mobile.min && size < deviceCheck.tablet.min) {
      myDevice = deviceName[0];
      deviceNum = 0;
    } 
    else if (size >= deviceCheck.tablet.min && size < deviceCheck.pcbase.min){
      myDevice = deviceName[1];
      deviceNum = 1;
    }
    else if (size >= deviceCheck.pcbase.min && size < deviceCheck.laptop.min){
      myDevice = deviceName[2];
      deviceNum = 2;
    } 
    else if (size >= deviceCheck.laptop.min && size < deviceCheck.full.min){
      myDevice = deviceName[3];
      deviceNum = 3;
    }else{
      myDevice = deviceName[4];
      deviceNum = 4;
    }
    $('body').stop().animate({'backgroundColor':testColor[deviceNum]},300);
    
    $(document).ready(function(){
      setTimeout(() => {
        $('body').append(`<script class="deviceScript" src="./js/src/${myDevice}.js"></script>`);
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
