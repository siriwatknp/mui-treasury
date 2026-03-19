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
  title: "Edge Sidebar Drawer",
  description:
    "Drawer mode sidebar that opens as an overlay with a trigger button.",
};

export function Demo() {
  return (
    <Root height="300px" standalone sx={{ overflow: "hidden" }}>
      <Header>
        <Box sx={{ px: 2 }}>
          <Button
            className={layoutClasses.EdgeDrawerTrigger}
            size="small"
            onClick={() => triggerEdgeDrawer({ sidebarId: "sidebar-drawer" })}
          >
            Open drawer
          </Button>
        </Box>
      </Header>
      <EdgeSidebar id="sidebar-drawer" variant={["drawer", { width: "300px" }]}>
        <EdgeDrawerClose />
        <EdgeSidebarContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Drawer sidebar
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
