# Java语言程序设计(基础篇)

每周日进行一次学习总结。学习教材为 [Java语言程序设计，梁勇](https://pan.baidu.com/s/1Au0zqe8heyVQ-XxCbw2oYg)，提取码：8t3v
  
**目录**   
[2021.02.21](#jump_1)   
[2021.02.28](#jump_2)   
[2021.03.07](#jump_3)    
[2021.03.15](#jump_4)  
[2021.03.21](#jump_5)  
[2021.04.04](#jump_6)  
  

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
```java
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
```java
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
```java
for (int i = 1; i <= 100; i++) {   //知道具体的打印次数
    System.out.println("hello world!");
}
```

两种退出的语句：    
#break  
break语句用于跳出整个循环，例如：
```java
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
```java
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

```java
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
```
 1  2  3  4  5  6  7  8  9 10 11 12 13 14 
16 17 18 19 20 21 22 23 24 25 26 27 28 29 
31 32 33 34 35 36 37 38 39 40 41 42 43 44 
46 47 48 49 50 51 52 53 54 55 56 57 58 59 
61 62 63 64 65 66 67 68 69 70 71 72 73 74 
76 77 78 79 80 81 82 83 84 85 86 87 88 89 
91 92 93 94 95 96 97 98 99 100 
```
以上结果可以看到，没有 15 的倍数，当到达 15 时打印回车，并不是终结整个程序。


<span id="jump_3">
<font color=yellow>
2021.03.07
</font>

这几天学习了第六章方法  
方法的定义、传参、有无返回值  
程序设计和实现方法  
  
(1)无返回值  
```java
public static void Max() {
    System.out.print("hello world");
}  
//无返回值得函数，调用就可以直接打印，也可以不用传参。

```
(2)有返回值
```java
public static int Max(int n) {  //必须要参数，而且有返回值。
    if (n > 0) {
        return n;
    }
    else 
        return 0;
}
```

(3)程序设计和实现方法  
分层设计：自顶向下设计、自底向上设计  
设计一个总体的方案然后完成细节。  

示例学习 6.10 生成随机字符
```java
public class TestRandomCharacter {
    /**Main method*/
    public static void main(String[] args) {
        final int NUMBER_OF_CHARS = 100;
        final int CHARS_PER_LINE = 25;
        
        //Print random character between 'a' and 'z', 25 chars per line
        for (int i = 0; i < NUMBER_OF_CHARS; i++) {
            char ch = RandomCharacter.getRandomLowerCaseLetter();//调用方法的格式：类型.方法名
            if ((i + 1) % CHARS_PER_LINE == 0)
                System.out.println(ch);
            else
                System.out.print(ch);
        }
    }
}

class RandomCharacter {
    /**Generate a random character between ch1 and ch2 */
    public static char getRandomCharacter(char ch1, char ch2) {
        return (char)(ch1 + Math.random() * (ch2 - ch1 + 1));
    }
    
    /**Generate a random lowercase letter */
    public static char getRandomLowerCaseLetter() {
        return getRandomCharacter('a', 'z');
    }
    
    /**Generate a random uppercase letter */
    public static char getRandomUpperCaseLetter() {
        return getRandomCharacter('A', 'Z');
    }
    
    /**Generate a random digit character*/
    public static char getRandomDigitCharacter() {
        return getRandomCharacter('0', '9');
    }
    
    /**Generate a random character*/
    public static char getRandomCharacter() {
        return getRandomCharacter('\u0000', '\uFFFF');
    }
}
```

运行结果
```
tzpzrdvahdzdbdtjtnpwddwss
lkbtuqyqlsljtzlxthtdrzrlk
oopwmqnnoawjpmldginrzhliy
iauqexrtohnabofqekoaltkpz
```
  


<span id="jump_4">
<font color=yellow>
2021.03.15 
</font>  
第七章：一维数组  
7.2.6 处理数组  
5）找出最大元素 Example.java
```java
public class Random {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
        double [] myList = new double[5];       
        
        //Create Scanner
        System.out.println("Enter five numbers: ");     
        for (int i = 0; i < 5; i++) {
            myList[i] = input.nextDouble();
        }
        
        //Compare numbers
        double max = myList[0];
//      double index = 0;
        for (int i = 1; i < 5; i++) {
            if (max < myList[i]) {
                max = myList[i];
//              index = i;
            }
        }
        
        //Display result
        System.out.println("The max number is " + max);        
    }
}
```

6)找出最大元素的下标  
```java
public class Random {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
        double [] myList = new double[5];
        
        //Create Scanner
        System.out.println("Enter five numbers: ");     
        for (int i = 0; i < 5; i++) {
            myList[i] = input.nextDouble();
        }
        
        //Compare numbers
        double max = myList[0];
        double index = 0;
        for (int i = 1; i < 5; i++) {
            if (max < myList[i]) {
                max = myList[i];
                index = i;
            }
        }
        
        //Display result
        System.out.println("The max index of number is " + (index + 1));        
    }
}
```
  
7)数组随机生成数字：  
```java
for (int i = myList.length - 1; i > 0; i++) {
    //Generate an index of j randomly with 0 <= j <= i
    int i = (int)(Math.random() * (i * 1));

    //Swap myList[i] with myList[j]
    double temp = myList[i];
    myList[i] = myList[j];
    myList[j] = temp;
}
```
7.4示例学习：一副牌  
程序清单 7-2 DeckOfCards.java
```java
public class DeckOfCards {
    public static void main(String[] args) {
        int[] deck = new int[52];
        String[] suits = {"Spades", "Hearts", "Diamonds", "Clubs"};
        String[] ranks = {"Ace", "2", "3", "4", "5", 
                            "6", "7", "8", "9", "10", 
                            "Jack", "Queen", "King"};

        //Initialize the cards
        for (int i = 0; i < deck.length; i++) 
            deck[i] = i;

        //Shuffle the cards
        for (int i = 0; i < deck.length; i++){
            //Generate an index randomly
            int index = (int)(Math.random() * deck.length);
            int temp = deck[i];
            deck[i] = deck[index];
            deck[index] = temp;
        }

        //Display the first four cards
        for (int i = 0; i < 4; i++) {
            String suit = suits[deck[i] / 13];
            String rank = ranks[deck[i] % 13];
            System.out.println("Card number " + deck[i] + ": "
                            + rank + " of " + suit);
        }
    }
}
```
结果：  
```
Card number 43: 5 of Clubs
Card number 44: 6 of Clubs
Card number 37: Queen of Diamonds
Card number 32: 7 of Diamonds

```


  

  
  
<span id="jump_5">
<font color=yellow>
2021.03.21 
</font>  
第八章：二维数组  
1】定义  
二维数组的定义类似于一维数组  
    elementType[][] arrayName;  
例：
int[][] matrix;  
or  
int[][] matrix = {
    {0, 1, 2, 3, 4},
    {5, 6, 7, 8, 9}
};  

二维数组是使用两个下标，一个表示 行，一个表示 列。  
同一维数组一样，每个下标索引值都是 int 型。  
  
8.4将二维数组传递给方法  
程序清单8-1 PassTwoDimesionalArray
```java
import java.util.Scanner;

public class PassTwoDimesionalArray {
    public static void main(String[] args) {
        int[][] m = getArray(); //Get an array

        //Display sum of elements
        System.out.println("\nSum of all elements is " + sum(m));
    }

    public static int[][] getArray() {
        //Create a Scanner
        Scanner input = new Scanner(System.in);

        //Enter array values
        int[][] m = new int[3][4];
        System.out.println("Enter " + m.length + " rows and "
                    + m[0].length + " columns: ");
        for (int i = 0; i < m.length; i++)
            for (int j = 0; j < m[i].length; j++)
                m[i][j] = input.nextInt();
        return m;
    }

    public static int sum(int[][] m) {
        int total = 0;
        for (int row = 0; row < m.length; row++)
            for (int column = 0; column < m[row].length; column++)
                total += m[row][column];

        return total;
    }
}
```
  
要点提示：将一个二维数组转递给方法的时候，数组的引用传递给了方法  
  
  
<span id="jump_6">
<font color=yellow>
2021.04.04 
</font>  
第九章：对象和类  
学习了第九章的前5个小节  
从这一章开始正式进入面向对象编程   
OOP:(Object Oriented Programming)面向对象编程  
OOD:(Object Oriented Design)面向对象设计  
OOA:(Object Oriented Analysis)面向对象分析方法  

我们这里引入OOP概念：  
引言：面向对象编程可以有效的帮助开发大规模的软件以及图形用户界面 
面向对象就是增加了可维护性，但是运行效率还是不如面向过程  
  
9.3示例：定义类和创建对象  
程序构造了三个圆对象，其半径分别为1，25和125，然后显示这三个圆的半径和面积  
然后将第二个对象的半径改为100，并显示它的新半径和面积  
程序清单9-1 TestSimpleCircle.java
```java
public class TestSimpleCricle {
    public static void main(String[] args) {
        
        //Create circle with radius 1
        SimpleCircle circle1 = new SimpleCircle();
        System.out.println(circle1.radius + " is " + circle1.getArea());
        
        //Create circle with radius 25
        SimpleCircle circle2 = new SimpleCircle(25);
        System.out.println(circle2.radius + " is " + circle2.getArea());
        
        //Create circle with radius 125
        SimpleCircle circle3 = new SimpleCircle(125);
        System.out.println(circle3.radius + " is " + circle3.getArea());
        
        //Modify circle radius
        circle2.radius = 100;   //or circle2.setRadius(100)
        System.out.println(circle2.radius + " is " + circle2.getArea());
    }
}


//Define the circle class with two constructors
class SimpleCircle {
    double radius;
    
    /** construct a circle with radius1 */
    SimpleCircle() {
        radius = 1;
    }
    
    /** Return the area of this circle */
    double getArea() {
        return radius * radius * Math.PI;
    }
    
    /** Construct a circle with a specified radius */
    SimpleCircle(double newRadius) {
        radius = newRadius;
    }
    
    /**Return the perimeter of this circle */
    double getPerimeter() {
        return 2 * radius * Math.PI;
    }
    
    /** Set a new radius for this circle */
    void setRadius(double newRadius) {
        radius = newRadius;
    }
}
```
  
程序包括两个类，第一个类TestSimpleCircle是主类，它的目的是为了测试第二个类  
是这样类的程序称为该类的客户(client)。  
  
9.5通过引用对象访问对象  
要点提示：对象的数据和方法可以运用点操作符(.)通过对象的引用变量进行访问  
新创建的对象在内存中被分配空间。它们可以通过引用来访问。  
  
9.5.2访问对象的数据和方法  
objectRefVar.dataField引用对象的数据域  
objectRefVar.method(arguments)调用对象的方法  
  
9.5.3 引用数据域和 null 值  
数据域有可能是引用型的。如果一个引用类型的数据域没有引用任何对象，那么这个数据域就有一个 特殊的Java值 null。null同true 和 false 一样都是一个直接量。true 和 false 是 boolean  类型直接量，而 null 是引用类型直接量。  
引用类型数据域的默认值是 null， 数值类型数据域默认值是 0， boolean类型数据域的默认值是 false, 而 char 类型数据域的默认值是 '\u0000'。但是Java 没有给方法中的局部变量赋默认值。  
```java
class Student {
    String name;    //name has the default value null
    int age;        //age has the default value0
    boolean isScienceMajor;     //isScienceMajor has default value false
    char gender;            //gender has default value '\u0000'
}

public class Test {
    public static void main(String[] args) {
        Student student = new Student();
        System.out.println("name? " + student.name);
        System.out.println("age? " + student.name);
        System.out.println("isScienceMajor? " + student.isScienceMajor);
        System.out.println("gender? " + student.gender);
    }
}
```
输出：
```
name? null
age? null
isScienceMajor? false
gender? 
```
  
9.5.4 基本数据类型变量和引用类型变量的区别  
每个变量都代表一个存储值得内存位置。  
对基本类型变量来说，对应内存所存储的值是基本类型值；  
对引用类型变量来说，对应内存所存储的值是一个引用，是对象的存储地址。  
  

9.7静态变量、常量和方法  
静态变量被类中的所有对象所共享。静态方法不能访问类中的实例成员。  
例如，假设创建了如下的两个对象：  
```java
Circle circle1 = new Circle();
Circle circle2 = new Circle(5);
```
circle1中的radius 和 circle2 中的radius是不相关的，它们存储在不同的内存位置。  
circle1中的radius的变化不会影响circle2中的radius，反之亦然。  
如果想让一个类的所有实例共享数据，就要使用静态变量(static variable),也称为 类变量(class variable)。  
  

9.8 可见性修饰符  
可见性修饰符可以用于确定一个类以及它的成员的可见性。  
可以在类、方法和数据域前使用public修饰符，表示它们可以被任何其他的类访问。如果没有使用可见性修饰符，那么则默认类、方法和数据域是可以被同一个包中的任何一个类访问的。  
这称作包私有(package-private)或包内访问(package-access)。  
  
private修饰符限定方法和数据域只能在它自己的类中被访问。  
  
9.9 数据域封装  
将数据域设为私有保护数据，并且使类易于维护。  
为了避免对数据域的直接修改，应该使用private修饰符将数据域声明为私有的，这称为数据域封装。  
为了能够访问私有数据域，可以提供一个 get 方法返回数据域的值。为了能够更新一个数据域，可以提供一个 set 方法给数据域设置新值。get 方法也称为 访问器(accessor), 而 set 方法称为 修改器 (mutator)。  
