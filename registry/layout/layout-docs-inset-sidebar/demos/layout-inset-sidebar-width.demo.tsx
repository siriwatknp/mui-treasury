import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import InsetContent from "@/registry/layout/layout-core/InsetContent";
import InsetSidebar from "@/registry/layout/layout-core/InsetSidebar";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Inset Sidebar Width",
  description:
    "Customize the width of the inset sidebar with fixed or responsive values.",
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
        <Box sx={{ p: 2, flex: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Main content
          </Typography>
        </Box>
        <InsetSidebar width="220px">
          <InsetContent>
            <Box sx={{ p: 2 }}>
              <Typography variant="caption" color="text.secondary">
                220px inset sidebar
              </Typography>
            </Box>
          </InsetContent>
        </InsetSidebar>
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
