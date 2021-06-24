这是胡师傅安排的任务，连接的是线上的数据库demo
我是在demo里面建的表
线上数据库的地址和密码用xxx代替
以前端JS为主
已经完成热部署。
知识点:
一、两种请求方式：
	$.ajax({
      		type : "POST",
      		url : "project/page",
      		dataType : "json",
      		data : {
      			数据名 : page,
      			数据名: 10,
      		},
      		success : function(data) {
		/*不可照抄
		//关闭当前frame
                               xadmin.close();
                               // 可以对父窗口进行刷新
                               xadmin.father_reload();
		*/
                             }
                    });              

第二种方式
 $.post('project/delete',{id:id}, function(res) {       
},'json');  

二、onclick的用法：
onclick="xadmin.open('用户修改','跳转页面的名称',500,300)"
xadmin.open：跳转页面

注：跳转页面需要在 IteractionController 添加：
@RequestMapping("跳转页面名称")
	  public String 同上() {
		  return "同上";
	  }