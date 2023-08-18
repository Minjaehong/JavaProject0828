<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="yanoljaFunction.js"></script>
<link rel="stylesheet" href="/css/reset.css" type="text/css">

<title>사업자용 예약관리</title>

<c:import url="/header" />

<form action="reservationManagerProc" method="post" id="f">
	<div class="reservationManager" onload="reservationCheck()">
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
					<c:when test="${empty rentals}">
						<h3 id="reservationPlace">등록된 숙소가 존재하지 않습니다.</h3>
					</c:when>
					<c:otherwise>
						<div class="manager_reservationTable"
							id="manager_reservationTable" align="center">
							<table border=1 class="manager_table">
								<thead>
									<tr>
										<th width="5%"></th>
										<th width="10%">종류</th>
										<th width="35%">업체명</th>
										<th width="50%">주소</th>
									</tr>
								</thead>
								<tbody align="center">
									<!-- for문 사용 -->
									<c:forEach var="rental" items="${rentals}" varStatus="status">
										<tr>
											<td><input type="radio" name="reservatinRadio"
												onclick="reservationCheck()" value=${rental.hostName }>
											</td>
											<td>${rental.lodType }</td>
											<td>${rental.hostName }</td>
											<td>${rental.adminLocation }</td>
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
				<div id="reservationBody">
					<div class="reservation_stateTable">
						<h3 id="selecetdPlace"></h3>
						<table border=1 class="manager_table" id="manager_table">
							<thead id="reservationThead" name="reservationTable">
								<tr>
									<th width="3%">No.</th>
									<th width="10%">객실명</th>
									<th width="4%">인원</th>
									<th width="6%">예약자명</th>
									<th width="10%">연락처</th>
									<th width="10%">예약번호</th>
									<th width="10%">체크인</th>
									<th width="10%">체크인</th>
									<th width="10%">체크아웃</th>
									<th width="10%">체크아웃</th>
									<th width="5%">객실현황</th>
								</tr>
							</thead>
							<tbody id="reservationTbody" name="reservationTable" align="center">

								<!-- for문 사용 -->
	
							</tbody>
						</table>
					</div>

				</div>



			</div>



		</div>
	</div>



</form>



<c:import url="/footer" />