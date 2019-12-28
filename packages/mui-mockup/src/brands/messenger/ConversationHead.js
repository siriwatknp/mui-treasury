import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
import VideoCam from '@material-ui/icons/VideoCam';
import Info from '@material-ui/icons/Info';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
  root: {
    padding: '8px 8px 8px 16px',
  },
  primary: {
    fontWeight: 'bold',
  },
  secondary: {
    fontSize: 12,
  },
  iconBtn: {
    '& svg': {
      color: 'rgb(0, 153, 255)',
    },
  },
}));

const ConversationHead = () => {
  const styles = useStyles();
  return (
    <ListItem
      ContainerComponent={'div'}
      ContainerProps={{ className: styles.container }}
      className={styles.root}
    >
      <ListItemAvatar>
        <Avatar src={'https://i.pravatar.cc/300?img=13'} />
      </ListItemAvatar>
      <ListItemText
        primary={'Imaad Casey'}
        secondary={'active 17m ago'}
        classes={{ primary: styles.primary, secondary: styles.secondary }}
      />
      <ListItemSecondaryAction>
        <IconButton className={styles.iconBtn}>
          <Phone />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <VideoCam />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <Info />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ConversationHead;
