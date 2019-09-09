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
    height: 150,
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  shareButton: {
    padding: 0,
    marginBottom: 8,
  },
  icon: {
    width: '100%',
    height: '100%',
    marginLeft: '-0.3em !important',
  },
});

const PeaShareContent = ({ open, onClose, onShare }) => {
  const classes = useStyles();

  const shareContent = [
    {
      icon: 'fa fa-envelope',
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
    {
      icon: 'fab fa-instagram',
      name: 'instagram',
    },
    {
      icon: 'fab fa-snapchat',
      name: 'snapchat',
    },
  ];

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      onClick={e => e.stopPropagation()}
    >
      <Grid container className={classes.container}>
        {shareContent.map(item => (
          <Grid key={item.name} item className={classes.item}>
            <Button
              variant="contained"
              color={'secondary'}
              className={classes.shareButton}
              onClick={() => onShare(item.name)}
            >
              <PeaIcon
                size={'large'}
                color={'inherit'}
                icon={item.icon}
                className={classes.icon}
              />
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
