import React from 'react';
import Box from '@material-ui/core/Box';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';

const SideRowFlex = () => {
  const flexStyles = useRowFlexStyles();
  return (
    <Box
      className={flexStyles.parent}
      minWidth={{ xs: 300, sm: 500 }}
      bgcolor={'grey.100'}
    >
      <Box height={64} width={80} bgcolor={'primary.light'} m={1} />
      <Box
        className={flexStyles.rightChild}
        height={40}
        width={100}
        bgcolor={'secondary.light'}
        m={1}
      />
    </Box>
  );
};

// hide-start
SideRowFlex.metadata = {
  title: 'Row (side-child)',
  description: 'Last child is pushed to the right',
  path: 'styles/flex/sideRow',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'flex/row/rowFlex.styles.js' }],
  relates: [],
};
// hide-end

export default SideRowFlex;
