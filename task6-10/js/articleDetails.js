app.controller("detailsCtrl",function($scope,$http,$state,$stateParams){

    //根据新增或编辑渲染标题
    if($stateParams.id){//判断为编辑页
        $scope.detailsTitle = "编辑Article";//改标题
        $http({//发送请求
            method: "GET",//请求文档里规定的请求
            url: "/carrots-admin-ajax/a/article/" + $stateParams.id,//后端要求，请求地址后面还要加上{id}
        }).then(function(response){//请求成功后
            $scope.article = response.data.data.article;//获取返回的参数
            $scope.title = $scope.article.title;//获取返回参数中的参数，获取标题内容并且赋值到view中
            $scope.type = $scope.article.type.toString();//这里转字符串是因为html中的value经过{{}}表达式后数据类型变成了字符串
            $scope.industry = $scope.article.industry.toString();//同上。
            $scope.content = $scope.article.content;//富文本编辑中的内容
            $scope.url = $scope.article.url;//获取跳转链接
            $scope.imgSrc = $scope.article.img;//图片展示路径
            $scope.imgShow = true;//请求成功后展示图片
            console.log(response);
        })
    }
    else {//不是编辑页，那边是新增页
        $scope.detailsTitle = "新增Article";
    }
    //渲染两个按钮，一个上线，一个草稿
    $scope.statusBtn = [
        {num:1,btnContent: "立即上线"},
        {num:2,btnContent: "存为草稿"}
    ];

    //点击按钮。这里的意思就是，不管是“上线按钮”还是“草稿按钮”，只要点击了按钮，就重新发送请求。
    $scope.submitChange = function(){
        $scope.thisNum = this.x.num;//将此按钮记下来用来判断点击的是哪个按钮
        if($stateParams.id){//确认为编辑页
            $http({//发送请求
                method: "PUT",
                url: "/carrots-admin-ajax/a/u/article/" + $stateParams.id,
                params: {//根据接口设置参数
                    title: $scope.title,//把内容的参数发送给后端
                    type: $scope.type,
                    industry: (Number($scope.type) === 3) ? Number($scope.industry) : undefined,
                    content: $scope.content,
                    url: $scope.url,
                    img: $scope.imgSrc,
                    status: ($scope.thisNum === 1) ? 2: 1,//根据按钮类型改状态//如果点击的是上线按钮，则状态为“上线”。如果点击的不是上线按钮（及草稿按钮），则状态为“草稿”
                    createAt: Number(new Date())//获取当前时间并转为时间戳。
                }
            }).then(function(response){
                if(response.data.code===0){//发送成功则
                    bootbox.alert(($scope.thisNum === 1) ? "上线成功" : "存稿成功");
                    $state.go("home.articleList",{reload:true})
                }
                else{
                    bootbox.alert("服务器抛回错误")
                }
            },function(){
                bootbox.alert("服务器没有反馈")
                }
            )
        }
        else{//确认为新增页
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/u/article",
                params:{
                    title: $scope.title,
                    type: $scope.type,
                    industry: (Number($scope.type) === 3) ? Number($scope.industry) : undefined,
                    content: $scope.content,
                    url: $scope.url,
                    img: $scope.imgSrc,
                    status:($scope.thisNum === 1) ? 2 : 1,
                    creatAt: Number(new Date())
                }
            }).then(function(response){
                 if(response.data.code === 0){
                    bootbox.alert(($scope.thisNum === 1) ? "上线成功":"存稿成功");
                    $state.go("home.articleList",{reload:true})
                }
                else{
                    bootbox.alert("服务器抛回错误")
                }
            },function(){
                bootbox.alert("服务器没有反馈")
                }
            )
        }
    };

    // //图片上传
    // $scope.reader = new FileReader();//异步读取计算机文件。如果这不不设置，那么上传后的图片将无法删除。因为无法读取就无法修改。
    // $scope.progress = 0;//给进度条赋值初始值0
    // // $scope.reader.onprogress = function (e) {//实时变动进度条
    // //   $scope.progress = Math.floor(e.lengthComputable ? e.loaded / e.total*100 : 0);
    // // };
    // $scope.readFile = function(e){
    //     $scope.$apply(function(){
    //         $scope.file = e.files[0];//将选择的第一个文件保存
    //         $scope.fileName = $scope.file.name;//数据绑定此文件名
    //         $scope.fileSize = $scope.file.size;//数据绑定此文件大小
    //         $scope.showTbody = true;//展示文件信息。
    //         $scope.fileValue = e;
    //     })
    // };
    // //点击上传图片
    // $scope.fileUpload = function(){
    //     $scope.formData = new FormData();//定义一个FormData对象。用以将数据编译成键值对。
    //     $scope.formData.append("file",$scope.file);
    //     $http({
    //         method: "post",
    //         url: "/carrots-admin-ajax/a/u/img/task",
    //         data: $scope.formData,
    //         headers:{'Content-Type': undefined}//不限制格式
    //     }).then(function(response){
    //         if(response.data.code === 0){
    //             $scope.statusIcon = "glyphicon glyphicon-ok";
    //             $scope.progress = 100;
    //             $scope.imgSrc = response.data.data.url;
    //             $scope.imgShow = true;
    //         }
    //         else{
    //             bootbox.alert("服务器出现错误");
    //             $scope.statusIcon = "glyphicon glyphicon-remove";
    //         }
    //     },function(){
    //         bootbox.alert("服务器没有反馈，上传失败");
    //         $scope.statusIcon = "glyphicon glyphicon-remove"
    //         }
    //     )
    // };
    // //点击删除图片
    // $scope.fileDelete = function(){
    //     $scope.reader.abort();//中断上传
    //     $scope.progress = 0;//给进度条赋值
    //     $scope.ingSrc = "";//将预览图片赋空值
    //     $scope.imgShow = false;//隐藏图片预览
    //     $scope.fileValue.value = "";//将之前获取的文件value值设为空值
    //     $scope.statusIcon = "";//去掉图标状态
    //     $scope.showTbody = false;//隐藏文件信息展示
    // };

    //重定制富文本编辑器开始
    window.UEDITOR_CONFIG.toolbars = [//重定制工具栏
        ['undo', 'redo', '|', 'bold', 'italic',
            'underline', 'strikethrough', '|',
            'forecolor ', 'backcolor', '|',
            'removeformat', '|', 'insertorderedlist',
            'insertunorderedlist', '|', 'selectall',
            'cleardoc', 'paragraph', 'fontfamily',
            'fontsize', '|', 'justifyleft', 'justifycenter',
            'justifyright', '|', 'link', 'unlink', '|',
            'emotion', 'simpleupload', 'fullscreen']
    ];
    window.UEDITOR_CONFIG.elementPathEnabled = false;//关闭元素路径显示
    window.UEDITOR_CONFIG.wordCount = true;//开启字数统计
    window.UEDITOR_CONFIG.maximumWords = 800;//允许的最大字符数
    //重定制富文本编辑器结束

    //用ng-repeat渲染多选下拉框内容
    $scope.selectType = [
        {num:"",type:"请选择"},
        {num:0,type:"首页banner"},
        {num:1,type:"找职位banner"},
        {num:2,type:"找精英banner"},
        {num:3,type:"行业大图"}
    ];
    $scope.selectIndustry = [
        {num:"",industry:"请选择"},
        {num:0,industry:"移动互联网"},
        {num:1,industry:"电子商务"},
        {num:2,industry:"企业服务"},
        {num:3,industry:"020"},
        {num:4,industry:"教育"},
        {num:5,industry:"金融"},
        {num:6,industry:"游戏"}
    ];







});