package com.cn.modules.user.service.impl;

import com.cn.modules.user.dao.UserDao;
import com.cn.modules.user.entity.UserEntity;
import com.cn.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    //显示
    @Override
    public List<UserEntity> list(UserEntity entity) {
        return userDao.list(entity);
    }

    //删除
    @Override
    public void del(UserEntity entity) {
        userDao.del(entity);
    }

    //增加
    @Override
    public void add(UserEntity entity) {
        userDao.add(entity);
    }

    //修改
    @Override
    public void up(UserEntity entity) {
        userDao.up(entity);
    }
}
