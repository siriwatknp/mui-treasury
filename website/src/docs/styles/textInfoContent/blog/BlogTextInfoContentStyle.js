import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';

const BlogTextInfoContentStyle = () => {
  const styles = useBlogTextInfoContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoContent
          useStyles={useBlogTextInfoContentStyles}
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
BlogTextInfoContentStyle.metadata = {
  title: 'Blog',
  path: 'styles/textInfoContent/blog',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/blog/blogTextInfoContent.styles.js',
    },
  ],
};
// hide-end

export default BlogTextInfoContentStyle;
