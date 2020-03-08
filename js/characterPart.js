(function ($) {
  /* // 캐릭터 구현 =========================================================================== */
  // character 불러오기(별도 js)

  var game = $('#gameCharacter');
  var gameBtn = game.find('.slide_btn').children('button');
  var gameChar = $('#gameCharacter');
  var theme = gameChar.find('.theme');

  // 내용 구성페이지목록가져오기(7명 및의 어웨이크)
  var gameCharacterList = lightTeam.character;
  // console.log(gameCharacterList);
  var characterInfo = game.find('.character_infomation');

  // 캐릭터 만큼 list상자 만들기 &
  // 인디케이터 기존샘플내용 삭제 및 페이지구성목록에 맞게 인디케이터 갯수배치하기
var gameIndi = game.find('.indicator')
var gameIndiUl = gameIndi.children('ul');
gameIndiUl.empty();
var indiText = '<li><button type="button"><span class="hidden"></span></button></li>';
var characterContent = '<li><div class="ch_info_area"><div class="img"></div><dl class="ch_info"><dt class="team_set">빛의 어웨이커</dt><dd class="ck_name"><span class="ck_n">사일러스</span><span class="type">마법형</span><i class="option"></i> </dd><dd class="narr_title">본래 어둠의 세력이었지만 배반당한 복수를 위해<br /> 빛의 세력에 가담한 어웨이커</dd><dd class="narr_par">강력한 마법으로 후방에서 어둠의 세력에게 복수하는<br /> 그는 파괴자로 불립니다.</dd> </dl> </div> </li>';

var i=0;
for(; i<gameCharacterList.length; i++){
  gameIndiUl.append(indiText);
  gameIndiUl.find('li').eq(i).find('span').text(gameCharacterList[i].name);

  characterInfo.append(characterContent);
}

var gameIndiList = gameIndiUl.children('li'); 
// 인디케이터 디자인하기
var size1 = '1.5rem';
var winW = $(window).outerWidth();

// gameIndi.append('<p><span></span> / ' + gameCharacterList.length + '</p>');

// var pSpan = gameIndi.find('p').children('span');

gameIndiList.eq(0).addClass('action');
var liAction = function(j){
  gameIndiList.removeClass('action');
  gameIndiList.eq(j).addClass('action');
  gameIndiList.children('button').css({backgroundColor:'#fff'});
  gameIndiList.eq(j).children('button').css({backgroundColor:'#D4C098'});
  // pSpan.text(j+1);

  characterInfo.find('li').eq(j).fadeIn();
  characterInfo.find('li').eq(j).siblings().fadeOut();
}


// character 레이아웃 디자인하기

//characterInfo
var t = 0;
var _ct1, _ct2;
var charImg = './img/character/';

for (; t < gameCharacterList.length; t++) {
  _ct1 = gameCharacterList[t];
  _ct2 = characterInfo.find('li').eq(t);
  _ct2.find('.img').css({backgroundImage: 'url(' + charImg + 'big/lightTeam/' + _ct1.thumImg + '.png)' });
  _ct2.find('.team_set').text(lightTeam.team);
  _ct2.find('.ck_n').text(_ct1.name);
  _ct2.find('.type').text(_ct1.type);
  _ct2.find('.narr_title').text(_ct1.summary);
  _ct2.find('.narr_par').text(_ct1.summary);
}

// 인디케이터 클릭

characterInfo.find('li').hide();
characterInfo.find('li').eq(0).show();

var n = 0;
liAction(n);
gameIndi.find('button').on('click foucus hover', function (e) {
  e.preventDefault();
  n = $(this).parent('li').index();
  liAction(n);
});



// 좌우버튼 클릭
gameBtn.on('click', function(e){
  e.preventDefault();
  var next = $(this).hasClass('next_btn');
  if(next){
    n++;
    if (n >= gameCharacterList.length){ n=0 }
  }else{
    n--;
    if(n < 0){ n = gameCharacterList.length-1 }
  }
liAction(n);

});


/*
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
      gameArea.stop().animate({
        left: j * -100 + '%'
      }, 50, function () {
        j = gameBaseBanLen - 1;
        gameArea.css({
          left: j * -100 + '%'
        });
      });
    } else if (j >= gameBaseBanLen) {
      gameArea.css({
        left: 100 + '%'
      });
      j = 0;
      gameArea.stop().animate({
        left: j * -100 + '%'
      }, 500);
    } else {
      gameArea.stop().animate({
        left: j * -100 + '%'
      }, 500);
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
   
    (j % 2 == 1) ? $('#gameCharacter').addClass('dark'): $('#gameCharacter').removeClass('dark');

  });

  */
})(jQuery);