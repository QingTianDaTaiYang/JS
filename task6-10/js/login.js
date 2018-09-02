
app.controller("loginCtrl",function($scope,$http,$state){
    $scope.submitForm = function(formValid){//“formValid”为函数的实参“loginForm.$valid”
        $scope.message = "";//将错误提示信息清空
        if(formValid){//如果输入的数据符合则：
            $http({
                method: "post",//表示发送的请求类型
                url:"/carrots-admin-ajax/a/login",//字符串。请求的目标
                data: $.param({name: $scope.name, pwd: $scope.pwd}),//序列化。字符串或者对象。包含了被当做消息体发送给服务器的数据，一般在post请求中用
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}//请求头(随请求发送的HTTP头字符串)。在我们做POST跨域和后台配合的时候用到。
            }).then(function successCallback(response){//then()第一个参数是请求成功的执行函数，第二个参数是请求失败的执行函数
                console.log(response);
                if(response.data.code===0){//如果服务器返回了值，及表示响应成功则： （code为与后端约定的一个东西）
                    $state.go("home");
                }
                else{
                    console.log(response);
                    $scope.message = response.data.message;//data中包含data、code、message
                }
            })
        }
    };
});
