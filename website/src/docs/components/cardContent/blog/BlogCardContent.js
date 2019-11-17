import React from 'react';
import omit from 'lodash/omit';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';

const TextCardContent01 = () => {
  const styles = useBlogCardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          classes={omit(styles, ['button'])}
          overline={'28 MAR 2019'}
          heading={'What is Git ?'}
          body={
            'Git is a distributed version control system. Every dev has a working copy of the code and...'
          }
        />
        <Button className={styles.button}>Read more</Button>
      </CardContent>
    </Box>
  );
};

// hide-start
TextCardContent01.metadata = {
  title: 'Blog',
  path: 'cardContent/blog',
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardContent/blog/blogCardContent.styles.js',
    },
  ],
};
// hide-end

export default TextCardContent01;
