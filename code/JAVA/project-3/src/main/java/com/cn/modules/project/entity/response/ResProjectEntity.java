package com.cn.modules.project.entity.response;


import com.baomidou.mybatisplus.annotation.TableId;
import com.cn.common.PageQueryEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Setter
@Getter
public class ResProjectEntity extends PageQueryEntity {
 
	@TableId
    private int id;
    private String project;//种类
    private int state;//是否启用
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createTime;//创建时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date updateTime;//修改时间
}
