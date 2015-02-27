(function coffeeHelloInit(module) {
  'use strict';

  module.exports = function(app, window, $, React, undefined) {
    var hello = React.createClass({
      render: function () {
        return (<span>hello</span>);
      }
    });

    return hello;
  };
})(module);
