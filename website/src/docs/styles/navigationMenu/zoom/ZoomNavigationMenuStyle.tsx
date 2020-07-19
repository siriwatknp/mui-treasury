import React from 'react';
import Box from '@material-ui/core/Box';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useZoomNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/zoom';

import { FontProvider, Font } from 'website/src/components/Font';

export const ZoomNavigationMenuStyle = React.memo(
  function ZoomNavigationMenu() {
    return (
      <Box height={64} display={'flex'}>
        <FontProvider fonts={[{ font: 'Oswald' }]}>
          <NavMenu useStyles={useZoomNavigationMenuStyles}>
            <NavItem>
              <Font>New Releases</Font>
            </NavItem>
            <NavItem>
              <Font>Men</Font>
            </NavItem>
            <NavItem>
              <Font>Women</Font>
            </NavItem>
            <NavItem>
              <Font>Kids</Font>
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
    title={'Zoom'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <ZoomNavigationMenuStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/navigationMenu/zoom',
  colSpan: 5,
  createdAt: 'Sat Jul 18 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'navigationMenu/zoom/zoomNavigationMenu.styles.ts',
    },
  ],
};
// @ts-ignore
ZoomNavigationMenuStyle.Showcase = AttachedShowcase;
// @ts-ignore
ZoomNavigationMenuStyle.metadata = metadata;
// hide-end
