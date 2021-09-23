import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { drawerClasses } from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import FilledInput from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";

import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Comment from "@mui/icons-material/Comment";
import Settings from "@mui/icons-material/Settings";
import Search from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";

import {
  Root,
  Header,
  EdgeSidebar,
  SidebarContent,
  Content,
  Fullscreen,
  InsetContainer,
  InsetSidebar,
  Footer,
} from "@mui-treasury/layout";

// https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js#L244
const coolGray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

const GlobalTheme = () => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: { main: coolGray[800] },
          text: {
            primary: coolGray[900],
            secondary: coolGray[600],
            disabled: coolGray[300],
          },
          background: {
            default: coolGray[100],
            paper: "#fff",
          },
          grey: coolGray,
        },
        components: {
          AppEdgeSidebar: {
            styleOverrides: {
              root: {
                [`& .${drawerClasses.paper}`]: {
                  backgroundColor: "rgba(0,0,0,0)",
                  border: "none",
                },
              },
            },
          },
          AppContent: {
            styleOverrides: {
              root: {
                marginBottom: 16,
              },
            },
          },
          AppInsetSidebar: {
            styleOverrides: {
              root: {
                padding: 16,
                paddingLeft: 0,
              },
              subtitle: {
                backgroundColor: coolGray[200],
                borderRadius: 16,
                border: "none",
                height: "100%",
              },
            },
          },
          AppFooter: {
            styleOverrides: {
              root: {
                marginBottom: 20,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 40,
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: {
                [`&.${inputBaseClasses.hiddenLabel}`]: {
                  borderRadius: 40,
                },
                backgroundColor: coolGray[100],
                "&:hover": {
                  backgroundColor: coolGray[200],
                },
                "&.Mui-focused": {
                  boxShadow: `0 0 0 1px ${coolGray[500]}`,
                  backgroundColor: "#fff",
                },
              },
            },
          },
          MuiPaper: {
            defaultProps: {
              elevation: 0,
            },
          },
          MuiSkeleton: {
            styleOverrides: {
              root: {
                backgroundColor: coolGray[200],
              },
            },
          },
        },
      })}
    >
      <Fullscreen>
        <Root
          scheme={{
            header: {
              config: {
                xs: {
                  position: "sticky",
                  height: 80,
                },
              },
            },
            leftEdgeSidebar: {
              config: {
                xs: {
                  variant: "permanent",
                  width: 80,
                },
                md: {
                  variant: "permanent",
                  width: 120,
                },
              },
            },
            rightEdgeSidebar: {
              config: {
                md: {
                  variant: "permanent",
                  width: 80,
                },
              },
            },
            rightInsetSidebar: {
              config: {
                sm: {
                  position: "sticky",
                  width: "max(33%, 256px)",
                },
              },
            },
          }}
        >
          <CssBaseline />
          <Header>
            <Box
              sx={{
                mt: 3,
                mr: 2,
                px: 2,
                flexGrow: 1,
                minWidth: 0,
                display: "flex",
                gap: 2,
                bgcolor: "background.paper",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <b>Dashboard</b>
              </Typography>
              <FilledInput
                size="small"
                disableUnderline
                hiddenLabel
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
              <IconButton sx={{ ml: "auto" }}>
                <Badge badgeContent={4} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <Avatar>A</Avatar>
            </Box>
          </Header>
          <EdgeSidebar anchor="left">
            <SidebarContent
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Button color="primary" variant="contained">
                <Home />
              </Button>
              <Button color="primary">
                <Person />
              </Button>
              <Button color="primary">
                <Comment />
              </Button>
              <Button color="primary">
                <Settings />
              </Button>
            </SidebarContent>
          </EdgeSidebar>
          <EdgeSidebar anchor="right">
            <SidebarContent
              sx={{
                pr: 2,
                mt: 3,
              }}
            >
              {[...Array(6)].map((_, index) => (
                <IconButton key={index}>
                  <Avatar />
                </IconButton>
              ))}
            </SidebarContent>
          </EdgeSidebar>
          <Content>
            <InsetContainer
              maxWidth={false}
              disableGutters
              rightSidebar={
                <InsetSidebar sx={{ p: 2, height: "100%" }}>
                  <Avatar sx={{ width: 100, height: 100, mx: "auto" }} />
                  <TextField label="First Name" margin="normal" fullWidth />
                  <TextField label="Last Name" margin="normal" fullWidth />
                  <TextField
                    label="Address"
                    multiline
                    minRows={3}
                    margin="normal"
                    fullWidth
                  />
                </InsetSidebar>
              }
              sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                bgcolor: "background.paper",
                mr: 2,
              }}
            >
              <Box p={2}>
                <Grid container spacing={2}>
                  {[...Array(9)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card variant="outlined">
                        <CardHeader
                          avatar={
                            <Skeleton
                              animation="wave"
                              variant="circular"
                              width={40}
                              height={40}
                            />
                          }
                          title={
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="80%"
                              style={{ marginBottom: 6 }}
                            />
                          }
                          subheader={
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="40%"
                            />
                          }
                        />
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          sx={{ height: "0px", pb: "56.25%" }}
                        />
                        <CardContent>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton animation="wave" height={10} width="80%" />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </InsetContainer>
          </Content>
          <Footer>
            <Paper sx={{ mr: 2, borderRadius: "20px", p: 2 }}>
              <Typography variant="body2">
                <b>Footer</b>
              </Typography>
            </Paper>
          </Footer>
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
};

export default GlobalTheme;
