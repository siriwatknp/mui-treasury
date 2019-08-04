import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import PeaSwitch from './PeaSwitch';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaText from './PeaTypography';

const PeaUserSettings = ({
  notifications,
  receiveEmail,
  onNotificationsChange,
  onReceiveEmailChange,
  onEditProfile,
  onContactSupport,
  onDeleteProfile,
}) => {
  const [anchorEl, setAnchor] = useState(null);
  const [switchState, setSwitchState] = useState({
    notifications,
    receiveEmail,
  });
  const open = Boolean(anchorEl);

  const handleSwitchChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
    if (name === 'notifications') {
      onNotificationsChange(event.target.checked);
    } else {
      onReceiveEmailChange(event.target.checked);
    }
  };

  return (
    <Grid item>
      <PeaButton
        size={'small'}
        variant={'outlined'}
        color={'primary'}
        labelExpanded={false}
        icon={'settings'}
        iconProps={{
          color: 'primary',
          size: 'small',
        }}
        style={{ marginTop: 6 }}
        onClick={e => setAnchor(e.currentTarget)}
      >
        Settings
      </PeaButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            minWidth: 240,
          },
        }}
      >
        <MenuItem>
          <ListItemText disableTypography>
            <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
              Push Notifications
            </PeaText>
          </ListItemText>

          <ListItemSecondaryAction>
            <PeaSwitch
              checked={switchState.notifications}
              value="notifications"
              onChange={handleSwitchChange('notifications')}
            />
          </ListItemSecondaryAction>
        </MenuItem>

        <Divider variant={'middle'} />

        <MenuItem>
          <ListItemText disableTypography>
            <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
              Receive Emails
            </PeaText>
          </ListItemText>

          <ListItemSecondaryAction>
            <PeaSwitch
              checked={switchState.receiveEmail}
              value="receiveEmail"
              onChange={handleSwitchChange('receiveEmail')}
            />
          </ListItemSecondaryAction>
        </MenuItem>

        <Divider variant={'middle'} />

        <MenuItem
          onClick={() => {
            onEditProfile();
            setAnchor(null);
          }}
        >
          <ListItemText disableTypography>
            <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
              Edit Profile
            </PeaText>
          </ListItemText>
          <PeaIcon color={'action'}>chevron_right</PeaIcon>
        </MenuItem>

        <Divider variant={'middle'} />

        <MenuItem
          onClick={() => {
            onContactSupport();
            setAnchor(null);
          }}
        >
          <ListItemText disableTypography>
            <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
              Contact Support
            </PeaText>
          </ListItemText>
          <PeaIcon color={'action'}>chevron_right</PeaIcon>
        </MenuItem>

        <Divider variant={'middle'} />

        <MenuItem>
          <ListItemText disableTypography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid
                item
                onClick={() => {
                  onDeleteProfile();
                  setAnchor(null);
                }}
              >
                <PeaText color={'error'} variant={'body1'}>
                  Delete Profile
                </PeaText>
              </Grid>
            </Grid>
          </ListItemText>
        </MenuItem>
      </Menu>
    </Grid>
  );
};

PeaUserSettings.propTypes = {
  notifications: PropTypes.bool,
  receiveEmail: PropTypes.bool,
  onNotificationsChange: PropTypes.func.isRequired,
  onReceiveEmailChange: PropTypes.func.isRequired,
  onEditProfile: PropTypes.func.isRequired,
  onContactSupport: PropTypes.func.isRequired,
  onDeleteProfile: PropTypes.func.isRequired,
};

PeaUserSettings.defaultProps = {
  notifications: false,
  receiveEmail: false,
};

PeaUserSettings.metadata = {
  name: 'Pea User Settings',
};

PeaUserSettings.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaUserSettings;
