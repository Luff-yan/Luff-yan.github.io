package com.cn.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cn.entity.SysUser;

@Mapper
public interface LoginMapper {
    SysUser queryUser(String userName );
    
    List<Map<String,Object>> getUserPower(String userName);
}
