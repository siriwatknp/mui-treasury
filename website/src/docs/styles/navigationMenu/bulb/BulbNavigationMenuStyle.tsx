import React from 'react';
import Box from '@material-ui/core/Box';
import { red } from '@material-ui/core/colors';
import { Font, FontProvider } from 'website/src/components/Font';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useBulbNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/bulb';

export const BulbNavigationMenuStyle = React.memo(
  function BulbNavigationMenu() {
    return (
      <Box height={48} display={'flex'}>
        <FontProvider fonts={[{ font: 'Rubik' }]}>
          <NavMenu gutter={1} useStyles={useBulbNavigationMenuStyles}>
            <NavItem active>
              <Font>Marketing</Font>
            </NavItem>
            <NavItem>
              <Font>Sales</Font>
            </NavItem>
            <NavItem>
              <Font>Service</Font>
            </NavItem>
            <NavItem>
              <Font>Website</Font>
            </NavItem>
            <NavItem>
              <Font>Contact Us</Font>
            </NavItem>
          </NavMenu>
        </FontProvider>
      </Box>
    );
  }
);
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Bulb'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    frameProps={{ bgcolor: 'common.white' }}
    hasDarkTheme
    theme={{
      palette: {
        primary: {
          main: red['500'],
        },
      },
    }}
  >
    <BulbNavigationMenuStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/navigationMenu/bulb',
  colSpan: 8,
  createdAt: 'Sat Jul 18 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'navigationMenu/bulb/bulbNavigationMenu.styles.ts',
    },
  ],
};
// @ts-ignore
BulbNavigationMenuStyle.Showcase = AttachedShowcase;
// @ts-ignore
BulbNavigationMenuStyle.metadata = metadata;
// hide-end
