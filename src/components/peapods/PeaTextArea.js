import React from 'react';
import TextField from '@material-ui/core/TextField';

const PeaTextArea = props => (
  <React.Fragment>
    <TextField
      multiline
      rows={3}
      classes={{
        root: 'PeaFormControl-root',
      }}
      InputLabelProps={{
        className: 'PeaFormLabel-root',
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: 'PeaInput-root',
          input: 'PeaInput-input',
          formControl: 'PeaInput-formControl',
        },
      }}
      FormHelperTextProps={{
        className: 'PeaFormHelperText-root',
      }}
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
    <TextField
      error
      multiline
      rows={3}
      classes={{
        root: 'PeaFormControl-root PeaFormControl-error',
      }}
      InputLabelProps={{
        className: 'PeaFormLabel-root',
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: 'PeaInput-root',
          input: 'PeaInput-input',
          formControl: 'PeaInput-formControl',
        },
      }}
      FormHelperTextProps={{
        className: 'PeaFormHelperText-root',
      }}
      fullWidth
      margin={'normal'}
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
      {...props}
    />
  </React.Fragment>
);

PeaTextArea.metadata = {
  name: 'Pea Textarea',
};
PeaTextArea.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTextArea;
