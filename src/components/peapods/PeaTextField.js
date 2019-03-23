import React from 'react';
import TextField from '@material-ui/core/TextField';

const FilledTextField01 = props => (
  <React.Fragment>
    <TextField
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
    <TextField
      error
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
  </React.Fragment>
);

FilledTextField01.metadata = {
  name: 'Pea TextField',
};
FilledTextField01.codeSandbox = '';

export default FilledTextField01;
