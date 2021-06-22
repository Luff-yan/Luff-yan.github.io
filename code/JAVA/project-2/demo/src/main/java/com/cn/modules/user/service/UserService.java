package com.cn.modules.user.service;

import com.cn.modules.user.entity.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> list(UserEntity entity);
    void del(UserEntity entity);
    void up(UserEntity entity);
    void add(UserEntity entity);
}
