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
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';

const MusicInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Questrial' }]} />
      </NoSsr>
      <Column gutter={2}>
        <Info useStyles={useMusicInfoStyles}>
          <InfoTitle>Money Longer</InfoTitle>
          <InfoSubtitle>Lil Uzi Vert</InfoSubtitle>
        </Info>
        <Info useStyles={useMusicInfoStyles}>
          <InfoTitle>Wait For You</InfoTitle>
          <InfoSubtitle>Jake Miller</InfoSubtitle>
          <InfoCaption>Playing...</InfoCaption>
        </Info>
      </Column>
    </>
  );
};
// hide-start
MusicInfoStyle.metadata = {
  title: 'Music',
  path: 'styles/info/music',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/music/musicInfo.styles.ts' }],
};
// hide-end

export default MusicInfoStyle;
