module.exports = function(grunt) {
  grunt.config.set('requirejs', {
    dev: {
      options: {
        mainConfigFile: 'assets/js/config.js',
        baseUrl: "js",
        appDir: 'assets/js',
        dir: '.tmp/public/js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
