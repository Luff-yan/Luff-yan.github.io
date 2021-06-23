package com.cn.modules.project.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cn.modules.project.entity.GoodsEntity;
import com.cn.modules.project.entity.response.ResGoodsEntity;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Mapper
@Repository
public interface GoodsDao extends BaseMapper<GoodsEntity> {
    List<ResGoodsEntity> list(ResGoodsEntity resGoodsEntity);
}
