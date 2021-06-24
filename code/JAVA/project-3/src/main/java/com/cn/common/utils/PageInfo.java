package com.cn.common.utils;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageSerializable;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;
import java.util.List;


@Setter
@Getter
public class PageInfo<T> extends PageSerializable<T> {
	private static final long serialVersionUID = 1L;
	public static final int DEFAULT_NAVIGATE_PAGES = 8;
    //总记录数
    private long totalCount;

    //每页记录数
    private int pageSize;

    //总页数
    private int totalPage;

    //当前页数
    private int currPage;

    //合计行
    private T totalSum;
     //当前页码
    private int pageNum;

    /**
     * 分装结果
     * @param list
     */
    public PageInfo(List<T> list) {
        this(list, DEFAULT_NAVIGATE_PAGES);
    }

    /**
     * 分页
     * @param list
     * @param navigatePages
     */
    public PageInfo(List<T> list, int navigatePages) {
        super(list);     
        if (list instanceof Page) {
            Page<T> page = (Page<T>) list;
            this.totalCount=page.getTotal();
            this.pageNum = page.getPageNum();
            this.pageSize = page.getPageSize();
            this.currPage=page.getPageNum();
            this.totalPage = page.getPages();
        } else if (list instanceof Collection) {
            this.pageNum = 1;
            this.pageSize = list.size();
            this.totalPage = this.pageSize > 0 ? 1 : 0;
        }
    }


}
