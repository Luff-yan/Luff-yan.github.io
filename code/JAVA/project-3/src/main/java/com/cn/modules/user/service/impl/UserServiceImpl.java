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

    @Override
    public Boolean del(UserEntity entity) {
        //删除
         Boolean flag= userDao.del(entity);

        return flag;
    }


    //增加
    @Override
    public Boolean add(UserEntity entity) {
        Boolean flag = userDao.add(entity);
        return flag;
    }

    //修改
    @Override
    public void update(UserEntity entity) {
        userDao.update(entity);
    }
}
