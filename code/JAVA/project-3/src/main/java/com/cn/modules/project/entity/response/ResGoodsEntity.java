package com.cn.modules.project.entity.response;

import com.baomidou.mybatisplus.annotation.TableId;
import com.cn.common.PageQueryEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ResGoodsEntity extends PageQueryEntity {

    @TableId
    private int id;
    private int price;//价格
    private String picture;//图片
    private int type;//是否上架
    private int projectId;//种类id
    private String goods;//货物名称
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createTime;//创建时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date updateTime;//修改时间


}
