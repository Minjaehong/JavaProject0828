package com.care.yanolja.reservation;

import java.awt.Window;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.care.yanolja.admin.AdminService;
import com.care.yanolja.rental.RentalDTO;
import com.care.yanolja.rental.RentalService;

import jakarta.servlet.http.HttpSession;

@Controller
public class ReservationController {
	@Autowired private ReservationService reservationService;
	@Autowired private AdminService adminService;
	@Autowired private RentalService rentalService;
	@Autowired private HttpSession session;

	
	@RequestMapping("reservationManager")
	public String reservationManager(Model model) {
		if (session.getAttribute("adminId") == null) {
			return "redirect:adminLogin";
		}
		
		rentalService.rentalSelect((String)session.getAttribute("adminId"),model);
				
		return "reservation/reservationManager";
		
	}
	
}
