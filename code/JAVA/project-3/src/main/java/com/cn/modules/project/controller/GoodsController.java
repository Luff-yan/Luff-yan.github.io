package com.cn.modules.project.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.cn.modules.project.entity.GoodsEntity;
import com.cn.modules.project.entity.response.ResGoodsEntity;
import com.cn.modules.project.service.GoodsService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * 货物
 */
@RestController
@RequestMapping("goods")
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    /**
     * 展示
     */
    @GetMapping("list")
    public R list(ResGoodsEntity resGoodsEntity){
        try {
            PageInfo<ResGoodsEntity> list = goodsService.list(resGoodsEntity);
            return R.ok(list);
        }catch (Exception e) {
            // TODO: handle exception
            return R.failed(e.getMessage());
        }
    }

    /**
     * 新增
     */
    @GetMapping("save")
    public R save(GoodsEntity goodsEntity){
        goodsEntity.setType(2);
        goodsEntity.setCreateTime(new Date());
        boolean flag = goodsService.save(goodsEntity);
        if(flag){
            return R.ok(goodsEntity);
        }
        return R.failed("新增失败");
    }

    /**
     * 删除
     */
    @GetMapping("remove")
    public R remove(GoodsEntity goodsEntity){
        boolean flag = goodsService.removeById(goodsEntity.getId());
        if(flag){
            return R.ok("删除成功");
        }
        return R.failed("删除失败");
    }

    /**
     * 修改
     */
    @GetMapping("update")
    public R update(GoodsEntity goodsEntity){
        goodsEntity.setUpdateTime(new Date());
        boolean flag = goodsService.updateById(goodsEntity);
        if(flag){
            return R.ok(goodsEntity);
        }
        return R.failed("修改失败");
    }

}
