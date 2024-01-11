"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8981],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/layout-example-globalTheme/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutExampleGlobalThemeraw_namespaceObject='import React from "react";\nimport Comment from "@mui/icons-material/Comment";\nimport Home from "@mui/icons-material/Home";\nimport Notifications from "@mui/icons-material/Notifications";\nimport Person from "@mui/icons-material/Person";\nimport Search from "@mui/icons-material/Search";\nimport Settings from "@mui/icons-material/Settings";\nimport Avatar from "@mui/material/Avatar";\nimport Badge from "@mui/material/Badge";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport CardHeader from "@mui/material/CardHeader";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport { drawerClasses } from "@mui/material/Drawer";\nimport FilledInput from "@mui/material/FilledInput";\nimport Grid from "@mui/material/Grid";\nimport IconButton from "@mui/material/IconButton";\nimport InputAdornment from "@mui/material/InputAdornment";\nimport { inputBaseClasses } from "@mui/material/InputBase";\nimport Paper from "@mui/material/Paper";\nimport Skeleton from "@mui/material/Skeleton";\nimport { createTheme, ThemeProvider } from "@mui/material/styles";\nimport TextField from "@mui/material/TextField";\nimport Typography from "@mui/material/Typography";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Fullscreen,\n  Header,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n  SidebarContent,\n} from "../layout-core";\n\n// https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js#L244\nconst coolGray = {\n  50: "#f9fafb",\n  100: "#f3f4f6",\n  200: "#e5e7eb",\n  300: "#d1d5db",\n  400: "#9ca3af",\n  500: "#6b7280",\n  600: "#4b5563",\n  700: "#374151",\n  800: "#1f2937",\n  900: "#111827",\n};\n\nconst theme = createTheme({\n  palette: {\n    primary: { main: coolGray[800] },\n    text: {\n      primary: coolGray[900],\n      secondary: coolGray[600],\n      disabled: coolGray[300],\n    },\n    background: {\n      default: coolGray[100],\n      paper: "#fff",\n    },\n    grey: coolGray,\n  },\n  components: {\n    AppEdgeSidebar: {\n      styleOverrides: {\n        root: {\n          [`& .${drawerClasses.paper}`]: {\n            backgroundColor: "rgba(0,0,0,0)",\n            border: "none",\n          },\n        },\n      },\n    },\n    AppContent: {\n      styleOverrides: {\n        root: {\n          marginBottom: 16,\n        },\n      },\n    },\n    AppInsetSidebar: {\n      styleOverrides: {\n        root: {\n          padding: 16,\n          paddingLeft: 0,\n        },\n      },\n    },\n    AppFooter: {\n      styleOverrides: {\n        root: {\n          marginBottom: 20,\n        },\n      },\n    },\n    MuiButton: {\n      styleOverrides: {\n        root: {\n          borderRadius: 40,\n        },\n      },\n    },\n    MuiFilledInput: {\n      styleOverrides: {\n        root: {\n          [`&.${inputBaseClasses.hiddenLabel}`]: {\n            borderRadius: 40,\n          },\n          backgroundColor: coolGray[100],\n          "&:hover": {\n            backgroundColor: coolGray[200],\n          },\n          "&.Mui-focused": {\n            boxShadow: `0 0 0 1px ${coolGray[500]}`,\n            backgroundColor: "#fff",\n          },\n        },\n      },\n    },\n    MuiPaper: {\n      defaultProps: {\n        elevation: 0,\n      },\n    },\n    MuiSkeleton: {\n      styleOverrides: {\n        root: {\n          backgroundColor: coolGray[200],\n        },\n      },\n    },\n  },\n});\n// @ts-ignore\ntheme.vars = null;\n\nexport const LayoutExampleGlobalTheme = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Fullscreen>\n        <Root\n          scheme={{\n            header: {\n              config: {\n                xs: {\n                  position: "sticky",\n                  height: 80,\n                },\n              },\n            },\n            leftEdgeSidebar: {\n              config: {\n                xs: {\n                  variant: "permanent",\n                  width: 80,\n                },\n                md: {\n                  variant: "permanent",\n                  width: 120,\n                },\n              },\n            },\n            rightEdgeSidebar: {\n              config: {\n                md: {\n                  variant: "permanent",\n                  width: 80,\n                },\n              },\n            },\n            rightInsetSidebar: {\n              config: {\n                sm: {\n                  position: "sticky",\n                  width: "max(33%, 256px)",\n                },\n              },\n            },\n          }}\n        >\n          <CssBaseline />\n          <Header>\n            <Box\n              sx={{\n                mt: 3,\n                mr: 2,\n                px: 2,\n                flexGrow: 1,\n                minWidth: 0,\n                display: "flex",\n                gap: 2,\n                bgcolor: "background.paper",\n                borderTopLeftRadius: 20,\n                borderTopRightRadius: 20,\n                alignItems: "center",\n              }}\n            >\n              <Typography variant="h5">\n                <b>Dashboard</b>\n              </Typography>\n              <FilledInput\n                size="small"\n                disableUnderline\n                hiddenLabel\n                placeholder="Search..."\n                startAdornment={\n                  <InputAdornment position="start">\n                    <Search />\n                  </InputAdornment>\n                }\n              />\n              <IconButton sx={{ ml: "auto" }}>\n                <Badge badgeContent={4} color="secondary">\n                  <Notifications />\n                </Badge>\n              </IconButton>\n              <Avatar>A</Avatar>\n            </Box>\n          </Header>\n          <EdgeSidebar anchor="left">\n            <SidebarContent\n              sx={{\n                justifyContent: "center",\n                alignItems: "center",\n                gap: 3,\n              }}\n            >\n              <Button color="primary" variant="contained">\n                <Home />\n              </Button>\n              <Button color="primary">\n                <Person />\n              </Button>\n              <Button color="primary">\n                <Comment />\n              </Button>\n              <Button color="primary">\n                <Settings />\n              </Button>\n            </SidebarContent>\n          </EdgeSidebar>\n          <EdgeSidebar anchor="right">\n            <SidebarContent\n              sx={{\n                pr: 2,\n                mt: 3,\n              }}\n            >\n              {[...Array(6).fill(undefined)].map((_, index) => (\n                <IconButton key={index}>\n                  <Avatar />\n                </IconButton>\n              ))}\n            </SidebarContent>\n          </EdgeSidebar>\n          <Content>\n            <InsetContainer\n              maxWidth={false}\n              disableGutters\n              rightSidebar={\n                <InsetSidebar sx={{ p: 2, height: "100%" }}>\n                  <Avatar sx={{ width: 100, height: 100, mx: "auto" }} />\n                  <TextField label="First Name" margin="normal" fullWidth />\n                  <TextField label="Last Name" margin="normal" fullWidth />\n                  <TextField\n                    label="Address"\n                    multiline\n                    minRows={3}\n                    margin="normal"\n                    fullWidth\n                  />\n                </InsetSidebar>\n              }\n              sx={{\n                borderBottomLeftRadius: 20,\n                borderBottomRightRadius: 20,\n                bgcolor: "background.paper",\n                mr: 2,\n              }}\n            >\n              <Box p={2}>\n                <Grid container spacing={2}>\n                  {[...Array(9).fill(undefined)].map((_, index) => (\n                    <Grid item xs={12} sm={6} md={4} key={index}>\n                      <Card variant="outlined">\n                        <CardHeader\n                          avatar={\n                            <Skeleton\n                              animation="wave"\n                              variant="circular"\n                              width={40}\n                              height={40}\n                            />\n                          }\n                          title={\n                            <Skeleton\n                              animation="wave"\n                              height={10}\n                              width="80%"\n                              style={{ marginBottom: 6 }}\n                            />\n                          }\n                          subheader={\n                            <Skeleton\n                              animation="wave"\n                              height={10}\n                              width="40%"\n                            />\n                          }\n                        />\n                        <Skeleton\n                          animation="wave"\n                          variant="rectangular"\n                          sx={{ height: "0px", pb: "56.25%" }}\n                        />\n                        <CardContent>\n                          <Skeleton\n                            animation="wave"\n                            height={10}\n                            style={{ marginBottom: 6 }}\n                          />\n                          <Skeleton animation="wave" height={10} width="80%" />\n                        </CardContent>\n                      </Card>\n                    </Grid>\n                  ))}\n                </Grid>\n              </Box>\n            </InsetContainer>\n          </Content>\n          <Footer>\n            <Paper sx={{ mr: 2, borderRadius: "20px", p: 2 }}>\n              <Typography variant="body2">\n                <b>Footer</b>\n              </Typography>\n            </Paper>\n          </Footer>\n        </Root>\n      </Fullscreen>\n    </ThemeProvider>\n  );\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout/Example/GlobalTheme"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-example-globalTheme\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexampleglobaltheme",children:"LayoutExampleGlobalTheme"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutExampleGlobalThemeraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);