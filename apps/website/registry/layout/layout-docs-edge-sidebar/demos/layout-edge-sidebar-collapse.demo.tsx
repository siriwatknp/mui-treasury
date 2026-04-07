import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeCollapsedVisible from "@/registry/layout/layout-core/EdgeCollapsedVisible";
import EdgeSidebar from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarCollapser from "@/registry/layout/layout-core/EdgeSidebarCollapser";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import EdgeUncollapsedVisible from "@/registry/layout/layout-core/EdgeUncollapsedVisible";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Edge Sidebar Collapse",
  description:
    "Collapsible sidebar with a toggle button using EdgeSidebarCollapser.",
};

export function Demo() {
  return (
    <Root height="300px">
      <Header>
        <Box sx={{ px: 2 }}>
          <Typography variant="caption" fontWeight="bold">
            Header
          </Typography>
        </Box>
      </Header>
      <EdgeSidebar
        id="sidebar-collapse"
        variant={["permanent", { width: "256px", collapsedWidth: "64px" }]}
      >
        <EdgeSidebarContent>
          <Box sx={{ p: 1 }}>
            <EdgeSidebarCollapser
              render={
                <Button size="small" fullWidth>
                  <EdgeCollapsedVisible render={<span>→</span>} />
                  <EdgeUncollapsedVisible render={<span>← Collapse</span>} />
                </Button>
              }
            />
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
