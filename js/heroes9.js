(function($){
  /* // header기능구현 =========================================================================== */
// 1.scroll
var header = $('#headBox');
var gnb = header.find('#gnb');
var gnbMenu = gnb.find('.menu');
var gnbList = gnbMenu.find('a');
var res = $('.reservation_wrap');
var resCloseBtn = res.find('.close_btn').children('button');
var impactBtn = $('.impack_check');
var menuBtn = gnb.find('.handheld');
var consent = $('#consent');




// header 메뉴버튼으로 메뉴/X 토글
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

gnbList.on('click', function (e) {
  e.preventDefault();
  menuBtn.removeClass('action');
  var linkName = $(this).attr('href');
  if (linkName[0] !== '#') {
    window.open(linkName);
  } else if (linkName == '#reservation') {
    // var view = $('#reservation').css('display') == 'none';
    // ( view) ? res.stop().slideDown() : res.stop().slideUp();
    res.stop().slideDown();
  } else {
    res.slideUp();
    var offsetTop = $(linkName).offset().top;
    $('body,html').animate({
      scrollTop: offsetTop + 'px'
    });
  }
});
  
  resCloseBtn.on('click', function (e) {
    e.preventDefault();
    res.slideUp();
  });
 impactBtn.on('click', function () {
    res.slideDown(function () {
      resCloseBtn.focus();
    });
  });


  /* // intro 기능구현 =========================================================================== */
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

  /* // game 소개 =========================================================================== */
// story
var story = $('#gameStory');
var storyBtn = story.find('.slide_btn').children('button');
var storyIndi = story.find('.indicator').find('li');
var storyIndiBtn = storyIndi.children('button');
var storyArea = story.find('.story_area').find('ul');
var i = 0;

var storyBaseBanner = storyArea.children('li');
var storyBaseBanLen = storyBaseBanner.length;
var storyCloneBanner = storyBaseBanner.last().clone(true);
storyCloneBanner.prependTo(storyArea);

var StorySlide = function () {
  if (i < 0) {
    storyArea.stop().animate({
      left: i * -100 + '%'
    }, 50, function () {
      i = storyBaseBanLen - 1;
      storyArea.css({
        left: i * -100 + '%'
      });
    });
  } else if (i >= storyBaseBanLen) {
    storyArea.css({
      left: 100 + '%'
    });
    i = 0;
    storyArea.stop().animate({
      left: i * -100 + '%'
    }, 500);
  } else {
    storyArea.stop().animate({
      left: i * -100 + '%'
    }, 500)
  }

  storyIndi.eq(i).siblings().removeClass('action');
  storyIndi.eq(i).addClass('action');
}

storyIndiBtn.on('click', function (e) {
  e.preventDefault();
  i = $(this).parent().index();
  StorySlide(i);
});

storyBtn.on('click', function (e) {
  e.preventDefault();
  var btnBool = $(this).hasClass('next_btn');
  if (btnBool) {
    // next_btn 선택
    i++;
  } else {
    // prev_btn 선택
    i--;
  }
  StorySlide(i);
});

  
  /* // 마케팅사전등록 =========================================================================== */
    // .consent_wrap 마케팅동의페이지
    var consentBtn = $('.consent_btn');
    var reservation = $('#reservation').parent();
    var consent = $('#consent').parent();

    consentBtn.on('click', function (e) {
      e.preventDefault();
      $('.consent_wrap').slideDown();

      // reservation.after('<div class="consent_wrap"></div>');
      // $('.consent_wrap').load('./page/consent.html', function(){      
      // });
    });

    consent.find('.close_btn').children('button').on('click', function (e) {
      e.preventDefault();
      consent.slideUp();
      // consent.remove();
    })

  /* 
  // 정보 등록 내용 =========================================================================== 
var inputData = $('#user_phone_number');
var dataSendBtn = $('#dataSend');
var errorModal = $('#etc2');
var sendBtn = $('#send');
var good = $('#good');
var check = $('#etc3');
var checkInput = $('#user_info_check');

var n1, ck;



// 정보승인 체크상태확인
checkInput.on('click', function(e){
  ck =   checkInput.is(':checked');
});


// input data 값확인하고 숫자값이 아닌경우 입력되지 않게 만들기
inputData.on('propertychange change keyup paste input', function (e) {
 e.preventDefault();
 $(this).val($(this).val().replace(/[^0-9]/g, ""));
});


// 전송버튼 클릭시 기본 전송되지 않고, 내용 파악해서 에러유무 확인
dataSendBtn.on('click focus', function(e) {
  e.preventDefault();

checkInput.attr('checked');

  n1 = inputData.val();
  var n2 = isNaN(inputData.val());
  if (n1 == '' || n2 === true) {
    errorModal.addClass('view');
  }else if(n1[0] !== '0' || n1[1] !== '1'){
    errorModal.addClass('view');
  }else if( n1.length < 10 ){
    errorModal.addClass('view');
  } else if (!ck) {
    check.addClass('view');
  }else{
    // 에러가 없는 경우 다시 번호확인 후 전송하는 팝업띄우기
    sendBtn.find('#phone_num').text(n1);
    sendBtn.addClass('view');
  }
});
// 값 내용 문제있을경우
errorModal.find('button').on('click', function(e){
  e.preventDefault();
  errorModal.removeClass('view');
  inputData.val('');
  inputData.focus();
});

// 값내용이 문제 없을경우 번호 재확인 후 취소버튼 클릭
sendBtn.find('button[type="reset"]').on('click', function(e){
  e.preventDefault();
  sendBtn.removeClass('view');
});

check.find('button').on('click', function(e){
  e.preventDefault();
  check.removeClass('view');
  checkInput.focus();  
});

// 값 내용이 문제 없을경우 전송하는 소스코드
var form = $('#registration');
var formLink = form.attr('action');


good.find('button').on('click', function(e){
  good.removeClass('view');
  $('.reservation_wrap').slideUp();
});

// 구글 현재 대기상태 --------------------------------------
var googleModal = $('#etc');

  $('#google').on('click', function(e){
    e.preventDefault();
    googleModal.addClass('view');
  });
  googleModal.find('button').on('click',function(e){
    e.preventDefault();
    googleModal.removeClass('view');
  });




// data send 처리 -------------------------------------------------

function sendAjax(sendData){
  $.ajax({
    url: 'formLink',
    type:'post',
    data: n1,
    dataType:'text',
  }).done(function(){
    good.addClass('view');
  });
}
// -------------------------------------------------
*/
})(jQuery );