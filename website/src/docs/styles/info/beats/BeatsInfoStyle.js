import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useBeatsInfoStyles } from '@mui-treasury/styles/info/beats';

const BeatsInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Spartan', weights: [400, 600] }]} />
      </NoSsr>
      <Info useStyles={useBeatsInfoStyles}>
        <InfoTitle>Beats</InfoTitle>
        <InfoSubtitle>Headphone X</InfoSubtitle>
        <InfoCaption>Price starts from $345</InfoCaption>
      </Info>
    </>
  );
};
// hide-start
BeatsInfoStyle.metadata = {
  title: 'Beats',
  path: 'styles/info/beats',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/beats/beatsInfo.styles.ts' }],
};
// hide-end

export default BeatsInfoStyle;
