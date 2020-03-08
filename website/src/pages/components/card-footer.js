import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/cardFooter';

const CardFooterPage = () => (
  <DemoPage
    title={'Card Footer'}
    description={'show extra information or glimpse detail about this card'}
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

export default CardFooterPage;
