import React from 'react';

import * as components from '../../docs/components/card';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const CardDemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'Card'}
        description={'A must for displaying data in grid'}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default CardDemoPage;
