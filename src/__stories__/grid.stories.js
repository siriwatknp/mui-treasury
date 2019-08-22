import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { text, boolean, color, object } from '@storybook/addon-knobs';
import { useBorderedGrid } from '@mui-treasury/styles';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

storiesOf('Components|Grid', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('bordered', () => {
    const colWidth = object('colWidth', { xs: 6, sm: 4, md: 3 });
    const useStyles = () =>
      useBorderedGrid({
        colWidth,
        borderColor: color('color', undefined),
      });
    return (
      <StylesProvider useStyles={useStyles}>
        {styles => (
          <Box py={'2.5rem'}>
            <Grid container classes={styles}>
              {new Array(12).fill(0).map((item, index) => (
                <Grid key={index} item classes={styles} {...colWidth}>
                  <Box minHeight={'10rem'} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </StylesProvider>
    );
  });
