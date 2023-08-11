<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="yanoljaFunction.js"></script>
<link rel="stylesheet" href="/css/reset.css" type="text/css">

<title>사업자용 예약관리</title>

<c:import url="/header"/>

<form action="reservationManagerProc" method="post" id="f">
	<div class="reservationManager">
		<h1>My 야놀자 [사업자용]</h1>
		<div class="sideMenuBar_inner">

			<div class="manager_menu">
				<ul>
					<li>숙소 관리</li>
					<li><a href="#">기존 숙소 관리</a></li>
					<li><a href="#">신규 숙소 등록</a></li>
					<li><a href="#">예약 현황</a></li>
					<li><a href="#">후기 관리</a></li>
				</ul>			
			</div>
			

			<div class="reservationManager_content">
				<h2>숙소 목록</h2>
				<hr>
				<!-- 숙소 목록 테이블 -->
				<c:choose>
					<c:when test="${empty admins}">
						<h3> 등록된 숙소가 존재하지 않습니다.</h3>
					</c:when>				
					<c:otherwise>
						<div class="manager_reservationTable">
							<table border=1 class="manager_table">
								<thead>
									<tr>
										<th width="50"></th>
										<th width="120">종류</th>
										<th width="300">업체명</th>
										<th width="430">주소</th>
									</tr>
								</thead>
								<tbody>
									<!-- for문 사용 -->
									<c:forEach var="board" items="${admins}">
									<tr>
										<td>
											<input type="checkbox" id="checkbox" name="fileNum" value="1">
											<label for="checkbox"></label>
										</td>
										<td>펜션/풀빌라</td>
										<td>신천(잠실새내) FORESTAR 2호점</td>
										<td>서울특별시 ㅁㅁ구 ㅁㅁ동</td>
									</tr>
									</c:forEach>					
								</tbody>
							</table>
						</div>
					</c:otherwise>
				</c:choose>



				<h2>예약 현황 확인</h2>
				<hr>
				<!-- 예약 현황 테이블 -->
				<div class="reservation_stateTable">
					<table border=1 class="manager_table">
						<thead>
							<tr>
								<th width="50">No.</th>
								<th width="100">객실명</th>
								<th width="60">인원수</th>
								<th width="90">예약자명</th>
								<th width="130">연락처</th>
								<th width="130">예약번호</th>
								<th width="130">체크인</th>
								<th width="130">체크아웃</th>
								<th width="80">객실현황</th>
							</tr>
						</thead>
						<tbody>
							<!-- for문 사용 -->
							<tr>
								<td>1</td>
								<td><input type="text" value="Deluxe" readonly></td>
								<td><input type="text" value="2" readonly></td>
								<td><input type="text" value="유저일" readonly></td>
								<td><input type="text" value="010-1234-1234" readonly></td>
								<td><input type="text" value="202307281234" readonly></td>
								<td><button type="button" class="checkInOutBtn" onclick="memberInfo_save()">체크인</button></td>
								<td><button type="button" class="checkInOutBtn" onclick="memberInfo_save()">체크아웃</button></td>
								<td><input type="text" value="입실완료" readonly></td>
							</tr>
							<tr>
								<td>2</td>
								<td><input type="text" value="Deluxe" readonly></td>
								<td><input type="text" value="2" readonly></td>
								<td><input type="text" value="유저일" readonly></td>
								<td><input type="text" value="010-1234-1234" readonly></td>
								<td><input type="text" value="202307281234" readonly></td>
								<td><button type="button" class="checkInOutBtn" onclick="memberInfo_save()">체크인</button></td>
								<td><button type="button" class="checkInOutBtn" onclick="memberInfo_save()">체크아웃</button></td>
								<td><input type="text" value="입실완료" readonly></td>
							</tr>
						</tbody>
					</table>
				</div>
					

			</div>

			

		</div>
	</div>



</form>



<c:import url="/footer"/>