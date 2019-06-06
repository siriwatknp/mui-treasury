import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import TextField from '@material-ui/core/TextField';

const PeaTextArea = ({ error, ...props }) => (
  <TextField
    multiline
    rows={3}
    classes={{
      root: cx('PeaFormControl-root', error && 'PeaFormControl-error'),
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
    {...props}
  />
);
PeaTextArea.propTypes = {
  error: PropTypes.bool,
};
PeaTextArea.defaultProps = {
  error: false,
};
PeaTextArea.metadata = {
  name: 'Pea Textarea',
};
PeaTextArea.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTextArea;
