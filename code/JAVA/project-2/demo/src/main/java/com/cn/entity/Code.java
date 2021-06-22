package com.cn.entity;

import com.cn.enums.StateEnum;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Code {
  private String resultCode=StateEnum.SUCCESS.getCode();
  private String resultDesc=StateEnum.SUCCESS.getMsg();

}
