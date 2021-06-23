package com.cn.common;

/**
 * 常量
 *
 * @author Mark sunlightcs@gmail.com
 */
public class Constant {
    /** 超级管理员ID */
    public static final int INT_Y = 1;
    /** 超级管理员ID */
    public static final int INT_N = 0;
	/** 超级管理员ID */
	public static final long SUPER_ADMIN = 1;
    /**
     * 当前页码字段
     */
    public static final String PAGE = "page";
    /**
     * 每页显示记录数字段
     */
    public static final String LIMIT = "limit";
    /**
     * 默认页码
     */
    public static final long INIT_PAGE = 1;
    /**
     * 默认每页显示记录数（最大500）
     */
    public static final long INIT_LIMIT = 10;

    /**
     * 系统菜单标识
     */
    public static final String MENU_PROP_SYS = "sys/menu";

	/**
	 * 菜单类型
	 *
	 * @author chenshun
	 * @date 2016年11月15日 下午1:24:29
	 */
    public enum MenuType {
        /**
         * 目录
         */
    	CATALOG(0),
        /**
         * 菜单
         */
        MENU(1),
        /**
         * 按钮
         */
        BUTTON(2);

        private int value;

        MenuType(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

    /**
     * 定时任务状态
     *
     * @author chenshun
     * @date 2016年12月3日 上午12:07:22
     */
    public enum ScheduleStatus {
        /**
         * 正常
         */
    	NORMAL(0),
        /**
         * 暂停
         */
    	PAUSE(1);

        private int value;

        ScheduleStatus(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

}
