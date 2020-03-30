import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';

const RoundTextFieldStyle = () => {
  const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
  const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
  const helperTextStyles = roundTextFieldStylesHook.useHelperText();
  return (
    <div>
      <TextField
        id={'bordered'}
        label={'Label'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
        FormHelperTextProps={{ classes: helperTextStyles }}
      />
      <Box />
      <TextField
        id={'bordered'}
        label={'Label'}
        placeholder={'Placeholder'}
        margin={'normal'}
        disabled
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <Box />
      <TextField
        id={'bordered'}
        error
        label={'Label'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
        FormHelperTextProps={{ classes: helperTextStyles }}
      />
    </div>
  );
};
// hide-start
RoundTextFieldStyle.metadata = {
  title: 'Round',
  path: 'styles/textField/round',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 30 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'textField/round/roundTextField.styles.js' },
  ],
};
// hide-end

export default RoundTextFieldStyle;
