package com.cn.modules.user.dao;

import com.cn.modules.user.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserDao {
    List<UserEntity> list(UserEntity entity);
    void del(UserEntity entity);
    void add(UserEntity entity);
    void up(UserEntity entity);
}
