import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';

const NestedRowFlex = () => {
  const flexStyles = useRowFlexStyles();
  return (
    <Box
      className={flexStyles.parent}
      minWidth={{ xs: 300, sm: 500 }}
      bgcolor={'grey.100'}
    >
      <Box height={64} width={80} bgcolor={'primary.light'} m={1} />
      <Box
        className={cx(flexStyles.rightChild, flexStyles.parent)}
        bgcolor={'secondary.light'}
        m={1}
        p={1}
      >
        <Box width={120} height={64} bgcolor={'common.white'} />
        <Box width={64} height={40} bgcolor={'grey.300'} ml={1} />
      </Box>
    </Box>
  );
};

// hide-start
NestedRowFlex.metadata = {
  title: 'Row (nested-child)',
  description: 'Every nested child is middle-aligned',
  path: 'flex/nestedRow',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'flex/row/rowFlex.styles.js' }],
  relates: [],
};
// hide-end

export default NestedRowFlex;
