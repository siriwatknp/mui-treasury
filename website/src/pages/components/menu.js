import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/menu';

const MenuPage = () => (
  <DemoPage
    title={'Menu'}
    description={'A collection of Menu components'}
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

export default MenuPage;
