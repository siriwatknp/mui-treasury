import React from 'react';
import Box from '@material-ui/core/Box';
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';

const RowGutterStyle = () => {
  const gutterStyles = useRowGutterStyles();
  const largeGutterStyles = useRowGutterStyles({ size: '1rem' });
  const allGutterStyles = useRowGutterStyles({
    size: 16, // turn to px
    before: 20, // turn to px
    after: 20, // turn to px
  });
  const size = { width: 48, height: 48, display: 'inline-block' };
  const parentProps = { lineHeight: 0 };
  return (
    <div>
      <Box className={gutterStyles.parent} {...parentProps}>
        <Box {...size} bgcolor={'primary.main'} />
        <Box {...size} bgcolor={'primary.main'} />
        <Box {...size} bgcolor={'primary.main'} />
      </Box>
      <br />
      <Box className={largeGutterStyles.parent} {...parentProps}>
        <Box {...size} bgcolor={'secondary.main'} />
        <Box {...size} bgcolor={'secondary.main'} />
        <Box {...size} bgcolor={'secondary.main'} />
      </Box>
      <br />
      <Box
        bgcolor={'grey.300'}
        className={allGutterStyles.parent}
        {...parentProps}
      >
        <Box {...size} bgcolor={'primary.main'} />
        <Box {...size} bgcolor={'primary.main'} />
        <Box {...size} bgcolor={'primary.main'} />
        <Box {...size} bgcolor={'primary.main'} />
      </Box>
    </div>
  );
};
// hide-start
RowGutterStyle.metadata = {
  title: 'Row',
  description: 'add margin to children',
  path: 'styles/gutter/row',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Thu May 14 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'gutter/row/rowGutter.styles.ts' }],
};
// hide-end

export default RowGutterStyle;
