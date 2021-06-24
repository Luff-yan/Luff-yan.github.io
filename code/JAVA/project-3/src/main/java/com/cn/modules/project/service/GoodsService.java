package com.cn.modules.project.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cn.modules.project.entity.GoodsEntity;
import com.cn.modules.project.entity.response.ResGoodsEntity;
import com.github.pagehelper.PageInfo;

public interface GoodsService extends IService<GoodsEntity> {
    PageInfo<ResGoodsEntity> list(ResGoodsEntity resGoodsEntity);
}
