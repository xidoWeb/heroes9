(function($) {

/* // 정보 등록 내용 =========================================================================== */
 var inputData = $('#user_phone_number');
 var dataSendBtn = $('#dataSend');
 var errorModal = $('#etc2');
 var sendBtn = $('#send');
 var good = $('#good');
 var check = $('#etc3');
 var checkInput = $('#user_info_check');
 
 var n1, ck;

//  var popupText = ' <div class="modal good_message otherPopup">  <div class="modal_box">    <div class="logo"></div>    <div class="modal_set"><p>사용하고계신 스마트폰 <br />운영체제를 선택해주세요.</p>      <div class="btn">        <button type="button">확인</button>      </div>    </div>  </div></div>';

// -------------------------------------------------------------------
// 링크다시걸기
 var linkActiongoogle = $('[for = "google"]');
 var linkActionnaver = $('[for = "naver"]');
 var linkActionone = $('[for = "one"]');

// 구글예약
// linkActiongoogle.on('click', function(e){
//   e.preventDefault();
//   window.location = '';
// });

// 네이버예약
linkActionnaver.on('click', function(e){
  e.preventDefault();
  window.location = 'https://cafe.naver.com/heroes9';
});

// 원예약
linkActionone.on('click', function(e){
  e.preventDefault();
  window.location = 'https://m.onestore.co.kr/mobilepoc/onestore/preReserveGameInfoDetail.omp?eventId=eimdycbogyadrcb1gw516atsgb1dkcj1gb1uccjzgtugkatugiudycjogr4skpbzcw5gnc33';
});

// -------------------------------------------------------------------

 // 정보승인 체크상태확인
 checkInput.on('click', function (e) {
   ck = checkInput.is(':checked');
 });



 // input data 값확인하고 숫자값이 아닌경우 입력되지 않게 만들기
 inputData.on('propertychange change keyup paste input focus', function (e) {
   e.preventDefault();

   var os = $('input[name="os"]');
   var osTrue = false;
   for (var l = 0; l < os.length; l++) {
     osTrue = os.is(':checked');
     if (osTrue == true) { break; }
   }
   if (osTrue == false) {
     $('.check_text').removeClass('hidden');
     $('.device_sel').attr('tabIndex','0');
     $('.device_sel').focus();

   }else{
     $('.check_text').addClass('hidden');
   }

   $(this).val($(this).val().replace(/[^0-9]/g, ""));
 });


 // 전송버튼 클릭시 기본 전송되지 않고, 내용 파악해서 에러유무 확인
 dataSendBtn.on('click focus', function (e) {
   e.preventDefault();

   checkInput.attr('checked');

   n1 = inputData.val();

  //  var os = $('input[name="os"]');
  //  var osTrue = false;
  // for (var l = 0; l < os.length; l++) {
  //   osTrue = os.is(':checked');
  //   if(osTrue == true){break;}
  // }

   var n2 = isNaN(inputData.val());
   if (n1 == '' || n2 === true) {
     errorModal.addClass('view');
   } else if (n1[0] !== '0' || n1[1] !== '1') {
     errorModal.addClass('view');
   } else if (n1.length < 10) {
     errorModal.addClass('view');
   } else if (!ck) {
     check.addClass('view');
   }else {
     // 에러가 없는 경우 다시 번호확인 후 전송하는 팝업띄우기
     sendBtn.find('#phone_num').text(n1);
     sendBtn.addClass('view');
   }

 });
 // 값 내용 문제있을경우
 errorModal.find('button').on('click', function (e) {
   e.preventDefault();
   errorModal.removeClass('view');
   inputData.val('');
   inputData.focus();
 });

 // 값내용이 문제 없을경우 번호 재확인 후 취소버튼 클릭
 sendBtn.find('button[type="reset"]').on('click', function (e) {
   e.preventDefault();
   sendBtn.removeClass('view');
 });

 check.find('button').on('click', function (e) {
   e.preventDefault();
   check.removeClass('view');
   checkInput.focus();
 });

 // 값 내용이 문제 없을경우 전송하는 소스코드
 var form = $('#registration');
 var formLink = form.attr('action');


 good.find('button').on('click', function (e) {
   good.removeClass('view');
   $('.reservation_wrap').slideUp();
 });

 // os선택 -------------------------------------------------
 $('.otherPopup').find('button').on('click', function (e) {
  e.preventDefault();
  $('.otherPopup').remove();
  $('#andSel').focus();
 });

 // 구글 현재 대기상태 --------------------------------------
 var googleModal = $('#etc');

 $('#google').on('click', function (e) {
   e.preventDefault();
   googleModal.addClass('view');
 });
 googleModal.find('button').on('click', function (e) {
   e.preventDefault();
   googleModal.removeClass('view');
 });




 // data send 처리 -------------------------------------------------

 function sendAjax(sendData) {
   $.ajax({
     url: 'formLink',
     type: 'post',
     data: n1,
     dataType: 'text',
   }).done(function (data) {
     good.addClass('view');
     console.log($('#user_phone_number').val()); 
     console.log(data)
   });
 }
 // -------------------------------------------------

 
})(jQuery);
