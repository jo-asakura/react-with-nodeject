let helloES6Init = (app, window, $, React, undefined) => {
  'use strict';

  class Hello extends React.Component {
    render() {
      return (<span>hello</span>);
    }
  }

  return Hello;
};

export default helloES6Init;