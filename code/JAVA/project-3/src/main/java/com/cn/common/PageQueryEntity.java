package com.cn.common;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 分页查询基础实体类
 * @author DING
 * @date 2019-3-26
 */
@Getter
@Setter
@ApiModel("分页查询基础对象")
public class PageQueryEntity  {

    @ApiModelProperty(value = "当前页", example = "1")
    private Long page;

    @ApiModelProperty(value = "页大小", example = "10")
    private Long limit;

    /**
     * 根据分页参数获取Page对象
     */
    public <T> IPage<T> pageObj() {
        Long page = getPage();
        Long limit = getLimit();
        if (page == null) {
            page = Constant.INIT_PAGE;
        }
        if (limit == null) {
            limit = Constant.INIT_LIMIT;
        }
        //分页对象
        return new Page<T>(page, limit);
    }
}
