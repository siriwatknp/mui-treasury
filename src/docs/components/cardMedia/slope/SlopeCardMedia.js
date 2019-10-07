import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import MOCK from 'constants/mock';

const SlopeCardMedia = () => {
  const slopeStyles = useSlopeCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      classes={slopeStyles}
      image={MOCK.img}
    />
  );
};

SlopeCardMedia.propTypes = {};
SlopeCardMedia.defaultProps = {};

// hide-start
SlopeCardMedia.metadata = {
  title: 'Slope',
  path: 'cardMedia/slope',
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardMedia/slope/slopeCardMedia.styles.js',
    },
  ],
};
// hide-end

export default SlopeCardMedia;
