import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: purple[700],
    },
  },
});

const TextFields = () => {
  const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
  const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
  const helperTextStyles = roundTextFieldStylesHook.useHelperText();
  return (
    <div>
      <TextField
        label={'Primary field'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
        FormHelperTextProps={{ classes: helperTextStyles }}
      />
      <div />
      <TextField
        error
        label={'Error field'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
        FormHelperTextProps={{ classes: helperTextStyles }}
      />
      <div />
      <TextField
        color={'secondary'}
        label={'Secondary field'}
        placeholder={'Placeholder'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        label={'Disabled field'}
        placeholder={'Placeholder'}
        margin={'normal'}
        disabled
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
    </div>
  );
};

const RoundTextFieldStyle = () => (
  <ThemeProvider theme={theme}>
    <TextFields />
  </ThemeProvider>
);
// hide-start
RoundTextFieldStyle.metadata = {
  title: 'Round',
  path: 'styles/textField/round',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 30 2020',
  frameProps: {}, // props that applied to div in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'textField/round/roundTextField.styles.js' },
  ],
};
// hide-end

export default RoundTextFieldStyle;
