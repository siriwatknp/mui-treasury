/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';

import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaLoadingSpinner from './PeaLoadingSpinner';
import PeaIcon from './PeaIcon';

// TODO: render group members

const PeaGroupDialog = ({
  dialogTitle,
  actionText,
  name,
  description,
  type,
  inviteInput,
  typeInput,
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
      <>
        <FormLabel component="legend">Cover Picture</FormLabel>

        <Box
          style={{
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <CardMedia
            className={'MuiCardMedia-root'}
            image={profilePhoto}
            style={profilePhoto && { border: 'none' }}
            onClick={onChangeCoverPhotoClicked}
          >
            <ButtonBase className={'PeaGroup-coverImgBtn'}>
              <PeaIcon
                inverted
                icon={'add'}
                shape={'square'}
                style={{ fontSize: 100 }}
              />
            </ButtonBase>
          </CardMedia>
        </Box>

        {inviteInput}

        <TextField
          fullWidth
          margin={'normal'}
          label={'Name'}
          InputLabelProps={{
            shrink: true,
          }}
          value={name}
          onChange={onChange('name')}
        />

        <TextField
          fullWidth
          margin={'normal'}
          label={'Description'}
          InputLabelProps={{
            shrink: true,
          }}
          value={description || ''}
          onChange={onChange('description')}
        />

        {typeInput}
      </>
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
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  inviteInput: PropTypes.object.isRequired,
  typeInput: PropTypes.object.isRequired,
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
  description: '',
  profilePhoto: undefined,
  onChangeCoverPhotoClicked: () => {},
};

export default PeaGroupDialog;
