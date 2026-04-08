"use client";
import React from "react";

import { layoutClasses } from "./layoutClasses";

interface EdgeUncollapsedVisibleProps {
  render: React.ReactElement<{ className?: string }>;
}

function EdgeUncollapsedVisible({ render }: EdgeUncollapsedVisibleProps) {
  return React.cloneElement(render, {
    className: layoutClasses.EdgeUncollapsedVisible,
  });
}

export default EdgeUncollapsedVisible;
