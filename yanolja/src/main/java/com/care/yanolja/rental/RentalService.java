package com.care.yanolja.rental;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import jakarta.servlet.http.HttpSession;

@Service
public class RentalService {
	@Autowired private RentalMapper rentalMapper;
	@Autowired private HttpSession session;
	
	public void rentalSelect(String adminId, Model model) {
		
		ArrayList<RentalDTO> rentals = rentalMapper.rentalSelectProc(adminId);	
		
		model.addAttribute("rentals",rentals);
	}
}
