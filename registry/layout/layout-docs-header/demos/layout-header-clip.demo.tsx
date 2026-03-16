import React from "react";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import EdgeSidebar from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import EdgeSidebarRight from "@/registry/layout/layout-core/EdgeSidebarRight";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

type ClipValue = "left" | "right" | "both" | "none";

export const meta = {
  title: "Header Clip",
  description:
    "Control whether the Header spans over the left/right EdgeSidebar.",
};

export function Demo() {
  const [clip, setClip] = React.useState<ClipValue>("none");

  const headerClip =
    clip === "both" ? true : clip === "none" ? undefined : clip;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <ToggleButtonGroup
        value={clip}
        exclusive
        onChange={(_, value) => {
          if (value !== null) setClip(value);
        }}
        size="small"
      >
        <ToggleButton value="none">None</ToggleButton>
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
        <ToggleButton value="both">Both</ToggleButton>
      </ToggleButtonGroup>

      <Root height="300px" sx={{ width: "100%" }}>
        <Header clip={headerClip}>
          <Box sx={{ px: 2 }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Header
            </Typography>
          </Box>
        </Header>
        <EdgeSidebar variant={["permanent", { width: "200px" }]}>
          <EdgeSidebarContent>
            <Box sx={{ p: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Left Sidebar
              </Typography>
            </Box>
          </EdgeSidebarContent>
        </EdgeSidebar>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Content area
            </Typography>
          </Box>
        </Content>
        <EdgeSidebarRight variant={["permanent", { width: "200px" }]}>
          <EdgeSidebarContent>
            <Box sx={{ p: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Right Sidebar
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
    </Box>
  );
}
