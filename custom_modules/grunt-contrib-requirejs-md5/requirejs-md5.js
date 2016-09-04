module.exports = function (grunt) {

  grunt.log.writeln();

  var rd = require('rd');
  var fs = require('fs') ;
  var md5 = require('md5');
  var path = require('path') ;
  var _ = require('underscore');

  var opts = grunt.config.get('requirejs-md5').options;

  var tmpPath = '.tmp/public';
  var eachPaths = opts.md5Paths;
  var requireConfigPath = opts.mainConfigFile;
  var assetVersionPath = opts.assetVersionFile;

  grunt.registerTask('requirejs-md5', function() {
    grunt.log.writeln('任务执行中...');
    var versionObj = {};
    _.each(eachPaths, function(eachPath) {
      rd.eachSync(eachPath, function (f, s) {
        var path = eachPath + f.split(eachPath)[1];
        if(!s.isDirectory(path)) {
          var content = fs.readFileSync(path, 'utf-8');
          var version = md5(content).substr(0, 16);
          var key = path.replace(tmpPath, '');
          versionObj[key] = version;
        }
      });
    });
    var versionObjString = JSON.stringify(versionObj);
    versionObjString = "module.exports.versions = " + versionObjString + ";";
    versionObjString = versionObjString.replace(/{/g, "{\n\t");
    versionObjString = versionObjString.replace(/}/g, "\n}");
    versionObjString = versionObjString.replace(/,/g, ",\n\t");
    fs.writeFileSync(assetVersionPath, versionObjString);
    fs.writeFileSync(tmpPath + '/build-md5.txt', versionObjString);
    writeRequireVersionConfig();
    grunt.log.writeln('任务执行完成!');
  });

  /**
   * 获取Require配置文件内容
   * @returns text
   */
  function getRequireConfigContent() {
    if (fs.existsSync(requireConfigPath)) {
      return fs.readFileSync(requireConfigPath, 'utf-8');
    }
    return "";
  }

  /**
   * 写入Require版本配置
   */
  function writeRequireVersionConfig() {
    var requireConfigContent = getRequireConfigContent();
    if(requireConfigContent && requireConfigContent.indexOf('requirejs.s.contexts._.nameToUrl') < 0) {
      var scriptConfig = 'requirejs.s.contexts._.realNameToUrl=requirejs.s.contexts._.nameToUrl,requirejs.s.contexts._.nameToUrl=function(){var a=requirejs.s.contexts._.realNameToUrl.apply(this,arguments);a=a.replace("js/../",""),a="/"+a;var e=app.versions[a];return a+(e?"?v="+e:"")},';
      requireConfigContent = requireConfigContent.replace(/(require\.config\({[\s\S]*[^}\),]}\),)/g, '$1' + scriptConfig);
      fs.writeFileSync(requireConfigPath, requireConfigContent);
    }
  }


};
