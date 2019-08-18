import React from 'react';
import { storiesOf } from '@storybook/react';
import { MenuToggle } from '@mui-treasury/components';
import { text } from '@storybook/addon-knobs';

storiesOf('Components/MenuItem', module).add('default', () => (
  <MenuToggle label={text('label', 'Menu label')} />
));
