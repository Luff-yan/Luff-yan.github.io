package com.cn.modules.project.controller;

import com.cn.common.utils.PageInfo;
import com.cn.common.utils.R;
import com.cn.modules.project.entity.ProjectEntity;
import com.cn.modules.project.entity.response.ResProjectEntity;
import com.cn.modules.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;
import java.util.List;

/**
 * 产品种类，它的前端页面在 instrument.html
 */
@RestController
@RequestMapping("project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    /**
     * 产品种类分页
     */
    @RequestMapping("page")
    public R<PageInfo<ProjectEntity>> page(ResProjectEntity ResProjectEntity){
        try {
            PageInfo<ProjectEntity> page = projectService.pageInfo(ResProjectEntity);
            return R.ok(page);
        }catch (Exception e) {
            return R.error(e.getMessage());
        }
    }
    
    @RequestMapping("list")
    public R<List<ProjectEntity>> list(){
    	try {
    		List<ProjectEntity> list=projectService.listInfo();
    		return R.ok(list);
		} catch (Exception e) {
			return R.error(e.getMessage());
		}
    }

    /**
     * 新增
     */
    @RequestMapping("save")
    public R<?> save(ProjectEntity project){
        project.setCreateTime(new Date());
        boolean flag = projectService.save(project);
        if(flag == true){
          return R.ok();
        }
        return R.error("添加失败");
    }

    /**
     * 删除
     */
    @RequestMapping("delete")
    public R<?> delete(int id){
        boolean flag = projectService.removeById(id);
        if(flag == true){
            return R.ok();
        }
        return R.error("删除失败");
    }

    /**
     * 修改
     */
    @RequestMapping("update")
    public R<?> update(ProjectEntity project){
        project.setUpdateTime(new Date());
        boolean flag = projectService.updateById(project);
        if(flag == true){
            return R.ok(project);
        }
        return R.error("修改失败");
    }

    /**
     * 查询
     */
    @RequestMapping("getById")
    public R<ProjectEntity> getById(@RequestBody int id){
        ProjectEntity pro = projectService.getById(id);
        return R.ok(pro);
    }


}
