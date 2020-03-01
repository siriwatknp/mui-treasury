import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import { useArrowWhiteButtonStyles } from '@mui-treasury/styles/button/arrowWhite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const ArrowWhiteButtonDemo = () => {
  const classes = useArrowWhiteButtonStyles();
  const gutterStyles = usePushingGutterStyles({
    firstExcluded: true,
    space: 2,
  });
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={classes}>
        <KeyboardArrowLeft />
      </Button>
      <Button classes={classes}>
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};
// hide-start
ArrowWhiteButtonDemo.metadata = {
  title: 'Arrow White',
  path: 'styles/button/arrowWhite',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {
    bgcolor: '#171717',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'button/arrowWhite/arrowWhiteButton.styles.js' }],
};
// hide-end

export default ArrowWhiteButtonDemo;
