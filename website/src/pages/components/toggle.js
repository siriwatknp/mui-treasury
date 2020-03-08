import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/toggle';

const SwitchTogglePage = () => (
  <DemoPage
    title={'Toggle'}
    description={'A collection of Toggle components'}
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

export default SwitchTogglePage;
