import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import {
  Info,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { Column } from '@mui-treasury/components/flex';
import { useTrendInfoStyles } from '@mui-treasury/styles/info/trend';

const TrendInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Manrope', weights: [500, 700] }]} />
      </NoSsr>
      <Column gap={2}>
        <Info useStyles={useTrendInfoStyles}>
          <InfoTitle>Beats X Super Fast Charge</InfoTitle>
          <InfoSubtitle>Starts from $250</InfoSubtitle>
        </Info>
        <Info useStyles={useTrendInfoStyles}>
          <InfoTitle>Huawei Freebuds 2 Lite</InfoTitle>
          <InfoSubtitle>Starts from $110</InfoSubtitle>
        </Info>
      </Column>
    </>
  );
};
// hide-start
TrendInfoStyle.metadata = {
  title: 'Trend',
  path: 'styles/info/trend',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/trend/trendInfo.styles.ts' }],
};
// hide-end

export default TrendInfoStyle;
