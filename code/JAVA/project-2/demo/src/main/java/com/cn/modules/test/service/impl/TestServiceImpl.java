package com.cn.modules.test.service.impl;

import com.cn.modules.test.dao.TestDao;
import com.cn.modules.test.entity.TestEntity;
import com.cn.modules.test.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService {
    @Autowired
    private TestDao testDao;

    @Override
    public List<TestEntity> list(TestEntity entity) {
        return testDao.list(entity);
    }

    @Override
    public void add(TestEntity entity) {
        testDao.add(entity);
    }

    @Override
    public void del(TestEntity entity) {
        testDao.del(entity);
    }

    @Override
    public void up(TestEntity entity) {
        testDao.up(entity);
    }
}
