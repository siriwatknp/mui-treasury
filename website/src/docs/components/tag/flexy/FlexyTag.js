import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMissedOutgoing from '@material-ui/icons/CallMissedOutgoing';
import { useFlexyTagStyles } from '@mui-treasury/styles/tag/flexy';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const FlexyTag = () => {
  const classes = useFlexyTagStyles();
  const gutterStyles = usePushingGutterStyles();
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={{ root: classes.root, label: classes.label }}>
        <div>
          <span className={classes.overline}>Demo</span>
          Code Sandbox
        </div>
        <CallMissedOutgoing className={classes.icon} />
      </Button>
      <Button classes={{ root: classes.root, label: classes.label }}>
        Code Sandbox
        <CallMissedOutgoing className={classes.icon} />
      </Button>
    </Box>
  );
};

// hide-start
FlexyTag.metadata = {
  title: 'Flexy',
  path: 'tag/flexy',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'tag/flexy/flexyTag.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default FlexyTag;
