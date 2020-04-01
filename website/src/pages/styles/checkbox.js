import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/checkbox';

const BannerCheckboxStyle = () => (
  <DemoPage
    title={'Checkbox'}
    description={'A collection of Checkbox components'}
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

export default BannerCheckboxStyle;
