module.exports = function(grunt) {
  grunt.config.set('requirejs', {
    dev: {
      options: {
        mainConfigFile: 'assets/js/config.js',
        baseUrl: "js",
        appDir: 'assets',
        dir: '.tmp/public',
        optimizeCss: "standard",
        fileExclusionRegExp: /^js-es6|sass/,

        modules: [
          {name: 'requirejs', include: ['text']},
          {name: 'config'},
          //Other main modules. Generally, a page only a main module
          {name: 'views/page-home/main'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
