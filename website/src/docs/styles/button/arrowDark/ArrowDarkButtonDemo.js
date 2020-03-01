import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const ArrowDarkButtonDemo = () => {
  const classes = useArrowDarkButtonStyles();
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
ArrowDarkButtonDemo.metadata = {
  title: 'Arrow Dark',
  path: 'styles/button/arrowDark',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'button/arrowDark/arrowDarkButton.styles.js' }],
};
// hide-end

export default ArrowDarkButtonDemo;