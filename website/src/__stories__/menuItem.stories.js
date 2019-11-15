import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import createContainer, {
  StylesProvider,
  StyleListProvider,
} from './helpers/containerDecorator';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

// COMPONENTS
import { MenuToggle, MuiSvgArrowToggle } from '@mui-treasury/components';
import ToggleMenuItem from '@mui-treasury/components/menuItem/toggle';
import ActionToggleItem from '@mui-treasury/components/menuItem/actionToggle';
import InfoMenuItem from '@mui-treasury/components/menuItem/info';

// STYLES
import { useMaterialToggleMenuItemStyles } from '@mui-treasury/styles/menuItem/toggle/material';
import { useMaterialActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/material';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';
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
    <StyleListProvider
      styleListHooks={[
        useMaterialToggleMenuItemStyles,
        useMaterialActionToggleItemStyles,
        useMaterialInfoMenuItemStyles,
      ]}
    >
      {([toggleStyles, actionStyles, infoStyles]) => (
        <>
          <div>
            <ToggleMenuItem
              className={toggleStyles.root}
              symbolClassName={toggleStyles.symbol}
            >
              Toggle Menu Item
            </ToggleMenuItem>
            <ToggleMenuItem
              className={toggleStyles.root}
              symbolClassName={toggleStyles.symbol}
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
          <ActionToggleItem classes={actionStyles}>
            Toggle Menu
          </ActionToggleItem>
          <InfoMenuItem
            className={infoStyles.root}
            infoClassName={infoStyles.info}
            info={99}
          >
            Info Menu
          </InfoMenuItem>
        </>
      )}
    </StyleListProvider>
  ));
