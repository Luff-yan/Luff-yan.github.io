springboot课程地址：https://www.bilibili.com/video/BV17z4y1X7is?from=search&seid=6381450862915579259

一、springboot入门：
springboot一般作微服务，但是微服务一般用springcloud做
把javaee做了一个整合

学习的基础：
spring:IOC
最好有ssm项目的开发经验，springboot是整合了javaEE的技术
有较好的源码学习经验：spring,mybatis的源码
有idea和 eclipse的使用经验

三、特性
spring官网：https://spring.io/

微服务：microservices
springboot开发项目
springcloud管理项目
想学cloud一定先学boot
springcloud --> springboot --> spring
依赖关系

整合的javaee的知识，需要懂javaee
最好有ssm项目的经验

四、环境准备
maven gradle

这里选择 maven
jdk1.8
maven3.x:maven3.3以上的版本
intelliJIDEA2019
springboot2.3.0release

依赖的环境：tomcat9.0
servlet4.0

maven
1.配置阿里云的镜像：
2.给maven的settings.xml配置文件的profiles标签添加



四、创建项目
1.添加pom.xml,在其中添加 springboot官网上的 <parent>
https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started.first-application.pom

2.然后再添加<packaging>pom</packaging>到最后
因为是主项目

3.再添加<dependencies>到最后
	引入了一个starter实际上是引入了一组

4.添加<packaging>pom</packaging>到<version>1.0-SNAPSHOT</version>

5.在最大级目录创建新的子工程module

idea删除项目：
file->close project->删除记录->在文件管理中删除文件

idea出现的error:
java: error: invalid source release: 16
https://blog.csdn.net/zhemeban/article/details/56843017

执行mvn 打包的时候，显示版本号不对，首先要查看最外面的pom.xml版本号是否对应

starter是什么？如何去使用这些starter?

默认扫描器 basepackage
springboot的主启动类所在的package就是扫描器的basepackage
所以这些controller层，entity层都要在这个下面。
