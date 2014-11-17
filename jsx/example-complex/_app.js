/*global require */

(function exampleComplexApp(window, undefined) {
  'use strict';

  var jsxLoader = require('../jsx-loader.js');
  jsxLoader({
    configure: require('./_configure.js'),
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
