let coffeeMainInit = (app, window, $, React, Hello, World, undefined) => {
  'use strict';

  return (element) => {
    class Index extends React.Component {
      render() {
        return (
          <div>
            <span>coffee app</span>: <Hello />, <World /> form ES6!
          </div>
        );
      }
    }

    React.render(<Index />, element);
  };
};

export default coffeeMainInit;