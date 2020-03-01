import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/inputBase';

const InputBaseStyles = () => (
  <DemoPage
    title={'Input'}
    description={'A very common component that lives in almost every form.'}
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

export default InputBaseStyles;
