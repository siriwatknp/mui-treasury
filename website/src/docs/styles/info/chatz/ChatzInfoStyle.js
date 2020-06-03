import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { Column } from '@mui-treasury/components/flex';
import { Info, InfoCaption, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useChatzInfoStyles } from '@mui-treasury/styles/info/chatz';

const ChatzInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Maven Pro', weights: [400, 500] }]}
        />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={useChatzInfoStyles}>
          <InfoTitle>Phawta Tuntayakul</InfoTitle>
          <InfoSubtitle>Great, I'll join you tomorrow...</InfoSubtitle>
          <InfoCaption>10 m</InfoCaption>
        </Info>
        <Info useStyles={useChatzInfoStyles}>
          <InfoTitle>Maria Illesaca</InfoTitle>
          <InfoSubtitle>Can you please send me more detail...</InfoSubtitle>
          <InfoCaption>10:45 AM</InfoCaption>
        </Info>
      </Column>
    </>
  );
};
// hide-start
ChatzInfoStyle.metadata = {
  title: 'Chatz',
  path: 'styles/info/chatz',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/chatz/chatzInfo.styles.ts' }],
};
// hide-end

export default ChatzInfoStyle;
