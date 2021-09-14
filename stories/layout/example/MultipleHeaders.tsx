import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import {
  Root,
  Header,
  TopHeader,
  Subheader,
  EdgeSidebar,
  EdgeTrigger,
  SidebarContent,
  Content,
  InsetContainer,
  InsetSidebar,
} from "@mui-treasury/layout";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Close from "@mui/icons-material/Close";

const MultipleHeaders = () => {
  const [topHidden, setTopHidden] = React.useState(false);
  const [headerMagnet, setHeaderMagnet] = React.useState(false);

  return (
    <Root
      scheme={{
        topHeader: {
          config: {
            xs: { position: "relative", height: 48, clipped: true },
          },
          hidden: topHidden,
        },
        header: {
          config: {
            xs: {
              position: "sticky",
              height: 56,
              clipped: {
                leftEdgeSidebar: true,
              },
            },
            md: {
              position: "sticky",
              height: 64,
              clipped: true,
            },
          },
        },
        subheader: {
          config: {
            md: {
              position: "relative",
              // top: 64,
              height: 48,
            },
          },
        },
        leftEdgeSidebar: {
          config: {
            sm: {
              variant: "permanent",
              width: 256,
              headerMagnetEnabled: headerMagnet,
              collapsible: true,
              collapsedWidth: 64,
            },
          },
        },
        rightInsetSidebar: {
          config: {
            xs: {
              position: "fixed",
              width: 256,
              headerMagnetEnabled: headerMagnet,
            },
          },
        },
      }}
    >
      <CssBaseline />
      <TopHeader
        sx={{
          background: "linear-gradient(to right, #4f46e5, #0ea5e9)",
          color: "#fff",
        }}
      >
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <div>This is the Top Header.</div>
          <IconButton
            color="inherit"
            size="small"
            onClick={() => setTopHidden(true)}
          >
            <Close />
          </IconButton>
        </Stack>
      </TopHeader>
      <Header>
        <Box flex={1} display="flex" alignItems="center" px={1}>
          <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
            {(collapsed, setCollapsed) => (
              <IconButton onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </IconButton>
            )}
          </EdgeTrigger>
        </Box>
      </Header>
      <Subheader
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={0}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Subheader>
      <EdgeSidebar anchor="left">
        <SidebarContent>Sidebar</SidebarContent>
      </EdgeSidebar>
      <Content>
        <InsetContainer
          maxWidth={"md"}
          rightSidebar={
            <InsetSidebar sx={{ bgcolor: "background.paper" }}>
              <Box p={2}>Hello test</Box>
            </InsetSidebar>
          }
        >
          <Box p={2} height={"1000px"} width="100%">
            <p>
              Scroll the content, then enable header magnet and scroll again
            </p>
            <FormControlLabel
              label="Header Magnet Enabled"
              control={<Checkbox />}
              onChange={(event) =>
                setHeaderMagnet(event.target.checked as boolean)
              }
            />
          </Box>
        </InsetContainer>
      </Content>
    </Root>
  );
};

export default MultipleHeaders;
