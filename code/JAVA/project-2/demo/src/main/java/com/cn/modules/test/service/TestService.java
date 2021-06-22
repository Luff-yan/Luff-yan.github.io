package com.cn.modules.test.service;

import com.cn.modules.test.entity.TestEntity;

import java.util.List;

public interface TestService {
    List<TestEntity> list(TestEntity entity);
    void add(TestEntity entity);
    void del(TestEntity entity);
    void up(TestEntity entity);
}
