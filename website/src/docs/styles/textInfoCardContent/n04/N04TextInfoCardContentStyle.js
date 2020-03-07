import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useN04TextInfoCardContentStyles } from '@mui-treasury/styles/textInfoCardContent/n04';

const N04TextInfoCardContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          useStyles={useN04TextInfoCardContentStyles}
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
N04TextInfoCardContentStyle.metadata = {
  title: 'N04',
  path: 'textInfoCardContent/n04',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoCardContent/n04/n04TextInfoCardContent.styles.js',
    },
  ],
};
// hide-end

export default N04TextInfoCardContentStyle;
