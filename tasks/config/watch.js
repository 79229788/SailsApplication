/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
const _ = require('underscore');
const debugs = require('../../config/debugs');
module.exports = function(grunt) {

  const assetsTasks = [
    debugs.debugs.realTimeBabel ? 'babel' : null,
    !debugs.debugs.realTimeBabel ? 'sync:devEs6' : null,
    'sync:dev'
  ];

  grunt.config.set('watch', {
    assets: {
      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],
      // When assets are changed:
      tasks: _.compact(assetsTasks)
    },
    compass: {
      files: ['assets/sass/{,*/}*.scss'],
      tasks: ['compass', 'sync:dev']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
