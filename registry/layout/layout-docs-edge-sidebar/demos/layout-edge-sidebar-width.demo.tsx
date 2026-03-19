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
  title: "Edge Sidebar Width",
  description: "Customize the width of the edge sidebar via variant config.",
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
        id="sidebar-width"
        variant={["permanent", { width: "200px" }]}
      >
        <EdgeSidebarContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              200px sidebar
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
