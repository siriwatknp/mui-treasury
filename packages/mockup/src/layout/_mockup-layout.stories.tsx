import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {
  HeaderMockup,
  NavSidebarMockup,
  ContentMockup,
  FooterMockup,
} from "@mui-treasury/mockup/layout";

export default {
  title: "Mockup/Layout",
};

export const Header = () => <HeaderMockup />;

export const NavSidebar = () => (
  <Box sx={{ maxWidth: 256 }}>
    <NavSidebarMockup />
  </Box>
);

export const Content = () => (
  <Container maxWidth="sm">
    <ContentMockup />
  </Container>
);

export const Footer = () => <FooterMockup />;
