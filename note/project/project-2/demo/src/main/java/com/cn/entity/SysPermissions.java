package com.cn.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;

@Data
@TableName("sys_permissions")
public class SysPermissions {

    private Integer perId;
    private String permissionsName;
    private String perRemarks;
}
