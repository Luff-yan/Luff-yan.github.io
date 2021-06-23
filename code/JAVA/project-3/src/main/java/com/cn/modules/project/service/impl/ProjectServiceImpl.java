package com.cn.modules.project.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cn.common.utils.PageInfo;
import com.cn.modules.project.dao.ProjectDao;
import com.cn.modules.project.entity.ProjectEntity;
import com.cn.modules.project.entity.response.ResProjectEntity;
import com.cn.modules.project.service.ProjectService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectServiceImpl extends ServiceImpl<ProjectDao, ProjectEntity> implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    @Override
    public PageInfo<ProjectEntity> pageInfo(ResProjectEntity resProjectEntity) {
        PageHelper.startPage(resProjectEntity.getPage().intValue(),resProjectEntity.getLimit().intValue());
        List<ProjectEntity> pro = projectDao.list(resProjectEntity);
        return new PageInfo<ProjectEntity>(pro);
    }

	@Override
	public List<ProjectEntity> listInfo() {
		return projectDao.listInfo();
	}
}
