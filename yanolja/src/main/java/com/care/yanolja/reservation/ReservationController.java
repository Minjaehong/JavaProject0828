package com.care.yanolja.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class ReservationController {
	@Autowired private ReservationService service;
	@Autowired private HttpSession session;
	
	@GetMapping("reservationManager")
	public String reservationManager() {
		return "reservation/reservationManager";
	}
	
	
}
