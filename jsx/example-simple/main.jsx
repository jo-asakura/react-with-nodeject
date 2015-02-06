/** @jsx React.DOM */

(function mainInit(module) {
  'use strict';

  module.exports = function(app, window, $, React, Hello, World, undefined) {
    return function(element) {
      var Index = React.createClass({
        render: function () {
          return (
            <div>
              <Hello />, <World />!
            </div>
          );
        }
      });

      React.render(<Index />, element);
    };
  };
})(module);
