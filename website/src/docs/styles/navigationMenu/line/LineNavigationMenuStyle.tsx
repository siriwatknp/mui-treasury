import React from 'react';
import Box from '@material-ui/core/Box';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useLineNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/line';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import { FontProvider, Font } from 'website/src/components/Font';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange['700'],
    },
  },
});

export const LineNavigationMenuStyle = React.memo(
  function LineNavigationMenu() {
    // <FontProvider /> & <Font /> is only for showcasing
    return (
      <Box height={48} display={'flex'}>
        <ThemeProvider theme={theme}>
          <FontProvider fonts={[{ font: 'Poppins' }]}>
            <NavMenu useStyles={useLineNavigationMenuStyles}>
              <NavItem active>
                <Font>Platform</Font> <KeyboardArrowDown />
              </NavItem>
              <NavItem>
                <Font>Business cases</Font> <KeyboardArrowDown />
              </NavItem>
              <NavItem>
                <Font>Developers</Font>
              </NavItem>
              <NavItem>
                <Font>Security</Font>
              </NavItem>
            </NavMenu>
          </FontProvider>
        </ThemeProvider>
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
    title={'Line'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <LineNavigationMenuStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/navigationMenu/line',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sat Jul 18 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'navigationMenu/line/lineNavigationMenu.styles.ts',
    },
  ],
};
// @ts-ignore
LineNavigationMenuStyle.Showcase = AttachedShowcase;
// @ts-ignore
LineNavigationMenuStyle.metadata = metadata;
// hide-end
