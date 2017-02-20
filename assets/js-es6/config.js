require.config({
  urlArgs: 'dev=' + new Date().getTime(),
  baseUrl: 'js',
  paths: {
    //libs
    requirejs: '../libs/requirejs/require',
    text: '../libs/text/text',
    css: '../libs/require-css/css',
    'css-builder': '../libs/require-css/css-builder',
    normalize: '../libs/require-css/normalize',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone',
    jquery: '../libs/jquery/dist/jquery',   //jquery: '../libs/zepto/zepto.min',  //二选一
    //base
    styles: '../styles',
    templates: '../templates',
    //custom


  },
  shim: {
    underscore: { exports: '_' },
    jquery: { exports: '$' }
  },
  packages: [{

  }]
});

require(['js/app.js']);
