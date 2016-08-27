/**
 * 指定compass配置文件，完成sass编译
 */
module.exports = function(grunt){
  grunt.config.set('compass',{
    dist: {
      options: {
        config: 'assets/config.rb',
        basePath: 'assets'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
