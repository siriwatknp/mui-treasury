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
        <Header height="48px">
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              48px
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Compact header
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

      <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
        <Header height="64px">
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              64px (default)
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Standard header
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

      <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
        <Header height={{ xs: "48px", md: "64px" }}>
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              48px → 64px
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Responsive header
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
