import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import InsetAvoidingView from "@/registry/layout/layout-core/InsetAvoidingView";
import InsetContent from "@/registry/layout/layout-core/InsetContent";
import InsetSidebar from "@/registry/layout/layout-core/InsetSidebar";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Inset Sidebar Absolute",
  description:
    "Absolute inset sidebar for standalone apps, spanning from header to bottom with InsetAvoidingView in footer.",
};

export function Demo() {
  return (
    <Root standalone height="350px">
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
        <InsetSidebar position="absolute" width="200px">
          <InsetContent>
            <Box sx={{ p: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Absolute inset sidebar
              </Typography>
            </Box>
          </InsetContent>
        </InsetSidebar>
      </Content>
      <Footer>
        <InsetAvoidingView sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Footer avoids sidebar
          </Typography>
        </InsetAvoidingView>
      </Footer>
    </Root>
  );
}
