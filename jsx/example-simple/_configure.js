/*global require */

(function exampleSimpleConfigure(module, undefined) {
  'use strict';

  module.exports = {
    'exampleSimpleApp': [
      {
        name: 'hello',
        type: require('./hello.jsx'),
        deps: ['app', 'window', 'React']
      },
      {
        name: 'main',
        type: require('./main.jsx'),
        deps: ['app', 'window', 'React', 'hello', 'world']
      },
      {
        name: 'world',
        type: require('./world.jsx'),
        deps: ['app', 'window', 'React']
      }
    ]
  };
})(module);
