import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid';

const GutterBorderedGrid = () => {
  const colWidth = { xs: 4 };
  const borderColor = 'grey.500';
  const styles = useGutterBorderedGridStyles({ borderColor, height: '80%' });
  return (
    <Box width={{ xs: '100%', md: '80%' }}>
      <Grid container justify={'center'}>
        {Array(3)
          .fill(0)
          .map((number, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid key={i} item {...colWidth} classes={styles}>
              <Box textAlign={'center'}>
                <h2 style={{ margin: 0, fontSize: 20 }}>Content</h2>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

// hide-start
GutterBorderedGrid.metadata = {
  title: 'Gutter Bordered',
  description: 'show border between each item',
  path: 'grid/gutterBordered',
  size: 'large',
  files: [
    {
      pkg: 'mui-styles',
      path: 'grid/gutterBordered/gutterBorderedGrid.styles.js',
    },
  ],
};
// hide-end

export default GutterBorderedGrid;
