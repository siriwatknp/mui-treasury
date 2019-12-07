import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useText03CardContentStyles } from '@mui-treasury/styles/cardContent/text03';

const TextCardContent03 = () => {
  const styles = useText03CardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          classes={styles}
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
TextCardContent03.metadata = {
  title: 'Text III',
  path: 'cardContent/text03',
  files: [
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text03/text03CardContent.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent03;
