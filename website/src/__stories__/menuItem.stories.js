import React from 'react';
import { storiesOf } from '@storybook/react';
import { MenuToggle, MuiSvgArrowToggle } from '@mui-treasury/components';
import { text, boolean } from '@storybook/addon-knobs';
import { useGatsbyMenuItemStyles } from '@mui-treasury/styles';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

const createCommonProps = () => ({
  label: text('label', 'Menu label'),
  selected: boolean('selected', false),
  toggleSeparated: boolean('toggleSeparated', false),
  toggle: boolean('toggle', undefined),
  expanded: boolean('expanded', false),
  renderToggle: props => <MuiSvgArrowToggle {...props} />,
});

storiesOf('Components|Vertical Menu/MenuItem', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('default', () => <MenuToggle {...createCommonProps()} />)
  .add('Gatsby', () => (
    <StylesProvider useStyles={useGatsbyMenuItemStyles}>
      {styles => <MenuToggle classes={styles} {...createCommonProps()} />}
    </StylesProvider>
  ));
