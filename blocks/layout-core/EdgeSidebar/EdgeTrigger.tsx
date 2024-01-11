import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { DrawerAnchor } from "./EdgeSidebarBuilder";
import { useEdgeSidebar } from "./useEdgeSidebar";

const EdgeTriggerRoot = styled("div", { name: "EdgeTrigger" })({});

export type EdgeTriggerProps = Omit<
  Parameters<typeof EdgeTriggerRoot>[0],
  "children"
> & {
  target: {
    anchor?: DrawerAnchor;
    field: "open" | "collapsed";
  };
  display?: string;
  children?: (
    state: boolean,
    setState: (newState: boolean) => void
  ) => ReactNode;
};

export const EdgeTrigger = ({
  target,
  display = "inline-flex",
  children,
  ...props
}: EdgeTriggerProps) => {
  const { anchor, field } = target;
  const { sidebarId, edgeSidebar, ...state } = useEdgeSidebar({ anchor });
  const sxDisplay = edgeSidebar?.getEdgeTriggerSxDisplay({ display, field });
  let setState = (val: boolean) => {};
  if (field === "collapsed") {
    setState = (val: boolean) => state.setCollapsed(sidebarId, val);
  }
  if (field === "open") {
    setState = (val: boolean) => state.setOpen(sidebarId, val);
  }
  return (
    <EdgeTriggerRoot {...props} sx={{ display: sxDisplay, ...props.sx }}>
      {typeof children === "function" &&
        children(state[field] ?? false, setState)}
    </EdgeTriggerRoot>
  );
};
