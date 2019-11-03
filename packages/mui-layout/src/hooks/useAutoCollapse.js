import { useEffect, useRef } from 'react';
import { useTheme } from '@material-ui/core';
import useLayoutCtx from './useLayoutCtx';

export default () => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const { screen, sidebar, setCollapsed } = useLayoutCtx();
  const screenObserver = useRef(screen);

  const { collapsedBreakpoint = 'md', autoCollapsedDisabled } = sidebar;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // skip everything if user disable this feature in config
    if (!autoCollapsedDisabled) {
      const prevScreenIndex = keys.indexOf(screenObserver.current);
      const breakpointScreenIndex = keys.indexOf(collapsedBreakpoint);
      const currentScreenIndex = keys.indexOf(screen);
      if (
        prevScreenIndex > breakpointScreenIndex &&
        currentScreenIndex <= breakpointScreenIndex
      ) {
        // reduce from bigger to breakpoint
        setCollapsed(true);
      }

      if (
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
