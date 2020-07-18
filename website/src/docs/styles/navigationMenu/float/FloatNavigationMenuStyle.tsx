import React from 'react';
import { Link } from 'gatsby'; // can be react-router-dom, reach router
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';

export const FloatNavigationMenuStyle = React.memo(
  function FloatNavigationMenu() {
    return (
      <>
        <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
          <NavItem active>Systems</NavItem>
          <NavItem as={Link} to={'/components/menu/'}>Illustrations</NavItem>
          <NavItem>Templates</NavItem>
          <NavItem>Mockups</NavItem>
        </NavMenu>
      </>
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
    title={'Float'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <FloatNavigationMenuStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/navigationMenu/float',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sat Jul 18 2020',
  files: [{ pkg: 'mui-styles', path: 'navigationMenu/float/floatNavigationMenu.styles.ts' }],
};
// @ts-ignore
FloatNavigationMenuStyle.Showcase = AttachedShowcase
// @ts-ignore
FloatNavigationMenuStyle.metadata = metadata
// hide-end
