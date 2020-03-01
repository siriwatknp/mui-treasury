import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useText02CardContentStyles } from '@mui-treasury/styles/cardContent/text02';

const TextCardContent02 = () => {
  const styles = useText02CardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          classes={styles}
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
TextCardContent02.metadata = {
  title: 'Text II',
  path: 'component/cardContent/text02',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text02/text02CardContent.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent02;
