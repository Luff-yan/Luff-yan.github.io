package com.cn.modules.user.service;

import com.cn.modules.user.entity.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> list(UserEntity entity);
    Boolean del(UserEntity entity);
    void update(UserEntity entity);
    Boolean add(UserEntity entity);
}
