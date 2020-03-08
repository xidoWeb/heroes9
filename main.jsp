<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko-KR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3, user-scalable=yes" />
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">

  <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="./fonts/fontawesome/css/all.css">
  <link rel="stylesheet" href="./css/main.css">

  <link rel="shortcut icon" href="./favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="./favicon.png">
  <title>heroes9</title>
</head>

<body>
  <div id="wrap">
    <!-- .head_wrap ============================================================== -->
    <div class="head_wrap">
      <header id="headBox">
        <h1 class="hidden_wrap"><a href="main.html"><span>heroes nine 사전예약페이지</span></a></h1>
        <nav id="gnb">
          <h2 class="hidden">heroes nine navigation</h2>
          <div class="hidden_wrap handheld"><button type="button" class="menu_bar"><span>메뉴 목록보기</span><i></i></button>
          </div>
          <div class="menu_wrap">
            <ul class="menu hidden_wrap float_array">
              <!-- <li><a href="#headBox"><span>heroes nine</span>메인<span>페이지</span></a></li> -->
              <li class="impack_check"><a href="#reservation"><span>heroes nine game</span><i
                    class="icon_key"></i>사전등록</a></li>
              <li><a href="#event_01">이벤트</a></li>
              <li><a href="#gameStory">게임소개</a></li>
              <li><a href="#gameCharacter">캐릭터소개</a></li>
              <!-- <li><a href="#">미디어</a></li> -->
              <li><a href="https://cafe.naver.com/heroes9" target="_blank"><span>heroes nine</span>공식카페</a></li>
            </ul>
          </div>
        </nav>
      </header>

    </div>

    <!-- .intro_wrap ============================================================== -->
    <div class="intro_wrap wrapper">
      <section id="intro">

        <div class="intro_bg" tabindex="-1">
          <div class="bg_01">
            <!-- 배경 전체 이미지 -->
          </div>
          <div class="bg_02">
            <!-- 캐릭터1 -->
          </div>
          <div class="bg_03">
            <!-- 캐릭터2 -->
          </div>
          <div class="bg_04">
            <!-- 캐릭터4 -->
          </div>
          <div class="bg_05">
            <!-- 흑막 -->
          </div>
        </div>

        <div class="title">
          <h2><span class="hidden">heroes nine awakers</span></h2>
          <p>초격차 전략배틀 RPG</p>
        </div>

        <div class="media_area">
          <div class="play_btn">
            <button type="button">
              <span class="hidden">영상재생</span>
            </button>
          </div>

          <div class="media">
            <div class="close_btn hidden_wrap">
              <button type="button"><span>영상 닫기</span><i class="icon_close"></i></button>
            </div>
            <video id="introVideo" controls>
              <source src="./media/heroes9_int_01.mp4" type="video/mp4">
            </video>
          </div>
        </div>

        <div class="location_btn">
          <h3 class="hidden">사전등록 및 공식카페 바로가기</h3>
          <ul class="float_array hidden_wrap">
            <li>
              <a href="#reservation" class="impack_check all_mv_btn">
                사전 등록<span>바로가기</span>
              </a></li>
            <li>
              <a href="https://cafe.naver.com/heroes9" target="_blank">
                공식카페<span>바로가기</span>
              </a></li>
          </ul>
        </div>

        <div class="arrow_btn">
          <a href="#event_01"><span class="hidden">다음페이지 이동하기</span>
            <div class="one"></div>
            <div class="two"></div>
          </a>
        </div>
      </section>
    </div>

    <!-- .reservation_wrap ============================================================== -->
    <div class="reservation_wrap">
      <section id="reservation">
        <div class="reservation_area">
          <h2 class="hidden">사전등록 페이지</h2>

          <div class="view">
            <div class="content">
              <div class="insignia">
                <h3>사전 등록 모집</h3>
              </div>
              <p><em>사전등록 한정</em>,<br class="mobile" /> 특별한 혜택을 누리세요! <br />
                오직, 사전 등록자만 <br class="mobile" />
                <em>10만원 상당</em>의 아이템을 100% 증정! <br />
                <span>( 기간 : 정식 오픈 전까지 )</span>
              </p>
            </div>

            <!-- 혜택 확인하기 -->
            <div class="content">
              <h3 class="hidden ">혜택 확인하기</h3>
              <ul class="benefits float_array">
                <li>
                  <div class="img ruby300"></div>
                  <span>루비<br /><em>300개</em></span>
                </li>
                <li>
                  <div class="img eter100"></div>
                  <span>에테르<br /><em>100개</em></span>
                </li>
                <li>
                  <div class="img deck1"></div>
                  <span>엘리트<br class="mobile" />부대원<br />뽑기권 <em>1개</em></span>
                </li>
              </ul>
            </div>
