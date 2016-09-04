define(function(require) {
  require([ app.action]);
  // 获取资源url
  app.getJsUrl = function(url) {
    var path = app.paths.scripts + '/'  + (url.indexOf('.js') < 0 ? url + '.js' : url);
    var v = app.versions[path];
    return path + (v ? '?v=' + v : '');
  };
  app.getCssUrl = function(url) {
    var path = app.paths.styles + '/'  + (url.indexOf('.css') < 0 ? url + '.css' : url);
    var v = app.versions[path];
    return path + (v ? '?v=' + v : '');
  };
  app.getImageUrl = function(url) {
    var path = app.paths.images + '/'  + url;
    var v = app.versions[path];
    return path + (v ? '?v=' + v : '');
  };

});
