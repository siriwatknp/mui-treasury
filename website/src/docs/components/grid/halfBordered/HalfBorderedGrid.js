import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid/halfBordered';

const HalfBorderedGrid = () => {
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const borderColor = 'secondary.main';
  const styles = useHalfBorderedGridStyles({ borderColor, colWidth });
  return (
    <Box width={{ xs: '100%', md: '80%' }}>
      <Grid container classes={styles}>
        {Array(6)
          .fill(0)
          .map((number, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid key={i} item {...colWidth} classes={styles}>
              <Box minHeight={200} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

// hide-start
HalfBorderedGrid.metadata = {
  title: 'Half Bordered',
  path: 'grid/halfBordered',
  size: 'large',
  files: [
    { pkg: 'mui-styles', path: 'grid/halfBordered/halfBorderedGrid.styles.js' },
  ],
};
// hide-end

export default HalfBorderedGrid;
