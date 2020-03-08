import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/nestedMenu';

const GatsbyNestedMenuStyle = () => (
  <DemoPage
    title={'Nested Menu'}
    description={'A collection of Nested Menu components'}
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

export default GatsbyNestedMenuStyle;
