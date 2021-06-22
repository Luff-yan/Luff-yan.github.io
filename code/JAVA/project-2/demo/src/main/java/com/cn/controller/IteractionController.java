package com.cn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class IteractionController {
	 //登录页面
	  @RequestMapping("login")
	  public String index(){
		  return "login";
	  }
	  //首页
	  @RequestMapping("index")
	  public String deng(){
		  return "index";
	  }
	  /**
	   * 首页
	   * @return
	   */
	  @RequestMapping("welcome")
	  public String welcome() {
		  return "welcome";
	  }
	  /**
	   * 用户信息
	   * @return
	   */
	  @RequestMapping("user")
	  public String admin() {
		  return "user";
	  }

}
