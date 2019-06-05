import React from 'react';
import PeaAppBar from '../lib/PeaAppBar';

const AppBar = () => <PeaAppBar position={'static'} />;

AppBar.metadata = {
  name: 'Pea AppBar',
};
AppBar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
AppBar.code = `
  import PeaAppBar from '../lib/PeaAppBar';
  
  const Preview = () => (
    <PeaAppBar position={'static'} />
  )
`;

export default AppBar;
