import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeDrawerClose from "@/registry/layout/layout-core/EdgeDrawerClose";
import EdgeSidebar, {
  triggerEdgeDrawer,
} from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";
import { layoutClasses } from "@/registry/layout/layout-core/layoutClasses";

export const meta = {
  title: "Edge Sidebar Responsive",
  description:
    "Drawer on mobile, permanent on desktop using breakpoint-based variant.",
  previewMode: "iframe" as const,
};

export function Demo() {
  return (
    <Root height="90vh">
      <Header>
        <Box sx={{ px: 2 }}>
          <Button
            className={layoutClasses.EdgeDrawerTrigger}
            size="small"
            onClick={() =>
              triggerEdgeDrawer({ sidebarId: "sidebar-responsive" })
            }
          >
            Menu
          </Button>
          <Typography variant="caption" fontWeight="bold">
            Header
          </Typography>
        </Box>
      </Header>
      <EdgeSidebar
        id="sidebar-responsive"
        variant={{
          xs: ["drawer", { width: "300px" }],
          md: ["permanent", { width: "256px" }],
        }}
      >
        <EdgeDrawerClose />
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
            Resize to see drawer ↔ permanent switch at md
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
