import React from 'react';
import TextField from '@material-ui/core/TextField';

export const getTheme = muiBaseTheme => {
  const space = muiBaseTheme.spacing.unit; // default = 8;
  const { white } = muiBaseTheme.palette.common;
  const { primary: textPrimary } = muiBaseTheme.palette.text;
  const helperTextColor = '#6c757d';
  const validColor = '#28a745';
  const errorColor = '#dc3545';
  const fontFamily = [
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
  ].join(',');
  return {
    MuiFormControl: {
      root: {
        '&.BootstrapFormControl-root': {
          '& label + .BootstrapInput-formControl': {
            marginTop: space,
          },
          '& .BootstrapFormLabel-root': {
            position: 'initial',
            textAlign: 'left',
            transform: 'none',
            color: textPrimary,
            fontFamily,
          },
          '& .BootstrapInput-input': {
            color: '#495057',
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
            fontFamily,
            '&:focus': {
              borderRadius: 4,
              borderColor: '#80bdff',
              boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
          },
          '& .BootstrapFormHelperText-root': {
            fontFamily,
            color: helperTextColor,
            lineHeight: '19.2px',
            marginTop: space / 2,
            fontSize: 12.8,
          },
          '&.BootstrapFormControl-valid': {
            '& .BootstrapInput-input': {
              borderColor: `${validColor} !important`,
              '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(40,167,69,.25)',
              },
            },
            '& .BootstrapFormHelperText-root': {
              color: validColor,
            },
          },
          '&.BootstrapFormControl-error': {
            '& .BootstrapInput-input': {
              borderColor: `${errorColor} !important`,
              '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(220,53,69,.25)',
              },
            },
            '& .BootstrapFormHelperText-root': {
              color: errorColor,
            },
          },
        },
      },
    },
  };
};

const BootstrapTextField = props => (
  <React.Fragment>
    <TextField
      classes={{
        root: 'BootstrapFormControl-root',
      }}
      InputLabelProps={{
        className: 'BootstrapFormLabel-root',
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: 'BootstrapInput-root',
          input: 'BootstrapInput-input',
          formControl: 'BootstrapInput-formControl',
        },
      }}
      FormHelperTextProps={{
        className: 'BootstrapFormHelperText-root',
      }}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
    <TextField
      classes={{
        root: 'BootstrapFormControl-root BootstrapFormControl-valid',
      }}
      InputLabelProps={{
        className: 'BootstrapFormLabel-root',
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: 'BootstrapInput-root',
          input: 'BootstrapInput-input',
          formControl: 'BootstrapInput-formControl',
        },
      }}
      FormHelperTextProps={{
        className: 'BootstrapFormHelperText-root',
      }}
      label={'Valid'}
      placeholder={'Username'}
      helperText={'Valid Helper Text'}
      {...props}
    />
    <TextField
      classes={{
        root: 'BootstrapFormControl-root BootstrapFormControl-error',
      }}
      InputLabelProps={{
        className: 'BootstrapFormLabel-root',
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: 'BootstrapInput-root',
          input: 'BootstrapInput-input',
          formControl: 'BootstrapInput-formControl',
        },
      }}
      FormHelperTextProps={{
        className: 'BootstrapFormHelperText-root',
      }}
      label={'Error'}
      placeholder={'Username'}
      helperText={'Error Helper Text'}
      {...props}
    />
  </React.Fragment>
);

BootstrapTextField.getTheme = getTheme;
BootstrapTextField.displayName = 'TextField';
BootstrapTextField.metadata = {
  name: 'Bootstrap TextField',
  description: 'Implement Bootstrap Form Input',
};
BootstrapTextField.codeSandbox = 'https://codesandbox.io/s/ll5k316mv7';

export default BootstrapTextField;
