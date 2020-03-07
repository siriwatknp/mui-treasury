import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useN02TextInfoCardContentStyles } from '@mui-treasury/styles/textInfoCardContent/n02';

const N02TextInfoCardContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          useStyles={useN02TextInfoCardContentStyles}
          overline={'March 8, 2016'}
          heading={'First Snow Storm'}
          body={
            'Snow storm coming in Sommaroy island, Arctic Norway. This is something\n' +
            '        that you definitely wanna see in your life.'
          }
        />
      </CardContent>
    </Box>
  );
};
// hide-start
N02TextInfoCardContentStyle.metadata = {
  title: 'N02',
  path: 'textInfoCardContent/n02',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoCardContent/n02/n02TextInfoCardContent.styles.js',
    },
  ],
};
// hide-end

export default N02TextInfoCardContentStyle;
