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
import { ReactComponent as Logo } from './assets/peapods-logo-circle.svg';

const PeaNotificationItem = ({
  src,
  name,
  description,
  time,
  sticker,
  unread,
}) => {
  const bgColors = {
    person: 'secondary',
    remove: 'danger',
    clear: 'danger',
  };
  const renderSticker = () => {
    if (!sticker) return null;
    if (sticker === 'pea') {
      return <Logo className={'MuiIcon-root -pea'} />;
    }
    return (
      <PeaIcon
        className={'-sticker'}
        shape={'circular'}
        bgColor={bgColors[sticker]}
      >
        {sticker}
      </PeaIcon>
    );
  };
  return (
    <ListItem className={cx('PeaNotificationItem-root', unread && '-unread')}>
      <Box position={'relative'}>
        <PeaAvatar src={src} size={'big'} />
        {renderSticker()}
      </Box>
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
        spacing={1}
        className={'PeaNotificationItem-actions'}
        justify={'flex-end'}
      >
        <Grid item>
          <PeaButton className={'PeaButton-ignore'} size={'small'}>
            Ignore
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
    </ListItem>
  );
};

PeaNotificationItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  unread: PropTypes.bool,
  sticker: PropTypes.oneOf(['', 'pea', 'person', 'remove', 'clear']),
};
PeaNotificationItem.defaultProps = {
  unread: false,
  sticker: '',
};
PeaNotificationItem.metadata = {
  name: 'Pea Notification Item',
};
PeaNotificationItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaNotificationItem;
