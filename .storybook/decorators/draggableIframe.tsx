import { ReactRenderer } from "@storybook/react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { DecoratorFunction } from "@storybook/types";

const useResizeHandle = (
  target: React.MutableRefObject<HTMLElement | null>,
  options?: { minWidth?: string; maxWidth?: string }
) => {
  const { minWidth = "0px", maxWidth = "100%" } = options || {};
  const [dragging, setDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0);
  const isTouchEvent = (
    event: MouseEvent | TouchEvent
  ): event is TouchEvent => {
    return Boolean(
      (event as TouchEvent).touches && (event as TouchEvent).touches.length
    );
  };
  const isMouseEvent = (
    event: MouseEvent | TouchEvent
  ): event is MouseEvent => {
    return Boolean(
      (event as MouseEvent).clientX || (event as MouseEvent).clientX === 0
    );
  };
  const getClientX = React.useCallback((event: MouseEvent | TouchEvent) => {
    let clientX;
    if (isMouseEvent(event)) {
      clientX = event.clientX;
    }
    if (isTouchEvent(event)) {
      clientX = event.touches[0].clientX;
    }
    return clientX as number;
  }, []);
  const handleStart = (event: React.MouseEvent | React.TouchEvent) => {
    console.log("start");
    const clientX = getClientX(event.nativeEvent);
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setDragging(true);
    setDragOffset(rect.width - (clientX - rect.x));
  };
  React.useEffect(() => {
    function resizeObject(event: MouseEvent | TouchEvent) {
      if (event.cancelable) {
        event.preventDefault();
      }
      const clientX = getClientX(event);

      if (target.current && dragging && clientX) {
        const newWidth = clientX + dragOffset;
        target.current.style.width = `clamp(${minWidth}, ${Math.floor(
          newWidth
        )}px, ${maxWidth})`;
      }
    }
    function stopResize() {
      setDragging(false);
    }

    if (dragging) {
      document.addEventListener("mousemove", resizeObject, { passive: false });
      document.addEventListener("mouseup", stopResize);
      document.addEventListener("touchmove", resizeObject, { passive: false });
      document.addEventListener("touchend", stopResize);
      return () => {
        document.removeEventListener("mousemove", resizeObject);
        document.removeEventListener("mouseup", stopResize);
        document.removeEventListener("touchmove", resizeObject);
        document.removeEventListener("touchend", stopResize);
      };
    }
    return () => {};
  }, [dragOffset, dragging, getClientX, maxWidth, minWidth, target]);
  return {
    dragging,
    getDragHandlers: () => ({
      onTouchStart: handleStart,
      onMouseDown: handleStart,
    }),
  };
};

export default function draggableIframe() {
  return function draggableIframeDecorator(Story, context) {
    const objectRef = React.useRef<HTMLElement | null>(
      window.frameElement as HTMLIFrameElement
    );
    const { dragging, getDragHandlers } = useResizeHandle(objectRef);
    return (
      <>
        <Story />
        <Tooltip
          open={dragging}
          disableInteractive
          title="double click to restore"
          placement="left"
          sx={{ maxWidth: 80 }}
        >
          <IconButton
            data-chromatic="ignore"
            size="small"
            {...getDragHandlers()}
            onDoubleClick={() => {
              if (window.frameElement) {
                (window.frameElement as HTMLIFrameElement).style.removeProperty(
                  "width"
                );
              }
            }}
            sx={{
              "--IconButton-size": "1.5rem",
              position: "fixed",
              right: 0,
              top: 0,
              bottom: 0,
              background: "transparent",
              transition: "0.2s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              borderTopLeftRadius: "2rem 100vh",
              borderBottomLeftRadius: "2rem 100vh",
              "&:hover": {
                backdropFilter: "blur(4px)",
                background: "rgba(0,0,0,0.1)",
                cursor: "col-resize",
              },
            }}
          >
            <SvgIcon fontSize="small" sx={{ transform: "rotate(90deg)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </>
    );
  } as DecoratorFunction<ReactRenderer, {}>;
}
