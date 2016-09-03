require.config({
  baseUrl: 'js',
  paths: {
    //base
    requirejs: 'libs/requirejs/require',
    text: 'libs/text/text',
    'css-builder': 'libs/require-css/css-builder',
    normalize: 'libs/require-css/normalize',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    jquery: 'libs/zepto/zepto.min',   //jquery: 'libs/jquery/jquery.min',  //二选一

    //custom
    combase: 'common/base'

  },
  shim: {
    underscore: { exports: '_' },
    jquery: { exports: '$' }
  },
  packages: [{

  }]
});

require(['js/app.js']);
