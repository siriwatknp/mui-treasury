import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useTextCardContent01Styles } from '@mui-treasury/styles/cardContent';

const TextCardContent01 = () => {
  const styles = useTextCardContent01Styles();
  return (
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
  );
};

// hide-start
TextCardContent01.metadata = {
  title: 'Text I',
  path: 'cardContent/text01',
  files: [
    {
      pkg: 'mui-components',
      path: 'cardContent/text01/TextCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text01/textCardContent01.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent01;
