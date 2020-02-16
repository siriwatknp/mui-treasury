---
to: website/src/pages/components/<%= h.changeCase.snake(category) %>.js
unless_exists: true
---
import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/<%= category %>';

const CardContentPage = () => (
  <DemoPage
    title={'<%= h.changeCase.title(category) %>'}
    description={'A collection of <%= h.changeCase.title(category) %> components'}
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

export default CardContentPage;
