/*global require */

(function exampleSimpleApp(window, undefined) {
  'use strict';

  var jsxLoader = require('../jsx-loader.js');
  var config = require('./_configure.js');

  window.console.info('example-simple config:', config);

  jsxLoader({
    configure: config,
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
