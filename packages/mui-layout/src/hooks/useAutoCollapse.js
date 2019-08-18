import { useEffect } from 'react';
import { useTheme } from '@material-ui/core';
import useConfig from './useConfig';

export default () => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    collapsible,
    screen,
    collapsed,
    setCollapsed,
    collapsedBreakpoint,
    autoCollapsedDisabled,
  } = useConfig();

  useEffect(() => {
    // skip everything if user disable this feature in config
    if (!autoCollapsedDisabled) {
      if (collapsible && screen) {
        if (collapsed && screen === collapsedBreakpoint) {
          setCollapsed(false);
        }
        if (
          !collapsed &&
          keys.indexOf(screen) < keys.indexOf(collapsedBreakpoint)
        ) {
          setCollapsed(true);
        }
      }
    }
  }, [screen]);
  if (autoCollapsedDisabled) {
    return null;
  }
  return true;
};
