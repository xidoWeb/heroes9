(function($){

// ------------------------------------------------------------------------------------------
// 캐릭터 정보 
// 빛의어웨이커
var lightTeam = {
  team: "빛의 어웨이커",
  folder: 'lightTeam',
  character: [{
      num: 1,
      thumImg: "lt_ethila",
      name: "에실라",
      type: "공격형",
      summary: [
        "어둠의 세력이 위협하는 것을 가장 먼저 느끼고 검을 든 어웨이커",
        "강한 물리 공격력을 자랑하는 어웨이커로 어둠의 세력을 물리치는데 힘을 아끼지 않을 것입니다.",
      ]
    }, {
      num: 2,
      thumImg: "lt_loa",
      name: "로아",
      type: "회복형",
      summary: [
        "대륙 전역의 생명력이 불안정해진 이유를 찾고 있는 어웨이커",
        "다른 어웨이커들이 쓰러지지 않도록 후방에서 지원하는 역할을 맡고 있습니다."
      ]
    }, {
      num: 3,
      thumImg: "lt_lena",
      name: "레나",
      type: "방어형",
      summary: [
        "철옹성이라는 칭호를 갖고 있는 어웨이커",
        "동료들을 지키기 위해 항상 전장의 최전방에서 어둠의 세력에 맞서고 있습니다."
      ]
    }, {
      num: 4,
      thumImg: "lt_cylus",
      name: "사일러스",
      type: "마법형",
      summary: [
        "본래 어둠의 세력이었지만 배반당한 복수를 위해 빛의 세력에 가담한 어웨이커",
        "강력한 마법으로 후방에서 어둠의 세력에게 복수하는 그는 파괴자로 불립니다."
      ]
    }, {
      num: 5,
      thumImg: "lt_berona",
      name: "베로나",
      type: "마법형",
      summary: [
        "많은 빛과 어둠의 전쟁에 참여하면서 빛의 대마법사라는 칭호를 얻은 어웨이커",
        "베로나의 빛의 마법은 수많은 전쟁을 승리로 이끌었으며 빛의 세력의 큰 희망이 되고 있습니다."
      ]
    }, {
      num: 6,
      thumImg: "lt_estel",
      name: "에스텔",
      type: "방어형",
      summary: [
        "고대 초제국 황실의 마지막 자손이자 카슬로트 황제의 유일한 후계자",
        "태어날 때부터 강력한 힘을 가지고 태어났으며 자랄 수록 그 힘이 더욱 강력해진 에스텔은 자신의 운명을 받아들이고 어둠의 세력과의 전쟁에 참여하게 됩니다."
      ]
    }
    /*
    , {
      num: 7,
      thumImg: "lt_keisia", // lt_kais
      name: "케이시아",
      type: "원거리",
      summary: [
        "대륙을 노리는 어둠의 세력에 맞서 자신의 활을 들고 전투에 뛰어든 어웨이커",
        "그가 쏘아낸 화살은 적의 진열을 거침없이 꿰뚫어 나가며 어둠의 세력을 물리칠 것입니다."
      ]
    }
    */
  ]
};

// 어둠의 어웨이커
var darkTeam = {
  team: "어둠의 어웨이커",
  folder: 'darkTeam',
  character: [{
    num: 1,
    thumImg: "dk_clodia",
    name: "클로디아",
    type: "마법형",
    summary: [
      "고대 베롬 제국의 유일한 후손인 클로디아.",
      "자신의 나라를 멸망시킨 빛의세력에 대한 복수심으로 암흑신에게 선택받게 되었습니다.",
      "어둠의 드레스와 왕관을 쓰고 전쟁에 참여하여 빛의 세력에게 직접 죄의 심판을 합니다."
    ]
  }, {
    num: 2,
    thumImg: "dk_napor",
    name: "네이포",
    type: "방어형",
    summary: [
      "영웅의 별이 뜬 날 계시를 받고 태어난 운명의 오크 전사.",
      "그가 사랑했던 여자를 빛의 세력이 죽인 것처럼 꾸민 암흑신으로 인해 복수를 위해 어둠의 세력에 합류하게 됩니다.",
      "그는 어둠 세력을 지휘하는 지휘관이자 최고 사령관입니다."
    ]
  }, {
    num: 3,
    thumImg: "dk_gaia",
    name: "가이아",
    type: "공격형",
    summary: [
      "암흑신에게 속아 어둠의 세력에 합류하게 된 대지의 여신.",
      "암흑 어웨이커가 된 가이아는 여신이 가진 절대적인 힘과 암흑의 힘까지 더해져 더욱 강력한 힘을얻게 되었습니다."
    ]
  }, {
    num: 4,
    thumImg: "dk_demones",
    name: "디모네스",
    type: "방어형",
    summary: [
      "암흑 세력의 무녀이자 암흑신에게 총애받는 제단의 신녀 디모네스",
      "그녀에게는 미래를 예측할 수 있는 예지능력과 기억을 조작하는 능력이 있어 빛의 성기사 제논을 암흑 어웨이커로 만드는 데 일조하였습니다"
    ]
  }]
};




// ------------------------------------------------------------------------------------------
// header영역
var doc   = $(window);
var body  = $('body');
var wrap  = body.find('#wrap');
var header = $('#headBox');
var gnb = header.find('#gnb');
var gnbMenu = gnb.find('.menu');
var gnbList = gnbMenu.find('a');
var res = $('.reservation_wrap');
var footer = $('#footer');

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


  //$('.policy').find('.narr').load('./page/service_link.html');
// ==================================================================================
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
        storyArea.stop().animate({left:i * -100 + '%'},500);
    }else{
      storyArea.stop().animate({left:i * -100 + '%'},500)
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


















// ==================================================================================================================
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
      gameArea.stop().animate({left: j * -100 + '%'},500);
    } else {
      gameArea.stop().animate({ left: j * -100 + '%'},500)
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
    (j % 2 == 1) ? $('#gameCharacter').addClass('dark'): $('#gameCharacter').removeClass('dark');
    
  });


})(jQuery);