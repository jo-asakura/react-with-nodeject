/** @jsx React.DOM */

(function coffeeWorldInit(module) {
  'use strict';

  module.exports = function(app, window, React, undefined) {
    var world = React.createClass({
      render: function () {
        return (<span><strong>world</strong></span>);
      }
    });

    return world;
  };
})(module);
