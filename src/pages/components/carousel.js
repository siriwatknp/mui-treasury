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
      normalGridItemConfig: {
        sm: 12,
        lg: 12,
      },
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        minWidth: 600,
      },
    }}
  />
);

export default CardContentPage;
