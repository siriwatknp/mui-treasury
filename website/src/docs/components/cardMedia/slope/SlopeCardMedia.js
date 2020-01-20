import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';

const SlopeCardMedia = () => {
  const slopeStyles = useSlopeCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      // image={"src"}
      classes={slopeStyles}
    />
  );
};

SlopeCardMedia.propTypes = {};
SlopeCardMedia.defaultProps = {};

// hide-start
SlopeCardMedia.metadata = {
  title: 'Slope',
  path: 'cardMedia/slope',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardMedia/slope/slopeCardMedia.styles.js',
    },
  ],
};
// hide-end

export default SlopeCardMedia;
