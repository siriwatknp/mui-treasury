import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeSidebar from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Edge Sidebar Auto Collapse",
  description: "Sidebar automatically collapses below a specified breakpoint.",
  previewMode: "iframe" as const,
};

export function Demo() {
  return (
    <Root height="90vh">
      <Header>
        <Box sx={{ px: 2 }}>
          <Typography variant="caption" fontWeight="bold">
            Header — resize below lg to auto-collapse
          </Typography>
        </Box>
      </Header>
      <EdgeSidebar
        id="sidebar-auto-collapse"
        variant={["permanent", { width: "256px", collapsedWidth: "64px" }]}
        permanentAutoCollapse="lg"
      >
        <EdgeSidebarContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Sidebar
            </Typography>
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebar>
      <Content>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Content
          </Typography>
        </Box>
      </Content>
      <Footer>
        <Box sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Footer
          </Typography>
        </Box>
      </Footer>
    </Root>
  );
}
