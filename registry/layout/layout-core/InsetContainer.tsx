"use client";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const InsetContainer = styled(Container, {
  name: "LayoutInsetContainer",
  slot: "root",
})({
  display: "flex",
  flexFlow: "row nowrap",
  flexGrow: 1,
  [`& > *:not([class*="InsetSidebar"])`]: {
    flexGrow: 1,
    overflow: "auto",
  },
});

export default InsetContainer;
