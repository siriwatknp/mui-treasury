import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/EditOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVert from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AvatarGoogle } from "../avatar-google";
import {
  applyEdgeSidebarRightStyles,
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  applyInsetSidebarStyles,
  applyRootStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarRight,
  Header,
  InsetSidebar,
  InsetSidebarContent,
  layoutClasses,
  Root,
  toggleEdgeSidebarCollapse,
} from "../layout-core-v6";

export function LayoutV6AppGmail() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Root
        sx={{
          flex: "auto",
          bgcolor: "#F5F8FC",
          ...applyRootStyles({ height: "100lvh", fixedHeight: true }),
          [`& .${layoutClasses.Content}`]: {
            marginBottom: "1rem",
          },
          [`& .${layoutClasses.Header}`]: {
            background: "unset",
            borderBottom: "unset",
          },
          [`& .${layoutClasses.EdgeSidebarContent}`]: {
            borderRight: "0px",
          },
          [`& .${layoutClasses.InsetSidebarContent}`]: {
            background: "unset",
          },
        }}
      >
        <Header
          sx={{
            p: 1,
            ...applyHeaderStyles({ height: "64px", fullWidth: true }),
          }}
        >
          <IconButton
            className={layoutClasses.EdgeSidebarCollapser}
            size="large"
            sx={{ mx: 0.5 }}
            onClick={(event) => {
              toggleEdgeSidebarCollapse({ event });
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x "
            alt=""
            aria-hidden="true"
            role="presentation"
          />
          <Box sx={{ width: { xs: 8, md: 80 } }} />
          <Box
            sx={{
              minWidth: 0,
              flex: 9999,
              maxWidth: 720,
              height: 48,
              borderRadius: "48px",
              bgcolor: "#eaf1fb",
            }}
          />
          <Box sx={{ flex: 1, minWidth: 16 }} />
          <IconButton sx={{ mx: 1 }} onClick={() => setShowSettings(true)}>
            <SettingsIcon />
          </IconButton>
          <Box sx={{ mx: 1, alignSelf: "center", lineHeight: 0 }}>
            <AvatarGoogle size={32} />
          </Box>
        </Header>
        <EdgeSidebar
          sx={(theme) => ({
            px: 1,
            gap: 1,
            containerType: "inline-size",
            ...applyEdgeSidebarStyles({
              theme,
              config: {
                xs: {
                  variant: "permanent",
                  collapsedWidth: "72px",
                  autoCollapse: "sm",
                  expandOnHover: true,
                },
              },
            }),
          })}
        >
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            size="large"
            sx={{
              flexShrink: 0,
              boxShadow: "none !important",
              borderRadius: "12px",
              height: "56px",
              color: "#001d35",
              bgcolor: "#c2e7ff",
              textTransform: "none",
              transition: "width 0.2s",
              justifyContent: "flex-start",
              overflow: "hidden",
              minWidth: "initial",
              width: {
                "@": 56,
                "@200": 140,
              },
              padding: {
                "@": "1rem",
                "@200": "8px 22px",
              },
              "& .MuiButton-startIcon": {
                marginRight: {
                  "@": "999px",
                  "@200": "8px",
                },
                marginLeft: {
                  "@": "2px",
                  "@200": 0,
                },
              },
            }}
          >
            Compose
          </Button>
          <Box sx={{ minHeight: 0, flex: 1, overflow: "auto" }}>
            <Box sx={{ height: "2000px", flex: "none" }}></Box>
          </Box>
        </EdgeSidebar>
        <EdgeSidebarRight
          sx={(theme) => ({
            ...applyEdgeSidebarRightStyles({
              theme,
              config: {
                xs: {
                  variant: "temporary",
                },
                [theme.breakpoints.up(780)]: {
                  variant: "permanent",
                  width: "56px",
                },
              },
            }),
          })}
        >
          <IconButton
            onClick={() => {
              setShowDrawer(true);
            }}
            sx={{
              height: 56,
              backgroundRepeat: "no-repeat",
              backgroundSize: "24px",
              backgroundPosition: "center",
              backgroundImage:
                'url("https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png")',
            }}
          ></IconButton>
        </EdgeSidebarRight>
        <Content sx={{ gap: 1 }}>
          <Box
            sx={{
              borderRadius: "16px",
              bgcolor: "background.paper",
              height: "100%",
              overflow: "auto",
            }}
          >
            <Box sx={{ height: "2000px" }}>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  gap: 1,
                  position: "sticky",
                  top: 0,
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <IconButton size="small">
                  <RefreshIcon />
                </IconButton>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {showSettings && (
            <InsetSidebar
              sx={{
                ...applyInsetSidebarStyles({
                  position: "absolute",
                  width: "300px",
                }),
              }}
            >
              <InsetSidebarContent
                sx={{
                  borderRadius: "16px",
                  bgcolor: "background.paper",
                }}
              >
                <Box
                  sx={{
                    height: "2000px",
                    flex: "none",
                  }}
                >
                  <Box sx={{ position: "sticky", top: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        p: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ mr: "auto" }}>
                        Quick settings
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => setShowSettings(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        pt: 0,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{ borderRadius: "40px" }}
                      >
                        See all settings
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </InsetSidebarContent>
            </InsetSidebar>
          )}
        </Content>
      </Root>
      {showDrawer && <Box sx={{ height: "100lvh", width: "300px" }}></Box>}
    </Box>
  );
}
