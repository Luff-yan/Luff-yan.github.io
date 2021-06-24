package com.cn.modules.user.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@TableName("user")
public class UserEntity {
    private int id;
    private String name;
    private int password;
    private int tel;
    private String mail;
    private String createtime;  //It is not Date type
    private String updatetime;
    private int state;
}
