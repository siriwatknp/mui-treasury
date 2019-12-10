import React from 'react';
import SharedCollapseIcon from './internal/SharedCollapseIcon';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondaryCollapseIcon = props => (
  <SharedCollapseIcon {...props} useSidebarConfig={use2ndSidebarConfig} />
);

export default SecondaryCollapseIcon;
