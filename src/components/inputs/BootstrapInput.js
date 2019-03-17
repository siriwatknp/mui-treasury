/* eslint-disable react/prop-types */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';

export const getTheme = muiBaseTheme => {
  const { white } = muiBaseTheme.palette.common;
  return {
    MuiInputBase: {
      root: {
        '&.BootstrapInput-root': {
          '& .BootstrapInput-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: white,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ced4da',
            fontSize: 16,
            width: 'auto',
            padding: '10px 12px',
            transition: muiBaseTheme.transitions.create([
              'border-color',
              'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
              borderRadius: 4,
              borderColor: '#80bdff',
              boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
          },
          '&.BootstrapInput-valid': {
            '& .BootstrapInput-input': {
              borderColor: '#28a745 !important',
              '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(40,167,69,.25)',
              },
            },
          },
          '&.BootstrapInput-error': {
            '& .BootstrapInput-input': {
              borderColor: '#dc3545 !important',
              '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(220,53,69,.25)',
              },
            },
          },
        },
      },
    },
  };
};

const BootstrapInput = ({ classes, ...props }) => (
  <React.Fragment>
    <InputBase
      classes={{
        root: 'BootstrapInput-root',
        input: 'BootstrapInput-input',
        ...classes,
      }}
      className={'BootstrapInput-root'}
      placeholder={'Username'}
      {...props}
    />
    <InputBase
      classes={{
        root: 'BootstrapInput-root BootstrapInput-error',
        input: 'BootstrapInput-input',
        ...classes,
      }}
      className={'BootstrapInput-root'}
      placeholder={'Username'}
      {...props}
    />
    <InputBase
      classes={{
        root: 'BootstrapInput-root BootstrapInput-valid',
        input: 'BootstrapInput-input',
        ...classes,
      }}
      className={'BootstrapInput-root'}
      placeholder={'Username'}
      {...props}
    />
  </React.Fragment>
);

BootstrapInput.getTheme = getTheme;
BootstrapInput.displayName = 'Input';
BootstrapInput.metadata = {
  name: 'Bootstrap Input',
  description: 'Implement Bootstrap Input',
};
BootstrapInput.codeSandbox = 'https://codesandbox.io/s/52x3p8rk3n';

export default BootstrapInput;
