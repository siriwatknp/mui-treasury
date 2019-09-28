import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/grid';

const GridPage = () => (
  <DemoPage
    title={'Grid'}
    description={
      'Responsive layout for displaying similar components in table-liked style'
    }
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
      GridItemProps: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      },
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        textAlign: 'center',
        minWidth: 600,
      },
    }}
  />
);

export default GridPage;
