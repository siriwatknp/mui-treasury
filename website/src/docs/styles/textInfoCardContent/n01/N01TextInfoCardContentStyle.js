import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useN01TextInfoCardContentStyles } from '@mui-treasury/styles/textInfoCardContent/n01';

const N01TextInfoCardContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          useStyles={useN01TextInfoCardContentStyles}
          overline={'March 20, 2019'}
          heading={'Nature Around Us'}
          body={
            'We are going to learn different kinds of species in nature that live together to form amazing environment.'
          }
        />
      </CardContent>
    </Box>
  );
};
// hide-start
N01TextInfoCardContentStyle.metadata = {
  title: 'N01',
  path: 'textInfoCardContent/n01',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoCardContent/n01/n01TextInfoCardContent.styles.js',
    },
  ],
};
// hide-end

export default N01TextInfoCardContentStyle;
