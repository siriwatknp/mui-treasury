"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1054],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layoutV6-app-gmail/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppGmailraw_namespaceObject='import React from "react";\nimport CloseIcon from "@mui/icons-material/Close";\nimport EditIcon from "@mui/icons-material/EditOutlined";\nimport MenuIcon from "@mui/icons-material/Menu";\nimport MoreVert from "@mui/icons-material/MoreVert";\nimport RefreshIcon from "@mui/icons-material/Refresh";\nimport SettingsIcon from "@mui/icons-material/SettingsOutlined";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Checkbox from "@mui/material/Checkbox";\nimport IconButton from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport { AvatarGoogle } from "../avatar-google";\nimport {\n  applyEdgeSidebarRightStyles,\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  applyInsetSidebarStyles,\n  applyRootStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarRight,\n  Header,\n  InsetSidebar,\n  InsetSidebarContent,\n  Root,\n  toggleEdgeSidebarCollapse,\n} from "../layout-core-v6";\n\nexport function LayoutV6AppGmail() {\n  const [showDrawer, setShowDrawer] = React.useState(false);\n  const [showSettings, setShowSettings] = React.useState(false);\n  return (\n    <Box\n      sx={{\n        display: "flex",\n      }}\n    >\n      <Root\n        sx={{\n          flex: "auto",\n          bgcolor: "#F5F8FC",\n          "--Header-background": "unset",\n          "--Header-underline": "unset",\n          "--Content-insetBottom": "1rem",\n          "--EdgeSidebar-sidelineWidth": "0px",\n          "--InsetSidebarContent-background": "unset",\n          "--InsetSidebarContent-sideline": "unset",\n          ...applyRootStyles({ height: "100lvh", fixedHeight: true }),\n        }}\n      >\n        <Header\n          sx={{\n            p: 1,\n            ...applyHeaderStyles({ height: "64px", fullWidth: true }),\n          }}\n        >\n          <IconButton\n            className="EdgeSidebar-collapser"\n            size="large"\n            sx={{ mx: 0.5 }}\n            onClick={(event) => {\n              toggleEdgeSidebarCollapse({ event });\n            }}\n          >\n            <MenuIcon />\n          </IconButton>\n          <Box\n            component="img"\n            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"\n            srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x "\n            alt=""\n            aria-hidden="true"\n            role="presentation"\n          />\n          <Box sx={{ width: { xs: 8, md: 80 } }} />\n          <Box\n            sx={{\n              minWidth: 0,\n              flex: 9999,\n              maxWidth: 720,\n              height: 48,\n              borderRadius: "48px",\n              bgcolor: "#eaf1fb",\n            }}\n          />\n          <Box sx={{ flex: 1, minWidth: 16 }} />\n          <IconButton sx={{ mx: 1 }} onClick={() => setShowSettings(true)}>\n            <SettingsIcon />\n          </IconButton>\n          <Box sx={{ mx: 1, alignSelf: "center", lineHeight: 0 }}>\n            <AvatarGoogle size={32} />\n          </Box>\n        </Header>\n        <EdgeSidebar\n          sx={(theme) => ({\n            px: 1,\n            gap: 1,\n            containerType: "inline-size",\n            ...applyEdgeSidebarStyles({\n              theme,\n              config: {\n                xs: {\n                  variant: "permanent",\n                  collapsedWidth: "72px",\n                  autoCollapse: "sm",\n                  expandOnHover: true,\n                },\n              },\n            }),\n          })}\n        >\n          <Button\n            variant="contained"\n            startIcon={<EditIcon />}\n            size="large"\n            sx={{\n              flexShrink: 0,\n              boxShadow: "none !important",\n              borderRadius: "12px",\n              height: "56px",\n              color: "#001d35",\n              bgcolor: "#c2e7ff",\n              textTransform: "none",\n              transition: "width 0.2s",\n              justifyContent: "flex-start",\n              overflow: "hidden",\n              minWidth: "initial",\n              width: {\n                "@": 56,\n                "@200": 140,\n              },\n              padding: {\n                "@": "1rem",\n                "@200": "8px 22px",\n              },\n              "& .MuiButton-startIcon": {\n                marginRight: {\n                  "@": "999px",\n                  "@200": "8px",\n                },\n                marginLeft: {\n                  "@": "2px",\n                  "@200": 0,\n                },\n              },\n            }}\n          >\n            Compose\n          </Button>\n          <Box sx={{ minHeight: 0, flex: 1, overflow: "auto" }}>\n            <Box sx={{ height: "2000px", flex: "none" }}></Box>\n          </Box>\n        </EdgeSidebar>\n        <EdgeSidebarRight\n          sx={(theme) => ({\n            ...applyEdgeSidebarRightStyles({\n              theme,\n              config: {\n                xs: {\n                  variant: "temporary",\n                },\n                [theme.breakpoints.up(780)]: {\n                  variant: "permanent",\n                  width: "56px",\n                },\n              },\n            }),\n          })}\n        >\n          <IconButton\n            onClick={() => {\n              setShowDrawer(true);\n            }}\n            sx={{\n              height: 56,\n              backgroundRepeat: "no-repeat",\n              backgroundSize: "24px",\n              backgroundPosition: "center",\n              backgroundImage:\n                \'url("https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png")\',\n            }}\n          ></IconButton>\n        </EdgeSidebarRight>\n        <Content sx={{ gap: 1 }}>\n          <Box\n            sx={{\n              borderRadius: "16px",\n              bgcolor: "background.paper",\n              height: "100%",\n              overflow: "auto",\n            }}\n          >\n            <Box sx={{ height: "2000px" }}>\n              <Box\n                sx={{\n                  p: 1,\n                  display: "flex",\n                  gap: 1,\n                  position: "sticky",\n                  top: 0,\n                  alignItems: "center",\n                }}\n              >\n                <Checkbox />\n                <IconButton size="small">\n                  <RefreshIcon />\n                </IconButton>\n                <IconButton size="small">\n                  <MoreVert />\n                </IconButton>\n              </Box>\n            </Box>\n          </Box>\n          {showSettings && (\n            <InsetSidebar\n              sx={{\n                ...applyInsetSidebarStyles({\n                  position: "absolute",\n                  width: "300px",\n                }),\n              }}\n            >\n              <InsetSidebarContent\n                sx={{\n                  borderRadius: "16px",\n                  bgcolor: "background.paper",\n                }}\n              >\n                <Box\n                  sx={{\n                    height: "2000px",\n                    flex: "none",\n                  }}\n                >\n                  <Box sx={{ position: "sticky", top: 0 }}>\n                    <Box\n                      sx={{\n                        display: "flex",\n                        p: 2,\n                      }}\n                    >\n                      <Typography variant="h6" sx={{ mr: "auto" }}>\n                        Quick settings\n                      </Typography>\n                      <IconButton\n                        size="small"\n                        onClick={() => setShowSettings(false)}\n                      >\n                        <CloseIcon />\n                      </IconButton>\n                    </Box>\n                    <Box\n                      sx={{\n                        p: 2,\n                        pt: 0,\n                        borderBottom: "1px solid",\n                        borderColor: "divider",\n                      }}\n                    >\n                      <Button\n                        fullWidth\n                        variant="outlined"\n                        sx={{ borderRadius: "40px" }}\n                      >\n                        See all settings\n                      </Button>\n                    </Box>\n                  </Box>\n                </Box>\n              </InsetSidebarContent>\n            </InsetSidebar>\n          )}\n        </Content>\n      </Root>\n      {showDrawer && <Box sx={{ height: "100lvh", width: "300px" }}></Box>}\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/App/Gmail"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV6-app-gmail\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appgmail",children:"LayoutV6AppGmail"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppGmailraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);