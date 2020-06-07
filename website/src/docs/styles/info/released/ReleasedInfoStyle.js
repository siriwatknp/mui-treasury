import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { Column } from '@mui-treasury/components/flex';
import {
  Info,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useReleasedInfoStyles } from '@mui-treasury/styles/info/released';

const ReleasedInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'DM Sans', weights: [500, 600] }]} />
      </NoSsr>
      <Column gap={2}>
        <Info useStyles={useReleasedInfoStyles}>
          <InfoTitle>Released Date</InfoTitle>
          <InfoSubtitle>10 Feb 2021</InfoSubtitle>
        </Info>
      </Column>
    </>
  );
};
// hide-start
ReleasedInfoStyle.metadata = {
  title: 'Released',
  path: 'styles/info/released',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/released/releasedInfo.styles.ts' }],
};
// hide-end

export default ReleasedInfoStyle;
