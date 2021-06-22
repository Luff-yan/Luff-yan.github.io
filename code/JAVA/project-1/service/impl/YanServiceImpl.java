package com.hbzhit.modules.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbzhit.modules.test.dao.YanDao;
import com.hbzhit.modules.test.entity.YanEntity;
import com.hbzhit.modules.test.service.YanService;

@Service
public class YanServiceImpl implements YanService{
    @Autowired 
    private YanDao yanDao;
	@Override
	public void add(YanEntity entity) {
		yanDao.add(entity);
		
	}
	@Override
	public List<YanEntity> show(YanEntity entity) {
		
		return yanDao.show(entity);
	}
	@Override
	public void up(YanEntity entity) {
		yanDao.up(entity);
	}
	
	@Override
	public void del(YanEntity entity) {
		yanDao.del(entity);
	}

}
