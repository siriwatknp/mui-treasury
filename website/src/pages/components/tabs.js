import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/tabs';

const TabsPage = () => (
  <DemoPage
    title={'Tabs'}
    description={'Very useful when you have a multiple categories content.'}
    DemoComponentsProps={{
      noDefaultSection: true,
      ShowcaseWidgetProps: {
        frameProps: {
          maxWidth: 700,
          mx: 'auto',
        },
      },
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        maxWidth: 700,
      },
    }}
  />
);

export default TabsPage;
