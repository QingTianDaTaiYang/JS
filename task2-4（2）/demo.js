"use strict";
// var aaa = /abc/igm;
// // var bbb = new RegExp("abc","mgi");
// var aaa1 = RegExp(aaa);//var aaa1 = RegExp(aaa)
// //---------------------------------------------------------------------------------------
// console.log(aaa);
// console.log(bbb);
//

// var reg = /aaa/;
// var str = "AAAaaaaaaaa";
// console.log(str.match(reg));
//-----------------------------------------------------------------------------------------------------
// var str="The rain in SPAIN stays mainly in the plain";
// var n=str.match(/ain/g);//加g不加g
// --------------------------------------------------------------------------------
//m 执行多行匹配
// var reg = /^a/m;
// var str = "abcde\na";
// console.log(str.match(reg));
// -----------------------------------------------------------------------------------
// reg.test();//只能判断字符串有没有符合要求的片段，返回结果只有true和flase
// str.match();//可以把所有东西都匹配出来，返回给你
//
// ----------------------------------------------------------------------------------------
// var reg = /[123456789][0-9A-z][]/g;//[]表示在这个位置可以取到的范围.一个[](表达式)代表一个区间
// var str = "1234qwrttdsagahhafd";
// //放在表达式[^]中的"^"代表的是“非”的意思

// ----------------------------------------------------------------------------------
// var reg = /(abc|bcd)[0-9]/g;
// var str = "bcd2";

// ------------------------------------------------------------------------------------

//  \w === [0-9A-z_]
//  \W === [^\w]
//  \d
//  \s  空白字符（包含很多，空格只是其中一个）
//  \s === [\t\n\r\v\f (空格)];
// var reg = /\s/;
// var str = "\t\n\r\v\f ";
// console.log(reg.test(str));
// var reg = /\tc/;// \t 匹配制表符
// var str = "ab\tc"; //会显示无法匹配 字符串中得是 "\tc"才匹配得到。
// console.log(reg.test(str));
// //如何匹配全部
// var reg = /[\d\D]/g;//他自己和他自己的补集 就可以匹配全部了
// //或
// var reg = /./g;
// -----------------------------------------------------------------------------------------

// var reg = /\w{3}/g;
// var str = "aadsagd";
// str.match(reg);

// -----------------------------------------------------------------------------------

// var reg = /^\d.*\d$/g;
// var str = "1q   we3";
// console.log(reg.test(str));
// -------------------------------------------------------------------------------
// var reg = /ab/g;
// var str = "abababab";

// reg.exec(str);//检索字符串中指定的值，返回找到的值，并确定其位置
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));

//可以通过 reg.lastIndex对游标（位置）进行手动修改
// reg.lastIndex = 2;
// console.log(reg.lastIndex);
// console.log(reg.exec(str));

// -------------------------------------------------------------------------------

// var str = "aabb";
// var reg = /(\w)\1(\w)\2/g;

// ----------------------------------------------------------------
//
// var reg = /ab/g;
// var str = "cabababab";
// console.log(str.search(reg));//匹配成功则返回位置值，否则返回-1
// console.log(str.split(reg));//split拆分字符串，括号里面可以填字符串，还可以填正则表达式

// --------------------------------------------------------------------------------------------

// str.replace("a","b");//替换，没有访问全局的能力，只能访问一个。
// 但如果 在后面加了 g,则可以全部替换
// var reg = /a/g;
// var str = "aa";
// console.log(str.replace(reg,"b"));
// var reg = /(\w)\1(\w)\2/;
// var str = "aabb";
// console.log(str.replace(reg,"$2$2$1$1"));//$2：表示引用第二个子表达式
// console.log(str.replace(reg,function($,$1,$2){//第一个$表示的是全局，是必须要的。这个函数系统自动调用，还会自动传参。本例用$表示
//     return $2 + $2 + $1 + $1 + "asd";//return用来返回一个字符串
// }));
// // str.toUpperCase() 字符串变大写
// // str.toLowerCase() 变小写

// ------------------------------------------------------------------------------------
// // the-first-name 变成小驼峰写法 theFirstName
// var reg = /-(\w)/g;
// var str = "the-first-name";
// console.log(str.replace(reg,function($,$1){
//     return $1.toUpperCase();
// }));
//
//正向预查/正向断言
// var str = "abaaaaa";//想选中后面有b的a 不选中b
// var reg = /a(?=b)/g;
// var reg = /a(?!b)/g//选中不带b的a,非正向预查

// -----------------------------------------------------------------------------------
// 贪婪匹配和非贪婪匹配
// var str = "aaaaa";
// var reg = /a+?/g;//有多个就不会匹配一个，贪婪模式
// console.log(str.match(reg));
// var reg = /a+?/g;//在量词后面加上?,就是非贪婪模式
// var reg = /a{1,3}?/g;//优先取1
// var reg = /a??/g; //第一个是选取0或1，第二个?是取消贪婪匹配


// var reg = //g;
// var str = "aaa11 _/n";
// console.log(reg.test(str));
// ------------------------------------------------------------------------------------
var str = "100000000";//如何变成100.000.000
// var reg = /(?=(\d{3}))/g;
var reg = /(?=(\B)(\d{3})+$)/g;
console.log(str.replace(reg,"."));








