import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useBlogTextInfoCardContentStyles } from '@mui-treasury/styles/textInfoCardContent/blog';

const BlogTextInfoCardContentStyle = () => {
  const styles = useBlogTextInfoCardContentStyles();
  return (
    <Box maxWidth={343}>
      <CardContent>
        <TextInfoCardContent
          useStyles={useBlogTextInfoCardContentStyles}
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
BlogTextInfoCardContentStyle.metadata = {
  title: 'Blog',
  path: 'textInfoCardContent/blog',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'textInfoCardContent/blog/blogTextInfoCardContent.styles.js',
    },
  ],
};
// hide-end

export default BlogTextInfoCardContentStyle;
