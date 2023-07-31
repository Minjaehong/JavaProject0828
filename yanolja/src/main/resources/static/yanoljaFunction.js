// register.jsp --------------------------------------------------------------------------------
function registerIndividualBtn_show(){
	var individualState = document.getElementById("individualState");	

	if (individualState.style.display === 'none') { // 개인용 회원가입
		businessState.style.display = 'none';
		individualState.style.display = 'block';
	} else {
		businessState.style.display = 'none';
	}
}

function registerBusinessBtn_show(){
	var businessState = document.getElementById("businessState");	
	if (businessState.style.display === 'none') { // 사업자용 회원가입
		businessState.style.display = 'block';
		individualState.style.display = 'none';
	} else {
		individualState.style.display = 'none';
	}
}

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
			if(data.userSelectedType === 'R'){
				document.getElementById('address').value= data.roadAddress;
			}else{
				document.getElementById('address').value= data.jibunAddress;
			}
			document.getElementById('postcode').value= data.zonecode;
        }
    }).open();
}

var xhr;
function sendEmail(){
	xhr = new XMLHttpRequest();
	xhr.open('post', 'sendEmail')
	xhr.send(document.getElementById('email').value)
	xhr.onreadystatechange = resProc
}

function sendAuth(){
	if(xhr == null){
		document.getElementById('msg').innerHTML = '이메일 주소를 전송 후 이용하세요.'
		return;
	}
	xhr.open('post', 'sendAuth');
	xhr.send(document.getElementById('auth').value);
	xhr.onreadystatechange = sendAuthProc
}

function sendAuthProc(){
	if(xhr.readyState === 4 && xhr.status === 200){
		document.getElementById('msg').innerHTML = xhr.responseText;
	}
	if(xhr.responseText === '인증 성공'){
    	document.getElementById('auth').style='display:none';
    	document.getElementById('authBtn').style='display:none';
    	document.getElementById('email').style='display:none';
    	document.getElementById('emailBtn').style='display:none';
    }
}

function resProc(){
	if(xhr.readyState === 4 && xhr.status === 200){
		document.getElementById('msg').innerHTML = xhr.responseText;
	}
}

	