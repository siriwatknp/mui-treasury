import React from 'react';
import { Link } from 'gatsby';
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation';

export const NavigationMenuDemo = React.memo(function NavigationMenu() {
  return (
    <>
      <NavMenu gutter={'8px'}>
        <NavItem as={Link} to={'/components/menu/'}>
          Products
        </NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem active>Help</NavItem>
        <NavItem>Contact Us</NavItem>
      </NavMenu>
    </>
  );
});
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Navigation'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <NavigationMenuDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/menu/navigation',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sat Jul 18 2020',
  frameProps: {
    bgcolor: 'transparent',
  },
  stylesUrl: '/styles/navigation-menu/',
  files: [],
};
// @ts-ignore
NavigationMenuDemo.Showcase = AttachedShowcase;
// @ts-ignore
NavigationMenuDemo.metadata = metadata;
// hide-end
