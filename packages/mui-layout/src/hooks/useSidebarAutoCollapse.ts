import { useEffect, useRef } from 'react';
import { keys } from '@material-ui/system';
import { useScreen } from './useScreen';
import { useLayoutCtx } from '../contexts';

export const useSidebarAutoCollapse = (sidebarId: string) => {
  const {
    data: {
      global: {
        autoCollapse: { [sidebarId]: collapsedBp },
      },
    },
    setCollapsed,
  } = useLayoutCtx();
  const screen = useScreen();
  const prevScreen = useRef(screen);
  useEffect(() => {
    if (collapsedBp && screen && prevScreen.current) {
      if (
        screen === prevScreen.current &&
        keys.indexOf(screen) <= keys.indexOf(collapsedBp)
      ) {
        // first mount on browser
        setCollapsed(sidebarId, true);
      }

      // when viewport changes
      if (screen !== prevScreen.current) {
        if (
          keys.indexOf(prevScreen.current) <= keys.indexOf(collapsedBp) &&
          keys.indexOf(collapsedBp) < keys.indexOf(screen)
        ) {
          setCollapsed(sidebarId, false);
        }

        if (
          keys.indexOf(prevScreen.current) > keys.indexOf(collapsedBp) &&
          keys.indexOf(collapsedBp) >= keys.indexOf(screen)
        ) {
          setCollapsed(sidebarId, true);
        }

        prevScreen.current = screen;
      }
    }
  }, [screen]);
};

export default useSidebarAutoCollapse;
