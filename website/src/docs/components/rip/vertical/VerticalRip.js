import React from 'react';
import Box from '@material-ui/core/Box';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket';

const VerticalRip = () => {
  const styles = useVerticalRipStyles({
    size: 20,
    rightColor: '#e5e5e5',
    tearColor: 'primary.main',
  });
  return (
    <Box height={200} display={'flex'} position={'relative'}>
      <VerticalTicketRip classes={styles} />
    </Box>
  );
};

VerticalRip.propTypes = {};
VerticalRip.defaultProps = {};

// hide-start
VerticalRip.metadata = {
  title: 'Vertical',
  path: 'component/rip/vertical',
  frameProps: {
    bgcolor: 'primary.main',
  },
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-components', path: 'rip/verticalTicket/VerticalTicketRip.js' },
    {
      pkg: 'mui-styles',
      path: 'rip/vertical/verticalRip.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default VerticalRip;
