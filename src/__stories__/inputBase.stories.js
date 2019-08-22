import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import { text, boolean, color, object } from '@storybook/addon-knobs';
import { useContrastInputBase } from '@mui-treasury/styles';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

storiesOf('Components|InputBase', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('contrast', () => (
    <StylesProvider useStyles={useContrastInputBase}>
      {styles => (
        <Box py={'2.5rem'}>
          <InputBase classes={styles} placeholder={'Search...'} />
        </Box>
      )}
    </StylesProvider>
  ));
