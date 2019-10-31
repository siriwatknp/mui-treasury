import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { bootstrapTextFieldHook } from '@mui-treasury/styles/textField';

const BootstrapTextField = () => {
  const labelStyles = bootstrapTextFieldHook.useLabel();
  const inputStyles = bootstrapTextFieldHook.useInput();
  const helperTextStyles = bootstrapTextFieldHook.useHelperText();
  return (
    <div>
      <TextField
        InputLabelProps={{
          classes: labelStyles,
        }}
        InputProps={{
          disableUnderline: true,
          classes: inputStyles,
        }}
        FormHelperTextProps={{
          classes: helperTextStyles,
        }}
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
      />
      <Box pb={2.5} />
      <TextField
        InputLabelProps={{
          classes: labelStyles,
        }}
        InputProps={{
          disableUnderline: true,
          className: '-valid',
          classes: inputStyles,
        }}
        FormHelperTextProps={{
          className: '-valid',
          classes: helperTextStyles,
        }}
        label={'Valid'}
        placeholder={'Username'}
        helperText={'Valid Helper Text'}
      />
      <Box pb={2.5} />
      <TextField
        InputLabelProps={{
          classes: labelStyles,
        }}
        InputProps={{
          disableUnderline: true,
          error: true,
          classes: inputStyles,
        }}
        FormHelperTextProps={{
          className: '-error',
          classes: helperTextStyles,
        }}
        label={'Error'}
        placeholder={'Username'}
        helperText={'Error Helper Text'}
      />
    </div>
  );
};

// hide-start
BootstrapTextField.metadata = {
  title: 'Bootstrap',
  path: 'textField/bootstrap',
  files: [
    {
      pkg: 'mui-styles',
      path: 'textField/bootstrap/bootstrapTextField.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default BootstrapTextField;
