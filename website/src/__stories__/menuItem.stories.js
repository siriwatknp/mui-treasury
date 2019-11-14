import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import createContainer, { StylesProvider } from './helpers/containerDecorator';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

// COMPONENTS
import { MenuToggle, MuiSvgArrowToggle } from '@mui-treasury/components';
import ToggleMenuItem from '@mui-treasury/components/menuItem/toggle';
import ActionToggleItem from '@mui-treasury/components/menuItem/actionToggle';
import InfoMenuItem from '@mui-treasury/components/menuItem/info';

// STYLES
import {
  useMaterialToggleMenuItemStyles,
  useMaterialActionToggleItemStyles,
  useMaterialInfoMenuItemStyles,
} from '@mui-treasury/styles/menuItem/material';
import { useGatsbyMenuItemStyles } from '@mui-treasury/styles';

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
  ))
  .add('Material', () => (
    <>
      <StylesProvider useStyles={useMaterialToggleMenuItemStyles}>
        {styles => (
          <div>
            <ToggleMenuItem
              className={styles.root}
              symbolClassName={styles.symbol}
            >
              Toggle Menu Item
            </ToggleMenuItem>
            <ToggleMenuItem
              className={styles.root}
              symbolClassName={styles.symbol}
            >
              <Box
                flex={'auto'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mr={2}
              >
                <span>Left Label</span>
                <Chip label={'chip'} size={'small'} color={'secondary'} />
              </Box>
            </ToggleMenuItem>
          </div>
        )}
      </StylesProvider>
      <StylesProvider useStyles={useMaterialActionToggleItemStyles}>
        {styles => (
          <ActionToggleItem classes={styles}>Toggle Menu</ActionToggleItem>
        )}
      </StylesProvider>
      <StylesProvider useStyles={useMaterialInfoMenuItemStyles}>
        {styles => (
          <InfoMenuItem
            className={styles.root}
            infoClassName={styles.info}
            info={99}
          >
            Info Menu
          </InfoMenuItem>
        )}
      </StylesProvider>
    </>
  ));
