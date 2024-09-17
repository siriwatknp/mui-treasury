import React from "react";
import { BoxProps } from "@mui/material/Box";
import { layoutClasses } from "./layoutClasses";
import { styled } from "./zero-styled";

/**
 * Note: StyledContent cannot have `overflow: auto` by default because
 *       it will break the InsetSidebar absolute positioning.
 */
const StyledContent = styled("main")({
  gridArea: layoutClasses.Content,
  minHeight: 0,
  marginTop: "var(--Content-insetTop)",
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
      className={`${layoutClasses.Content} ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
