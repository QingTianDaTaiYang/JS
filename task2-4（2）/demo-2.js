
// var reg = /a(?=zz)/g;
// var str = "azzaaaa";
// console.log(reg.test(str));
// // console.log(str.match(reg));

// var reg = /ab/g;
// var str = "abababab";
//
// reg.exec(str);//检索字符串中指定的值，返回找到的值，并确定其位置
// reg.lastIndex = 4;
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
//

// 可以通过 reg.lastIndex对游标（位置）进行手动修改
// reg.lastIndex = 2;
// console.log(reg.lastIndex);
// console.log(reg.exec(str));

// var reg = /ab/g;
// var str = "abababab";
// console.log(str.search(reg));//匹配成功则返回位置值，否则返回-1
// console.log(str.split(reg));//split拆分字符串，括号里面可以填字符串，还可以填正则表达式

// str.replace("a","b");//替换，没有访问全局的能力，只能访问一个。
// //但如果 在后面加了 g,则可以全部替换
// var reg = /a/g;
// var str = "aa";
// console.log(str.replace(reg,function(){
//
// }));
// var reg = /(\w)\1(\w)\2/;
// var str = "aabb";
// console.log(str.replace(reg,"$2$2$1$1"));//$2：表示引用第二个子表达式
// console.log(str.replace(reg,function($,$1,$2){//第一个$表示的是全局，是必须要的。这个函数系统自动调用，还会自动传参。本例用$表示
//     return $2 + $2 + $1 + $1 + "asd";//return用来返回一个字符串
// }));
// // str.toUpperCase() 字符串变大写
// // str.toLowerCase() 变小写

// ------------------------------------------------------------------------------------
// the-first-name 变成小驼峰写法 theFirstName
// var reg = /-(\w)/g;
// var str = "the-first-name";
// console.log(str.replace(reg,function($,$1){
//     return $1.toUpperCase();
// }));







