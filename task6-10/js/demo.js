"use strict";
var myApp = angular.module("myApp",[]);
myApp.directive("hello",function(){

    return {
        restrict: "AEMC",
        template: "<div>hi hello!</div>",
        replace: true
    }

});

// //重定制富文本编辑器开始
// window.UEDITOR_CONFIG.toolbars = [//重定制工具栏
//     ['undo', 'redo', '|', 'bold', 'italic',
//         'underline', 'strikethrough', '|',
//         'forecolor ', 'backcolor', '|',
//         'removeformat', '|', 'insertorderedlist',
//         'insertunorderedlist', '|', 'selectall',
//         'cleardoc', 'paragraph', 'fontfamily',
//         'fontsize', '|', 'justifyleft', 'justifycenter',
//         'justifyright', '|', 'link', 'unlink', '|',
//         'emotion', 'simpleupload', 'fullscreen']
// ];
// window.UEDITOR_CONFIG.elementPathEnabled = false;//关闭元素路径显示
// window.UEDITOR_CONFIG.wordCount = true;//开启字数统计
// window.UEDITOR_CONFIG.maximumWords = 800;//允许的最大字符数
// //重定制富文本编辑器结束