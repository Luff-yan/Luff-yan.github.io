package com.cn.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;

@Data
@TableName("sys_user")
public class SysUser {

	 
    private Integer userId;
    private String userName;
    private String password;
    private String userRemarks;

}
