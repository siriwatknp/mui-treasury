import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useShadeInputBaseStyles } from '@mui-treasury/styles/inputBase/shade';

const ShadeInputBaseStyle = () => {
  const styles = useShadeInputBaseStyles();
  return (
    <div>
      <InputBase classes={styles} placeholder={'Placeholder'} />
      <Box pb={1} />
      <InputBase error classes={styles} placeholder={'Error state'} />
      <Box pb={1} />
      <InputBase classes={styles} placeholder={'Disabled'} disabled />
    </div>
  );
};
// hide-start
ShadeInputBaseStyle.metadata = {
  title: 'Shade',
  path: 'styles/inputBase/shade',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 30 2020',
  frameProps: {
    bgcolor: '#fff',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'inputBase/shade/shadeInputBase.styles.js' },
  ],
};
// hide-end

export default ShadeInputBaseStyle;
