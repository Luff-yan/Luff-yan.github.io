# Java语言程序设计(基础篇)

每周日进行一次学习总结。学习教材为 [Java语言程序设计，梁勇](https://pan.baidu.com/s/1dZ9jrolw5ENwbz5matWbQQ)，提取码：1t1d
  
**目录**   
[2021.02.21](#jump) 
[2021.02.28](#jump)   
<span id="jump">
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

<span id = "jump">
<font color = yellow>
2021.02.28
</font>

这几天学习了第六章循环 while, do-while, for

