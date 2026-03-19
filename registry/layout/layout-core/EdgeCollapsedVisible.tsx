"use client";
import React from "react";
import { layoutClasses } from "./layoutClasses";

interface EdgeCollapsedVisibleProps {
  render: React.ReactElement<{ className?: string }>;
}

function EdgeCollapsedVisible({ render }: EdgeCollapsedVisibleProps) {
  return React.cloneElement(render, {
    className: layoutClasses.EdgeCollapsedVisible,
  });
}

export default EdgeCollapsedVisible;
