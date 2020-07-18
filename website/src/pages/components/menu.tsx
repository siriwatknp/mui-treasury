import React from 'react';

import * as components from '../../docs/components/menu';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const MenuDemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'Menu'}
        description={'A collection of Menu components'}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default MenuDemoPage;
