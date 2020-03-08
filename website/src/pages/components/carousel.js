import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/carousel';

const CarouselPage = () => (
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
        minWidth: 600,
      },
    }}
  />
);

export default CarouselPage;
