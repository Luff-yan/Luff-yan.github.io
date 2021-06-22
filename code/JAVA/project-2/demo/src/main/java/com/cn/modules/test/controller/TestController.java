package com.cn.modules.test.controller;

import com.cn.modules.test.entity.TestEntity;
import com.cn.modules.test.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("student")
public class TestController {
    @Autowired
    private TestService testService;

    @RequestMapping("list")
    public List<TestEntity> list(TestEntity entity) {
        List<TestEntity> list = testService.list(entity);
        return list;
    }

    @RequestMapping("add")
    public void add(TestEntity entity) {
        testService.add(entity);
    }

    @RequestMapping("del")
    public void del(TestEntity entity) {
        testService.del(entity);
    }

    @RequestMapping("up")
    public void up(TestEntity entity) {
        testService.up(entity);
    }
}
