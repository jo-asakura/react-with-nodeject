let worldES6Init = (app, window, $, React, undefined) => {
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

export default worldES6Init;
