import React from 'react';
import Box from '@material-ui/core/Box';
import { useFloatShadowStyles } from '@mui-treasury/styles/shadow/float';

const FloatShadow = () => {
  const styles = useFloatShadowStyles();
  return <Box width={'80%'} borderRadius={24} height={160} classes={styles} />;
};

// hide-start
FloatShadow.metadata = {
  title: 'Float',
  path: 'shadow/float',
  files: [{ pkg: 'mui-styles', path: 'shadow/float/floatShadow.styles.js' }],
};
// hide-end

export default FloatShadow;
