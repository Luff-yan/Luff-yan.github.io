package com.cn.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cn.entity.SysUser;
import com.cn.mapper.LoginMapper;
import com.cn.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService{
	  @Autowired
	    LoginMapper loginMapper;
	    @Override
	    public SysUser queryUser(String userName) {
	        return loginMapper.queryUser(userName);
	    }
	 
	    @Override
	    public List<Map<String, Object>> getUserPower(String userName) {
	        return loginMapper.getUserPower(userName);
	    }


}
