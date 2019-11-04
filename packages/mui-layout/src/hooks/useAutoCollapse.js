import { useEffect, useRef } from 'react';
import { useTheme } from '@material-ui/core';
import useLayoutCtx from './useLayoutCtx';

export default () => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    screen,
    collapsedBreakpoint = 'md',
    autoCollapseDisabled,
    setCollapsed,
  } = useLayoutCtx();
  const screenObserver = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // skip everything if user disable this feature in config
    if (!autoCollapseDisabled) {
      const prevScreenIndex = keys.indexOf(screenObserver.current);
      const breakpointScreenIndex = keys.indexOf(collapsedBreakpoint);
      const currentScreenIndex = keys.indexOf(screen);
      if (
        // at first render, auto-collapsed if screen <= breakpoint
        !screenObserver.current &&
        currentScreenIndex <= breakpointScreenIndex
      ) {
        setCollapsed(true);
      }
      if (
        prevScreenIndex !== -1 &&
        prevScreenIndex > breakpointScreenIndex &&
        currentScreenIndex <= breakpointScreenIndex
      ) {
        // reduce from bigger to breakpoint
        setCollapsed(true);
      }

      if (
        prevScreenIndex !== -1 &&
        prevScreenIndex <= breakpointScreenIndex &&
        currentScreenIndex > breakpointScreenIndex
      ) {
        // pass breakpoint to bigger screen
        setCollapsed(false);
      }
    }
    screenObserver.current = screen;
  }, [screen]);
};
