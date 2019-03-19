import React from 'react';
import Color from 'color';
import TextField from '@material-ui/core/TextField';

export const getTheme = muiBaseTheme => {
  const space = muiBaseTheme.spacing.unit; // default = 8;
  const { white } = muiBaseTheme.palette.common;
  const labelColor = muiBaseTheme.palette.text.primary;
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
  const borderColor = '#ced4da';
  // you can change normal color to primary using
  // muiBaseTheme.palette.primary.main
  const normalColor = '#80bdff';
  const helperTextColor = '#6c757d';
  const validColor = '#28a745';
  const errorColor = '#dc3545';
  const inputFontSize = 16;
  const inputBorderRadius = 4;
  const inputPadding = '10px 12px';
  const helperTextFontSize = 12.8;
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
            color: labelColor,
            fontFamily,
          },
          '& .BootstrapInput-input': {
            color: '#495057',
            borderRadius: inputBorderRadius,
            position: 'relative',
            backgroundColor: white,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor,
            fontSize: inputFontSize,
            width: 'auto',
            padding: inputPadding,
            transition: muiBaseTheme.transitions.create([
              'border-color',
              'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            fontFamily,
            '&:focus': {
              borderColor: normalColor,
              boxShadow: `0 0 0 0.2rem ${Color(normalColor).fade(0.75)}`,
            },
          },
          '& .BootstrapFormHelperText-root': {
            fontFamily,
            color: helperTextColor,
            lineHeight: '19.2px',
            marginTop: space / 2,
            fontSize: helperTextFontSize,
          },
          '&.BootstrapFormControl-valid': {
            '& .BootstrapInput-input': {
              borderColor: `${validColor} !important`,
              '&:focus': {
                boxShadow: `0 0 0 0.2rem ${Color(validColor).fade(0.75)}`,
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
                boxShadow: `0 0 0 0.2rem ${Color(errorColor).fade(0.75)}`,
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
BootstrapTextField.metadata = {
  name: 'Bootstrap TextField',
  description: 'Implement Bootstrap Form Input',
  libraries: [
    { text: 'color', link: 'https://github.com/Qix-/color#manipulation' },
  ],
};
BootstrapTextField.codeSandbox = 'https://codesandbox.io/s/ll5k316mv7';

export default BootstrapTextField;
