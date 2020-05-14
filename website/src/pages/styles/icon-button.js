import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/iconButton';

const SizedIconButtonStyle = () => (
  <DemoPage
    title={'Icon Button'}
    description={'A collection of Icon Button components'}
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

export default SizedIconButtonStyle;
