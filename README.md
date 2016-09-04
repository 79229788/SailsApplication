# SailsApplication

An Empty Sails Application [sails文档请点击查看](http://sailsjs.org){:target="_blank"}

### 1. 前端清单

> * sails + swig -------------- //node框架、模板引擎
> * compass+sass ----------- //css预处理器
> * backbone ---------------- //用来mvc构架
> * jquery/zepto ------------ //操作dom
> * underscore -------------- //用于模板渲染
> * requirejs ----------------- //用来模块化


### 2. 全局安装项目

> * nodejs(官网下载包安装)
> * gem install compass -------------- //css预处理
> * npm -g bower --------------------- //js包管理
> * npm -g install sails --------------- //nodejs框架
> * npm -g grunt-cli ------------------ //grunt命令行（可选）

### 3. 初始化项目

```
npm install
```

### 4. 项目启动

```
sails lift
```

### 5. requirejs打包配置
1. task/config/requirejs.js

    ```javascript
    modules: [
        {name: 'requirejs', include: ['text']},
        {name: 'config'},
        //Other main modules. Generally, a page only a main module
        //其它的主模块文件。一般的，一个页面只有一个主模块文件
        {name: 'views/page-home/main'}
    ]
    ```
    为每一个页面指定一个或多个主模块，相应的页面就只会加载所指定的模块，其依赖的文件则会打包在一起

1. task/config/requirejs-md5.js

    ```javascript
    options: {
      md5Paths: [
        '.tmp/public/js/config.js',
        '.tmp/public/js/views',
        '.tmp/public/styles',
        '.tmp/public/temps'
      ],
      mainConfigFile: '.tmp/public/js/config.js',
      assetVersionFile: 'config/versions.js'
    }
    ```

    > * md5Paths： 需要遍历生成md5版本信息的文件/目录列表 --- (需在.tmp目录下)
    > * mainConfigFile: requirejs主配置文件 -------------------------- (需在.tmp目录下)
    > * assetVersionFile: 资源版本文件 -------------------------------- (需在sails.config目录下)

1. 打包特别说明! `务必注意`

    > * 请在config/debugs中，开启调试模式和非调试模式
    > * debug：true调试模式用于正常开发
    > * debug：false非调试模式用于打包文件
    > * 两者均用sails lift启动
    > * 另外部署在服务器上的项目请一直使用sails lift--prod启动


### 6. 使用约束 （以便正确的生成md5版本信息！！！）
1. 在siwg模板中或前端都暴露了一个app全局变量：
    > * getJsUrl： 获取assets/style/下的资源路径
    > * getCssUrl: 获取assets/js/下的资源路径
    > * getImageUrl: 获取assets/images/下的资源路径

    ```html
    <!-- 例如 swig模板中使用 -->
    <link href="{{ app.getCssUrl('page-home') }}" rel="stylesheet" type="text/css"/>
    <script src="{{ app.getJsUrl('views/page-home/main') }}"></script>
    <img src="{{ app.getImageUrl('logo.png') }}">
    ```
    ```javascript
    // 例如 BackBone View中使用
    $('#logo').attr('src', app.getImageUrl('logo.png'))
    ```

1. 在Backbone View中引用html模板，请使用：

    ```javascript
    require(["text!templates/dem.html"], function(temp) {
        var html = _.template(temp)({ items: item });
        //do something
    });
    ```

1. 在Backbone View中异步加载css文件，请使用：

    ```javascript
    require('css!styles/page-home');
    ```

1. 在Sass中引用图片url，请使用：

    ```css
    //image_url('') 例如
    background: image_url('../images/logo.png') no-repeat;
    ```












