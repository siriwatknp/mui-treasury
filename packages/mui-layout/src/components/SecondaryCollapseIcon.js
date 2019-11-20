import React from 'react';
import CollapseIcon from './CollapseIcon';
import { parseSecondaryConfig } from '../utils/sidebarUtils';

const SecondaryCollapseIcon = props => (
  <CollapseIcon mapContext={parseSecondaryConfig} {...props} />
);

export default SecondaryCollapseIcon;
