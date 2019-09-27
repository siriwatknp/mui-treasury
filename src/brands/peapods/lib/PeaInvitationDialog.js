import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Box from '@material-ui/core/Box';

import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';
import PeaLoadingSpinner from './PeaLoadingSpinner';

const PeaInvitationDialog = ({
  person,
  pods,
  groups,
  isInvitingInfo,
  invitedInfo,
  onInvite,
  onClose,
  ...props
}) => {
  const [index, onChange] = useState(0);
  return (
    <PeaDialog
      className={'PeaInvitationDialog'}
      closeButtonHidden
      titleVariant={'contained'}
      title={`Invite ${person}`}
      content={
        <>
          <Tabs
            className={'MuiTabs-root'}
            variant={'fullWidth'}
            centered
            value={index}
            onChange={(e, val) => onChange(val)}
          >
            <Tab label="Pods" disableRipple />
            <Tab label="Groups" disableRipple />
          </Tabs>
          {index === 0 && <Box className="List-Container" />}
          {index === 1 && (
            <Box className="List-Container">
              <List>
                {groups.map(group => {
                  const { name, profilePhoto, membersConnection } = group;
                  return (
                    <ListItem key={name}>
                      <PeaAvatar
                        src={profilePhoto}
                        size={'big'}
                        alt={name.charAt(0).toUpperCase()}
                      />
                      <ListItemText
                        primaryTypographyProps={{ noWrap: true }}
                        secondaryTypographyProps={{
                          noWrap: true,
                        }}
                        primary={name}
                        secondary={`Users ${
                          membersConnection ? membersConnection.totalCount : 0
                        }`}
                      />
                      <PeaButton
                        className={'MuiButton--auto'}
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => onInvite(group)}
                        disabled={
                          isInvitingInfo[group.id] || invitedInfo[group.id]
                        }
                      >
                        {isInvitingInfo[group.id] && (
                          <PeaLoadingSpinner size={20} style={{ margin: 0 }} />
                        )}
                        {invitedInfo[group.id] && 'Invitation Sent'}
                        {!invitedInfo[group.id] &&
                          !isInvitingInfo[group.id] &&
                          'Invite'}
                      </PeaButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}
        </>
      }
      actions={[
        <Button color={'secondary'} onClick={onClose}>
          Cancel
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    />
  );
};

PeaInvitationDialog.metadata = {
  name: 'Pea Invitation Dialog',
};
PeaInvitationDialog.propTypes = {
  onInvite: PropTypes.func.isRequired,
  person: PropTypes.string.isRequired,
  pods: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isInvitingInfo: PropTypes.shape({}),
  invitedInfo: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired,
};

PeaInvitationDialog.defaultProps = {
  isInvitingInfo: {},
  invitedInfo: {},
};

export default PeaInvitationDialog;
