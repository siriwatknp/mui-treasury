import React from 'react';
import DemoPage from 'containers/Demo';
import {
  customComponents,
  DefaultComponent,
} from 'docs/components/cardContent';

const CardContentPage = () => (
  <DemoPage
    title={'Card Content'}
    description={'display summary or rough information of its domain'}
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
