import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/textInfoContent';

const N01TextInfoContentStyle = () => (
  <DemoPage
    title={'Text Info Card Content'}
    description={'A collection of Text Info Card Content components'}
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

export default N01TextInfoContentStyle;
