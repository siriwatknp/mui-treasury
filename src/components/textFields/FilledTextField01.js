import React from 'react';
import TextField from '@material-ui/core/TextField';

export const getTheme = ({ spacing }) => {
  const space = spacing(1); // default = 8;
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
    MuiFormHelperText: {
      root: {
        lineHeight: '2em',
      },
      contained: {
        marginTop: space / 4,
      },
    },
  };
};

const FilledTextField01 = props => (
  <div>
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
    <div style={{ paddingBottom: 12 }} />
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
  </div>
);

FilledTextField01.getTheme = getTheme;

export default FilledTextField01;
