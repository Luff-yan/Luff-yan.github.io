package com.cn.modules.project.service;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cn.common.utils.PageInfo;
import com.cn.modules.project.entity.ProjectEntity;
import com.cn.modules.project.entity.response.ResProjectEntity;

public interface ProjectService extends IService<ProjectEntity> {
    PageInfo<ProjectEntity> pageInfo(ResProjectEntity resProjectEntity);

	List<ProjectEntity> listInfo();
}
