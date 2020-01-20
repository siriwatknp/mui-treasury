import React from 'react';
import Box from '@material-ui/core/Box';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import cx from 'clsx';

const MiddleItemRowFlex = () => {
  const flexStyles = useRowFlexStyles();
  return (
    <Box
      className={flexStyles.relativeParent}
      minWidth={{ xs: 300, sm: 500 }}
      bgcolor={'grey.100'}
    >
      <Box width={72} height={80} bgcolor={'primary.light'} m={1} />
      <Box
        className={flexStyles.centeredChild}
        borderRadius={'50%'}
        height={40}
        width={40}
        bgcolor={'common.white'}
        border={'1px solid #888'}
      />
      <Box
        className={cx(flexStyles.rightChild, flexStyles.parent)}
        bgcolor={'secondary.light'}
        m={1}
        p={1}
      >
        <Box width={40} height={40} bgcolor={'common.white'} />
        <Box width={64} height={40} bgcolor={'grey.300'} ml={1} />
      </Box>
    </Box>
  );
};

// hide-start
MiddleItemRowFlex.metadata = {
  title: 'Row (middle-item)',
  description: 'The middle item is always centered',
  path: 'flex/middleItemRow',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'flex/row/rowFlex.styles.js' }],
  relates: [],
};
// hide-end

export default MiddleItemRowFlex;
