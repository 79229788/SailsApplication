# SailsApplication

a Sails Application [框架详细教程查看sials官方文档](http://sailsjs.org/documentation/concepts/){:target="_blank"}

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

### 6. 部分约束
1. 在Swig模板中link引用css请使用：

    ```html
    <!-- getCssUrl('assets/style/下中的资源路径') 例如 -->
    <link href="{{ getCssUrl('page-home') }}" rel="stylesheet" type="text/css"/>
    ```

1. 在Swig模板中script引用js请使用：

    ```html
    <!-- getJsUrl('assets/js/下中的资源路径') 例如 -->
    <script src="{{ getJsUrl('views/page-home/main') }}"></script>
    ```

1. 在Backbone View中获取html模板请使用：

    ```javascript
    require(["text!template.html"], function(temp) {
        var html = _.template(temp)({ items: item });
        $(this.el).html(html);
    });
    ```

1. 在Backbone View中异步加载css文件请使用：

    ```javascript
    require('css!styles/page-home');
    ```












