import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/collapsibleMenu';

const GatsbyCollapsibleMenuStyle = () => (
  <DemoPage
    title={'Collapsible Menu'}
    description={'A collection of Collapsible Menu components'}
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

export default GatsbyCollapsibleMenuStyle;
