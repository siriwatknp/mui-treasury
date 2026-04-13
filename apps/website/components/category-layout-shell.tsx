"use client";

import React from "react";

import EdgeSidebar from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import Root from "@/registry/layout/layout-core/Root";

export function CategoryLayoutShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Root className="bg-background">
      {children}
      <EdgeSidebar
        variant={{
          xs: ["permanent", { width: "200px", visibility: "hidden" }],
          lg: ["permanent", { width: "200px", visibility: "visible" }],
        }}
        sx={{ "--jun-ES-line-w": "0px" }}
      >
        <EdgeSidebarContent className="bg-transparent pb-4">
          {sidebar}
        </EdgeSidebarContent>
      </EdgeSidebar>
    </Root>
  );
}
