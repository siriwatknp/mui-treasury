import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import { useInvertedArrowStyles } from '@mui-treasury/styles/arrow/inverted';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const InvertedArrow = () => {
  const classes = useInvertedArrowStyles();
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

InvertedArrow.propTypes = {};
InvertedArrow.defaultProps = {};

// hide-start
InvertedArrow.metadata = {
  title: 'Inverted',
  path: 'arrow/inverted',
  frameProps: {
    bgcolor: '#1c1c1c',
  },
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'arrow/inverted/invertedArrow.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default InvertedArrow;
