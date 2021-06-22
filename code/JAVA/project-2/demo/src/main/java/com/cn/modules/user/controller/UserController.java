package com.cn.modules.user.controller;

import com.cn.modules.user.entity.UserEntity;
import com.cn.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("list")
    public List<UserEntity> list(UserEntity entity) {
        List<UserEntity> list=userService.list(entity);
        return list;
    }

    @RequestMapping("del")
    public void del(UserEntity entity) {
        userService.del(entity);
    }

    @RequestMapping("up")
    public void up(UserEntity entity) {
        userService.up(entity);
    }

    @RequestMapping("add")
    public void add(UserEntity entity) {
        userService.add(entity);
    }
}
