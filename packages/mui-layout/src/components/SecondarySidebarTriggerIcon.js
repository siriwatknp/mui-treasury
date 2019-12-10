import React from 'react';
import SharedSidebarTriggerIcon from './internal/SharedSidebarTriggerIcon';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondarySidebarTriggerIcon = props => (
  <SharedSidebarTriggerIcon {...props} useSidebarConfig={use2ndSidebarConfig} />
);

export default SecondarySidebarTriggerIcon;
