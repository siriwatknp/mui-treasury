import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/avatar';

const GoogleAvatarStyle = () => (
  <DemoPage
    title={'Avatar'}
    description={'A collection of Avatar components'}
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

export default GoogleAvatarStyle;
