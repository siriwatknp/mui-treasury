"use client";
import React from "react";

import { triggerEdgeDrawer } from "./EdgeSidebar";
import { layoutClasses } from "./layoutClasses";

interface EdgeDrawerTriggerProps {
  render: React.ReactElement<{
    className?: string;
    onClick?: React.MouseEventHandler;
  }>;
  sidebarId?: string;
}

function EdgeDrawerTrigger({ render, sidebarId }: EdgeDrawerTriggerProps) {
  return React.cloneElement(render, {
    className: layoutClasses.EdgeDrawerTrigger,
    onClick: () => triggerEdgeDrawer({ sidebarId }),
  });
}

export default EdgeDrawerTrigger;
