import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { text, boolean, color, object } from '@storybook/addon-knobs';
import { Expander } from '@mui-treasury/components';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

storiesOf('Components|Expander', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('default', () => {
    return (
      <Expander
        menus={[
          { key: 'ex1', label: 'Expander 1', content: 'Hello World' },
          {
            key: 'ex2',
            label: 'Expander 2',
            content: <Box minHeight={200}>Hello</Box>,
          },
        ]}
      />
    );
  });
