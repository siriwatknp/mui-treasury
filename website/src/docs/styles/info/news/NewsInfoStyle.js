import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { Column } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';

const NewsInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen' }]} />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={useNewsInfoStyles}>
          <InfoTitle>Nadine Petrolli</InfoTitle>
          <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>
        </Info>
      </Column>
    </>
  )
};
// hide-start
NewsInfoStyle.metadata = {
  title: 'News',
  path: 'styles/info/news',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'info/news/newsInfo.styles.ts'},
  ],
};
// hide-end

export default NewsInfoStyle;
