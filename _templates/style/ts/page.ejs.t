---
to: website/src/pages/styles/<%= h.changeCase.paramCase(category) %>.tsx
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import * as components from '../../docs/components/<%= category %>';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const <%= h.changeCase.pascal(category) %>StylePage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'<%= h.changeCase.pascal(category) %>'}
        description={''}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default <%= h.changeCase.pascal(category) %>StylePage;
