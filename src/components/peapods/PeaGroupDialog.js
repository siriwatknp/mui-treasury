import TextField from '@material-ui/core/TextField/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaRadioGroup from './PeaRadioGroup';

const PeaGroupDialog = ({ onClose, ...props }) => (
  <PeaDialog
    className={'PeaGroupDialog'}
    title={'Create group'}
    content={
      <React.Fragment>
        <TextField
          fullWidth
          margin={'normal'}
          label={'Name'}
          placeholder={'name of your group'}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <PeaRadioGroup />
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
          label={'Invited User'}
          placeholder={'Type the name or username of the person in group'}
          {...props}
        />
      </React.Fragment>
    }
    actions={[
      <PeaButton onClick={onClose}>Cancel</PeaButton>,
      <PeaButton color={'primary'} variant={'contained'} onClick={onClose}>
        Create
      </PeaButton>,
    ]}
    onClose={onClose}
    {...props}
  />
);

PeaGroupDialog.metadata = {
  name: 'Pea Group Dialog',
};
PeaGroupDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PeaGroupDialog;
