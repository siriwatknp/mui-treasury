import React from "react";
import type { Meta } from "@storybook/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { ContentMockup, FooterMockup, HeaderMockup } from "./index";
import { NavSidebarMockup } from "./NavSidebarMockup";
import Usage from "./usage.mdx";

const meta = {
  title: "Mockup/Layout",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta;

export default meta;

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
