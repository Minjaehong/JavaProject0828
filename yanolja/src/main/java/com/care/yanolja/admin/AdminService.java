package com.care.yanolja.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;

@Service
public class AdminService {
	@Autowired	private AdminMapper adminMapper;
	@Autowired	private HttpSession session;

	public String adminLoginProc(AdminDTO admin) {

		if (admin.getAdminId() == null || admin.getAdminId().isEmpty()) {
			return "아이디를 입력하세요";
			
		}
		
		if (admin.getAdminPw() == null || admin.getAdminPw().isEmpty()) {
			return "비밀번호를 입력하세요";
		}

		AdminDTO result = adminMapper.adminLoginProc(admin.getAdminId());
		if (result != null) {
			// 암호화 비밀번호
			BCryptPasswordEncoder bpe = new BCryptPasswordEncoder();
			if (bpe.matches(admin.getAdminPw(), result.getAdminPw())) {			
//			if (admin.getAdminPw().equals(result.getAdminPw())) {
				session.setAttribute("adminId", result.getAdminId());
				session.setAttribute("adminPw", result.getAdminPw());
				session.setAttribute("adminLocation", result.getAdminLocation());
				session.setAttribute("businessNumber", result.getBusinessNumber());
				session.setAttribute("adminMobile", result.getAdminMobile());
				session.setAttribute("adminName", result.getAdminName());
				return "로그인 성공";
			}
		}

		return "아이디/비밀번호를 확인 후 다시 시도하세요.";

	}
	
	public String adminRegiterProc(AdminDTO admin, String adminPwConfirm) {
		System.out.println("admin location : " + admin.getAdminLocation());
		
		if(admin.getAdminId()== null || admin.getAdminId().isEmpty()) {
			System.out.println("아이디를 입력하세요.");
			return "아이디를 입력하세요.";
		}
		
		if(admin.getAdminPw() == null || admin.getAdminPw().isEmpty()) {
			System.out.println("비밀번호를 입력하세요.");
			return "비밀번호를 입력하세요.";
		}
		
		if(admin.getAdminPw().equals(adminPwConfirm) == false) {
			System.out.println("두 비밀번호를 일치하여 입력하세요.");
			return "두 비밀번호를 일치하여 입력하세요.";
		}
		
		if(admin.getAdminName() == null || admin.getAdminName().isEmpty()) {
			System.out.println("이름을 입력하세요.");
			return "이름을 입력하세요.";
		}
		
		if(admin.getBusinessNumber() == null || admin.getBusinessNumber().isEmpty()) {
			System.out.println("사업자번호를 입력하세요.");
			return "사업자번호를 입력하세요.";
		}
		
		AdminDTO result = adminMapper.adminLoginProc(admin.getAdminId());
		if(result == null) {
			BCryptPasswordEncoder bpe = new BCryptPasswordEncoder();
			String cryptPassword = bpe.encode(admin.getAdminPw());
			admin.setAdminPw(cryptPassword);
			adminMapper.adminRegisterProc(admin);
			System.out.println("회원 등록 완료");
			return "회원 등록 완료";
		}
		
		System.out.println("이미 가입된 아이디 입니다.");
		return "이미 가입된 아이디 입니다.";
		
	}

}