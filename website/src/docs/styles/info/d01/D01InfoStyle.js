import React from 'react';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';

const D01InfoStyle = () => {
  return (
    <Info useStyles={useD01InfoStyles}>
      <InfoCaption>3d • #triphop #rap</InfoCaption>
      <InfoTitle>Humility (feat. George Benson)</InfoTitle>
      <InfoSubtitle>Gorillaz</InfoSubtitle>
    </Info>
  );
};
// hide-start
D01InfoStyle.metadata = {
  title: 'D01',
  path: 'styles/info/d01',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {
    bgcolor: '#172338',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/d01/d01Info.styles.ts' }],
};
// hide-end

export default D01InfoStyle;
