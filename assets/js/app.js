define(function(require) {
  require([ app.action]);
  //***获取资源url
  app.getJsUrl = function(url) {
    var path = app.paths.scripts + '/'  + (url.indexOf('.js') < 0 ? url + '.js' : url);
    var v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  app.getCssUrl = function(url) {
    var path = app.paths.styles + '/'  + (url.indexOf('.css') < 0 ? url + '.css' : url);
    var v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  app.getImageUrl = function(url) {
    var path = app.paths.images + '/'  + url;
    var v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  //***打印
  app.print = (function() {
    var log = console.log;
    return function(exception) {
      if(app.debug) {
        if (typeof exception.stack !== 'undefined') {
          log.call(console, exception.stack);
        } else {
          log.apply(console, arguments);
        }
      }
    }
  })();

});
