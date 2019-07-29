import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import PeaIcon from './PeaIcon';
import PeaText from './PeaTypography';

const useStyles = makeStyles({
  paper: {
    background: 'transparent',
    boxShadow: 'none',
  },
  container: {
    overflow: 'hidden',
    maxWidth: 400,
    height: 300,
    margin: '0 auto',
    background: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    padding: 0,
    marginBottom: 8,
  },
});

const PeaShareContent = ({ open, onClose, onShare }) => {
  const classes = useStyles();

  const shareContent = [
    {
      icon: 'fas fa-comment',
      name: 'custom',
    },
    {
      icon: 'fal fa-envelope',
      name: 'email',
    },
    {
      icon: 'fab fa-facebook-f',
      name: 'facebook',
    },
    {
      icon: 'fab fa-twitter',
      name: 'twitter',
    },
  ];

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      classes={classes}
    >
      <Grid container spacing={3} className={classes.container}>
        {shareContent.map(item => (
          <Grid key={item.name} item xs={3} className={classes.item}>
            <Button
              variant="contained"
              color={'secondary'}
              className={classes.shareButton}
              onClick={() => onShare(item.name)}
            >
              <PeaIcon size={'large'} color={'inherit'} icon={item.icon} />
            </Button>
            <PeaText size={'small'}>{item.name}</PeaText>
          </Grid>
        ))}
      </Grid>
    </SwipeableDrawer>
  );
};

PeaShareContent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
};
PeaShareContent.defaultProps = {};
PeaShareContent.metadata = {
  name: 'Pea Share Content',
};
PeaShareContent.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaShareContent;
