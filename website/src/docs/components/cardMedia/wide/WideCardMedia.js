import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';

const WideCardMedia = () => {
  const styles = useWideCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      // image={"src"}
      classes={styles}
    />
  );
};

WideCardMedia.propTypes = {};
WideCardMedia.defaultProps = {};

// hide-start
WideCardMedia.metadata = {
  title: 'Wide',
  description: 'size 16:9',
  path: 'cardMedia/wide',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardMedia/wide/wideCardMedia.styles.js',
    },
  ],
};
// hide-end

export default WideCardMedia;
