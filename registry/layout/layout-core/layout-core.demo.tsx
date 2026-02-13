import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Root from "./Root";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function LayoutDemo() {
  return (
    <Root sx={{ minHeight: 400, width: "100%" }}>
      <Header sx={{ px: 2 }}>
        <Typography variant="subtitle2" fontWeight="bold">
          Header
        </Typography>
      </Header>
      <Content sx={{ p: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Content area
          </Typography>
        </Box>
      </Content>
      <Footer sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Footer
        </Typography>
      </Footer>
    </Root>
  );
}
