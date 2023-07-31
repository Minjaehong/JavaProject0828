package com.care.yanolja.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class CommonController {
	@Autowired
	private CommonService service;
	@Autowired
	private HttpSession session;

	@RequestMapping("index")
	public String index() {
		return "default/index";
	}

	@RequestMapping("header")
	public String header() {
		return "default/header";
	}

	@RequestMapping("footer")
	public String footer() {

		return "default/footer";
	}
}
