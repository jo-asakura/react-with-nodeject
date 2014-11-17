/** @jsx React.DOM */

(function coffeeMainInit(module) {
  'use strict';

  module.exports = function(app, window, React, Hello, World, undefined) {
    return function(element) {
      var Index = React.createClass({
        render: function () {
          return (
            <div>
              <span>coffee app</span>: <Hello />, <World />!
            </div>
          );
        }
      });

      React.renderComponent(
        <Index />,
        element
      );
    };
  };
})(module);
