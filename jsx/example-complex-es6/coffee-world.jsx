let coffeeWorldInit = (app, window, $, React, undefined) => {
  'use strict';

  class World extends React.Component {
    render() {
      return (
        <span>
          <strong>world</strong>
        </span>
      );
    }
  }

  return World;
};

export default coffeeWorldInit;