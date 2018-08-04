"use strict";
document.getElementsByClassName("btn")[0].onclick = function(){
    var aaa = document.getElementById("warning");//获取提示位置的DOM
    var user = document.getElementById("user");//获取账号框
    var password = document.getElementById("password");//获取密码框
    if(user.value === ""){
        aaa.innerHTML = "请输入账号";
        return;//设置断点，没有这个会直接进行下一步。导致被后面的“输入密码”顶掉
    }
    if(password.value === ""){
        aaa.innerHTML = "请输入密码";
    }
    if(name.value !== "" && password.value !== ""){
        var xhr = new XMLHttpRequest();//新建请求对象
        xhr.open("post","/carrots-admin-ajax/a/login",true);//开启一个异步post请求,注意url的写法，这里的url省略了头部,/carrots-admin-ajax/为后台拦截名,拦截名后面为文件位置
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8"); //设置数据类型为发送表单数据
        xhr.send("name="+name+"&pwd="+password);//开始发送异步请求，注意书写格式，根据接口文档的post字段来写
        xhr.onreadystatechange = function(){//捕获请求状态，根据请求后返回的数据渲染页面
            if(xhr.readyState === 4){//服务器响应完成,返回的数据已经完全接收(也有可能接收错误的信息)
                if(xhr.status===200){//通信成功，访问正常
                    var response = JSON.parse(xhr.responseText);//取出服务器返回的JSON字符串并转换成对象数组，返回参数都是在接口文档里面预设好的
                    if(response.message === "success"){//表示信息提示为成功
                        location.href="http://dev.admin.carrots.ptteng.com/"
                    }
                    else{//表示信息提示不是成功而是错误提示
                        aaa.innerHTML = response.message;//显示错误提示
                    }
                }
            }
        }
    }
};
//jQuery方法
// $(document).ready(function(){
//     $(".btn").click(function(){//点击事件
//         var user = $("#user").val();//获取账号框的值
//         var password = $("#password").val();//获取密码框的值
//         if(user === ""){//如果账号框值为0
//             $("#warning").text("请输入账号");
//             return;
//         }
//         if(password === ""){//如果密码框值为0
//             $("#warning").text("请输入密码");
//         }
//         if(user !== "" && password !== ""){//账号框，密码框都有值时
//             $.ajax({
//                 type: "post",//定义请求方式
//                 dataType: "json",//数据类型
//                 url: "/carrots-admin-ajax/a/login",//文件在服务器上的位置
//                 data: {//数据
//                     name: user,//账号
//                     pwd: password//密码
//                 },
//                 success: function(response){
//                     if(response.message === "success"){
//                         location.href = "http://dev.admin.carrots.ptteng.com/"
//                     }
//                     else {
//                         $("#warning").text(response.message);
//                     }
//                     console.log(response);
//                 }
//             })
//         }
//     });
// });