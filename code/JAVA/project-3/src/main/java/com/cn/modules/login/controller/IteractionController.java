package com.cn.modules.login.controller;

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
	  /**
	   * 类型管理
	   * @return
	   */
	  @RequestMapping("instrument")
	  public String instrument() {
		  return "instrument";
	  }
	  /**
	   * 类型新增
	   * @return
	   */
	  @RequestMapping("instrumentadd")
	  public String instrumentadd() {
		  return "instrumentadd";
	  }

	/**
	 * 用户新增页面跳转
	 * @return
	 */
	@RequestMapping("useradd")
	public String useradd() {
		return "useradd";
	}


	@RequestMapping("useredit")
	public String useredit() {
		return "useredit";
	}
	  /**
	   * 产品管理
	   * @return
	   */
	  @RequestMapping("product")
	  public String product() {
		  return "product";
	  }
	  

}
