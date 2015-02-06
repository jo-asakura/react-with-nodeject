/** @jsx React.DOM */

let coffeeWorldInit = (app, window, $, React, undefined) => {
  'use strict';

  return React.createClass({
    render() {
      return (
        <span>
          <strong>world</strong>
        </span>
      );
    }
  });
};

export default coffeeWorldInit;