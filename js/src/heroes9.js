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

  /* // 캐릭터 구현 =========================================================================== */
  // character 불러오기(별도 js)

var game = $('#gameCharacter');
var gameBtn = game.find('.slide_btn').children('button');
var gameIndi = game.find('.indicator').find('li');
var gameIndiBtn = gameIndi.children('button');
var gameArea = game.find('.game_area').children('ul');
var gameChar = $('#gameCharacter');
var theme = gameChar.find('.theme');

// character 버튼클릭
//1.빛진영/어둠진영 확인
var charImg = './img/character/';
var team = gameArea.find('.team');
var lightTeamSet = gameArea.children('li').children('.light_team');
var darkenTeamSet = gameArea.children('li').children('.darken_team');
var teamSet = [lightTeam, darkTeam];
var t = 0;
var _ct1, _ct2;
var teamChar1 = '<li><button type="button"><span></span></button></li>';

for (; t < teamSet[0].character.length; t++) {
  lightTeamSet.append(teamChar1);
  _ct1 = lightTeamSet.find('li').eq(t);
  _ct1.children('button').css({
    backgroundImage: 'url(' + charImg + 'thumb/lightTeam/' + lightTeam.character[t].thumImg + '.png)'
  });
  _ct1.find('span').text(lightTeam.character[t].name);
}

t = 0;
for (; t < teamSet[1].character.length; t++) {
  darkenTeamSet.append(teamChar1);
  _ct2 = darkenTeamSet.find('li').eq(t);
  // console.log(_ct2);
  _ct2.children('button').css({
    backgroundImage: 'url(' + charImg + 'thumb/darkTeam/' + darkTeam.character[t].thumImg + '.png)'
  });
  _ct2.find('span').text(darkTeam.character[t].name);
}

  // character선택자
  var ckIcon = $('.character_icon');
  var ckIconList = ckIcon.children('li');
  var ckIconBtn = ckIconList.children('button');
  var ckinfo = $('.character_infomation');

  var team_set = ckinfo.find('.team_set');
  var ckImg = ckinfo.find('.img');
  var ck_n = ckinfo.find('.ck_n');
  var type = ckinfo.find('.type');
  var narr_title = ckinfo.find('.narr_title');
  var narr_par = ckinfo.find('.narr_par');

  // console.log(teamSet[0]);
  var ckIndex, ckT, ckCheck;
  ckIconBtn.on('click', function (e, teamSet) {
    e.preventDefault();
    ckIndex = $(this).parents('li').index();

    ckCheck = $(this).parentsUntil('team').hasClass('light_team');
    (ckCheck == true) ? ckT = lightTeam: ckT = darkTeam;
    // 내용입력

    team_set.text(ckT.team);
    ckImg.css({
      backgroundImage: 'url(' + charImg + 'big/' + ckT.folder + '/' + ckT.character[ckIndex].thumImg + '.png)'
    });
    ck_n.text(ckT.character[ckIndex].name);
    type.text(ckT.character[ckIndex].type);
    //  type.text(ckT.character[ckIndex].narr_title);
    narr_title.text(ckT.character[ckIndex].summary[0]);
    narr_par.text(ckT.character[ckIndex].summary[1]);
    if (ckT.character[ckIndex].summary[2] !== undefined) {
      narr_par.append('<br />' + ckT.character[ckIndex].summary[2]);
    }
    // -------------------------
    ckinfo.fadeIn();
  });

  ckinfo.find('.close_btn').children('button').on('click', function (e) {
    e.preventDefault();
    ckinfo.fadeOut();
  });

  // game slide

  var gameBaseBanner = gameArea.children('li');
  var gameBaseBanLen = gameBaseBanner.length;
  var gameCloneBanner = gameBaseBanner.last().clone(true);

  var j = 0;

  gameCloneBanner.prependTo(gameArea);

  var GameSlide = function () {
    if (j < 0) {
      gameArea.stop().animate({ left: j * -100 + '%' }, 50, function () {
        j = gameBaseBanLen - 1;
        gameArea.css({left: j * -100 + '%'}); 
        });
    } else if (j >= gameBaseBanLen) {
      gameArea.css({left: 100 + '%'});
      j = 0;
      gameArea.stop().animate({ left: j * -100 + '%'}, 500);
    } else { 
      gameArea.stop().animate({left: j * -100 + '%'}, 500);
    }

    gameIndi.eq(j).siblings().removeClass('action');
    gameIndi.eq(j).addClass('action');
    theme.eq(j).fadeIn(200);
    theme.eq(j).siblings().fadeOut(200);
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
    // theme.eq(j).fadeIn(200);
    // theme.eq(j).siblings().fadeOut(200);
    (j % 2 == 1) ? $('#gameCharacter').addClass('dark'): $('#gameCharacter').removeClass('dark');

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

  /* // 내용보기 =========================================================================== */


})(jQuery );