<!-- ======================================================================================================== -->
            <!-- form -->
            <form action="./SendAction.jsp" method="post" id="registration">

              <!-- 스마트폰 번호 입력 -->
              <fieldset class="input_number_area">
                <legend class="hidden">개인정보입력 및 정보수집동의</legend>

                <h4 class="hidden">스마트폰 사용자 기기 및 번호 입력</h4>
                <p class="narr">스마트폰 정보 및 연락처를 입력해 주세요.</p>
                <ul class="float_array device_sel">
                  <li>
                    <input type="radio" class="hidden" name="os" id="andSel" value="android OS" />
                    <label for="andSel"><i class="icon_android"><!-- 체크상태 이미지 --></i>
                      <span class="icon_os"><!-- 안드로이드 아이콘 --></span>
                      <span class="os_text">Android OS</span></label>
                  </li>
                  <li>
                    <input type="radio" class="hidden" name="os" id="iosSel" value="IOS" />
                    <label for="iosSel"><i class="icon_apple"><!-- 체크상태 이미지 --></i>
                      <span class="icon_os"><!-- 애플 아이콘 --></span>
                      <span class="os_text">Apple OS</span></label>
                  </li>
                </ul>
                <p class="check_text hidden">사용하고 계신 스마트폰 <abbr title="operating system">OS</abbr>를 선택해 주세요.</p>

                <div class="phone_num">
                  <label for="user_phone_number" class="hidden">사용자 번호를 입력하세요</label>
                  <input type="tel" maxlength="11" name="user_phone_number" id="user_phone_number" value=""
                    placeholder="'-' 없이 휴대폰 번호 숫자" />
                </div>

                <div class="user_info clearfix">
                  <input type="checkbox" name="user_info_check" id="user_info_check" value="사용자 개인정보 이용 동의" />
                  <label for="user_info_check"><i class="icon_check"></i>개인정보 수집 및 이용 동의</label>
                  <button type="button" class="consent_btn"><span class="hidden">개인정보 수집 및 이용 동의 확인사항</span>자세히
                    보기</button>
                </div>

                <!-- 사전등록 신청버튼 -->
                <div class="submit">
                  <button type="submit" id="dataSend" onclick="sendAjax()">사전등록 신청하기</button>
                </div>
              </fieldset>

              <!-- // store 선택 -->
              <fieldset class="store_area">
                <legend class="hidden">store 선택</legend>

                <h4 class="hidden">디바이스 os</h4>
                <p>각 마켓별 사전등록도 진행되고 있습니다!</p>
                <ul class="store_choice hidden_wrap clearfix">
                  <li>
                    <input type="radio" name="store_choice" id="google" value="구글플레이 사전예약" />
                    <label for="google"><span>구글 플레이</span></label>
                  </li>
                  <li>
                    <input type="radio" name="store_choice" id="naver" value="네이버사전예약" />
                    <label for="naver"><span>애플 스토어</span></label>
                  </li>
                  
                  <li>
                    <input type="radio" name="store_choice" id="one" value="원스토어 사전예약" />
                    <label for="one"><span>원스토어</span></label>
                  </li>
                </ul>
              </fieldset>

              
              <!--  팝업영역 -->
              <fieldset>
                <legend class="hidden">modal</legend>
                  <div class="modal send_message" id="send">
                    <div class="modal_box">
                      <div class="logo"></div>
                      <!-- 전송버튼 -->
                      <div class="modal_set">
                        <p id="phone_num">0000-0000-000</p>
                        <p>번호로 사전 등록 하시겠습니까?</p>
                        <div class="btn">
                          <button type="reset">취소</button>
                          <button type="submit">확인</button>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="modal etc_message" id="good">
                  <div class="modal_box">
                    <div class="logo"></div>
                    <!-- 신청완료버튼 -->
                    <div class="modal_set">
                      <p>사전등록 신청이 완료되었습니다.</p>
                      <div class="btn">
                        <button type="submit">확인</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal good_message" id="etc">
                  <div class="modal_box">
                    <div class="logo"></div>
                    <!-- 추가옵션버튼 -->
                    <div class="modal_set">
                      <p>차후 공개 예정입니다. <br />잠시만 기다려주세요.</p>
                      <div class="btn">
                        <button type="button">확인</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal renumber_message" id="etc1">
                  <div class="modal_box">
                    <div class="logo"></div>
                    <!-- 추가옵션버튼 -->
                    <div class="modal_set">
                      <p>이미 가입된 번호입니다.</p>
                      <div class="btn">
                        <button type="button">확인</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal error_message" id="etc2">
                  <div class="modal_box">
                    <div class="logo"></div>
                    <!-- 추가옵션버튼 -->
                    <div class="modal_set">
                      <p>내용이 없거나 올바른 전화번호가 아닙니다.<br />
                        전화번호를 입력해 주세요.</p>
                      <div class="btn">
                        <button type="button">확인</button>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="modal error_message" id="etc3">
                <div class="modal_box">
                  <div class="logo"></div>
                  <!-- 추가옵션버튼 -->
                  <div class="modal_set">
                    <p>개인정보 수집 및 이용동의를<br />
                    체크해주세요.</p>
                    <div class="btn">
                      <button type="button">확인</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal good_message otherPopup">
                <div class="modal_box">
                  <div class="logo"></div>
                  <div class="modal_set">
                    <p>사용하고계신 스마트폰 <br />운영체제를 선택해주세요.</p>
                    <div class="btn"> <button type="button">확인</button> </div>
                  </div>
                </div>
              </div>
              </fieldset>
              <!-- // 팝업영역 -->
            </form>
