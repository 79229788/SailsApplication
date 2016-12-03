
module.exports = function(grunt){

  grunt.config.set('babel',{
    options: {
      sourceMap: false,
      presets: ['es2015']
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: 'assets/js-es6/',
          src: ['**/*.js', '!dependencies/**', '!libs/**'],
          dest: 'assets/js/'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};
