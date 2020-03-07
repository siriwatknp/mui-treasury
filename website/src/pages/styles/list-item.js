import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/listItem';

const GatsbyListItemStyle = () => (
  <DemoPage
    title={'List Item'}
    description={'A collection of List Item components'}
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

export default GatsbyListItemStyle;
