import React from 'react';
import Box from '@material-ui/core/Box';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';

const RowFlex = () => {
  const flexStyles = useRowFlexStyles();
  return (
    <Box
      className={flexStyles.parent}
      minWidth={{ xs: 300, sm: 500 }}
      bgcolor={'grey.100'}
    >
      <Box
        className={flexStyles.autoChild}
        height={80}
        bgcolor={'primary.light'}
        m={1}
      />
      <Box
        className={flexStyles.autoChild}
        height={24}
        bgcolor={'grey.500'}
        m={1}
      />
      <Box
        className={flexStyles.autoChild}
        height={40}
        bgcolor={'secondary.light'}
        m={1}
      />
    </Box>
  );
};

// hide-start
RowFlex.metadata = {
  title: 'Row (auto-child)',
  description: 'All child has the same width',
  path: 'flex/row',
  size: 'large',
  files: [{ pkg: 'mui-styles', path: 'flex/row/rowFlex.styles.js' }],
  relates: [],
};
// hide-end

export default RowFlex;
