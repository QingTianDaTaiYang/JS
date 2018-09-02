app.directive("upload",function($http){
    return{
        restrict:"EA",
        templateUrl:"../html/imgUpLoad.html",
        link:function(scope){
            scope.reader = new FileReader();
            scope.progress = 0;
            scope.readFile = function(e){
                scope.$apply(function(){
                    scope.file = e.files[0];//将选择的第一个文件保存
                    scope.fileName = scope.file.name;//数据绑定此文件名
                    scope.fileSize = scope.file.size;//数据绑定此文件大小
                    scope.showTbody = true;//展示文件信息。
                    scope.fileValue = e;
                })
            };
            //点击上传图片
            scope.fileUpload = function(){
                scope.formData = new FormData();//定义一个FormData对象。用以将数据编译成键值对。
                scope.formData.append("file",scope.file);
                $http({
                    method: "POST",
                    url: "/carrots-admin-ajax/a/u/img/task",
                    data: scope.formData,
                    headers:{'Content-Type': undefined}//不限制格式
                }).then(function(response){
                        if(response.data.code === 0){
                            scope.statusIcon = "glyphicon glyphicon-ok";
                            scope.progress = 100;
                            scope.imgSrc = response.data.data.url;
                            scope.imgShow = true;
                        }
                        else{
                            bootbox.alert("服务器出现错误");
                            scope.statusIcon = "glyphicon glyphicon-remove";
                        }
                    },function(){
                        bootbox.alert("服务器没有反馈，上传失败");
                        scope.statusIcon = "glyphicon glyphicon-remove"
                    }
                )
            };
            //点击删除图片
            scope.fileDelete = function(){
                scope.reader.abort();//中断上传
                scope.progress = 0;//给进度条赋值
                scope.ingSrc = "";//将预览图片赋空值
                scope.imgShow = false;//隐藏图片预览
                scope.fileValue.value = "";//将之前获取的文件value值设为空值
                scope.statusIcon = "";//去掉图标状态
                scope.showTbody = false;//隐藏文件信息展示
            };
        }
    }
});