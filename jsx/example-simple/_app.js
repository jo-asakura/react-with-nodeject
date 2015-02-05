/*global require */

(function exampleSimpleApp(window, undefined) {
  'use strict';

  var jsxLoader = require('../jsx-loader.js');
  jsxLoader({
    configure: require('./_configure.js'),
    config: {
      name: 'example-simple',
      namespace: 'demo',
      version: '0.0.1'
    },
    onLoaded: function (app) {
      app.components.exampleSimpleApp.main(window.document.querySelector('.js-simple-app-placeholder'));
    }
  });
})(window);
