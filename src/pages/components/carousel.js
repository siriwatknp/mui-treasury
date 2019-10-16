import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/carousel';

const CardContentPage = () => (
  <DemoPage
    title={'Carousel'}
    description={
      'Another fancy one that combine multiple components to build great ui'
    }
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
