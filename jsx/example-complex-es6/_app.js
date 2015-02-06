import jsxLoader from '../jsx-loader.js';
import config from './_configure.js';

(function exampleComplexApp(window, undefined) {
  'use strict';

  window.console.info('example-complex-es6 config:', config);
  window.qwe = config;

  jsxLoader({
    configure: config,
    config: {
      name: 'example-complex-es6',
      namespace: 'demo',
      version: '0.0.1'
    },
    onLoaded(app) {
      app.components.megaApp['mega-main']();
    }
  });
})(window);
