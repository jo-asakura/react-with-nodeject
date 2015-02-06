/** @jsx React.DOM */

let mainInit = (app, window, $, React, Hello, World, undefined) => {
  'use strict';

  return (element) => {
    var Index = React.createClass({
      render() {
        return (
          <div>
            <Hello />, ES6 <World />! <span>It's awesome :-D</span>
          </div>
        );
      }
    });

    React.render(<Index />, element);
  };
};

export default mainInit;