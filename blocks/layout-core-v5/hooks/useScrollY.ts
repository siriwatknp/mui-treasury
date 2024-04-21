import { useEffect, useRef, useState } from "react";
import { debounce } from "@mui/material/utils";
import { useWindowCtx } from "../WindowContext";

function getScrollY(obj: Window | undefined) {
  return typeof obj === "object" ? obj.scrollY : undefined;
}

export const useScrollY = (disabled?: boolean) => {
  const { iWindow } = useWindowCtx();
  const [scrollY, setScrollY] = useState(getScrollY(iWindow));
  const debounceScrollListener = useRef(
    debounce(() => {
      setScrollY(getScrollY(iWindow));
    }, 300)
  );
  useEffect(() => {
    if (!disabled && iWindow !== undefined) {
      iWindow.addEventListener("scroll", debounceScrollListener.current);
      return () => {
        iWindow.removeEventListener("scroll", debounceScrollListener.current);
      };
    }
  }, [disabled]);
  return scrollY;
};
