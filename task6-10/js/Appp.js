var myApp = angular.module("myApp", ["ui.router"]);//声明angular模块，并把ui-router传入主模块。
myApp.config(function ($stateProvider, $urlRouterProvider) {//将ui-router引擎作为函数参数传入
    $urlRouterProvider.when("", "/PageTab");//会默认路径路由至PageTab.html
    $stateProvider
        .state("PageTab", {//定义了会在main.html页面第一个展示出来的页面
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {//这里用了"."进行连接，这里很重要，它会告诉路由引擎，我们在这里定义的是子页面/嵌入页面
            url:"/Page1",
            templateUrl: "Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });
});