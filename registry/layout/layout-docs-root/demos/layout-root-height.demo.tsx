import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Root Height",
  description:
    "Customize root layout height with a fixed value or responsive breakpoints.",
};

export function Demo() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <Root height="300px" sx={{ flex: 1, minWidth: 200 }}>
        <Header>
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              height=&quot;300px&quot;
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Fixed height
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

      <Root height="400px" sx={{ flex: 1, minWidth: 200 }}>
        <Header>
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              height=&quot;400px&quot;
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Taller layout
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

      <Root
        height={{ xs: "300px", md: "400px" }}
        sx={{ flex: 1, minWidth: 200 }}
      >
        <Header>
          <Box sx={{ px: 2 }}>
            <Typography variant="caption" fontWeight="bold">
              300px → 400px
            </Typography>
          </Box>
        </Header>
        <Content>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Responsive height
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
