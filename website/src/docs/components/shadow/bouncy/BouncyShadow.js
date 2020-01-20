import React from 'react';
import Box from '@material-ui/core/Box';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const BouncyShadow = () => {
  const styles = useBouncyShadowStyles();
  return <Box width={'80%'} borderRadius={24} height={160} classes={styles} />;
};

// hide-start
BouncyShadow.metadata = {
  title: 'Bouncy',
  description: 'Not a bug, just hover it',
  path: 'shadow/faded',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' }],
};
// hide-end

export default BouncyShadow;
