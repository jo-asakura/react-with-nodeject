/*global require,window */

(function jsxLoader(module) {
  'use strict';

  module.exports = function (options) {
    options = options || {};

    // DI manager
    var Nodeject = require('nodeject');

    // NOTE:
    //  in case you have globally defined React on a client-side you can swap it to window.React;
    //  this way you can significantly reduce compiled file size
    var React = require('react');

    // NOTE:
    //  in case you have globally defined React on a client-side you can swap it to window.React.addons;
    //  this way you can significantly reduce compiled file size
    var ReactAddons = require('react/addons');

    // NOTE:
    //  this is how you can include any npm module to your project;
    //  in my example I show how to include underscore library
    var _ = require('underscore');

    var container = new Nodeject({ singleton: true });
    container
      .define({ name: 'window', wrap: { resolve: window || null } })
      .define({ name: '_', wrap: { resolve: _ } })
      .define({ name: 'require', wrap: { resolve: require } })
      .define({ name: 'React', wrap: { resolve: React } })
      .define({ name: 'ReactAddons', wrap: { resolve: ReactAddons } });

    container
      .define({
        name: '$',
        type: function (window) {
          return document.querySelector.bind(window.document);
        },
        deps: ['window']
      })
      .define({
        name: 'app',
        type: function () {
          if (window && !window.require) {
            window.require = require;
          }

          // define components
          if (options.configure) {
            _.each(options.configure, function (details, category) {
              _.each(details, function (item) {
                container.define(_.extend({ category: category }, item));
              });
            });
          }

          return {
            container: container,
            config: options.config || {}
          };
        }
      })
      .define({
        name: 'startup',
        type: function (app, window) {
          // NOTE:
          //  it's not required but if you want to access your React app
          //  on a client side from a global scope assign it to window
          window['reactApps'] = window['reactApps'] || {};
          window['reactApps'][options.config.name] = app;

          if (options.configure) {
            var components = {};

            _.each(options.configure, function (details, category) {
              components[category] = container.resolve({
                category: category,
                format: 'literal'
              });
            });

            app.components = components;
          }

          options.onLoaded = options.onLoaded || window.Function.prototype;
          options.onLoaded(app);
        },
        deps: ['app', 'window']
      });

    window.document.addEventListener('DOMContentLoaded', function () {
      container.resolve('startup');
    });
  };
})(module);