<!-- ======================================================================================================== -->

            <!-- 주의사항 -->
            <div class="content check">
              <h3>주의사항</h3>
              <ol class="checklist">
                <li>모든 사전등록코드는 계정당 1회 사용 가능합니다.</li>
                <li>사전등록코드는 <span class="guard">정식 오픈</span> 후 SMS를 통해 발송됩니다.</li>
                <li>SMS 수신이 불가한 경우 아이템 및 경품을 받을 수 없습니다.</li>
                <li>휴대폰 번호 도용 시, 법적 책임은 본인에게 있습니다.</li>
                <li>허위로 신청한 경우 상품 지급을 거부할 수 있습니다.</li>
                <li>본 이벤트를 통해 수집된 개인정보는 경품지급 등 <span class="guard">넬비스게임즈</span>에서 <br class="mobile" />진행하는 모든 게임의 프로모션
                  용도로
                  6개월 간 사용됩니다.</li>
              </ol>
            </div>
          </div><!-- .view -->
        </div>

        <div class="close_btn hidden_wrap">
          <button type="button"><span>사전등록 닫기</span><i class="icon_close"></i></button>
        </div>

      </section>
    </div>

    <!-- .consent_wrap ============================================================== -->
    <div class="consent_wrap">
      <article id="consent" class="wrapper">
        <h2>개인정보 마케팅활용 <br class="mobile" /> 동의안내</h2>
        <div class="close_btn hidden_wrap">
          <button type="button">
            <i class="icon_close"></i>
            <span>개인정보 마케팅활용 동의내용 닫기</span>
          </button>
        </div>
        <div class="management">
          <h3 class="hidden">개인정보 관리 내용</h3>
          <dl class="float_array">
            <dt>개인정보 수집자</dt>
            <dd>넬비스게임즈</dd>
          </dl>
          <dl class="float_array">
            <dt>개인정보 수집항목</dt>
            <dd>휴대폰번호,참여일시,<br class="mobile" />참여레퍼러,참여이벤트</dd>
          </dl>
          <dl class="float_array">
            <dt>개인정보 이용목적</dt>
            <dd>
              <ul>
                <li><span class="corp_str">넬비스게임즈</span> 서비스 <br class="mobile" />게임 관련 정보 제공</li>
                <li>당첨자발표 및 경품/혜택 제공</li>
              </ul>
            </dd>
          </dl>
          <dl class="float_array">
            <dt>개인정보 이용기간</dt>
            <dd>별도 삭제 요청 시까지
              <span class="corp_str">넬비스게임즈</span> 모든 사전예약에 활용합니다.</dd>
          </dl>
        </div>

        <div class="policy">
          <h3>개인정보 취급방침</h3>
          <div class="narr">
            <article class="service">

              <h4><i class="fas fa-exclamation-circle"></i>개인정보취급방침</h4>

              <p>
                주식회사 넬비스게임즈(이하 “회사”)는 「정보통신망이용촉진 및 정보보호 등에 관한 법률」등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 이용자 권익
                보호에 최선을 다하고 있습니다.
              </p>

              <dl>
                <dt>
                  1. 수집하는 개인정보 항목
                </dt>
                <dd>
                  <dl>
                    <dt>가) 이벤트 프로모션에 참여하거나 선택 형 서비스를 이용하는 경우 별도의 이용자 동의 하에 아래와 같은 정보를 수집할 수 있습니다. 단, 불필요 시 이용자의 개인정보 일체를
                      수집하지 않습니다.</dt>
                    <dd>- 접속 로그 및 인증일자, 결제기록, 게임버전</dd>
                  </dl>
                </dd>
                <dd>
                  <dl>
                    <dt>나) 서비스 이용과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.</dt>
                    <dd>- 서비스 이용기록, 접속기록, 결제기록, 디바이스 모델명, OS정보 및 버전, 단말기 언어 및 국가 정보</dd>
                  </dl>
                </dd>
                <dd>
                  다) 만14세 미만 아동의 회원가입 등 개인정보 수집 필요 시 법정대리인의 동의 여부를 확인하기 위하여 법정 대리인의 성명, 연락처 등의 정보를 수집할 수 있습니다. <br />
                  <em>단, 법정대리인이 동의하지 않는 경우 해당 정보는 수집 및 저장되지 않습니다.</em></dd>
              </dl>


              <dl>
                <dt>2. 개인정보 수집 방법</dt>
                <dd>가) 회사는 게임구매 후 최초실행 시, 게임 이용 중, 네트워크 접속 시 개인정보를 수집합니다.</dd>
              </dl>

              <dl>
                <dt>3. 개인정보 수집 및 이용 목적</dt>
                <dd>회사는 수집한 개인정보를 다음의 목적을 위해 고지한 범위 내에서 사용 및 활용하며, 원칙적으로 이용자의 사전동의 없이는 동 범위를 초과하여 이용하거나 이용자의 개인정보를 외부에
                  공개하지 않습니다.(단 이용자가 사전에 공개에 대하여 동의한 경우와 법령의 규정에 의거하거나, 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우에는 외부에
                  공개합니다.)</dd>
                <dd>
                  <ul>
                    <li>가. 서비스제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 컨텐츠 제공, 특정 맞춤서비스제공, 정식구매인증, 구매 및 요금결제</li>
                    <li>나. 고객관리고객 서비스 이용에 따른 본인확인, 개인식별, 불량 고객의 부정이용방비와 비인가 사용 방지, 인증 의사 확인, 분쟁 조정을 위한 기록보존, 불만처리 등
                      민원처리, 고지사항 전달.</li>
                    <li>다. 신규서비스 개발 및 마케팅/광고의 활용, 신규 서비스 개발, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악, 고객의 서비스
                      이용에 대한 통계</li>
                  </ul>
                </dd>
              </dl>

              <dl>
                <dt>4. 개인정보 보유 및 이용 기간</dt>
                <dd>이용자의 동의 하에 수집된 개인정보는 원칙적으로 회원 자격이 유지되는 동안 보유 및 이용되며, 회원 탈퇴 시에는 계정 도용 등으로 인한 피해 복구와 피해자 보호 등을 위해
                  탈퇴한날로부터 7일간 보관 후 재생할 수없는 방법으로 완전히 삭제합니다.</dd>
                <dd>다만, 개별적으로 이용자의 동의를 받은 경우나 관계 법령에서 일정기간 정보의 보관을 규정하는 경우는 아래의 경우는 예외로 합니다</dd>
                <dd>법령에서 보존의무를 부과한 정보에 대해서도 해당 기간 경과 후 지체 없이 재생이 불가능한 방법(전자적 파일 형태의 경우 복구 및 재생이 되지 않도록 기술적인 방법)을 이용하여
                  안전하게 삭제합니다.</dd>
                <dd>
                  <ul>
                    <li>- 계약 또는 청약철회 등에 관한 기록: 5년 보관 (전자상거래 등에서 소비자 보호에 관한 법률)</li>
                    <li>- 대금결제 및 재화 등의 공급한 관한 기록: 5년 보관 (전자상거래 등에서 소비자 보호에 관한 법률)</li>
                    <li>- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관 (전자상거래 등에서 소비자 보호에 관한 법률)</li>
                    <li>- 서비스 방문(로그인) 기록: 3개월 보관 (통신비밀보호법)</li>
                  </ul>
                  <p>참고로 회사는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하여 관리하고 있습니다.</p>
                </dd>
              </dl>

              <dl>
                <dt>5. 개인정보의 공유 및 제공</dt>
                <dd>회사는 이용자의 개인정보를 수집 시 고지한 목적 내에서 사용하며, 원칙적으로 이용자의 동의 없이는 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                </dd>
                <dd>
                  <ul>
                    <li>- 이용자가 사전에 제공에 동의한 경우</li>
                    <li>- 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우</li>
                    <li>- 기타 법에 의해 요구된다고 선의로 판단되는 경우 (예를 들어, 관련법에 의하여 자료 제공이 강제되는 경우 또는 적법한 절차에 의한 법원, 수사기관, 기타 행정기관의
                      요청이 있는 경우)</li>
                  </ul>
                </dd>
              </dl>


              <dl>
                <dt>6. 이용자 및 법정대리인의 권리와 행사 방법</dt>
                <dd>가. 이용자 및 법정대리인은 언제든지 등록되어 있는 본인 혹은 당해 만14세 미만 아동의 개인정보를 조회, 수정, 삭제를 요청할 수 있습니다.</dd>
                <dd>나. 이용자 및 만14세 미만 아동의 개인정보의 조회, 수정, 삭제를 위해서는 (주)넬비스게임즈 고객센터(support@nelvisgames.com)로 연락하시면 지체 없이 조치가
                  가능합니다.</dd>
                <dd>다. 이용자 및 법정대리인의 요청에 의해 해지 또는 삭제된 개인정보는 개인정보의 보유 및 이용기간에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
                  있습니다.</dd>
              </dl>

              <dl>
                <dt>7. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</dt>
                <dd>1) 회사는 이용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie) 등 개인정보를 자동으로 수집하는 장치를 설치, 운용할 수 있습니다. 쿠키란 회사의 사이트를 운영하는데
                  이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 디바이스의 내장메모리에 저장됩니다. 쿠키의 사용 목적은 이용자 접속 빈도나 방문 시간 등을 분석을 통한
                  타겟 마케팅 및 개인 맞춤 서비스 제공에 있습니다.</dd>
                <dd>2) 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나 거부할 수 있습니다.</dd>
                <dd>3) 이용자는 온라인 맞춤형 광고에 대한 수신 여부를 아래와 같은 방법과 같이 설정할 수 있습니다.
                  <ul>
                    <li>- Android : 설정 > Google > 광고 > 광고 맞춤설정 선택 해제</li>
                    <li>- iOS : 설정 > 개인정보보호 > 광고 > 광고 추적 제한</li>
                  </ul>
                </dd>
              </dl>

              <dl>
                <dt>8. 개인정보 관리 책임자</dt>
                <dd>
                  <em>1) 회사는 이용자의 개인정보 관련 문의사항 및 불만 처리 등을 위하여 아래와 같이 개인정보 관리 책임자를 지정하고 있습니다.</em>
                  <ul>
                    <li>- 개인정보 관리 책임자: 안준영</li>
                    <li>- 소속 및 직위: 대표이사</li>
                    <li>- 이메일: support@nelvisgames.com</li>
                  </ul>
                </dd>
                <dd>
                  <em>2) 기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에 문의 가능합니다.</em>
                  <ul>
                    <li>- 개인정보침해신고센터 (http://privacy.kisa.or.kr / 국번없이 118)</li>
                    <li>- 대검찰청 사이버수사과 (http://spo.go.kr / 국번없이 1301)</li>
                    <li>- 경찰청 사이버안전과 (http://ctrc.go.kr / 국번없이 182)</li>
                  </ul>
                </dd>
              </dl>

              <dl>
                <dt>9. 개정 전 고지의무</dt>
                <dd>본 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 홈페이지 또는 커뮤니티를 통해 사전 공지를 할 것입니다. 다만, 수집하는 개인정보의 항목,
                  이용목적의 변경 등과 같이 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하며, 필요 시 이용자 동의를 다시 받을 수도 있습니다.</dd>
              </dl>

              <dl>
                <dt>10. 개인정보의 기술적/관리적 보호대책</dt>
                <dd>
                  (주)넬비스게임즈는 고객님들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고
                  있습니다.
                </dd>
                <dd>
                  <dl>
                    <dt>가. 비밀번호 암호화</dt>
                    <dd>고객님 아이디(ID)의 비밀번호는 암호화되어 저장 및 관리되고 있어 고객님만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 고객님에 의해서만 가능합니다.
                    </dd>
                  </dl>
                </dd>
                <dd>
                  <dl>
                    <dt>나. 해킹 등에 대비한 대책</dt>
                    <dd> (주)넬비스게임즈는 해킹이나 컴퓨터 바이러스 등에 의해 고객님의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를
                      수시로 백업하고 있고, 최신 백신프로그램을 이용하여 고객님들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를
                      안전하게 전송할 수 있도록 하고 있습니다. 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고
                      있습니다.</dd>
                  </dl>
                </dd>
                <dd>
                  <dl>
                    <dt>다. 취급 직원의 최소화 및 교육</dt>
                    <dd>(주)넬비스게임즈의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여
                      개인정보취급방침의 준수를 항상 강조하고 있습니다.</dd>
                  </dl>
                </dd>
              </dl>

              <p>본 개인정보취급방침은 2019년 6월 20일부터 시행합니다.</p>
              <p>위 내용을 충분히 인지하셨으며, 본 게임 사용을 위해 위의 내용에 동의하실 경우 확인 혹은 동의 후 게임을 이용해 주시기 바랍니다.</p>
              <p>만약 동의하지 않으실 경우 어플리케이션을 종료하여 주시기 바랍니다.</p>

            </article>
          </div>
        </div>

      </article>

    </div>

    <!-- .event_01_wrap ============================================================== -->
    <div class="event_01_wrap wrapper">
      <article class="event base_set" id="event_01">
        <div class="insignia">
          <h2>공식카페 <!-- <br class="mobile" /> -->가입이벤트</h2>
        </div>
        <dl class="event_title">
          <dt>공식 카페 가입하고 <strong>루비</strong> 받자!</dt>
          <dd>공식카페 가입자 수에 따라 루비를 드려요! <br />
            카페에서 정보도 얻고 루비도 얻을 일석이조의 기회! <br />
        </dl>
        <div class="cafe_link">
          <a href="https://cafe.naver.com/heroes9" target="_blank">공식카페 가입하러 가기</a>
        </div>
        <dl class="benefits float_array">
          <dt>혜택</dt>
          <dd class="clearfix benefit_01">
            <div class="img1"></div>
            <span>가입자수<br />1만명 달성시! <br /><em>루비 300개</em></span>
          </dd>
          <dd class="clearfix benefit_02">
            <div class="img2"></div>
            <span>2천명<br /> 상승시 마다<br /><em>루비 50개 추가!</em></span>
          </dd>
        </dl></article>
    </div>      

    <!-- .gameStory_wrap ============================================================== -->
    <div class="gameStory_wrap wrapper">
      <article id="gameStory" class="base_set">

        <div class="insignia">
          <h2>게임 스토리</h2>
        </div>
        <div class="game_content">
          <div class="slide_btn hidden_wrap">
            <button class="next_btn" type="button"><i></i><span>다음내용보기</span></button>
            <button class="prev_btn" type="button"><i></i><span>이전내용보기</span></button>
          </div>
          <div class="indicator">
            <ul class="hidden_wrap float_array story">
              <li class="action"><button type="button"><span>스토리내용1</span></button></li>
              <li><button type="button"><span>스토리내용2</span></button></li>
              <li><button type="button"><span>스토리내용3</span></button></li>
            </ul>
          </div>
          <div class="story_area">
            <ul class="float_array">
              <li class="action part_01">
                <dl>
                  <dt>빛과 어둠, 신들의 전쟁 그리고 소멸</dt>
                  <dd>과거 세상을 구하고 소울 스톤에 갇힌 빛의 어웨이커. <br />
                    빛의 어웨이커를 깨워 헬쉐이드의 침공을 막아야 한다!</dd>
                </dl>
              </li>
              <li class="part_02">
                <dl>
                  <dt>대규모 부대 전투</dt>
                  <dd>영웅! 그리고 부대원 8명과 함께 적들을 물리쳐라!<br />
                    대규모 부대 전투로 이루어지는 화려한 전장</dd>
                </dl>
              </li>
              <li class="part_03">
                <dl>
                  <dt>명예를 치열한 전투! 길드대전</dt>
                  <dd>동료들과 함께하는 영광의 무대!<br />
                    힘을 합쳐 명예로운 전장을 지배하라!</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>

      </article>
    </div>

    <!-- .character_wrap ============================================================== -->
    <div class="character_wrap wrapper">
      <article id="gameCharacter" class="base_set">
        <div class="insignia">
          <h2>게임 캐릭터 정보</h2>
        </div>

        <div class="background_box">
          <div class="light_team theme"></div>
          <!-- <div class="darken_team theme"></div> -->
        </div>

        <div class="game_content">
          <div class="slide_btn hidden_wrap">
            <button class="next_btn" type="button"><i></i><span>다음내용보기</span></button>
            <button class="prev_btn" type="button"><i></i><span>이전내용보기</span></button>
          </div>
          <div class="indicator">
            <ul class="hidden_wrap float_array character">
              <li class="action"><button type="button"><span>스토리내용1</span></button></li>
              <li><button type="button"><span>스토리내용2</span></button></li>
            </ul>
          </div>
          <div class="game_area">
            <h3 class="hidden">게임 캐릭터</h3>
            <ul class="float_array">
              <li class="action">
                <h4 class="team_type">빛의 어웨이크</h4>
                <ul class="character_icon light_team float_array team"></ul>
              </li>
              <li>
                <h4 class="team_type">어둠의 어웨이크</h4>
                <ul class="character_icon darken_team float_array team"></ul>
              </li>
            </ul>
            <div class="character_infomation">
              <div class="close_btn hidden_wrap">
                <button type="button"><span>사전등록 닫기</span><i class="icon_close"></i></button>
              </div>
              <div class="ch_info_area">
                <div class="img"></div>
                <dl class="ch_info">
                  <dt class="team_set">빛의 어웨이커</dt>
                  <dd class="ck_name">
                    <span class="ck_n">사일러스</span>
                    <span class="type">마법형</span>
                    <i class="option"></i>
                  </dd>
                  <dd class="narr_title">본래 어둠의 세력이었지만 배반당한 복수를 위해<br /> 빛의 세력에 가담한 어웨이커</dd>
                  <dd class="narr_par">강력한 마법으로 후방에서 어둠의 세력에게 복수하는<br /> 그는 파괴자로 불립니다.</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

      </article>
    </div>

    <!-- .footer_wrap ============================================================== -->
    <div class="footer_wrap wrapper">
      <footer id="footBox">
        <h2><span class="hidden">heroes nine</span></h2>
        <p>COPYRIGHTS &copy; 2020 Nelvis Games. Inc ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  </div>

  <script src="./js/jquery-3.4.1.min.js"></script>
  <script src="./js/jquery-ui.min.js"></script>

  <script src="./js/character.js"></script>
  <script src="./js/heroes9.js"></script>
  <script src="./js/characterPart.js"></script>
  <script src="./js/popup.js"></script>
</body>

</html>