package com.cn.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;

@Data
@TableName("sys_role")
public class SysRole {
  private int roleId;
  private String roleName;
  private String roleRemarks;
	
}
