/*global require */

(function exampleComplexConfigure(module, undefined) {
  'use strict';

  module.exports = {
    'coffeeApp': [
      {
        name: 'coffee-hello',
        type: require('./coffee-hello.jsx'),
        deps: ['app', 'window', 'React']
      },
      {
        name: 'coffee-main',
        type: require('./coffee-main.jsx'),
        deps: ['app', 'window', 'React', 'coffee-hello', 'coffee-world']
      },
      {
        name: 'coffee-world',
        type: require('./coffee-world.jsx'),
        deps: ['app', 'window', 'React']
      }
    ],
    'teaApp': [
      {
        name: 'tea-main',
        type: require('./tea-main.jsx'),
        deps: ['app', 'window', 'React']
      }
    ],
    'megaApp': [
      {
        name: 'mega-main',
        type: require('./mega-main.jsx'),
        deps: ['app', 'window', 'coffee-main', 'tea-main'] // <-- external dependencies, \o/
      }
    ]
  };
})
(module);
