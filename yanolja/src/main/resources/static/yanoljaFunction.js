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
	const selectAll	= document.querySelector('input[name="selectAll"]');

	if (checkboxes.length === checked.length) {
		selectAll.checked = true;
	} else {
		selectAll.checked = false;
	}
}

function adminPwRegCheck(){
    
	let adminPw = document.getElementById('adminPw');
	let adminPwReg = document.getElementById('adminPwReg');
	//let pwRegNum = /^(?=.*[0-9])$/;
	let pwRegNum = /^(?=.*\d)$/;
	let pwRegCapital = /^(?=.*[a-zA-Z])$/;
	let pwRegSpecial = /^(?=.*[!@#$%^*+=-])$/;
	let pwRegRange = /^.{6,12}$/;
	let adminPwRegCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;
	if(adminPw.value == ""){
		adminPwReg.innerHTML = ''
	}
	
	if(!adminPwRegCheck.test(adminPw.value)){
		adminPwReg.style = 'color:red;';
		adminPwReg.innerHTML = '* 숫자+영문자+특수문자 조합 6~ 12자리만 가능'
	}else{
		adminPwReg.innerHTML = '* 사용가능한 비밀번호입니다.'
		adminPwReg.style = 'color:#666;';
	}

}

function adminPwCheck(){
    
	let adminPw = document.getElementById('adminPw');
	let adminPwConfirm = document.getElementById('adminPwConfirm');
	let adminPwReg = document.getElementById('adminPwReg');
	let adminPwRegCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;
	let adminPwCheck = document.getElementById('adminPwCheck');
	if(!adminPwRegCheck.test(adminPw.value)){
		adminPwReg.innerHTML = '* 영문+숫자+특수문자만을 사용해주세요.'
	}
	if(adminPw.value == null){
		adminPwCheck.innerHTML = ''
	}else if(adminPw.value == adminPwConfirm.value){
		adminPwCheck.innerHTML = '* 일치합니다.'
		adminPwCheck.style = 'color:#666;';
	}else{
		adminPwCheck.innerHTML = '* 불일치,비밀번호를 확인해주세요.'
		adminPwCheck.style = 'color:red;';
	}
}

function businessNumberCheck(){
	let businessNumber = document.getElementById('businessNumber');
	let businessNumberCheck = document.getElementById('businessNumberCheck');
	let businessNumberReg =/^(?=.*[0-9]).{10,}$/;

	if(!businessNumberReg.test(businessNumber.value)){
		businessNumberCheck.style = 'color:red;';
		businessNumberCheck.innerHTML = '* - 없이 숫자로만 10자리입니다.'
	}else{
		businessNumberCheck.innerHTML = '* 사용가능한 사업자번호입니다.'
		businessNumberCheck.style = 'color:#666;';
	}

}

function adminIdCheck(){
	let adminId = document.getElementById('adminId')
	// id 중복확인
	adminIdCheck = document.getElementById('adminIdCheck');
	 if(true){
		 adminIdCheck.innerHTML = '사용 가능한 아이디입니다';
	 }else{
		 adminIdCheck.innerHTML = '사용 불가능한 아이디입니다. 다시 입력하세요';
	 }
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

function adminAllCheck(){
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
	
	if(!adminAgreeBtn1.checked || !adminAgreeBtn2.checked){
		alert('필수 이용약관을 동의하지 않았습니다.');
	}else if(adminId.value == ""){
		alert('아이디를 입력하세요.');
	}else if(adminIdCheck.textContent !== '사용 가능한 아이디입니다'){
		alert('아이디 중복확인은 필수 항목입니다.');
	}else if(adminPw.value == ""){
		alert('비밀번호를 입력하세요.');
	}else if(adminPwReg.textContent !== '* 사용가능한 비밀번호입니다.'){
		alert('비밀번호는 영문+숫자+특수문자만을 사용해주세요.');
	}else if(adminPwCheck.textContent !== '* 일치합니다.'){
		alert('비밀번호 확인을 다시 시도하세요.');
	}else if(adminName.value == ""){
		alert('이름을 입력하세요.');	
	}else if(adminMobile.value == ""){
		alert('연락처를 입력하세요.');
	}else if(adminMobile.value == ""){
		alert('연락처를 입력하세요.');	
	}else if(region.value == ""){
		alert('지역을 선택하세요.');	
	}else if(businessNumber.value == ""){
		alert('사업자번호를 입력하세요.');	
	}else if(businessNumberCheck.textContent !== '* 사용가능한 사업자번호입니다.'){
		alert('사업자번호는 숫자 10자리로만 입력하세요.');
	}else{
		var f = document.getElementById('f');
		f.submit();
	}
}


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


function allCheck(){
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
	
	if(!agreeBtn1.checked || !agreeBtn2.checked){
		alert('필수 이용약관을 동의하지 않았습니다.');
	}else if(id.value == ""){
		alert('아이디를 입력하세요.');
	}else if(labelId.textContent !== '사용 가능한 아이디입니다'){
		alert('아이디 중복확인은 필수 항목입니다.');
	}else if(pw.value == ""){
		alert('비밀번호를 입력하세요.');
	}else if(labelPw.textContent !== '일치'){
		alert('비밀번호 확인은 필수 항목입니다.');
	}else if(email.value == ""){
		alert('이메일를 입력하세요.');
	}else if(auth.value == ""){
		alert('인증번호를 입력하세요.');
	}else if(name.value == ""){
		alert('이름을 입력하세요.');	
	}else if(select_year.value == "" || select_month.value == "" || select_day.value == ""){
		alert('생년월일을 입력하세요.');
	}else if(mobile.value == ""){
		alert('연락처를 입력하세요.');	
	}else{
		var f = document.getElementById('f');
		f.submit();
	}
}
function idCheck(){
	let id = document.getElementById('id')
	// id 중복확인
	labelId = document.getElementById('labelId');
	 if(true){
		 labelId.innerHTML = '사용 가능한 아이디입니다';
	 }else{
		
		 labelId.innerHTML = '사용 불가능한 아이디입니다. 다시 입력하세요';
	 }
}
function pwCheck(){
	let pw = document.getElementById('pw');
	confirm = document.getElementById('confirm');
	console.log(confirm);
	labelPw = document.getElementById('labelPw');
	 if(pw.value == confirm.value){
		 labelPw.innerHTML = '일치';
	 }else{
		 labelPw.innerHTML = '불일치';
	 }
}
function loginCheck(){
	let id = document.getElementById('id');
	let pw = document.getElementById('pw');
	
	if(id.value == ""){
		alert('아이디는 필수 항목입니다.');
	}else if(pw.value == ""){
		alert('비밀번호는 필수 항목입니다.');
	}else{
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
	if(xhr.responseText === '인증 성공'){
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
































