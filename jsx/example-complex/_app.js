/*global require */

(function exampleComplexApp(window, undefined) {
  'use strict';

  var jsxLoader = require('../jsx-loader.js');
  var config = require('./_configure.js');

  window.console.info('example-complex config:', config);

  jsxLoader({
    configure: config,
    config: {
      name: 'example-complex',
      namespace: 'demo',
      version: '0.0.1'
    },
    onLoaded: function (app) {
      app.components.megaApp['mega-main']();
    }
  });
})(window);
