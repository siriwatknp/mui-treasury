import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';

const N03TextInfoContentStyle = () => {
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoContent
          useStyles={useN03TextInfoContentStyles}
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
N03TextInfoContentStyle.metadata = {
  title: 'N03',
  path: 'styles/textInfoContent/n03',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/n03/n03TextInfoContent.styles.js',
    },
  ],
};
// hide-end

export default N03TextInfoContentStyle;
