(function($){
// header영역
var header = $('#headBox');
var gnb = header.find('#gnb');
var gnbMenu = gnb.find('.menu');
var gnbList = gnbMenu.find('a');
var res = $('.reservation_wrap');

gnbList.on('click', function(e){
  e.preventDefault();
  var linkName = $(this).attr('href');
  if(linkName[0] !== '#'){
    window.open(linkName);
  } else if (linkName == '#reservation') {
    // var view = $('#reservation').css('display') == 'none';
    // ( view) ? res.stop().slideDown() : res.stop().slideUp();
    res.stop().slideDown();
  }else{
    res.slideUp();
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

  // game ---------------------------------------
  var game = $('#gameCharacter');
  var gameBtn = game.find('.slide_btn').children('button');
  var gameIndi = game.find('.indicator').find('li');
  var gameIndiBtn = gameIndi.children('button');
  var gameArea = game.find('.game_area').children('ul');
  var gameChar = $('#gameCharacter');
  var theme = gameChar.find('.theme');
  

// character 버튼클릭
//1.빛진영/어둠진영 확인
var charImg = '../img/character/';
var team = gameArea.find('.team');
var lightTeamSet = gameArea.children('li').children('.light_team');
var darkenTeamSet = gameArea.children('li').children('.darken_team');
var teamSet = [lightTeam, darkTeam];
var t=0;
var _ct1,_ct2;
var teamChar1 = '<li><button type="button"><span></span></button></li>';
// { num:1,  thumImg: "lt_ethila", name: "에실라", type: "공격형", summary: ["어둠의","강한",]}
for (; t < teamSet[0].character.length; t++) {
  lightTeamSet.append(teamChar1);
  _ct1 = lightTeamSet.find('li').eq(t);
  _ct1.children('button').css({backgroundImage: 'url(' +charImg + 'thumb/lightTeam/' + lightTeam.character[t].thumImg +'.png)' });
  _ct1.find('span').text(lightTeam.character[t].name);
}

t=0;
for (; t < teamSet[1].character.length; t++) {
  darkenTeamSet.append(teamChar1);
  _ct2 = darkenTeamSet.find('li').eq(t);
  console.log(_ct2);
   _ct2.children('button').css({backgroundImage: 'url(' + charImg + 'thumb/darkTeam/' + darkTeam.character[t].thumImg + '.png)'});
  _ct2.find('span').text(darkTeam.character[t].name);
}


  // character
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
     if (ckT.character[ckIndex].summary[2] !== undefined){
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
    theme.eq(j).fadeIn(200);
    theme.eq(j).siblings().fadeOut(200);
  });


})(jQuery);