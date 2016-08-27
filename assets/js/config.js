require.config({
  baseUrl: 'js',
  paths: {
    requirejs: 'libs/requirejs/require',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min'
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
