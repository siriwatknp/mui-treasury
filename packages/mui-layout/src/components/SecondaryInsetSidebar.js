import React from 'react';
import SharedInsetSidebar from './internal/SharedInsetSidebar';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondaryInsetSidebar = props => (
  <SharedInsetSidebar {...props} useSidebarConfig={use2ndSidebarConfig} />
);

export default SecondaryInsetSidebar;
