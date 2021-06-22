package com.cn.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;

@Data
@TableName("role_per")
public class SysPer {

	private Integer id;
	private Integer roleId;
	private Integer perId;

}
