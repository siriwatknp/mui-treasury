"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[6908],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layoutV5-app-reactLegacy/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5AppReactLegacyraw_namespaceObject='import React from "react";\nimport KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";\nimport UnfoldMore from "@mui/icons-material/UnfoldMore";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport Fab from "@mui/material/Fab";\nimport Grid from "@mui/material/Grid";\nimport {\n  createTheme,\n  responsiveFontSizes,\n  styled,\n  ThemeProvider,\n} from "@mui/material/styles";\nimport Toolbar from "@mui/material/Toolbar";\nimport Typography from "@mui/material/Typography";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n} from "../layout-core-v5";\n// @ts-ignore\nimport { ReactContent, ReactHeader, ReactNextArticle } from "./components";\n\nconst theme = responsiveFontSizes(\n  createTheme({\n    palette: {\n      primary: {\n        main: "#20232a",\n      },\n      secondary: {\n        main: "#61dafb",\n      },\n    },\n    typography: {\n      fontFamily:\n        \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\',\n      body1: {\n        fontSize: "1.065rem",\n      },\n    },\n    components: {\n      MuiCssBaseline: {\n        styleOverrides: {\n          "strong, b": {\n            fontWeight: "bold",\n          },\n        },\n      },\n    },\n  }),\n);\n// @ts-ignore\ntheme.vars = null;\n\nconst StyledToolbar = styled(Toolbar)(({ theme: { breakpoints } }) => ({\n  minHeight: 60,\n\n  [breakpoints.up("md")]: {\n    minHeight: 60,\n  },\n}));\n\nconst StyledFab = styled(Fab)(() => ({\n  position: "fixed",\n  bottom: 32,\n  right: 16,\n  color: "#61dafb",\n\n  "& svg": {\n    fontSize: 32,\n  },\n}));\n\n// @ts-ignore\nconst FooterMenu = ({ isHeader, ...props }) => {\n  return (\n    <>\n      {isHeader && <Box mt={5} />}\n      <Typography\n        sx={{\n          color: "#fff",\n          lineHeight: 2,\n          ...(isHeader && {\n            opacity: 0.6,\n            lineHeight: 3,\n            textTransform: "uppercase",\n            letterSpacing: "0.08em",\n            fontSize: 14,\n            fontWeight: "bold",\n          }),\n        }}\n        {...props}\n      />\n    </>\n  );\n};\n\nexport const LayoutAppReactLegacy = () => {\n  const sidebarContent = (\n    <Box mt={7.5} ml={3}>\n      {getData()[0].map((label, i) => (\n        <Typography\n          key={i}\n          sx={{\n            lineHeight: 3,\n            textTransform: "uppercase",\n            letterSpacing: "0.08em",\n            fontSize: 14,\n            fontWeight: "bold",\n          }}\n        >\n          {label}{" "}\n          <KeyboardArrowDown\n            color={"inherit"}\n            sx={{\n              marginTop: "-2px",\n              verticalAlign: "middle",\n            }}\n          />\n        </Typography>\n      ))}\n    </Box>\n  );\n  return (\n    <ThemeProvider theme={theme}>\n      <Root\n        scheme={{\n          header: {\n            config: {\n              xs: {\n                position: "fixed",\n                height: 60,\n              },\n            },\n          },\n          rightEdgeSidebar: {\n            config: {\n              xs: {\n                variant: "temporary",\n                width: 256,\n              },\n            },\n          },\n          rightInsetSidebar: {\n            config: {\n              sm: {\n                position: "fixed",\n                width: 200,\n              },\n              md: {\n                position: "fixed",\n                width: 256,\n              },\n            },\n          },\n        }}\n      >\n        {({ setOpen }) => (\n          <>\n            <CssBaseline />\n            <StyledFab\n              color={"primary"}\n              onClick={() => setOpen("rightEdgeSidebar", true)}\n            >\n              <UnfoldMore />\n            </StyledFab>\n            <Header color={"primary"}>\n              <Container>\n                <StyledToolbar disableGutters>\n                  <ReactHeader concise />\n                </StyledToolbar>\n              </Container>\n            </Header>\n            <EdgeSidebar anchor="right">{sidebarContent}</EdgeSidebar>\n            <Content>\n              <InsetContainer\n                rightSidebar={\n                  <InsetSidebar\n                    sx={{\n                      borderLeft: "1px solid #ececec",\n                      backgroundColor: "rgb(247, 247, 247)",\n                    }}\n                  >\n                    {sidebarContent}\n                  </InsetSidebar>\n                }\n              >\n                <ReactContent />\n              </InsetContainer>\n            </Content>\n            <Footer>\n              <Box bgcolor={"rgb(40, 44, 52)"}>\n                <Container>\n                  <InsetAvoidingView>\n                    <ReactNextArticle />\n                  </InsetAvoidingView>\n                </Container>\n              </Box>\n              <Box bgcolor={"#20232a"}>\n                <Container>\n                  <InsetAvoidingView>\n                    {/* @ts-ignore */}\n                    <Box pr={{ xs: 0, md: 5 }} pb={5}>\n                      <Grid container>\n                        <Grid item lg={4}>\n                          <Typography sx={{ mt: "56px", color: "#888" }}>\n                            Copyright © 2022\n                          </Typography>\n                        </Grid>\n                        <Grid item lg={8} container>\n                          {getData().map((category, i) => (\n                            <Grid key={i} item xs={6}>\n                              {category.map((label, j) => (\n                                <FooterMenu key={j} isHeader={j === 0}>\n                                  {label}\n                                </FooterMenu>\n                              ))}\n                            </Grid>\n                          ))}\n                        </Grid>\n                      </Grid>\n                    </Box>\n                  </InsetAvoidingView>\n                </Container>\n              </Box>\n            </Footer>\n          </>\n        )}\n      </Root>\n    </ThemeProvider>\n  );\n};\n\nconst getData = () => [\n  [\n    "Docs",\n    "Installation",\n    "Main Concepts",\n    "Advanced Guides",\n    "API Reference",\n    "Hooks",\n    "Testing",\n    "Concurrent Mode",\n    "Contributing",\n  ],\n  [\n    "Channels",\n    "Github",\n    "Stack Overflow",\n    "Discussion Forums",\n    "Reactiflux Chat",\n    "DEV Community",\n    "Facebook",\n    "Twitter",\n  ],\n  ["Community", "Code of Conduct", "Community Resources"],\n  ["More", "Tutorial", "Blog", "Acknowledgements", "React Native"],\n];\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/App/ReactLegacy"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-app-reactLegacy\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutappreactlegacy",children:"LayoutAppReactLegacy"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5AppReactLegacyraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);