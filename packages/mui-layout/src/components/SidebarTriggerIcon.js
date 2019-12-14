import React from 'react';
import SharedSidebarTriggerIcon from './internal/SharedSidebarTriggerIcon';
import useSidebarConfig from '../hooks/useSidebarConfig';

const SidebarTriggerIcon = props => (
  <SharedSidebarTriggerIcon {...props} useSidebarConfig={useSidebarConfig} />
);

export default SidebarTriggerIcon;
