import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { shadeTextFieldStylesHook } from '@mui-treasury/styles/textField/shade';

const ShadeTextFieldStyle = () => {
  const inputBaseStyles = shadeTextFieldStylesHook.useInputBase();
  const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel();
  return (
    <div>
      <TextField
        label={'Order Name'}
        placeholder={'Placeholder'}
        margin={'normal'}
        required
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        label={'My License Number'}
        placeholder={'Disabled'}
        margin={'normal'}
        disabled
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        error
        label={
          <>
            Destination{' '}
            <Box display="inline-block" color="grey.400">
              (optional)
            </Box>
          </>
        }
        placeholder={'Placeholder'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
    </div>
  );
};
// hide-start
ShadeTextFieldStyle.metadata = {
  title: 'Shade',
  path: 'styles/textField/shade',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 30 2020',
  frameProps: {
    bgcolor: '#fff',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'textField/shade/shadeTextField.styles.js' },
  ],
};
// hide-end

export default ShadeTextFieldStyle;
