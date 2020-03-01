import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/textField';

const TextFieldStyles = () => (
  <DemoPage
    title={'Text Field'}
    description={'Full feature input with accessibility and great ux'}
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

export default TextFieldStyles;
