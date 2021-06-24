package com.cn.modules.project.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cn.modules.project.entity.ProjectEntity;
import com.cn.modules.project.entity.response.ResProjectEntity;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProjectDao extends BaseMapper<ProjectEntity> {
    List<ProjectEntity> list(ResProjectEntity resProjectEntity);

	List<ProjectEntity> listInfo();
}
