"use client";
import React from "react";
import { layoutClasses } from "./layoutClasses";
import { triggerEdgeDrawerRight } from "./EdgeSidebarRight";

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
