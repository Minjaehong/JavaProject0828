// adminRegister.jsp
function adminAgreeSelectAll(selectAll) {
	const checkboxes = document.getElementsByName('agreement');

	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
}

function checkSelectAll() {
	// 전체 체크박스
	const checkboxes = document.querySelectorAll('input[name="agreement"]');
	// 선택된 체크박스
	const checked = document.querySelectorAll('input[name="agreement"]:checked');
	// select all 체크박스
	const selectAll = document.querySelector('input[name="selectAll"]');

	if (checkboxes.length === checked.length) {
		selectAll.checked = true;
	} else {
		selectAll.checked = false;
	}
}

function adminPwRegCheck() {

	let adminPw = document.getElementById('adminPw');
	let adminPwReg = document.getElementById('adminPwReg');
	//let pwRegNum = /^(?=.*[0-9])$/;
	let pwRegNum = /^(?=.*\d)$/;
	let pwRegCapital = /^(?=.*[a-zA-Z])$/;
	let pwRegSpecial = /^(?=.*[!@#$%^*+=-])$/;
	let pwRegRange = /^.{6,12}$/;
	let adminPwRegCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;
	if (adminPw.value == "") {
		adminPwReg.innerHTML = ''
	}

	if (!adminPwRegCheck.test(adminPw.value)) {
		adminPwReg.style = 'color:red;';
		adminPwReg.innerHTML = '* 숫자+영문자+특수문자 조합 6~ 12자리만 가능'
	} else {
		adminPwReg.innerHTML = '* 사용가능한 비밀번호입니다.'
		adminPwReg.style = 'color:#666;';
	}

}

function adminPwCheck() {

	let adminPw = document.getElementById('adminPw');
	let adminPwConfirm = document.getElementById('adminPwConfirm');
	let adminPwReg = document.getElementById('adminPwReg');
	let adminPwRegCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;
	let adminPwCheck = document.getElementById('adminPwCheck');
	if (!adminPwRegCheck.test(adminPw.value)) {
		adminPwReg.innerHTML = '* 영문+숫자+특수문자만을 사용해주세요.'
	}
	if (adminPw.value == null) {
		adminPwCheck.innerHTML = ''
	} else if (adminPw.value == adminPwConfirm.value) {
		adminPwCheck.innerHTML = '* 일치합니다.'
		adminPwCheck.style = 'color:#666;';
	} else {
		adminPwCheck.innerHTML = '* 불일치,비밀번호를 확인해주세요.'
		adminPwCheck.style = 'color:red;';
	}
}

function businessNumberCheck() {
	let businessNumber = document.getElementById('businessNumber');
	let businessNumberCheck = document.getElementById('businessNumberCheck');
	let businessNumberReg = /^(?=.*[0-9]).{10,}$/;

	if (!businessNumberReg.test(businessNumber.value)) {
		businessNumberCheck.style = 'color:red;';
		businessNumberCheck.innerHTML = '* - 없이 숫자로만 10자리입니다.'
	} else {
		businessNumberCheck.innerHTML = '* 사용가능한 사업자번호입니다.'
		businessNumberCheck.style = 'color:#666;';
	}

}

function dupCheck() {
	xhr = new XMLHttpRequest();
	xhr.open('post', 'dupCheck')
	xhr.send(document.getElementById('adminId').value)
	xhr.onreadystatechange = dupCheckProc
}
function dupCheckProc() {
	document.getElementById('adminIdCheck').innerHTML = xhr.responseText;
}

function adminExecDaumPostcode() {
	new daum.Postcode({
		oncomplete: function(data) {
			if (data.userSelectedType === 'R') {
				document.getElementById('adminAddress').value = data.roadAddress;
			} else {
				document.getElementById('adminAddress').value = data.jibunAddress;
			}
			document.getElementById('postcode').value = data.zonecode;
		}
	}).open();
}

function adminAllCheck() {
	let adminAgreeBtn1 = document.getElementById('adminAgreeBtn1');
	let adminAgreeBtn2 = document.getElementById('adminAgreeBtn2');
	let adminId = document.getElementById('adminId');
	adminIdCheck = document.getElementById('adminIdCheck');
	let adminPw = document.getElementById('adminPw');
	adminPwCheck = document.getElementById('adminPwCheck')
	adminPwReg = document.getElementById('adminPwReg')
	let adminName = document.getElementById('adminName');
	let adminMobile = document.getElementById('adminMobile');
	let adminLocation = document.getElementById('adminLocation');
	let region = document.getElementById('region');
	let businessNumber = document.getElementById('businessNumber');
	let businessNumberCheck = document.getElementById('businessNumberCheck');

	if (!adminAgreeBtn1.checked || !adminAgreeBtn2.checked) {
		alert('필수 이용약관을 동의하지 않았습니다.');
	} else if (adminId.value == "") {
		alert('아이디를 입력하세요.');
	} else if (adminIdCheck.textContent !== '사용 가능한 아이디입니다.') {
		alert('아이디 중복확인은 필수 항목입니다.');
	} else if (adminPw.value == "") {
		alert('비밀번호를 입력하세요.');
	} else if (adminPwReg.textContent !== '* 사용가능한 비밀번호입니다.') {
		alert('비밀번호는 영문+숫자+특수문자만을 사용해주세요.');
	} else if (adminPwCheck.textContent !== '* 일치합니다.') {
		alert('비밀번호 확인을 다시 시도하세요.');
	} else if (adminName.value == "") {
		alert('이름을 입력하세요.');
	} else if (adminMobile.value == "") {
		alert('연락처를 입력하세요.');
	} else if (adminMobile.value == "") {
		alert('연락처를 입력하세요.');
	} else if (region.value == "") {
		alert('지역을 선택하세요.');
	} else if (businessNumber.value == "") {
		alert('사업자번호를 입력하세요.');
	} else if (businessNumberCheck.textContent !== '* 사용가능한 사업자번호입니다.') {
		alert('사업자번호는 숫자 10자리로만 입력하세요.');
	} else {
		var f = document.getElementById('f');
		f.submit();
	}
}

// reservationManager.jsp
// 숙소 클릭 시 해당숙소 예약 확인 함수

function adminUpdateAllCheck() {
	let adminPw = document.getElementById('adminPw');
	let adminPwCurrent = document.getElementById('adminPwCurrent');
	adminPwCheck = document.getElementById('adminPwCheck')
	adminPwReg = document.getElementById('adminPwReg')
	let adminName = document.getElementById('adminName');
	let adminMobile = document.getElementById('adminMobile');
	let adminLocation = document.getElementById('adminLocation');
	let region = document.getElementById('region');
	let businessNumber = document.getElementById('businessNumber');
	let businessNumberCheck = document.getElementById('businessNumberCheck');

	if (adminPw.value == "") {
		alert('비밀번호를 입력하세요.');
	} else if (adminPwReg.textContent !== '* 사용가능한 비밀번호입니다.') {
		alert('수정할 비밀번호는 영문+숫자+특수문자만을 사용해주세요.');
	} else if (adminPwCheck.textContent !== '* 일치합니다.') {
		alert('수정할 비밀번호 확인을 다시 시도하세요.');
	} else if (adminName.value == "") {
		alert('이름을 입력하세요.');
	} else if (adminPwCurrent.value == "") {
		alert('현재 비밀번호를 입력하세요.');
	} else if (adminMobile.value == "") {
		alert('연락처를 입력하세요.');
	} else if (region.value == "") {
		alert('지역을 선택하세요.');
	} else if (businessNumber.value == "") {
		alert('사업자번호를 입력하세요.');
	} else if (businessNumberCheck.textContent !== '* 사용가능한 사업자번호입니다.') {
		alert('사업자번호는 숫자 10자리로만 입력하세요.');
	} else {
		var f = document.getElementById('f');
		alert('회원 정보가 수정되었습니다.');
		f.submit();
	}
}


function reservationCheck() {
	xhr = new XMLHttpRequest();
	xhr.open('post', 'reservationCheck')
	xhr.send(document.querySelector('input[type=radio][name="reservatinRadio"]:checked').value)
	xhr.onreadystatechange = reservationCheckProc
}

function reservationCheckProc() {
	var reservationData = JSON.parse(xhr.responseText)
	console.log('숙소 예약 클릭함')
	if (xhr.readyState === 4 && xhr.status === 200) {

		var result = "";

		if (reservationData == '') {

			document.getElementById('selecetdPlace').innerHTML = '선택한 숙소 : ' + document.querySelector('input[type=radio][name="reservatinRadio"]:checked').value + ' <h3>현재 예약이 없습니다.</h3>';

			document.getElementById('reservationTbody').innerHTML = '';
		} else {
			for (i = 0; i < reservationData.length; i++) {
				result += "<tr>";
				result += "<td>" + i + "</td>";
				result += "<td>" + reservationData[i].roomName + "</td>";

				peopleSum = Number(reservationData[i].people) + Number(reservationData[i].children) + Number(reservationData[i].peoplePlus);

				result += "<td>" + peopleSum + "</td>";
				result += "<td>" + reservationData[i].userName + "</td>";
				result += "<td>" + reservationData[i].userMobile + "</td>";
				result += "<td id=\"" + 'reseNum' + i + "\">" + reservationData[i].reseNum + "</td>";
				result += "<td>" + reservationData[i].checkIn + "</td>"
				var checkInName = 'checkIn' + i;
				var checkOutName = 'checkOut' + i;

				if (reservationData[i].clickCheckIn == '' || reservationData[i].clickCheckIn == null) {
					result += "<td><input type=\"button\" class=\"checkInOutBtn\" value=\"체크인\" onclick=\"testCheckIn(this)\" id=\"" + checkInName + "\" ></button>"
					result += "<label id=\"" + checkInName + "Label" + "\"></label></td>"
					result += "<td>" + reservationData[i].checkOut + "</td>";
				} else {
					result += "<td>" + reservationData[i].clickCheckIn + "</td>";
					result += "<td>" + reservationData[i].checkOut + "</td>";
				}
				if (reservationData[i].clickCheckOut == '' || reservationData[i].clickCheckOut == null) {
					if (reservationData[i].clickCheckIn == '' || reservationData[i].clickCheckIn == null) {
						result += "<td><input type=\"button\" class=\"checkInOutBtn\" disabled=\"disabled\" value=\"체크아웃\" onclick=\"testCheckOut(this)\" id=\"" + checkOutName + "\" ></button>"
						result += "<label id=\"" + checkOutName + "Label" + "\"></label></td>"
					} else {
						result += "<td><input type=\"button\" class=\"checkInOutBtn\" value=\"체크아웃\" onclick=\"testCheckOut(this)\" id=\"" + checkOutName + "\" ></button>"
						result += "<label id=\"" + checkOutName + "Label" + "\"></label></td>"
					}

				} else {
					result += "<td>" + reservationData[i].clickCheckOut + "</td>";
				}

				if (reservationData[i].clickCheckIn == '' || reservationData[i].clickCheckIn == null) {
					result += "<td id=\"" + checkInName + "Status" + "\">예약완료</td>";
				} else if (reservationData[i].clickCheckOut == '' || reservationData[i].clickCheckOut == null) {
					result += "<td id=\"" + checkInName + "Status" + "\">입실완료</td>";
				} else {
					result += "<td id=\"" + checkInName + "Status" + "\">퇴실완료</td>";
				}

				result += "</tr>";
			}

			document.getElementById('selecetdPlace').innerHTML = '선택한 숙소 : ' + reservationData[0].hostName;
			document.getElementById('reservationTbody').innerHTML = result;
		}
	}
}


// 리뷰 확인

function reviewCheck() {
	xhr = new XMLHttpRequest();
	xhr.open('post', 'reviewCheck')
	xhr.send(document.querySelector('input[type=radio][name="reviewRadio"]:checked').value)
	xhr.onreadystatechange = reviewCheckProc
	document.getElementById('recentSort').style = "color:#13C3FF;"
	document.getElementById('starsSort').style = "color:#000;"
}

function reviewCheckStars(){
	xhr = new XMLHttpRequest();
	xhr.open('post', 'reviewCheckStars')
	xhr.send(document.querySelector('input[type=radio][name="reviewRadio"]:checked').value)
	xhr.onreadystatechange = reviewCheckProc
	document.getElementById('starsSort').style = "color:#13C3FF;"
	document.getElementById('recentSort').style = "color:#000;"
}

function reviewCheckProc() {
	var reviewData = JSON.parse(xhr.responseText)
	console.log('숙소 리뷰 클릭함')
	if (xhr.readyState === 4 && xhr.status === 200) {

		var result = "";

		if (reviewData == '') {
			document.getElementById('selecetedRental').innerHTML = '선택한 숙소 : ' + document.querySelector('input[type=radio][name="reviewRadio"]:checked').value + ' <h3>현재 후기가 없습니다.</h3>';
			document.getElementById('ReviewList').innerHTML = '';
		} else {
			for (i = 0; i < reviewData.length; i++) {
				var stars = "☆☆☆☆☆";
				if(reviewData[i].reviewPoint == 5){
					stars = "★★★★★";
				}else if(reviewData[i].reviewPoint == 4){
					stars = "★★★★☆";
				}else if(reviewData[i].reviewPoint == 3){
					stars = "★★★☆☆";
				}else if(reviewData[i].reviewPoint == 2){
					stars = "★★☆☆☆";
				}else{
					stars = "★☆☆☆☆";
				}
				console.log("리뷰벌점 : " + reviewData[i].reviewPoint)
				
				result += "<li><div class=\"reviewerInfo\">"
				result += "<p><span>" +stars + "</span>"+ reviewData[i].reviewPoint +".0 </p>"
				result += "<h4>" + reviewData[i].userId + " | " + reviewData[i].writeDate + "</h4></div>"
				result += "<p><strong>객실명</strong><span>" + reviewData[i].roomName + "</span></p>"
				result += "<p>" + reviewData[i].content + "</p>"
			}


			document.getElementById('selecetedRental').innerHTML = '선택한 숙소 : ' + reviewData[0].hostName;
			document.getElementById('ReviewList').innerHTML = result;
			document.getElementById('reviewTitle').innerHTML = '객실 후기' + '(' + reviewData.length + ')'


		}




	}
}




// 회원 정보 펼치기/접기 함수
function openInformation() {
	console.log('클릭됨')
	var status = document.getElementById('informationBusiness')
	console.log(status.style)
	if (document.getElementById('informationBusiness').style.display == 'block' || document.getElementById('informationBusiness').style.display == '') {
		document.getElementById('informationBusiness').style = 'display:none';
		document.getElementById('toggle').textContent = '+';
		console.log('펼쳐져있었음')
	} else {
		document.getElementById('informationBusiness').style = 'display:block';
		document.getElementById('toggle').textContent = '-'; adminAgreeSelectAll
		console.log('접혀있었음')
	}
}

// 체크인,체크아웃 시간 확인 함수
function testCheckIn(checkInButton) {
	console.log('체크인 버튼 id : ' + checkInButton.id)
	let today = new Date();

	let year = today.getFullYear(); // 년도
	let month = today.getMonth() + 1;  // 월
	let date = today.getDate();  // 날짜
	let day = today.getDay();  // 요일
	let hours = today.getHours(); // 시
	let minutes = today.getMinutes();  // 분

	console.log('현재시간 : ' + year + month + date + day + hours + minutes)
	console.log('체크인 버튼 값 : ' + checkInButton.value)

	document.getElementById(checkInButton.id).style = 'display:none';
	document.getElementById(checkInButton.id + 'Label').innerHTML = '' + year + month + date + day + hours + minutes;
	document.getElementById(checkInButton.id + 'Status').innerHTML = '입실완료';


	let checkOutName = '';
	checkOutName = checkInButton.id

	console.log('체크아웃 버튼 값 : ' + 'checkOut' + checkOutName.substring(7))
	console.log('예약번호 id : ' + 'reseNum' + checkOutName.substring(7))
	console.log('예약번호  값 : ' + document.getElementById('reseNum' + checkOutName.substring(7)).innerHTML)
	document.getElementById('checkOut' + checkOutName.substring(7)).disabled = false

	var clickCheckInValue = '' + year + month + date + day + hours + minutes
	var reseNumValue = document.getElementById('reseNum' + checkOutName.substring(7)).innerHTML

	var reqData = {
		clickCheckIn: clickCheckInValue,
		reseNum: reseNumValue
	}

	reqData = JSON.stringify(reqData)
	xhr = new XMLHttpRequest();
	xhr.open('post', 'testCheckIn')
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(reqData);

}

function testCheckOut(checkOutButton) {
	console.log('체크아웃 버튼 id : ' + checkOutButton.id)
	let today = new Date();
	let year = today.getFullYear(); // 년도
	let month = today.getMonth() + 1;  // 월
	let date = today.getDate();  // 날짜
	let day = today.getDay();  // 요일
	let hours = today.getHours(); // 시
	let minutes = today.getMinutes();  // 분

	let checkOutName = '';
	checkOutName = checkOutButton.id
	var index = checkOutName.substring(8)
	console.log('현재시간 : ' + year + month + date + day + hours + minutes)
	console.log('인덱스 값 : ' + index)

	document.getElementById(checkOutButton.id).style = 'display:none';
	document.getElementById(checkOutButton.id + 'Label').innerHTML = '' + year + month + date + day + hours + minutes;
	document.getElementById('checkIn' + index + 'Status').innerHTML = '퇴실완료';


	console.log('예약번호 id : ' + 'reseNum' + index.substring(7))
	console.log('예약번호  값 : ' + document.getElementById('reseNum' + index).innerHTML)

	var clickCheckOutValue = '' + year + month + date + day + hours + minutes
	var reseNumValue = document.getElementById('reseNum' + index).innerHTML

	var reqData = {
		clickCheckOut: clickCheckOutValue,
		reseNum: reseNumValue
	}

	reqData = JSON.stringify(reqData)
	xhr.open('post', 'testCheckOut')
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(reqData);
}


//*adminDelete popup

document.addEventListener('DOMContentLoaded', () => {
	const adminDelete_openPopupButton = document.getElementById('adminDelete_openPopupButton');
	const adminDelete_popup = document.getElementById('adminDelete_popup');
	const adminDelete_confirmButton = document.getElementById('adminDelete_confirmButton');
	const adminDelete_cancelButton = document.getElementById('adminDelete_cancelButton');
	const ad_form = document.querySelector('form[action="adminDeleteProc"]');

	if (adminDelete_openPopupButton) {
		adminDelete_openPopupButton.addEventListener('click', function(event) {
			event.preventDefault();
			adminDelete_popup.style.display = 'block';
		});
	}
	if (adminDelete_confirmButton) {
		adminDelete_confirmButton.addEventListener('click', () => {
			console.log('확인 버튼이 눌렸습니다.');
			if (ad_form) {
				ad_form.submit();
			}
			adminDelete_popup.style.display = 'none';
		});
	}
	if (adminDelete_cancelButton) {
		adminDelete_cancelButton.addEventListener('click', (event) => {
			event.preventDefault();
			adminDelete_popup.style.display = 'none';
		});
	}
});


// register.jsp --------------------------------------------------------------------------------
function individualAgree() {
	const checkboxes = document.querySelectorAll('input[name="agreeBtn"]');
	const checked = document.querySelectorAll('input[name="agreeBtn"]:checked');
	const selectAll = document.querySelector('input[name="agreeAllBtn"]');
	if (checkboxes.length === checked.length) {
		selectAll.checked = true;
	} else {
		selectAll.checked = false;
	}
}
function registerAllAgree(selectAll) {
	const checkboxes = document.getElementsByName('agreeBtn');

	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked
	})
}


