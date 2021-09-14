import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  HeaderMockup,
  NavSidebarMockup,
  ContentMockup,
  FooterMockup,
} from "@mui-treasury/mockup/layout";

export default {
  title: "Mockup/Layout",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta;

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
