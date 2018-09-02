var app = angular.module("app", ["ui.router","ui.bootstrap",'ng.ueditor']);//声明angular模块，并把ui-router传入主模块。
app.config(function ($stateProvider, $urlRouterProvider) {//将ui-router引擎作为函数参数传入
    $urlRouterProvider.when("", "/login");//配置路由重定向
    $stateProvider//定义路由状态
        .state("login", {//定义了会在main.html页面第一个展示出来的页面
            url: "/login",
            templateUrl: "login.html"
        })
        .state("home", {
            url:"/home",
            templateUrl: "home.html"
        })
        .state("home.articleList", {//这里用了"."进行连接，这里很重要，它会告诉路由引擎，我们在这里定义的是子页面/嵌入页面
            url:"/articleList?size&page&startAt&endAt&type&status",
            templateUrl: "articleList.html"
        })
        .state("home.articleDetails", {
            url:"/articleDetails?id",
            templateUrl: "articleDetails.html"
        });
});