function allCheck() {
	let agreeBtn1 = document.getElementById('agreeBtn1');
	let agreeBtn2 = document.getElementById('agreeBtn2');
	let id = document.getElementById('id');
	labelId = document.getElementById('labelId');
	let pw = document.getElementById('pw');
	labelPw = document.getElementById('labelPw')
	let email = document.getElementById('email');
	let auth = document.getElementById('auth');
	let name = document.getElementById('name');
	let select_year = document.getElementById('select_year');
	let select_month = document.getElementById('select_month');
	let select_day = document.getElementById('select_day');
	let mobile = document.getElementById('mobile');

	if (!agreeBtn1.checked || !agreeBtn2.checked) {
		alert('필수 이용약관을 동의하지 않았습니다.');
	} else if (id.value == "") {
		alert('아이디를 입력하세요.');
	} else if (labelId.textContent !== '사용 가능한 아이디입니다') {
		alert('아이디 중복확인은 필수 항목입니다.');
	} else if (pw.value == "") {
		alert('비밀번호를 입력하세요.');
	} else if (labelPw.textContent !== '일치') {
		alert('비밀번호 확인은 필수 항목입니다.');
	} else if (email.value == "") {
		alert('이메일를 입력하세요.');
	} else if (auth.value == "") {
		alert('인증번호를 입력하세요.');
	} else if (name.value == "") {
		alert('이름을 입력하세요.');
	} else if (select_year.value == "" || select_month.value == "" || select_day.value == "") {
		alert('생년월일을 입력하세요.');
	} else if (mobile.value == "") {
		alert('연락처를 입력하세요.');
	} else {
		var f = document.getElementById('f');
		f.submit();
	}
}
function idCheck() {
	let id = document.getElementById('id')
	// id 중복확인
	labelId = document.getElementById('labelId');
	if (true) {
		labelId.innerHTML = '사용 가능한 아이디입니다';
	} else {

		labelId.innerHTML = '사용 불가능한 아이디입니다. 다시 입력하세요';
	}
}
function pwCheck() {
	let pw = document.getElementById('pw');
	confirm = document.getElementById('confirm');
	console.log(confirm);
	labelPw = document.getElementById('labelPw');
	if (pw.value == confirm.value) {
		labelPw.innerHTML = '일치';
	} else {
		labelPw.innerHTML = '불일치';
	}
}
function loginCheck() {
	let id = document.getElementById('id');
	let pw = document.getElementById('pw');

	if (id.value == "") {
		alert('아이디는 필수 항목입니다.');
	} else if (pw.value == "") {
		alert('비밀번호는 필수 항목입니다.');
	} else {
		var f = document.getElementById('f');
		f.submit();
	}
}


