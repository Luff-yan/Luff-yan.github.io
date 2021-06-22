package com.cn.modules.test.dao;

import com.cn.modules.test.entity.TestEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestDao {
    List<TestEntity> list(TestEntity entity);
    void add(TestEntity entity);
    void del(TestEntity entity);
    void up(TestEntity entity);
}
