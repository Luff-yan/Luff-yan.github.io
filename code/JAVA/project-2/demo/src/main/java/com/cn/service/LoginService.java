package com.cn.service;

import java.util.List;
import java.util.Map;

import com.cn.entity.SysUser;

public interface LoginService {
	 
    SysUser queryUser(String  userName );
 
    List<Map<String,Object>> getUserPower(String  userName);
}
