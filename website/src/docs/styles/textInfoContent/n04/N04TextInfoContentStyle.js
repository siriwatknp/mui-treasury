import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';

const N04TextInfoContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoContent
          useStyles={useN04TextInfoContentStyles}
          overline={'Kesha'}
          heading={'Inner Varnika'}
          body={
            'That year, collection of songs, review melodies, memories full, this is a long and warm journey'
          }
        />
      </CardContent>
    </Box>
  );
};
// hide-start
N04TextInfoContentStyle.metadata = {
  title: 'N04',
  path: 'textInfoContent/n04',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/n04/n04TextInfoContent.styles.js',
    },
  ],
};
// hide-end

export default N04TextInfoContentStyle;
