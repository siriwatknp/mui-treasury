import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';
import PeaIcon from './PeaIcon';
import Logo from './assets/peapods-logo-circle.svg';

const PeaNotificationItem = ({ src, name, time, type, actions, unread }) => {
  const count = Array.isArray(src) ? src.length : 0;
  const details = {
    follow: {
      sticker: 'person',
      description: 'requested to follow you',
      bgColor: 'secondary',
    },
    pea_request: {
      sticker: 'pea',
      description: 'has requested to join your pod for EVENT_NAME',
      bgColor: '',
    },
    pea_invite: {
      sticker: 'pea',
      description: 'has invited you to pod Y',
      bgColor: '',
    },
    cancel: {
      sticker: 'clear',
      description: 'has been canceled',
      bgColor: 'danger',
    },
    accept: {
      sticker: 'check',
      description: 'has accepted your friend request',
      bgColor: 'secondary',
    },
    left: {
      sticker: 'remove',
      description: 'has left your pod for EVENT_NAME',
      bgColor: 'danger',
    },
    followed: {
      sticker: 'added',
      description: 'is now following you',
      bgColor: 'secondary',
    },
    group: {
      sticker: 'person',
      description: `and ${count - 2} others requested to follow you`,
      bgColor: 'secondary',
    },
  };
  const renderSticker = () => {
    if (!details[type].sticker) return null;
    if (details[type].sticker === 'pea') {
      return (
        <img src={Logo} alt="pea-invite" className={'MuiIcon-root -pea'} />
      );
    }
    return (
      <PeaIcon
        className={'-sticker'}
        shape={'circular'}
        bgColor={details[type].bgColor}
      >
        {details[type].sticker}
      </PeaIcon>
    );
  };

  return (
    <ListItem className={cx('PeaNotificationItem-root', unread && '-unread')}>
      <Box position={'relative'}>
        {type === 'group' ? (
          <PeaAvatar.Group
            images={src.slice(0, 3)}
            more={count - 2}
            avatarProps={{ size: 'big' }}
            overlap={-32}
          />
        ) : (
          <PeaAvatar src={src} size={'big'} />
        )}
        {renderSticker()}
      </Box>
      <ListItemText
        classes={{
          primary: 'MuiListItemText-primary',
          secondary: 'MuiListItemText-secondary',
        }}
        primary={
          <span>
            <b>{type === 'group' ? name.slice(0, 2).join(', ') : name}</b>{' '}
            {details[type].description}
          </span>
        }
        primaryTypographyProps={{
          gutterBottom: true,
        }}
        secondary={time}
      />
      {actions && (
        <Grid
          container
          spacing={1}
          className={'PeaNotificationItem-actions'}
          justify={'flex-end'}
        >
          <Grid item>
            <PeaButton className={'PeaButton-ignore'} size={'small'}>
              Deny
            </PeaButton>
          </Grid>
          <Grid item>
            <PeaButton
              size={'small'}
              elongated={false}
              variant={'contained'}
              color={'primary'}
            >
              Accept
            </PeaButton>
          </Grid>
        </Grid>
      )}
    </ListItem>
  );
};

PeaNotificationItem.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  type: PropTypes.oneOf([
    'follow',
    'pea_invite',
    'pea_request',
    'cancel',
    'accept',
    'left',
    'followed',
    'group',
  ]).isRequired,
  time: PropTypes.string.isRequired,
  actions: PropTypes.bool,
  unread: PropTypes.bool,
};
PeaNotificationItem.defaultProps = {
  actions: false,
  unread: false,
};
PeaNotificationItem.metadata = {
  name: 'Pea Notification Item',
};
PeaNotificationItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaNotificationItem;
