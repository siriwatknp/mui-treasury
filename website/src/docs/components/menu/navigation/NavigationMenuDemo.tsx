import React from 'react';
import { NavItem } from '@mui-treasury/components/menu/navigation';

export const NavigationMenuDemo = React.memo(
  function NavigationMenu() {
    return (
      <>
        <NavItem>Hello</NavItem>
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
    title={'Navigation'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <NavigationMenuDemo />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'components/menu/navigation',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sat Jul 18 2020',
  files: [],
};
// @ts-ignore
NavigationMenuDemo.Showcase = AttachedShowcase
// @ts-ignore
NavigationMenuDemo.metadata = metadata
// hide-end
