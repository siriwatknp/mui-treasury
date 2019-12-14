import React from 'react';
import SharedInsetSidebar from './internal/SharedInsetSidebar';
import useSidebarConfig from '../hooks/useSidebarConfig';

const InsetSidebar = props => (
  <SharedInsetSidebar {...props} useSidebarConfig={useSidebarConfig} />
);

export default InsetSidebar;
