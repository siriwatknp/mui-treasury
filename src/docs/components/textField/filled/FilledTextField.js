import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { filledTextFieldHook } from '@mui-treasury/styles/textField';

const FilledTextField = () => {
  const inputStyles = filledTextFieldHook.useInput();
  const helperTextStyles = filledTextFieldHook.useHelperText();
  return (
    <div>
      <TextField
        variant={'filled'}
        fullWidth
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
        variant={'filled'}
        error
        fullWidth
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
    </div>
  );
};

// hide-start
FilledTextField.metadata = {
  title: 'Filled',
  path: 'textField/filled',
  files: [
    { pkg: 'mui-styles', path: 'textField/filled/filledTextField.styles.js' },
  ],
  relates: [],
};
// hide-end

export default FilledTextField;
