import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/sidebarItem';

const SidebarItemPage = () => (
  <DemoPage
    title={'Sidebar Item'}
    description={'A collection of Sidebar Item components'}
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
      },
    }}
  />
);

export default SidebarItemPage;
