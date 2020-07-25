import React from 'react';
import * as components from '../../docs/styles/socialLink';
import ComponentHeading from '../../components/organisms/ComponentHeading';

import SourceDrawer from '../../containers/SourceDrawer';
import DemoSection from '../../components/DemoSection';

const SocialLinkStylePage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'SocialLink'}
        description={''}
      />
      <DemoSection components={components} setComponent={setComponent} />
    </div>
  );
};

export default SocialLinkStylePage;
