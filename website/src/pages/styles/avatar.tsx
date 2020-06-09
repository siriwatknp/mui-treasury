import React from 'react';

import * as components from '../../docs/styles/avatar';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const AvatarStylePage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'Avatar'}
        description={'A collection of Avatar components'}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default AvatarStylePage;
