import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';

const FourThreeCardMedia = () => {
  const styles = useFourThreeCardMediaStyles();
  return (
    <CardMedia
      // component={'img'} // add this line to use <img />
      // image={"src"}
      classes={styles}
    />
  );
};
// hide-start
FourThreeCardMedia.metadata = {
  title: 'Four Three',
  path: 'cardMedia/fourThree',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Feb 10 2020',
};
// hide-end

export default FourThreeCardMedia;
