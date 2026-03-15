import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

import Content from "@/registry/layout/layout-core/Content";
import EdgeSidebar from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";
import EdgeSidebarCollapser from "../../layout-core/EdgeSidebarCollapser";
import EdgeCollapsedVisible from "../../layout-core/EdgeCollapsedVisible";
import EdgeUncollapsedVisible from "../../layout-core/EdgeUncollapsedVisible";

export const meta = {
  title: "Root Disable Transition",
  description:
    "Remove all layout transition animations with the disableTransition prop.",
};

export function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        }
        label="Disable transition"
      />
      <Root disableTransition={disabled} height="300px" sx={{ width: "100%" }}>
        <Header>
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              {disabled ? "No transition" : "With transition"}
            </Typography>
          </Box>
        </Header>
        <EdgeSidebar
          id="edge-sidebar-demo-disable-transition"
          variant={["permanent", { width: "200px", collapsedWidth: "64px" }]}
        >
          <EdgeSidebarContent>
            <EdgeSidebarCollapser
              render={
                <Button size="small" sx={{ m: 1 }}>
                  <EdgeCollapsedVisible render={<KeyboardArrowRight />} />
                  <EdgeUncollapsedVisible
                    render={
                      <span>
                        <KeyboardArrowLeft /> Toggle
                      </span>
                    }
                  />
                </Button>
              }
            />
          </EdgeSidebarContent>
        </EdgeSidebar>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Click toggle — sidebar collapses instantly
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
    </Box>
  );
}
