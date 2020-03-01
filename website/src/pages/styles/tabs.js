import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/tabs';

const TabsStyles = () => (
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

export default TabsStyles;
