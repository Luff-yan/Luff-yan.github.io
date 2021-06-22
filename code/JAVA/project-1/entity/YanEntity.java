package com.hbzhit.modules.test.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@TableName("yan")
public class YanEntity {
	private int id;
	private String username;
	private String password;
	private int num;
}
