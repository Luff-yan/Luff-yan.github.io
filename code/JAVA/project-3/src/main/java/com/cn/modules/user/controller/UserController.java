package com.cn.modules.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.cn.modules.user.entity.UserEntity;
import com.cn.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("list")
    public List<UserEntity> list(UserEntity entity) {
        List<UserEntity> list=userService.list(entity);
        return list;
    }

    @RequestMapping("del")
    public JSONObject del(UserEntity entity) {
        JSONObject json=new JSONObject();
        Boolean flag=userService.del(entity);
        if(flag){
            json.put("resultCode","200");
            json.put("resultDesc","成功");
        }
        else{
            json.put("resultCode","500");
            json.put("resultDesc","服务器异常");
        }
        return json;
    }

    @RequestMapping("update")
    public void up(UserEntity entity) {
        userService.update(entity);
    }

    @RequestMapping("add")
    public JSONObject add(UserEntity entity) {
        JSONObject json=new JSONObject();
        Boolean flag=userService.add(entity);
        if(flag) {
            json.put("resultCode","200");
            json.put("resultDesc","成功");
        }
        else {
            json.put("resultCode","500");
            json.put("resultDesc","服务器异常");
        }
        return json;
    }
}
