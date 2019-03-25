import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import PeaIcon from './PeaIcon';

const PeaSearchInput = props => (
  <InputBase
    className={'PeaSearchInput-root'}
    startAdornment={<PeaIcon icon={'search'} />}
    {...props}
  />
);

PeaSearchInput.metadata = {
  name: 'Pea Search Input',
};
PeaSearchInput.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaSearchInput;
