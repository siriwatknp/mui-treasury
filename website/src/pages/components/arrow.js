import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/arrow';

const CardContentPage = () => (
  <DemoPage
    title={'Arrow'}
    description={'Guiding direction for users'}
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
