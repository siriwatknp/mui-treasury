import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/card';

const CardPage = () => (
  <DemoPage
    title={'Card'}
    description={'A must for displaying data in grid'}
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        minWidth: 400,
      },
    }}
  />
);

export default CardPage;
