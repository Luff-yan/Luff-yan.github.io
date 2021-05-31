package com.hbzhit.modules.test.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hbzhit.modules.test.entity.YanEntity;

@Mapper
public interface YanDao {

	void add(YanEntity entity);

	List<YanEntity> show(YanEntity entity);
	
	void up(YanEntity entity);
	
	void del(YanEntity entity);
}
