package com.cn.modules.project.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cn.modules.project.dao.GoodsDao;
import com.cn.modules.project.entity.GoodsEntity;
import com.cn.modules.project.entity.response.ResGoodsEntity;
import com.cn.modules.project.service.GoodsService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsDao , GoodsEntity> implements GoodsService {

    @Autowired
    private GoodsDao goodsDao;

    @Override
    public PageInfo<ResGoodsEntity> list(ResGoodsEntity resGoodsEntity) {
        PageHelper.startPage(resGoodsEntity.getPage().intValue(),resGoodsEntity.getLimit().intValue());
        List<ResGoodsEntity> list = goodsDao.list(resGoodsEntity);
        return new PageInfo<ResGoodsEntity>(list);
    }
}
