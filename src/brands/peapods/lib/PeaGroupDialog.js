import TextField from '@material-ui/core/TextField/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaRadioGroup from './PeaRadioGroup';
import PeaLoadingSpinner from './PeaLoadingSpinner';

const PeaGroupDialog = ({
  dialogTitle,
  actionText,
  name,
  type,
  submitting,
  onChange,
  onClose,
  onSave,
  ...props
}) => (
  <PeaDialog
    className={'PeaDialog'}
    title={dialogTitle}
    titleVariant={'secondaryCentered'}
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
          value={name}
          onChange={onChange('name')}
        />
        <PeaRadioGroup value={type} onChange={onChange('type')} />
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
      <PeaButton
        color={'primary'}
        variant={'contained'}
        disabled={submitting}
        onClick={onSave}
      >
        {submitting ? (
          <PeaLoadingSpinner size={20} style={{ margin: 0 }} />
        ) : (
          actionText
        )}
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
  dialogTitle: PropTypes.string,
  actionText: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  submitting: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

PeaGroupDialog.defaultProps = {
  dialogTitle: 'Create Group',
  actionText: 'Create',
  submitting: false,
};

export default PeaGroupDialog;
