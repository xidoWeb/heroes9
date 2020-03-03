(function($){
// header영역
var header = $('#headBox');
var gnb = header.find('#gnb');
var gnbMenu = gnb.find('.menu');
var gnbList = header.find('a');

gnbList.on('click', function(e){
  e.preventDefault();
  var linkName = $(this).attr('href');
  if(linkName[0] !== '#'){
    window.open(linkName);
  }else{
    var offsetTop = $(linkName).offset().top;
    $('body,html').animate({scrollTop:offsetTop + 'px'});
  }

});


  // .consent_wrap 마케팅동의페이지
  var consentBtn = $('.consent_btn');
  var reservation = $('#reservation').parent();
  var consent = $('#consent').parent();

  consentBtn.on('click', function(e){
    e.preventDefault();
    $('.consent_wrap').slideDown();

    // reservation.after('<div class="consent_wrap"></div>');
    // $('.consent_wrap').load('./page/consent.html', function(){      
    // });
  });

  consent.find('.close_btn').children('button').on('click', function(e){
    e.preventDefault();
    consent.slideUp();
    // consent.remove();
  })


  $('.policy').find('.narr').load('./page/service_link.html');

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
  
  var StorySlide = function(){    
    if(i < 0){ 
    storyArea.stop().animate({left:i * -100 + '%'},50, function(){
        i = storyBaseBanLen-1; 
        storyArea.css({left:i * -100 + '%'});
      });
    }else if (i >= storyBaseBanLen){ 
        storyArea.css({left:100 + '%'});
        i = 0; 
        storyArea.stop().animate({left:i * -100 + '%'},300);
    }else{
      storyArea.stop().animate({left:i * -100 + '%'},300)
    }

    storyIndi.eq(i).siblings().removeClass('action');
    storyIndi.eq(i).addClass('action');
  }

  storyIndiBtn.on('click', function (e) {
    e.preventDefault();
    i = $(this).parent().index();
    StorySlide(i);
  });

  storyBtn.on('click', function(e){
    e.preventDefault();
    var btnBool = $(this).hasClass('next_btn');
    if(btnBool){
      // next_btn 선택
      i++;
    }else{
      // prev_btn 선택
      i--;
    }
    StorySlide(i);
  });

  // game
  var game = $('#gameCharacter');
  var gameBtn = game.find('.slide_btn').children('button');
  var gameIndi = game.find('.indicator').find('li');
  var gameIndiBtn = gameIndi.children('button');
  var gameArea = game.find('.game_area').children('ul');
  var j = 0; 

  var gameBaseBanner = gameArea.children('li');
  var gameBaseBanLen = gameBaseBanner.length;
  var gameCloneBanner = gameBaseBanner.last().clone(true);
  gameCloneBanner.prependTo(gameArea);
  
  var GameSlide = function () {
    if (j < 0) {
      gameArea.stop().animate({
        left: j * -100 + '%'
      }, 50, function () {
        j = gameBaseBanLen - 1;
        gameArea.css({
          left: j * -100 + '%'
        });
      });
    } else if (j >= gameBaseBanLen) {
      gameArea.css({ left: 100 + '%' });
      j = 0;
      gameArea.stop().animate({left: j * -100 + '%'},10);
    } else {
      gameArea.stop().animate({ left: j * -100 + '%'},10)
    }

    gameIndi.eq(j).siblings().removeClass('action');
    gameIndi.eq(j).addClass('action');
  }

  gameIndiBtn.on('click', function (e) {
    e.preventDefault();
    j = $(this).parent().index();
    GameSlide(j);
  });

  gameBtn.on('click', function (e) {
    e.preventDefault();
    var btnBool = $(this).hasClass('next_btn');
    if (btnBool) {
      // next_btn 선택
      j++;
    } else {
      // prev_btn 선택
      j--;
    }
    GameSlide(j);
  });

  // character
  var ckIcon     = $('.character_icon');
  var ckIconList = ckIcon.children('li');
  var ckIconBtn  = ckIconList.children('button');
  var ckinfo = $('.character_infomation');

  ckIconBtn.on('click', function(e){
    e.preventDefault();
    ckinfo.fadeIn();
  });

  ckinfo.find('.close_btn').children('button').on('click', function(e){
    e.preventDefault();
    ckinfo.fadeOut();
  });


})(jQuery);