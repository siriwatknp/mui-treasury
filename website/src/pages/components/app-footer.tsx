import React from 'react';

import * as components from '../../docs/components/appFooter';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const AppFooterDemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'App Footer'}
        description={'Extra details of your application'}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default AppFooterDemoPage;
