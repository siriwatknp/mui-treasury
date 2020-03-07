import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useN03TextInfoCardContentStyles } from '@mui-treasury/styles/textInfoCardContent/n03';

const N03TextInfoCardContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          useStyles={useN03TextInfoCardContentStyles}
          overline={'GOOGLE INC.'}
          heading={'Project Polymer'}
          body={
            'Web components usher in a new era of web development based on encapsulated and interoperable custom'
          }
        />
      </CardContent>
    </Box>
  );
};
// hide-start
N03TextInfoCardContentStyle.metadata = {
  title: 'N03',
  path: 'textInfoCardContent/n03',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoCardContent/n03/n03TextInfoCardContent.styles.js',
    },
  ],
};
// hide-end

export default N03TextInfoCardContentStyle;
