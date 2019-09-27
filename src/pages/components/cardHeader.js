import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/cardHeader';

const CardHeaderPage = () => (
  <DemoPage
    title={'Card Header'}
    description={
      'Responsible for emphasizing the content of the card, mostly at the top.'
    }
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        textAlign: 'center',
      },
    }}
  />
);

export default CardHeaderPage;
