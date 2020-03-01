import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useText01CardContentStyles } from '@mui-treasury/styles/cardContent/text01';

const TextCardContent01 = () => {
  const styles = useText01CardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          classes={styles}
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
TextCardContent01.metadata = {
  title: 'Text I',
  path: 'component/cardContent/text01',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text01/text01CardContent.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent01;
