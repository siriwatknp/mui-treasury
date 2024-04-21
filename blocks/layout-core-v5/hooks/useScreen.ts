import React from "react";
import { debounce } from "@mui/material/utils";
import { useTheme } from "@mui/material/styles";
import { mapWidthToScreen } from "../utils/mapWidthToScreen";
import { useWindowCtx } from "../WindowContext";

function getWindowWidth(w: Window | undefined) {
  return typeof w === "object" ? w.innerWidth : undefined;
}

export const useScreen = () => {
  const { breakpoints } = useTheme();
  const { iWindow } = useWindowCtx();
  const getScreen = () =>
    mapWidthToScreen(getWindowWidth(iWindow), breakpoints);

  const [screen, setScreen] = React.useState(getScreen());
  const updater = React.useRef(
    debounce(() => {
      setScreen(getScreen());
    }, 200)
  );

  React.useEffect(() => {
    if (iWindow !== undefined) {
      iWindow.addEventListener("resize", updater.current);
      return () => {
        iWindow.removeEventListener("resize", updater.current);
      };
    }
  }, []);

  return screen;
};
