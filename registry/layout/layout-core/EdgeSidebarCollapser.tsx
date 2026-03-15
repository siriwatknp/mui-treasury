"use client";
import React from "react";
import { layoutClasses } from "./layoutClasses";
import { triggerEdgeCollapse } from "./EdgeSidebar";
import { triggerEdgeCollapseRight } from "./EdgeSidebarRight";

interface EdgeSidebarCollapserProps {
  render: React.ReactElement<{
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }>;
  state?: boolean;
}

function EdgeSidebarCollapser({ render, state }: EdgeSidebarCollapserProps) {
  return React.cloneElement(render, {
    className: layoutClasses.EdgeSidebarCollapser,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      const sidebar = event.currentTarget.closest<HTMLElement>(
        `.${layoutClasses.EdgeSidebar}, .${layoutClasses.EdgeSidebarRight}`,
      );
      const opts = {
        event,
        state,
        ...(sidebar?.id && { sidebarId: sidebar.id }),
      };
      if (sidebar?.classList.contains(layoutClasses.EdgeSidebarRight)) {
        triggerEdgeCollapseRight(opts);
      } else {
        triggerEdgeCollapse(opts);
      }
    },
  });
}

export default EdgeSidebarCollapser;
