import React from 'react';
import { Link } from 'gatsby'; // can be react-router-dom, reach router
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';

export const PlainNavigationMenuStyle = React.memo(
  function PlainNavigationMenu() {
    return (
      <NavMenu useStyles={usePlainNavigationMenuStyles}>
        <NavItem active>Item 1</NavItem>
        <NavItem as={Link} to={'/components/menu/'}>Item 2</NavItem>
        <NavItem>Item 3</NavItem>
        <NavItem>Item 4</NavItem>
      </NavMenu>
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
    title={'Plain'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <PlainNavigationMenuStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/navigationMenu/plain',
  colSpan: 7,
  createdAt: 'Sun Jul 26 2020',
  files: [{ pkg: 'mui-styles', path: 'navigationMenu/plain/plainNavigationMenu.styles.ts' }],
};
// @ts-ignore
PlainNavigationMenuStyle.Showcase = AttachedShowcase
// @ts-ignore
PlainNavigationMenuStyle.metadata = metadata
// hide-end
