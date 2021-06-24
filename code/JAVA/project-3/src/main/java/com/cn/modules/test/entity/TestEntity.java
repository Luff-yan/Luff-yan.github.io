package com.cn.modules.test.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@TableName("student")
public class TestEntity {
    private int id;
    private String name;
    private int age;
}