var xhr;
function sendEmail() {
	xhr = new XMLHttpRequest();
	xhr.open('post', 'sendEmail')
	xhr.send(document.getElementById('email').value)
	xhr.onreadystatechange = resProc
}

function sendAuth() {
	if (xhr == null) {
		alert('이메일 주소를 입력 후 이용하세요.');
		return;
	}
	xhr.open('post', 'sendAuth');
	xhr.send(document.getElementById('auth').value);
	xhr.onreadystatechange = sendAuthProc
}

function sendAuthProc() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		alert(xhr.responseText);
	}
	if (xhr.responseText === '인증 성공') {
		document.getElementById('emailBtn').style = 'display:none';
		document.getElementById('authUl').style = 'display:none';
		labelEmail = document.getElementById('labelEmail');
		labelEmail.innerHTML = '인증 완료';
	}
}

function resProc() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		alert(xhr.responseText);
	}
}


// newHouseManager.jsp --------------------------------------------------------------------------------
// reservationManager.jsp --------------------------------------------------------------------------------
function checkBtn_show() {
	var roomType1 = document.getElementById("roomType1");
	var roomType2 = document.getElementById("roomType2");
	var roomTypeState1 = document.getElementById("roomTypeState1");
	var roomTypeState2 = document.getElementById("roomTypeState2");
	if (roomType1.checked) { // 대실
		roomTypeState1.style.display = "block";
	} else {
		roomTypeState1.style.display = "none";
	}
	if (roomType2.checked) {  // 숙박
		roomTypeState2.style.display = "block";
	} else {
		roomTypeState2.style.display = "none";
	}
}

function roomregisterBtn_show() {
	var room_registerState = document.getElementById("room_registerState");
	if (room_registerState.style.display === 'none') { // 객실등록
		room_registerState.style.display = 'block';
	} else {
		room_registerState.style.display = 'none';
	}
}

function execDaumPostcode() {
	new daum.Postcode({
		oncomplete: function(data) {
			if (data.userSelectedType === 'R') {
				document.getElementById('address').value = data.roadAddress;
			} else {
				document.getElementById('address').value = data.jibunAddress;
			}
			document.getElementById('postcode').value = data.zonecode;
		}
	}).open();
}
































