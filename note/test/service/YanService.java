package com.hbzhit.modules.test.service;

import java.util.List;

import com.hbzhit.modules.test.entity.YanEntity;

public interface YanService {

	void add(YanEntity entity);

	List<YanEntity> show(YanEntity entity);

	void up(YanEntity entity);

	void del(YanEntity entity);

}
