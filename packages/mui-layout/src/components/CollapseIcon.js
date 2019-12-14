import React from 'react';
import SharedCollapseIcon from './internal/SharedCollapseIcon';
import useSidebarConfig from '../hooks/useSidebarConfig';

const CollapseIcon = props => (
  <SharedCollapseIcon {...props} useSidebarConfig={useSidebarConfig} />
);

export default CollapseIcon;
