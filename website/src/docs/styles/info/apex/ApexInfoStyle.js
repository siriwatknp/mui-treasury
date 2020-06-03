import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { Column } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';

const ApexInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Ubuntu', weights: [400, 700] }]} />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={useApexInfoStyles}>
          <InfoTitle>APEX Legends: Assemble!</InfoTitle>
          <InfoSubtitle>Created by siriwatknp</InfoSubtitle>
        </Info>
      </Column>
    </>
  )
};
// hide-start
ApexInfoStyle.metadata = {
  title: 'Apex',
  path: 'styles/info/apex',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'info/apex/apexInfo.styles.ts'},
  ],
};
// hide-end

export default ApexInfoStyle;
