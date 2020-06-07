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
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';

const GalaxyInfoStyle = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Column gap={2}>
        <Info useStyles={useGalaxyInfoStyles}>
          <InfoSubtitle>Galaxy</InfoSubtitle>
          <InfoTitle>Buds 2019</InfoTitle>
          <InfoCaption>Perfect for everyone</InfoCaption>
        </Info>
      </Column>
    </>
  );
};
// hide-start
GalaxyInfoStyle.metadata = {
  title: 'Galaxy',
  path: 'styles/info/galaxy',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {
    bgcolor: '#000',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/galaxy/galaxyInfo.styles.ts' }],
};
// hide-end

export default GalaxyInfoStyle;
