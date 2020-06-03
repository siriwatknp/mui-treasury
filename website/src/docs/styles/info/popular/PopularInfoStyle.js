import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { Column } from '@mui-treasury/components/flex';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';

const PopularInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Poppins', weights: [400, 700] }]} />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={usePopularInfoStyles}>
          <InfoSubtitle>Design</InfoSubtitle>
          <InfoTitle>Most Awaited - Figma Launches Plugin</InfoTitle>
          <InfoCaption>14 sec ago</InfoCaption>
        </Info>
      </Column>
    </>
  );
};

// hide-start
PopularInfoStyle.metadata = {
  title: 'Popular',
  path: 'styles/info/popular',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/popular/popularInfo.styles.ts' }],
};
// hide-end

export default PopularInfoStyle;
