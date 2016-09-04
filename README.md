# SailsApplication

a [Sails](http://sailsjs.org) application

### 1. 前端清单

1. sails + swig -------------- //node框架、模板引擎
1. compass+sass -------------- //css预处理器
1. backbone ------------------ //用来mvc构架
1. jqurey/zepto -------------- //操作dom
1. underscore ---------------- //用于模板渲染
1. requirejs ----------------- //用来模块化


### 2. 全局安装项目

> * nodejs(官网下载包安装)
> * gem install compass -------------- //css预处理
> * npm -g bower --------------------- //js包管理
> * npm -g install sails ------------- //nodejs框架
> * npm -g grunt-cli ----------------- //grunt命令行（可选）

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

```
modules: [
        {name: 'requirejs', include: ['text']},
        {name: 'config'},
        //Other main modules. Generally, a page only a main module
        //其它的主模块文件。一般的，一个页面只有一个主模块文件
]
```
为每一个页面指定一个或多个主模块，相应的页面就只会加载所指定的模块，其依赖的文件则会打包在一起

1. task/config/requirejs-md5.js

```
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

> * md5Paths： 需要遍历生成md5版本信息的文件/目录列表
> * mainConfigFile: requirejs主配置文件
> * assetVersionFile: 资源版本文件

















