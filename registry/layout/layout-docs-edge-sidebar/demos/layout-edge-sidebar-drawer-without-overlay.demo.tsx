import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeSidebar, {
  triggerEdgeDrawer,
} from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";
import { layoutClasses } from "@/registry/layout/layout-core/layoutClasses";

export const meta = {
  title: "Edge Sidebar Drawer Without Overlay",
  description: "Drawer mode without the overlay backdrop.",
};

export function Demo() {
  return (
    <Root height="300px">
      <Header>
        <Box sx={{ px: 2 }}>
          <Button
            className={layoutClasses.EdgeDrawerTrigger}
            size="small"
            onClick={() =>
              triggerEdgeDrawer({ sidebarId: "sidebar-drawer-no-overlay" })
            }
          >
            Toggle drawer
          </Button>
        </Box>
      </Header>
      <EdgeSidebar
        id="sidebar-drawer-no-overlay"
        variant={["drawer", { width: "300px", withoutOverlay: true }]}
      >
        <EdgeSidebarContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Drawer without overlay
            </Typography>
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebar>
      <Content>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Content — no overlay when drawer is open
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
