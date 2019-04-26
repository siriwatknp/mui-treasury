import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';

const PeaNotificationItem = ({ src, name, description, time }) => (
  <ListItem className={'PeaNotificationItem-root'}>
    <PeaAvatar src={src} size={'big'} />
    <ListItemText
      classes={{
        primary: 'MuiListItemText-primary',
        secondary: 'MuiListItemText-secondary',
      }}
      primary={
        <span>
          <b>{name}</b> {description}
        </span>
      }
      primaryTypographyProps={{
        gutterBottom: true,
      }}
      secondary={time}
    />
    <Grid
      container
      spacing={8}
      className={'PeaNotificationItem-actions'}
      justify={'flex-end'}
    >
      <Grid item>
        <PeaButton size={'small'}>Ignore</PeaButton>
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
  </ListItem>
);

PeaNotificationItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
PeaNotificationItem.defaultProps = {};
PeaNotificationItem.metadata = {
  name: 'Pea Notification Item',
};
PeaNotificationItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaNotificationItem;
