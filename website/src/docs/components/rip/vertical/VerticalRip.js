import React from 'react';
import Box from '@material-ui/core/Box';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';

const VerticalRip = () => {
  const styles = useVerticalRipStyles({
    size: 20,
    rightColor: '#e5e5e5',
    tearColor: 'primary.main',
  });
  return (
    <Box height={200} display={'flex'} position={'relative'}>
      <div className={styles.left}>
        <div className={styles.tear} />
      </div>
      <div className={styles.right}>
        <div className={styles.tear} />
      </div>
    </Box>
  );
};

VerticalRip.propTypes = {};
VerticalRip.defaultProps = {};

// hide-start
VerticalRip.metadata = {
  title: 'Vertical',
  path: 'rip/vertical',
  frameProps: {
    bgcolor: 'primary.main',
  },
  files: [
    {
      pkg: 'mui-styles',
      path: 'rip/vertical/verticalRip.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default VerticalRip;
