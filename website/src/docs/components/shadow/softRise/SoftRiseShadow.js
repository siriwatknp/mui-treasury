import React from 'react';
import Box from '@material-ui/core/Box';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';

const SoftRiseShadow = () => {
  const styles = useSoftRiseShadowStyles({
    // inactive: true, // add this line to disable hover effect
  });
  return <Box width={'80%'} borderRadius={4} height={160} classes={styles} />;
};

// hide-start
SoftRiseShadow.metadata = {
  title: 'Soft Rise',
  path: 'shadow/softRise',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/softRise/softRiseShadow.styles.js' },
  ],
};
// hide-end

export default SoftRiseShadow;
