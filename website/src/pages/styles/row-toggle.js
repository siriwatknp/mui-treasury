import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/rowToggle';

const GatsbyRowToggleStyle = () => (
  <DemoPage
    title={'Row Toggle'}
    description={'A collection of Row Toggle components'}
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

export default GatsbyRowToggleStyle;
