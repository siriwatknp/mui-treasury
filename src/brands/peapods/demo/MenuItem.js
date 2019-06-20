import React from 'react';
import PeaMenuItem from '../lib/PeaMenuItem';

const MenuItem = () => <PeaMenuItem icon={'mail'} label={'Messages'} />;

MenuItem.metadata = {
  name: 'Pea Menu Item',
};
MenuItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
MenuItem.code = `
  import PeaMenuItem from '../lib/PeaMenuItem';
  
  const Preview = () => (
    <PeaMenuItem icon={'mail'} label={'Messages'} />
  )
`;

export default MenuItem;
