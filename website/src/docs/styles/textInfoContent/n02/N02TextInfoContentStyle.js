import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN02TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n02';

const N02TextInfoContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoContent
          useStyles={useN02TextInfoContentStyles}
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
N02TextInfoContentStyle.metadata = {
  title: 'N02',
  path: 'styles/textInfoContent/n02',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/n02/n02TextInfoContent.styles.js',
    },
  ],
};
// hide-end

export default N02TextInfoContentStyle;
