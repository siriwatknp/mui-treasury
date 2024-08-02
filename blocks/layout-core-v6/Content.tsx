import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

/**
 * Note: StyledContent cannot have `overflow: auto` by default because
 *       it will break the InsetSidebar absolute positioning.
 */
const StyledContent = styled("main")({
  gridArea: "Content",
  minHeight: 0,
  marginBottom: "var(--Content-insetBottom)",
});

const Content = React.forwardRef<HTMLElement, BoxProps>(function Content(
  { className, ...props },
  ref,
) {
  return (
    <StyledContent
      // @ts-expect-error Material UI issue
      ref={ref}
      className={`Content ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
