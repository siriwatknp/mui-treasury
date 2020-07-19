import React from 'react';
import * as components from '../../docs/styles/categoryMenu';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const CategoryMenuStylePage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'CategoryMenu'}
        description={''}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default CategoryMenuStylePage;
