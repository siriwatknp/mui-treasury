import React from 'react';
import SidebarTriggerIcon from './SidebarTriggerIcon';
import { parseSecondaryConfig } from '../utils/sidebarUtils';

const SecondarySidebarTriggerIcon = props => (
  <SidebarTriggerIcon mapContext={parseSecondaryConfig} {...props} />
);

export default SecondarySidebarTriggerIcon;
