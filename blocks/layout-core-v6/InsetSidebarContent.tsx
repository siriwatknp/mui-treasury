import { styled } from "./zero-styled";

const InsetSidebarContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  overflow: "auto",
  boxSizing:
    "var(--sticky, border-box) var(--fixed, content-box) var(--absolute, border-box)" as any,
  position:
    "var(--sticky, sticky) var(--fixed, fixed) var(--absolute, absolute)" as any,
  height:
    "var(--sticky, initial) var(--fixed, calc(100% - var(--Header-height, 0px))) var(--absolute, calc(var(--Root-height, 100vh) - var(--Header-height, 0px)))",
  width: "var(--sticky, inherit) var(--fixed, inherit) var(--absolute, 100%)",
  top: 0,
  borderRight: "var(--anchor-left, 1px solid)",
  borderLeft: "var(--anchor-right, 1px solid)",
  borderColor: theme.palette.divider,
  marginLeft:
    "var(--fixed, var(--anchor-left, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingLeft:
    "var(--fixed, var(--anchor-left, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginRight:
    "var(--fixed, var(--anchor-right, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingRight:
    "var(--fixed, var(--anchor-right, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginTop: "var(--fixed, var(--Header-height))",
}));

export default InsetSidebarContent;
