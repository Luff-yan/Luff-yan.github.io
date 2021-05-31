update:
http://localhost:8080/exam/test/up?id=2&username=12212121

delete:
http://localhost:8080/exam/test/del?id=1

select:
http://localhost:8080/exam/test/show

insert:
http://localhost:8080/exam/test/add?username=1

update中的非空判断：
<if test="username != null and username !=''">
同理：id,num,password

impl 和 .java
yml
xml在 mapper

注：在modules下创建新的测试文件，新建的都是包文件

新建一个包文件：
new package:
test
test下新建包文件：
controller:  -->YanController.java
dao  --> YanDao.java
entity  --> Yan.java
service  --> impl-->yanServiceImpl.java     and       yanSerivce.java 


在src/main/resources/目录下新建文件夹存放.xml
Test>Test.xml

dao 可以改成 mapper

注：输入以上网址时，必须要先登录进网站
登录进去网站使用idea中的端口，修改数据库信息使用8080端口
http://localhost:8080/exam/user_data/list

eclipse启动后会显示路径：Tomcat started on port(s): 8080 (http) with context path '/minzheng'

/min/zheng 就是 数据库的名称
网址上输入的是这个名称 minzheng

注：
entity(model)
dao(mapper)
service
controller

