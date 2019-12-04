import React from 'react';
import DemoPage from 'containers/Demo';
import {
  customComponents,
  DefaultComponent,
} from 'docs/components/icon';

const CardContentPage = () => (
  <DemoPage
    title={'Icon'}
    description={'Symbols that help people understand at first glance'}
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
