import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/indicator';

const CardContentPage = () => (
  <DemoPage
    title={'Indicator'}
    description={'Represent amount of items for some component'}
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

export default CardContentPage;
