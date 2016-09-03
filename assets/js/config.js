require.config({
  baseUrl: 'js',
  paths: {
    //base
    requirejs: 'libs/requirejs/require',
    text: 'libs/text/text',
    'css-builder': 'libs/require-css/css-builder',
    normalize: 'libs/require-css/normalize',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min'
    //custom

  },
  shim: {
    underscore: {
      exports: '_'
    }
  },
  packages: [{

  }]
});

require(['js/app.js']);
