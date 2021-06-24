package com.cn.config;

import org.apache.shiro.authz.AuthorizationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@Slf4j
public class MyExceptionHandler {
	
	   @ExceptionHandler
	   @ResponseBody
	    public String ErrorHandler(AuthorizationException e) {
	        log.error("权限校验失败！", e);
	        return "您暂时没有权限,请联系管理员！";
	    }



}
