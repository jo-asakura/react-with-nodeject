let teaMainInit = (app, window, $, React, undefined) => {
  'use strict';

  return function (element) {
    class Index extends React.Component {
      render() {
        return (
          <div>
            <span>tea app</span>: hello, yo from ES6!
          </div>
        );
      }
    }

    React.render(<Index />, element);
  };
};

export default teaMainInit;