# Java语言程序设计(基础篇)

每周日进行一次学习总结。学习教材为 [Java语言程序设计，梁勇](https://pan.baidu.com/s/1dZ9jrolw5ENwbz5matWbQQ)，提取码：1t1d
  
**目录**   
[2021.02.21](#jump_1)   
[2021.02.28](#jump_2)   
<span id="jump_1">
<font color=yellow>
2021.02.21 
</font>
  
这几天学习了第四章的最后一节：字符串的转换与比较  
其中几个方法：  
比较字符串：equals(),compareTo  
获取子字符串：substring(beginIndex),substring(beginIndex,endIndex)  
字符串转换：indexOf(),lastIndexOf()

4.4.5将十六进制转换为十进制数  
说明：提示用户输入一个十六进制数字，显示它对应的十进制数  
程序清单4-4 HexDigitDec.java
```
import java.util.Scanner;  //导入Scanner的包

public class HexDigit2Dec {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a hex digit: ");
        String hexString = input.nextLine();  //字符串的输入模式
        
        //Check if the hex string has exactly one character
        if (hexString.length() != 1) {
            System.out.println("You must enter exactly one character");
            System.exit(1);
        }  //查看一下字符串输入是否规范

        //Display decimal value for the hex digit
        char ch = Character.toUpperCase(hexString.charAt(0));
        //将输入的字符进行大写转换
        
        if (ch <= 'F' && ch >= 'A') {
            int value = ch - 'A' + 10;
            System.out.println("The decimal value for hex digit "
            + ch + " is " + value);
        }
        else if (Character.isDigit(ch)) {
            System.out.println("The decimal value for hex digit " + ch + " is " + ch);
        }
        else {
            System.out.println(ch + " is an invalid input");
        }
    }
}
```

<span id = "jump_2">
<font color = yellow>
2021.02.28
</font>

这几天学习了第六章循环   
三种循环方式：  
while, do-while, for  
两种退出循环的语句：  
break,continue  
  
while和do-while用于不知道次数的循环
例如：
```
Scanner input = new Scanner(System.in);
String user = inputnextLine();      //这里是用户输入的内容
while (user == 'quit') {      //与用户输入的内容判断是否相同，是则退出
    循环体;
}               
```
注：do-while 就是循环体在 while 循环前面，功能一样。  

注：用 '==' 比较字符不太适合，正式的比较 用 compareTo()方法更好一些。因为 '==' 比较的是内存地址，而 compareTo() 比较的是字符内容。  

for用于有具体次数的循环  
例如:  
```
for (int i = 1; i <= 100; i++) {   //知道具体的打印次数
    System.out.println("hello world!");
}
```

两种退出的语句：    
#break  
break语句用于跳出整个循环，例如：
```
int i = 1;
while (i <= 100) {
    if (i == 10)        //当 i = 10时，执行 break 语句
        break;
    System.out.print(i);
    i++;
}
System.out.println("The loop is over!");   //执行 break 语句后，打印

//第二种方法
for (int i = 1; i <= 100; i++) {
    if (i == 10) 
        break;
    System.out.print(i);
}
System.out.println("The loop is over!");
```
打印结果是：123456789 The loop is over!
  
#continue
continue语句用于跳出一次循环，例如：  
```
int i = 1;
while (i <= 100) {
    if (i % 5 == 0)
        continue;
    System.out.print(i);
    i++;

}
```
运行结果：1234
于目标结果不符合

```
for(int i = 1; i <= 100; i++) {
            if (i % 15 == 0) {
                System.out.print("\n");  //当 i = 15，换行，然后执行 continue
                continue;
            }
            System.out.printf("%2d ",i);  //用 printf 格式化字符
        }
    }
```
运行结果：  
![Alt text](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3490108693,2661506745&fm=26&gp=0.jpg)
>>>>>>> 7bd0049de36adc9da0d9c4fc7dfd42a561cbcd3d
