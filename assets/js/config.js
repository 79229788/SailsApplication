require.config({
  baseUrl: 'js',
  paths: {
    requirejs: 'libs/requirejs/require',
    text: 'libs/text/text',
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

//requirejs请求设置版本号
requirejs.s.contexts._.realNameToUrl = requirejs.s.contexts._.nameToUrl;
requirejs.s.contexts._.nameToUrl = function() {
  var url = requirejs.s.contexts._.realNameToUrl.apply(this, arguments);
  if(url.indexOf("libs/") < 0) {
    return url + '?t=' + app.version;
  }
  return url
};

require(['js/app.js']);
