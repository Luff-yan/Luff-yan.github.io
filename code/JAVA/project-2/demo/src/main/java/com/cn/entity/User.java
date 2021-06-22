package com.cn.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

/**
 * 
 * @author 胡殊林
 *
 */

@Setter
@Getter
@TableName("user")
public class User{
    private Integer id;
    private String name;
    private String phone;
	

}
