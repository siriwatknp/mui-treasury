import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

const Tabs = () => (
  <div>
    <MuiTextField
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
    />
    <MuiTextField
      error
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
    />
  </div>
);
Tabs.metadata = {
  name: 'Pea TextField',
  api: 'https://material-ui.com/pt/api/text-field/#textfield-api',
};
Tabs.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tabs.code = `
  import TextField from '@material-ui/core/TextField';
  
  const Preview = () => (
    <>
      <TextField
        fullWidth
        margin={'normal'}
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
      />
      <TextField
        error
        fullWidth
        margin={'normal'}
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
      />
    </>
  )
`;

export default Tabs;
