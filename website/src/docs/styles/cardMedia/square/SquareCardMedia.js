import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useSquareCardMediaStyles } from '@mui-treasury/styles/cardMedia/square';

const SlopeCardMedia = () => {
  const styles = useSquareCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      // image={"src"}
      classes={styles}
    />
  );
};

SlopeCardMedia.propTypes = {};
SlopeCardMedia.defaultProps = {};

// hide-start
SlopeCardMedia.metadata = {
  title: 'Square',
  path: 'styles/cardMedia/square',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardMedia/square/squareCardMedia.styles.js',
    },
  ],
};
// hide-end

export default SlopeCardMedia;
