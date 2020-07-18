import React from 'react';
import * as components from '../../docs/styles/navigationMenu';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const NavigationMenuStylePage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'NavigationMenu'}
        description={''}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default NavigationMenuStylePage;
