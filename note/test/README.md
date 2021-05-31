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
entity(model):存放实体的类，与数据库表的字段保持一致，一张表对应一个model类，用于定义与数据库对象应的属性。

dao(mapper):数据持久层，作用是访问数据库，向数据库发送sql语句，完成数据的增删改查操作。

service:调用dao层的接口进行业务逻辑应用的处理，impl是把mapper和service进行整合的文件封装service层的业务逻辑提高独立性和重复利用性

controller: 主要调用service层里面的接口控制具体的业务流程，控制的配置要在配置文件中进行。

controller.java : 处理前台的请求
    | 向下
service.java : 定义接口(业务逻辑)
    |
serviceImpl.java : (对接口函数进行实现)
    |
mapper.java : (Mapper 接口，方法名与Mapper.xml(UserMapper.xml)中定义的statment的id相同)
    |
mapper.xml :(写sql语句查询数据库)

Dao层中的类连接到 entity 层的类
Service 中的类连接到 Entity层 




























































