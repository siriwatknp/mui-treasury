import React from 'react';
import TextField from '@material-ui/core/TextField';

export const getTheme = muiBaseTheme => {
  const space = muiBaseTheme.spacing.unit; // default = 8;
  return {
    MuiFilledInput: {
      root: {
        borderRadius: space / 2,
        backgroundColor: 'rgba(0,0,0,0.04)',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.08)',
        },
      },
      error: {
        backgroundColor: '#fff5f5',
        '&:hover': {
          backgroundColor: '#ffecec',
        },
        '&$focused': {
          backgroundColor: '#ffecec',
        },
      },
    },
    MuiInputLabel: {
      filled: {
        // fontWeight: 'bold',
      },
    },
  };
};

const FilledTextField01 = props => (
  <React.Fragment>
    <TextField
      variant={'filled'}
      fullWidth
      InputProps={{
        disableUnderline: true,
      }}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
    <TextField
      variant={'filled'}
      error
      fullWidth
      InputProps={{
        disableUnderline: true,
      }}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
  </React.Fragment>
);

FilledTextField01.getTheme = getTheme;
FilledTextField01.displayName = 'TextField';
FilledTextField01.metadata = {
  name: 'Filled TextField I',
  description: 'Custom Filled Variant No.1',
};
FilledTextField01.codeSandbox = 'https://codesandbox.io/s/jlp9jxoqy';

export default FilledTextField01;
