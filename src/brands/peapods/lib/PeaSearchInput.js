import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import PeaIcon from './PeaIcon';

const PeaSearchInput = ({ className, ...props }) => (
  <InputBase
    className={`PeaSearchInput-root ${className}`}
    startAdornment={<PeaIcon icon={'search'} />}
    {...props}
  />
);

PeaSearchInput.propTypes = {
  className: PropTypes.string,
};
PeaSearchInput.defaultProps = {
  className: '',
};
PeaSearchInput.metadata = {
  name: 'Pea Search Input',
};
PeaSearchInput.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaSearchInput;
