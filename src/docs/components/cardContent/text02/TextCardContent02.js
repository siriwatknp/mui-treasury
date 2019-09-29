import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useTextCardContent02Styles } from '@mui-treasury/styles/cardContent';

const TextCardContent02 = () => {
  const styles = useTextCardContent02Styles();
  return (
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
  );
};

// hide-start
TextCardContent02.metadata = {
  title: 'Text II',
  path: 'cardContent/text02',
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardContent/text02/textCardContent02.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent02;
