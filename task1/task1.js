// var box = document.getElementsByClassName("box");//获取节点
// var vacancy = [];//声明一个空数组，用于给获取的数组排上下标。
// // function boxColor(){
// //     for( i = 0;i < box.length,i++) {
// //         box[i].style.backgroundColor = "#ffa500";
// //     }
// // }
// function fff(){
//     for(i = 0;i < box.length;i++){
//         box[i].style.backgroundColor = "#ffa500";
//     }
// }//重置颜色，用于后续变色后回复原色
//
// function boxNum(){
//     for(i = 0;i < box.length; i++){
//         vacancy.push(i);
//     }
//     return vacancy;
// }//给空数组排上数字
// boxNum();
// function randomNumber(){
// for(i = 0;i < vacancy.length; i++) {//注意：在洗牌算法之前就已经存在一个数组vacancy。设置这个洗牌算法的目的就是把这个数组中的数进行“洗牌”
//     var ccc = Math.floor(Math.random() * vacancy.length);//通过Math事件先随机生成一个数（先随机抽一张牌，放到桌子上）
//     var center = vacancy[ccc];//把生成的数，与数组里的随机一个数进行对换（抽出来一张牌后与牌组里的任意一张牌进行对换）
//     vacancy[ccc] = vacancy[i];//把被换的数放到换的数原来的位置(把被换的牌放入换的牌的位置)
//     vacancy[i] = center;//把生成的随机数放入被抽出的数原来的位置（把选中的牌放入要交换的位置）
// }//洗牌算法
//     // return vacancy;
// }//对vacancy数组中的数字进行重新排序
// randomNumber();
// console.log(randomNumber());
// function randomColor(){
//  r = Math.floor(Math.random()*256);
//  g = Math.floor(Math.random()*256);
//  b = Math.floor(Math.random()*256);
// // return "rgb ("+ r +","+ g +","+ b +")";
//     if (" rgba(" + r + "," + g + "," + b + ")"
//         === " rgb(255,165,0)") {
//         return randomColor();
//     }
//     else {
//         return " rgb(" + r + "," + g + "," + b + ")";
//     }//递归防止和原来的重色
// }//随机颜色
//
// function changeColor(){
//     randomNumber();//调用之前的随机数函数
//     fff();//用于重置颜色
//     console.log(vacancy);
//     box[vacancy[0]].style.backgroundColor = randomColor();
//     box[vacancy[1]].style.backgroundColor = randomColor();
//     box[vacancy[2]].style.backgroundColor = randomColor();
// }
// var id;
// function start() {
//     clearInterval(id);
//     id = setInterval("changeColor()",1000);
// }
// function finish() {
//     clearInterval(id);
//     fff();
// }

//第二种
// var box = document.getElementsByClassName("box");
// var vacancy = [];//
// ~function sub() {
//     for(i = 0;i < box.length; i++){
//         vacancy.push(i);
//     }
// }()//给空数组排下标
// console.log(vacancy);
// function ranDomNum(){
//     for(i = 0;i < box.length;i++){
//         var ccc = Math.floor(Math.random()*(box.length));
//         center = vacancy[ccc];
//         vacancy[ccc] = vacancy[i];
//         vacancy[i] = center;
//     }
//     return vacancy;
// }
// ranDomNum();
// console.log(ranDomNum());
// function randomColor() {
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);
//     return "rgb("+ r +","+ g +","+ b +")";
//     if("rgb("+ r +","+ g +","+ b +")"
//         === "rgb(255,166,0)") {
//         return randomColor();
//     }
//     else{
//         return "rgb("+ r +","+ g +","+ b +")";
//     }
// }
// randomColor();//获取随机颜色
//
// function Color() {
//     for(i = 0;i < box.length;i++){
//         box[i].style.backgroundColor = "#ffa600";
//     }
// }
// Color();//重置颜色
//
// function Result() {
//     ranDomNum();
//     Color();
//     console.log(ranDomNum());
//     box[vacancy[0]].style.backgroundColor = randomColor();
//     box[vacancy[1]].style.backgroundColor = randomColor();
//     box[vacancy[2]].style.backgroundColor = randomColor();
// }
// var id;
// function start() {
//     clearInterval(id);
//     id = setInterval("Result()",1000);
// }
// function finish() {
//     clearInterval(id);
//     Color();
// }


// 第三遍
var aaa = document.getElementsByClassName("box");//选中节点
var bbb = [];//设置一个空数组
~function sub(){//创建一个函数
    for(i = 0;i < aaa.length;i++){//设置条件，依次排出三个数
        bbb.push(i);//把数放入数组中
    }
    return bbb;//返回一个数值，不然没用
}();//函数自执行
console.log(bbb);
function defaultColor() {
    for(var i = 0;i < aaa.length; i++){
        aaa[i].style.backgroundColor = "#ffa600";//选取节点.style.backgroundColor = "是值就打上冒号，是名就不用冒号"
    }
}//设置默认颜色，并且给他一个函数，方便日后调用。

function aaaNumber() {
    for(i = 0;i<aaa.length;i++) {//此函数的目的是洗牌，依次洗九次，以保证每张牌都能被洗一次。
        var ccc = Math.floor(Math.random()*(aaa.length));//抽取随机数（0~9之间）
        var center =  bbb[ccc];//把抽出来的牌先放到桌子上
        bbb[ccc] = bbb[i];//把第一张牌（按顺序依次抽）放到随机抽取牌的位置
        bbb[i] = center;//再把随机抽出来的牌放到第一张牌（按顺序依次牌排）的位置
    }
    return bbb;
}
aaaNumber();
console.log(aaaNumber());
function changeColor() {//颜色的选择用rgb，方便，只需要三个数。
    var r = Math.floor(Math.random()*256);//第一个数
    var g = Math.floor(Math.random()*256);//第二个数
    var b = Math.floor(Math.random()*256);//第三个数
    return "rgb("+ r +","+ g +","+ b +")";//然后把数进行拼接，返回值
}
changeColor(changeColor());

function Result() {
    aaaNumber();//该函数每执行一次，之前创建的数组里的数就进行依次洗牌
    defaultColor();//每执行一次重置一下颜色。
    console.log(aaaNumber());
    aaa[bbb[0]].style.backgroundColor = changeColor();
    aaa[bbb[1]].style.backgroundColor = changeColor();
    aaa[bbb[2]].style.backgroundColor = changeColor();//因为数组的数是随机的，所以变换三个只要取数组中前三个数，因为是0~9之间随机的
}
var id;
function start(){
    clearInterval(id);//使用clearInterval、clearTimeout 必须要设置一个ID进行关联。
    id = setInterval("Result()",1000);
}
function finish(){
    clearInterval(id);
    defaultColor();
}