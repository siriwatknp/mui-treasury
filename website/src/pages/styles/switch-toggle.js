import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/switchToggle';

const CuteSwitchToggleStyle = () => (
  <DemoPage
    title={'Switch Toggle'}
    description={'A collection of Switch Toggle components'}
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

export default CuteSwitchToggleStyle;
