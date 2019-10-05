import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import MOCK from 'constants/mock';

const WideCardMedia = () => {
  const styles = useWideCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      classes={styles}
      image={MOCK.img}
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
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardMedia/wide/wideCardMedia.styles.js',
    },
  ],
};
// hide-end

export default WideCardMedia;
