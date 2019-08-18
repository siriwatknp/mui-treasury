import React from 'react';
import { createDefaultLayout } from '../utils/presets';

const LayoutContext = React.createContext({
  opened: false,
  setOpened: () => {},
  collapsed: false,
  setCollapsed: () => {},
  ...createDefaultLayout(),
});

export default LayoutContext;
