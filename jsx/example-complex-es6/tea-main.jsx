/** @jsx React.DOM */

let teaMainInit = (app, window, $, React, undefined) => {
  'use strict';

  return function (element) {
    var Index = React.createClass({
      render() {
        return (
          <div>
            <span>tea app</span>: hello, yo from ES6!
          </div>
        );
      }
    });

    React.render(<Index />, element);
  };
};

export default teaMainInit;