/** @jsx React.DOM */

let helloES6Init = (app, window, $, React, undefined) => {
  'use strict';

  return React.createClass({
    render() {
      return (<span>hello</span>);
    }
  });
};

export default helloES6Init;