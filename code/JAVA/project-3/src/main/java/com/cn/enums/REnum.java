package com.cn.enums;

import lombok.Getter;

/**
 * 登录Token类型标识枚举类
 * @author DING
 * @version 1.0
 * @date 2019-6-11 09:59:04
 */
@Getter
public enum REnum {
    /**
     * 成功
     */
    OK(200, "成功"),

    /**
     * 错误
     */
    ERROR(500, "未知错误，请联系管理员。");

    private int code;
    private String msg;

    REnum(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static REnum getEnum(int code) {
        for (REnum item : REnum.values()) {
            if (item.getCode() == code) {
                return item;
            }
        }
        return null;
    }
}
