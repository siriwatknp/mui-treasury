import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

const useStyles = makeStyles({
  container: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    cursor: 'pointer',
  },
});

const PeaShareContent = ({ open, title, socialLink, onClose, onShare }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      onClick={e => e.stopPropagation()}
    >
      <Grid container className={classes.container}>
        <EmailShareButton
          url={socialLink}
          subject={title}
          className={classes.item}
          beforeOnClick={() => onShare('email')}
        >
          <EmailIcon size={45} round />
        </EmailShareButton>
        <FacebookShareButton
          url={socialLink}
          quote={title}
          className={classes.item}
          beforeOnClick={() => onShare('facebook')}
        >
          <FacebookIcon size={45} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={socialLink}
          title={title}
          className={classes.item}
          beforeOnClick={() => onShare('twitter')}
        >
          <TwitterIcon size={45} round />
        </TwitterShareButton>
      </Grid>
    </SwipeableDrawer>
  );
};

PeaShareContent.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  socialLink: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
};
PeaShareContent.defaultProps = {
  title: '',
  socialLink: '',
};
PeaShareContent.metadata = {
  name: 'Pea Share Content',
};
PeaShareContent.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaShareContent;
