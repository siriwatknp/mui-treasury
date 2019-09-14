/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaRadioGroup from './PeaRadioGroup';
import PeaLoadingSpinner from './PeaLoadingSpinner';
import PeaIcon from './PeaIcon';
import PeaText from './PeaTypography';

const PeaGroupDialog = ({
  dialogTitle,
  actionText,
  name,
  type,
  audienceSelector,
  inviteInput,
  profilePhoto,
  submitting,
  onChangeCoverPhotoClicked,
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
        {inviteInput}
        {audienceSelector}
        <PeaText color="secondary">Cover picture</PeaText>
        <CardMedia
          className={'MuiCardMedia-root'}
          image={profilePhoto}
          style={profilePhoto && { border: 'none' }}
        >
          <ButtonBase
            className={'PeaGroup-coverImgBtn'}
            onClick={onChangeCoverPhotoClicked}
          >
            <PeaIcon
              inverted
              icon={'add'}
              shape={'square'}
              style={{ fontSize: 100 }}
            />
          </ButtonBase>
        </CardMedia>
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
  audienceSelector: PropTypes.object,
  inviteInput: PropTypes.object,
  profilePhoto: PropTypes.string,
  submitting: PropTypes.bool,
  onChangeCoverPhotoClicked: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

PeaGroupDialog.defaultProps = {
  dialogTitle: 'Create Group',
  actionText: 'Create',
  submitting: false,
  audienceSelector: undefined,
  inviteInput: undefined,
  profilePhoto: undefined,
  onChangeCoverPhotoClicked: () => {},
};

export default PeaGroupDialog;
