/** @jsx React.DOM */

(function teaMainInit(module) {
  'use strict';

  module.exports = function(app, window, React, undefined) {
    return function(element) {
      var Index = React.createClass({
        render: function () {
          return (
            <div>
              <span>tea app</span>: hello, yo!
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
