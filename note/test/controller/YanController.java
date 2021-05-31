package com.hbzhit.modules.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hbzhit.modules.test.entity.YanEntity;
import com.hbzhit.modules.test.service.YanService;

@RestController
@RequestMapping("test")
public class YanController {
   @Autowired
   private YanService yanService;
   
   @RequestMapping("add")
   public void add(YanEntity entity) {
	   yanService.add(entity);
   }
   
   @RequestMapping("show")
   public List<YanEntity> show(YanEntity entity) {
	   List<YanEntity> list=yanService.show(entity);
	   return list;
   }
   
   @RequestMapping("up")
   public void up(YanEntity entity) {
	   yanService.up(entity);
   }
   
   @RequestMapping("del")
   public void del(YanEntity entity) {
	   yanService.del(entity);
   }
}
