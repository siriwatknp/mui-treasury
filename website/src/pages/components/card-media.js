import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/cardMedia';

const CardMediaPage = () => (
  <DemoPage
    title={'Card Media'}
    description={"Improve your site's beauty by adding images or videos"}
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

export default CardMediaPage;
