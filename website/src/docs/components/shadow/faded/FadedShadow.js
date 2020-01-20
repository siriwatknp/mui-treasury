import React from 'react';
import Box from '@material-ui/core/Box';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const FadedShadow = () => {
  const styles = useFadedShadowStyles();
  return <Box width={'80%'} borderRadius={24} height={160} classes={styles} />;
};

// hide-start
FadedShadow.metadata = {
  title: 'Faded',
  path: 'shadow/faded',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' }],
};
// hide-end

export default FadedShadow;
