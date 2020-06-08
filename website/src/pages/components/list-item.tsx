import React from 'react';

import * as components from '../../docs/components/listItem';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const ListItemDemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'List Item'}
        description={'One of the most frequently seen in web design'}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default ListItemDemoPage;
