package com.cn.common.utils;

import com.alibaba.fastjson.JSONObject;
import com.cn.enums.REnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * 前端返回对象封装
 *
 * @author DING
 * @date 2019-3-22
 */
@Data
@JsonSerialize()
public class R<T> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 状态.
	 */
	@ApiModelProperty("返回状态（0表示成功）")
	private int code;

	/**
	 * 信息.
	 */
	@ApiModelProperty("返回信息")
	private String msg;

	/**
	 * 详细描述
	 */
	@ApiModelProperty("详细描述")
	private Object desc;

	/**
	 * 结果数据
	 */
	@ApiModelProperty("返回数据")
	private T data;

	/**
	 * 构造方法，默认OK
	 */
	public R() {
		this(REnum.OK.getCode(), REnum.OK.getMsg());
	}

	/**
	 * 构造方法
	 * @param code 状态
	 * @param msg 消息
	 */
	public R(int code, String msg) {
		this(code, msg, null);
	}

	/**
	 * 构造方法
	 * @param code 状态
	 * @param msg 消息
	 * @param data 数据
	 */
	public R(int code, String msg, T data) {
		super();
		this.code = code;
		this.msg = msg;
		this.data = data;
	}

	/**
	 * 成功
	 * @return R R对象
	 */
	public static <T> R<T> ok() {
		return new R<>();
	}

	/**
	 * 成功
	 * @param msg 消息
	 * @return R R对象
	 */
	public static <T> R<T> ok(String msg) {
		return new R<>(REnum.OK.getCode(), msg);
	}

	/**
	 * 返回数据
	 * @param data 数据
	 * @return R实体
	 */
	public static <T> R<T> ok(T data) {
		return ok(REnum.OK.getMsg(), data);
	}

	/**
	 * 返回数据
	 * @param msg 消息
	 * @param data 数据
	 * @return R实体
	 */
	public static <T> R<T> ok(String msg, T data) {
		return ok(REnum.OK.getCode(), msg, data);
	}

	/**
	 * 返回数据
	 * @param code 数据
	 * @param msg 消息
	 * @param data 数据
	 * @return R实体
	 */
	public static <T> R<T> ok(int code, String msg, T data) {
		return new R<T>(code, msg, data);
	}

	/**
	 * 失败
	 * @return R R对象
	 */
	public static R error() {
		return new R(REnum.ERROR.getCode(), REnum.ERROR.getMsg());
	}

	/**
	 * 失败
	 * @param msg 消息
	 * @return R R对象
	 */
	public static R error(String msg) {
		return new R<>(REnum.ERROR.getCode(), msg);
	}

	/**
	 * 失败
	 * @param code 状态
	 * @param msg 消息
	 * @return R R对象
	 */
	public static R error(int code, String msg) {
		return new R<>(code, msg);
	}


	/**
	 * JSON类型数据追加<br />
	 * data对象必须为JSONObject对象，否则会被覆盖
	 * @param key 字段名
	 * @param data 数据
	 * @return R R对象
	 */
	public R<T> put(String key, Object data) {
		if (this.data instanceof JSONObject) {
			((JSONObject) this.data).put(key, data);
			return this;
		}
		JSONObject obj = new JSONObject();
		obj.put(key, data);
		this.data = (T) obj;
		return this;
	}

	/**
	 * 详细描述信息
	 * @param data 详细描述
	 * @return R R对象
	 */
	public R<T> data(T data) {
		this.data = data;
		return this;
	}

	/**
	 * 详细描述信息
	 * @param desc 详细描述
	 * @return R R对象
	 */
	public R<T> desc(Object desc) {
		this.desc = desc;
		return this;
	}

	/**
	 * 设置
	 * @param code 状态
	 * @param msg 消息
	 * @param data 数据
	 * @return R R对象
	 */
	public static <T> R<T> set(int code, String msg, T data) {
		return new R<T>(code, msg, data);
	}

	/**
	 * 判断是否成功
	 * @return code =200,true;否则 false.
	 */
	@JsonIgnore
	public boolean isOk() {
		return REnum.OK.getCode() == this.code;
	}

	/**
	 * 判断是否失败
	 * @return code !=200,true;否则 false.
	 */
	@JsonIgnore
	public boolean isFail() {
		return !isOk();
	}


}
