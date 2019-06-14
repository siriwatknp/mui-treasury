import React from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Sheet from 'components/atoms/Sheet';

storiesOf('atoms', module).add('Sheet', () => (
  <Sheet
    bgColor={select(
      'bgColor',
      ['light', 'dark', 'white', 'transparent', '#ff0000'],
      'light',
    )}
  >
    <div style={{ width: 200, height: 300 }} />
  </Sheet>
));
