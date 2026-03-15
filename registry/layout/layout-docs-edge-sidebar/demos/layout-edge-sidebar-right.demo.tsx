import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import EdgeSidebarRight from "@/registry/layout/layout-core/EdgeSidebarRight";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Edge Sidebar Right",
  description: "Right-aligned edge sidebar using EdgeSidebarRight.",
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
      <Content>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Content
          </Typography>
        </Box>
      </Content>
      <EdgeSidebarRight
        id="sidebar-right"
        variant={["permanent", { width: "200px" }]}
      >
        <EdgeSidebarContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Right sidebar
            </Typography>
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebarRight>
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
