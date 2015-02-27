/*global process, require */
/*global module:false  */

module.exports = function (grunt) {
  var fs = require('fs');
  var _ = require('underscore');

  var reactApps = (fs.readdirSync('./jsx/') || []).reduce(function (memo, folder) {
    var path = './jsx/' + folder + '/_app.js';
    try {
      if (fs.statSync(path).isFile()) {
        memo['./compiled/' + folder + '.js'] = [path];
      }
    } catch (e) {
    }
    return memo;
  }, {});

  var reactAppsMin = _.keys(reactApps).reduce(function (memo, file) {
    memo[file.replace(/.js$/, '.min.js')] = file;
    return memo;
  }, {});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'browserify': {
      jsx: {
        files: reactApps,
        options: {
          transform: ['babelify', 'reactify']
        }
      }
    },
    'uglify': {
      jsx: {
        files: reactAppsMin
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task
  grunt.registerTask('default', ['browserify:jsx', 'uglify:jsx']);
};
