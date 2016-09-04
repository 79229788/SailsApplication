/**
 * `requirejs-md5` -- MD5版本生成器 (一般在.tmp完全压缩打包完成后使用)
 *
 * ---------------------------------------------------------------
 *
 * 对项目.tmp中的指定资源文件进行md5版本生成, 版本信息将指定保存到sails的config文件中
 *
 * 版本信息格式: {assets中的文件路径: MD5版本号}
 * 例如: {"/js/config.js": "d0a9b7d7968d19beee9d830f7c12116f"}
 *
 * 参数说明:
 * md5Paths: 需要遍历生成md5信息的文件/目录列表    (需在.tmp目录)
 * mainConfigFile: requirejs主配置文件          (需在.tmp目录)
 * assetVersionFile: 资源版本文件               (需在sails.config目录)
 *
 *
 */
module.exports = function(grunt) {
  grunt.config.set('requirejs-md5', {
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
  });

  grunt.loadTasks('custom_modules/grunt-contrib-requirejs-md5');
};
