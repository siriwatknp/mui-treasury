import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { Column } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';

const TutorInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Open Sans', weights: [500, 700] }]} />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={useTutorInfoStyles}>
          <InfoTitle>Kenny Foster</InfoTitle>
          <InfoSubtitle>@fosterlive</InfoSubtitle>
        </Info>
      </Column>
    </>
  )
};
// hide-start
TutorInfoStyle.metadata = {
  title: 'Tutor',
  path: 'styles/info/tutor',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'info/tutor/tutorInfo.styles.ts'},
  ],
};
// hide-end

export default TutorInfoStyle;
