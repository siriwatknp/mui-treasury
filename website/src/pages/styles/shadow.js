import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/shadow';

const ShadowStyles = () => (
  <DemoPage
    title={'Shadow'}
    description={"Increase your site's layers with shadows"}
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

export default ShadowStyles;
