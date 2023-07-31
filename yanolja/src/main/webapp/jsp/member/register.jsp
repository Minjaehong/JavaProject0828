<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<title>회원가입</title>

<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="yanoljaFunction.js"></script>
<link rel="stylesheet" href="/css/reset.css" type="text/css">
<c:import url="/header"/>

<div class="register">
		<div class="inner">
			<h2>회원가입</h2>
			<hr>
			<div class="register_agree">
				<h2>이용약관 동의</h2>
				<h3><input type="checkbox" id="registerAgreeBtn" onclick="registerAgree()"><label for="registerAgreeBtn">&nbsp;&nbsp;전체 동의 <span>(선택 포함)</span></label></h3>
				<ul class="agreeCheckbox">
					<li>
						<input type="checkbox" id="agreeBtn1" onclick="registerAgree()">
						<label for="agreeBtn1">&nbsp;&nbsp;&nbsp;&nbsp;만 14세 이상 이용, 서비스 이용약관 동의<span>(필수)</span></label>
					</li>
					<li>
						<input type="checkbox" id="agreeBtn2" onclick="registerAgree()">
						<label for="agreeBtn2">&nbsp;&nbsp;&nbsp;&nbsp;개인정보 수집 및 이용 동의<span>(필수)</span></label>
					</li>
					<li>
						<input type="checkbox" id="agreeBtn3" onclick="registerAgree()">
						<label for="agreeBtn3">&nbsp;&nbsp;&nbsp;&nbsp;숙소 특가, 쿠폰 등 마케팅 수신 동의<span>(선택)</span></label>
					</li>
					<li>
						<input type="checkbox" id="agreeBtn4" onclick="registerAgree()">
						<label for="agreeBtn4">&nbsp;&nbsp;&nbsp;&nbsp;위치 정보 이용 약관 동의<span>(선택)</span></label>
					</li>
					<li>
						<input type="checkbox" id="agreeBtn5" onclick="registerAgree()">
						<label for="agreeBtn5">&nbsp;&nbsp;&nbsp;&nbsp;장기 미접속 시에도 계정 유지<span>(선택)</span></label>
					</li>
				</ul>
				
				
				
				<hr>
			</div>
			
			<div class="register_type">
				<button type="button" class="registerTypeBtn1" onclick="registerIndividualBtn_show()">개인용</button>
				<button type="button" class="registerTypeBtn2" onclick="registerBusinessBtn_show()">사업자용</button>
			</div>
			
	
			<div class="register_content">

				<!-- 개인용 -->
				<div class="register_individual" id="individualState">
					<ul>
						<li>아이디</li>
						<li><input type="text" style="width:500px;" value="" placeholder="아이디를 입력하세요"></li>
						<li><button type="button" class="registerBtn" onclick="code()">중복 확인</button></li>
					</ul>
					<ul>
						<li>비밀번호(*)</li>
						<li><input type="password" style="width:500px;" placeholder="비밀번호를 입력하세요(영문+숫자+특수문자 8~20자리)"></li>
					</ul>
					<ul>
						<li></li>
						<li><input type="password" style="width:500px;" placeholder="비밀번호 확인"></li>
						<li><label id="label">일치</label></li>  <!-- 일치/불일치 출력 -->
					</ul>
					<ul>
						<li>이메일</li>
						<li><input type="text" style="width:500px;" value="" placeholder="이메일을 입력하세요"></li>
						<li><input type="button" class="registerBtn" id="emailBtn" onclick="sendEmail()" value="인증번호 전송"></li>
					</ul>
					<ul>
						<li></li>
						<li><input type="text" style="width:500px;" id="auth" placeholder="인증번호 입력"></li>
					</ul>
					<ul>
						<li>생년월일</li>
						<li><select id="select_year" onchange="select_year()" placeholder="생년월일"></select>&nbsp;년&nbsp;&nbsp;&nbsp;</li>
						<li><select id="select_month" onchange="select_month()"></select>&nbsp;월&nbsp;&nbsp;&nbsp;</li>
						<li><select id="select_day" onchange="select_day()"></select>&nbsp;일&nbsp;&nbsp;&nbsp;</li>
						<li>나중에 콤보박스 만들 예정</li>
					</ul>
					<ul>
						<li>연락처</li>
						<li><input type="text" style="width:500px;" placeholder="연락처를 입력하세요(010-1234-1234)"></li>
					</ul>
				</div>
				
				<!-- 사업자용 -->
				<div class="register_business" id="businessState" style="display:none;">
					<ul>
						<li>아이디</li>
						<li><input type="text" style="width:500px;" value="" placeholder="아이디를 입력하세요"></li>
						<li><button type="button" class="registerBtn" onclick="code()">중복 확인</button></li>
					</ul>
					<ul>
						<li>비밀번호(*)</li>
						<li><input type="password" style="width:500px;" placeholder="비밀번호를 입력하세요(영문+숫자+특수문자 8~20자리)"></li>
					</ul>
					<ul>
						<li></li>
						<li><input type="password" style="width:500px;" placeholder="비밀번호 확인"></li>
						<li><label id="label">일치</label></li>  <!-- 일치/불일치 출력 -->
					</ul>
					<ul>
						<li>이메일</li>
						<li><input type="text" style="width:500px;" value="" placeholder="이메일을 입력하세요"></li>
						<li><input type="button" class="registerBtn" id="emailBtn" onclick="sendEmail()" value="인증번호 전송"></li>
					</ul>
					<ul>
						<li></li>
						<li><input type="text" style="width:500px;" id="auth" placeholder="인증번호 입력"></li>
					</ul>
					<ul>
						<li>생년월일</li>
						<li><select id="select_year" onchange="select_year()" placeholder="생년월일"></select>&nbsp;년&nbsp;&nbsp;&nbsp;</li>
						<li><select id="select_month" onchange="select_month()"></select>&nbsp;월&nbsp;&nbsp;&nbsp;</li>
						<li><select id="select_day" onchange="select_day()"></select>&nbsp;일&nbsp;&nbsp;&nbsp;</li>
						<li>나중에 콤보박스 만들 예정</li>
					</ul>
					<ul>
						<li>연락처</li>
						<li><input type="text" style="width:500px;" placeholder="연락처를 입력하세요(010-1234-1234)"></li>
					</ul>
					<ul>
						<li>사업자번호</li>
						<li><input type="text" style="width:500px;" placeholder="사업자번호를 입력하세요"></li>
					</ul>
				</div>

			</div>

			<button type="button" class="Btn" onclick="memberInfo_save()">회원 가입</button>

		</div>

	</div>

<c:import url="/footer"/>

