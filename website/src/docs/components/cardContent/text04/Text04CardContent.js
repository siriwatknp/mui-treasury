import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useText04CardContentStyles } from '@mui-treasury/styles/cardContent/text04';

const Text04CardContent = () => {
  const styles = useText04CardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          classes={styles}
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
Text04CardContent.metadata = {
  title: 'Text IV',
  path: 'cardContent/text04',
  createdAt: 'Mon Feb 10 2020',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
};
// hide-end

export default Text04CardContent;
