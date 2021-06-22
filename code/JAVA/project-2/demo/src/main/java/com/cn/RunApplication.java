package com.cn;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 
 * @author 胡殊林
 *
 */
//@MapperScan("com.cn.mapper")
@SpringBootApplication
public class RunApplication{


	public static void main(String[] args) {
		SpringApplication.run(RunApplication.class, args);
	}

}
