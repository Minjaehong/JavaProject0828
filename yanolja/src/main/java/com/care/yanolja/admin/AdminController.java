package com.care.yanolja.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpSession;

@Controller
public class AdminController {
	@Autowired private AdminService	 service;
	@Autowired private HttpSession session;
	
	@GetMapping("adminLogin")
	public String adminLogin() {
		return "admin/adminLogin";
	}
	
	@PostMapping("adminLoginProc")
	public String adminLoginProc(AdminDTO admin) {
		String result = service.adminLoginProc(admin);
		System.out.println(result);
		if (result.equals("로그인 성공")) {
			return "redirect:index";
		}
		return "redirect:adminLogin";
	}

	@GetMapping("adminRegister")
	public String adminRegister() {
		return "admin/adminRegister";
	}
	
	@PostMapping("adminRegisterProc")
	public String adminRegisterProc(AdminDTO admin, String adminPwConfirm, String adminAddress, String adminDetailAddress, String postcode) {
		String adminLocation = postcode + " "+ adminAddress + " " + ","+adminDetailAddress;
		admin.setAdminLocation(adminLocation);
		String result = service.adminRegiterProc(admin, adminPwConfirm);
		if(result.equals("회원 등록 완료")) {
			System.out.println("등록 성공!");
			return "redirect:index";
		}
		System.out.println("등록 실패!");
		return "admin/adminRegister";
	}
	
	@ResponseBody
	@PostMapping(value="dupCheck", produces = "text/plain; charset=utf-8")
	public String dupCheck(@RequestBody(required = false)String adminId) {
		
		return service.dupCheckProc(adminId);	
		
	}

}
