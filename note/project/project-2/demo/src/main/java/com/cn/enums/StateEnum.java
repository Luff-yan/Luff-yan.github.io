package com.cn.enums;

import lombok.Getter;

@Getter
public enum StateEnum {

    SUCCESS("200", "SUCCESS"),
    FAILURE("500","服务器异常");
    private String code;
    private String msg;

    StateEnum(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static StateEnum getEnum(String code) {
    	 for (StateEnum item : StateEnum.values()) {
             if (item.getCode() == code) {
                 return item;
             }
         }
        return null;
    }
}
