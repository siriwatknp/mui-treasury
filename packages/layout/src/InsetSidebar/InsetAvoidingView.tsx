import React from "react";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";

const InsetAvoidingViewRoot = experimentalStyled(
  "div",
  {},
  { name: "InsetAvoidingView", slot: "Root" }
)({
  transition: "all 225ms",
});

export type InsetAvoidingViewProps = Parameters<
  typeof InsetAvoidingViewRoot
>[0];

export const InsetAvoidingView = (props: InsetAvoidingViewProps) => {
  const { builder } = useLayoutCtx();
  const sxProps: Record<string, any> = {
    marginLeft: "",
    marginRight: "",
  };
  if (builder.leftInsetSidebar) {
    sxProps.marginLeft = builder.leftInsetSidebar.getOccupiedSpace();
  }
  if (builder.rightInsetSidebar) {
    sxProps.marginRight = builder.rightInsetSidebar.getOccupiedSpace();
  }
  return <InsetAvoidingViewRoot {...props} sx={{ ...props.sx, ...sxProps }} />;
};
