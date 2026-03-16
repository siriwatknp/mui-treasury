"use client";
import React from "react";
import { layoutClasses } from "./layoutClasses";
import { triggerEdgeDrawer } from "./EdgeSidebar";

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
