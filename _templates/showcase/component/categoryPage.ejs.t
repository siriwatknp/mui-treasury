---
to: website/src/pages/components/<%= h.changeCase.param(category) %>.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/<%= category %>';

const <%= h.changeCase.pascal(category) %>Page = () => (
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

export default <%= h.changeCase.pascal(category) %>Page;
