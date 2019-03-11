import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import { Box } from 'components/atoms';

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  handleCopy = (text, result) => {
    if (result) {
      this.setState({ copied: true }, () =>
        setTimeout(() => this.setState({ copied: false }), 1000),
      );
    }
  };

  renderCopier = ({ text }) => {
    const { copied } = this.state;
    return (
      <Box position={'absolute'} right={16}>
        <Tooltip open={copied} title={'Copied!'} placement={'left'}>
          <Box>
            <CopyToClipboard onCopy={this.handleCopy} text={text}>
              <IconButton style={{ backgroundColor: '#ffffff' }}>
                <Icon>file_copy_outlined</Icon>
              </IconButton>
            </CopyToClipboard>
          </Box>
        </Tooltip>
      </Box>
    );
  };

  render() {
    const { children } = this.props;
    return children({ renderCopier: this.renderCopier });
  }
}

Clipboard.propTypes = {
  children: PropTypes.func.isRequired,
};
Clipboard.defaultProps = {};

export default Clipboard;
