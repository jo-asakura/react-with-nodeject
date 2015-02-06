import jsxLoader from '../jsx-loader.js';
import config from './_configure.js';

(function exampleSimpleES6App(window, undefined) {
  'use strict';

  window.console.info('example-simple-es6 config:', config);

  jsxLoader({
    configure: config,
    config: {
      name: 'example-simple-es6',
      namespace: 'demo',
      version: '0.0.1'
    },
    onLoaded(app) {
      app.components.exampleSimpleApp.main(window.document.querySelector('.js-simple-app-placeholder'));
    }
  });
})(window);
