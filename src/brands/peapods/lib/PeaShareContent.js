import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    cursor: 'pointer',
  },
});

const PeaShareContent = ({ shareText, shareLink, onShare }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <EmailShareButton
        url={shareLink}
        subject={shareText}
        className={classes.item}
        beforeOnClick={() => onShare('email')}
        openWindow
      >
        <EmailIcon size={40} round />
      </EmailShareButton>

      <FacebookShareButton
        url={shareLink}
        quote={`${shareText} #peapods`}
        className={classes.item}
        beforeOnClick={() => onShare('facebook')}
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareLink}
        title={`${shareText} #peapods`}
        className={classes.item}
        beforeOnClick={() => onShare('twitter')}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={shareLink}
        quote={`${shareText} #peapods`}
        className={classes.item}
        beforeOnClick={() => onShare('linkedin')}
        openWindow
      >
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </Grid>
  );
};

PeaShareContent.propTypes = {
  shareText: PropTypes.string.isRequired,
  shareLink: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
};

PeaShareContent.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaShareContent;
