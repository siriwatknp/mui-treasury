import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledContent = styled("main")({
  gridArea: "Content",
});

const Content = React.forwardRef<HTMLElement, BoxProps>(function Content(
  { className, ...props },
  ref,
) {
  return (
    <StyledContent
      // @ts-ignore
      ref={ref}
      className={`Content ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
