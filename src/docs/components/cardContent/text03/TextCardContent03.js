import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useTextCardContent03Styles } from '@mui-treasury/styles/cardContent';

const TextCardContent03 = () => {
  const styles = useTextCardContent03Styles();
  return (
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
  );
};

// hide-start
TextCardContent03.metadata = {
  title: 'Text III',
  path: 'cardContent/text03',
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardContent/text03/textCardContent03.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent03;
