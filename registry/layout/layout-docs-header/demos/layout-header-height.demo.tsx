import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Header Height",
  description:
    "Customize header height with a fixed value or responsive breakpoints.",
};

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
        <Header height="48px" sx={{ px: 2 }}>
          <Typography variant="caption" fontWeight="bold">
            48px
          </Typography>
        </Header>
        <Content sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Compact header
          </Typography>
        </Content>
        <Footer sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Footer
          </Typography>
        </Footer>
      </Root>

      <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
        <Header height="64px" sx={{ px: 2 }}>
          <Typography variant="caption" fontWeight="bold">
            64px (default)
          </Typography>
        </Header>
        <Content sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Standard header
          </Typography>
        </Content>
        <Footer sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Footer
          </Typography>
        </Footer>
      </Root>

      <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
        <Header height={{ xs: "48px", md: "64px" }} sx={{ px: 2 }}>
          <Typography variant="caption" fontWeight="bold">
            48px → 64px
          </Typography>
        </Header>
        <Content sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Responsive header
          </Typography>
        </Content>
        <Footer sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Footer
          </Typography>
        </Footer>
      </Root>
    </Box>
  );
}
