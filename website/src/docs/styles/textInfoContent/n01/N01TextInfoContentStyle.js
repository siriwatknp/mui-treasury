import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';

const N01TextInfoContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoContent
          useStyles={useN01TextInfoContentStyles}
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
N01TextInfoContentStyle.metadata = {
  title: 'N01',
  path: 'textInfoContent/n01',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/n01/n01TextInfoContent.styles.js',
    },
  ],
};
// hide-end

export default N01TextInfoContentStyle;
