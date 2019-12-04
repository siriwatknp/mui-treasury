/* eslint-disable react/no-unused-state */
import React from 'react';

const fullContext = React.createContext({
  metadata: {},
  setMetadata: () => {},
});

export const useMetadata = () => React.useContext(fullContext);

const { Provider, Consumer } = fullContext;

class MetadataContext extends React.Component {
  constructor(props) {
    super(props);
    this.setComponent = Component => {
      this.setState({ Component });
    };
    this.state = {
      Component: {},
      setComponent: this.setComponent,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer };

MetadataContext.Consumer = Consumer;

export default MetadataContext;
