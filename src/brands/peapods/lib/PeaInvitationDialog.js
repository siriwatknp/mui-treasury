/* eslint-disable react/forbid-prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';
import PeaLoadingSpinner from './PeaLoadingSpinner';

// TODO: use SwipeableTabs here ( and everywhere else )

const PeaInvitationDialog = ({
  person,
  pods,
  groups,
  loading,
  invitingIds,
  invitedIds,
  onInvitePod,
  onInviteGroup,
  open,
  onClose,
  ...props
}) => {
  const [index, onChange] = useState(0);

  return (
    <PeaDialog
      className={'PeaInvitationDialog'}
      closeButtonHidden
      titleVariant={'contained'}
      title={`Invite @${person}`}
      content={
        loading ? (
          <PeaLoadingSpinner />
        ) : (
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

            {index === 0 && (
              <Box className="List-Container">
                <List>
                  {pods.map(pod => {
                    const { id, event } = pod;
                    const { profilePhoto, title } = event;
                    return (
                      <ListItem key={id}>
                        <Grid
                          container
                          direction="column"
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid container alignItems="center">
                            <Grid item xs={2}>
                              <PeaAvatar
                                src={profilePhoto}
                                size={'big'}
                                alt={title.charAt(0).toUpperCase()}
                              />
                            </Grid>

                            <Grid item xs={10}>
                              <Typography variant="body2">{title}</Typography>
                            </Grid>
                          </Grid>

                          <Grid item>
                            <PeaButton
                              className={'MuiButton--auto'}
                              variant={'contained'}
                              color={'primary'}
                              onClick={() => onInvitePod(pod)}
                              disabled={invitingIds[id] || invitedIds[id]}
                            >
                              {invitingIds[id] && (
                                <PeaLoadingSpinner
                                  size={20}
                                  style={{ margin: 0 }}
                                />
                              )}
                              {invitedIds[id] && 'Invitation Sent'}
                              {!invitedIds[id] && !invitingIds[id] && 'Invite'}
                            </PeaButton>
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            )}

            {index === 1 && (
              <Box className="List-Container">
                <List>
                  {groups.map(group => {
                    const { id, name, profilePhoto } = group;
                    return (
                      <ListItem key={id}>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <PeaAvatar
                              src={profilePhoto}
                              size={'big'}
                              alt={name.charAt(0).toUpperCase()}
                            />
                          </Grid>

                          <Grid item>
                            <Typography variant="body2">{name}</Typography>
                          </Grid>

                          <Grid item>
                            <PeaButton
                              className={'MuiButton--auto'}
                              variant={'contained'}
                              color={'primary'}
                              onClick={() => onInviteGroup(group)}
                              disabled={invitingIds[id] || invitedIds[id]}
                            >
                              {invitingIds[id] && (
                                <PeaLoadingSpinner
                                  size={20}
                                  style={{ margin: 0 }}
                                />
                              )}
                              {invitedIds[id] && 'Invitation Sent'}
                              {!invitedIds[id] && !invitingIds[id] && 'Invite'}
                            </PeaButton>
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            )}
          </>
        )
      }
      actions={[
        <PeaButton color={'secondary'} elongated onClick={onClose}>
          Cancel
        </PeaButton>,
      ]}
      open={open}
      onClose={onClose}
      {...props}
    />
  );
};

PeaInvitationDialog.metadata = {
  name: 'Pea Invitation Dialog',
};

PeaInvitationDialog.propTypes = {
  person: PropTypes.string.isRequired,
  pods: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClose: PropTypes.func.isRequired,
  onInvitePod: PropTypes.func.isRequired,
  onInviteGroup: PropTypes.func.isRequired,
  open: PropTypes.bool,
  invitingIds: PropTypes.object,
  invitedIds: PropTypes.object,
  loading: PropTypes.bool,
};

PeaInvitationDialog.defaultProps = {
  invitingIds: {},
  invitedIds: {},
  open: false,
  loading: false,
};

export default PeaInvitationDialog;
