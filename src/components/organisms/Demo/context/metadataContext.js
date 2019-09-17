/* eslint-disable react/no-unused-state */
import React from 'react';

const { Provider, Consumer } = React.createContext({
  metadata: {},
  setMetadata: () => {},
});

class MetadataContext extends React.Component {
  constructor(props) {
    super(props);
    this.setMetadata = metadata => {
      this.setState({ metadata });
    };
    this.state = {
      metadata: {},
      setMetadata: this.setMetadata,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer };

MetadataContext.Consumer = Consumer;

export default MetadataContext;
