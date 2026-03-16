"use client";
import React from "react";

import { triggerEdgeDrawerRight } from "./EdgeSidebarRight";
import { layoutClasses } from "./layoutClasses";

interface EdgeDrawerTriggerRightProps {
  render: React.ReactElement<{
    className?: string;
    onClick?: React.MouseEventHandler;
  }>;
  sidebarId?: string;
}

function EdgeDrawerTriggerRight({
  render,
  sidebarId,
}: EdgeDrawerTriggerRightProps) {
  return React.cloneElement(render, {
    className: layoutClasses.EdgeDrawerTriggerRight,
    onClick: () => triggerEdgeDrawerRight({ sidebarId }),
  });
}

export default EdgeDrawerTriggerRight;
