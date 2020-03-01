import React from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const OverShadow = () => {
  const styles = useOverShadowStyles({
    // inactive: true, // add this line to disable hover effect
  });
  return <Box width={'80%'} borderRadius={16} height={160} classes={styles} />;
};

// hide-start
OverShadow.metadata = {
  title: 'Over',
  path: 'styles/shadow/over',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'shadow/over/overShadow.styles.js' }],
};
// hide-end

export default OverShadow;
