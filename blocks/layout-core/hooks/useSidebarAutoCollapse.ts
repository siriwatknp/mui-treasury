import { useEffect, useRef } from "react";
import { useScreen } from "./useScreen";
import { useLayoutCtx } from "../Root/Root";
import { EDGE_SIDEBAR_ID } from "../utils/constant";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";

export const useSidebarAutoCollapse = (sidebarId?: EDGE_SIDEBAR_ID) => {
  const { builder, setCollapsed } = useLayoutCtx();
  const screen = useScreen();
  const prevScreen = useRef(screen);
  const collapsedBp = sidebarId ? builder[sidebarId]?.autoCollapse : undefined;
  useEffect(() => {
    if (sidebarId && collapsedBp && screen && prevScreen.current) {
      if (
        screen === prevScreen.current &&
        BREAKPOINT_KEYS.indexOf(screen) <= BREAKPOINT_KEYS.indexOf(collapsedBp)
      ) {
        // first mount on browser
        setCollapsed(sidebarId, true);
      }

      // when viewport changes
      if (screen !== prevScreen.current) {
        if (
          BREAKPOINT_KEYS.indexOf(prevScreen.current) <=
            BREAKPOINT_KEYS.indexOf(collapsedBp) &&
          BREAKPOINT_KEYS.indexOf(collapsedBp) < BREAKPOINT_KEYS.indexOf(screen)
        ) {
          setCollapsed(sidebarId, false);
        }

        if (
          BREAKPOINT_KEYS.indexOf(prevScreen.current) >
            BREAKPOINT_KEYS.indexOf(collapsedBp) &&
          BREAKPOINT_KEYS.indexOf(collapsedBp) >=
            BREAKPOINT_KEYS.indexOf(screen)
        ) {
          setCollapsed(sidebarId, true);
        }

        prevScreen.current = screen;
      }
    }
  }, [screen]);
};
