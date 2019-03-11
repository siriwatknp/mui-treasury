import React from 'react';

export default (name, setName, initialValue) => WrappedComponent => {
  class WithState extends React.Component {
    constructor() {
      super();
      this.state = {
        [name]: initialValue,
      };
    }

    setVal = val => {
      this.setState({ [name]: val });
    };

    render() {
      return (
        <WrappedComponent {...this.state} {...{ [setName]: this.setVal }} />
      );
    }
  }
  return WithState;
};
