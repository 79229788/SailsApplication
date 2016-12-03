define(function(require) {
  require([ app.action]);
  //***获取资源url
  app.getJsUrl = function(url) {
    let path = app.debugs.paths.scripts + '/'  + (url.indexOf('.js') < 0 ? url + '.js' : url);
    let v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  app.getCssUrl = function(url) {
    let path = app.debugs.paths.styles + '/'  + (url.indexOf('.css') < 0 ? url + '.css' : url);
    let v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  app.getImageUrl = function(url) {
    let path = app.debugs.paths.images + '/'  + url;
    let v = app.debug ? '?dev=' + new Date().getTime() : '?v=' + app.versions[path];
    return path + v;
  };
  //***打印
  app.print = (function() {
    let log = console.log;
    return function(exception) {
      if(app.debugs.debug) {
        if (typeof exception.stack !== 'undefined') {
          log.call(console, exception.stack);
        } else {
          log.apply(console, arguments);
        }
      }
    }
  })();

});
