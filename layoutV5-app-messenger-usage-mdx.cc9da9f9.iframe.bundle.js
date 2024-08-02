"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[751],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layoutV5-app-messenger/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5AppMessengerraw_namespaceObject='import React from "react";\nimport Edit from "@mui/icons-material/Edit";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  createTheme,\n  responsiveFontSizes,\n  styled,\n  ThemeProvider,\n} from "@mui/material/styles";\nimport Toolbar from "@mui/material/Toolbar";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Fullscreen,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n} from "../layout-core-v5";\nimport {\n  ChatBar,\n  ChatDialog,\n  ChatList,\n  ChatSettings,\n  ChatsHeader,\n  ConversationHead,\n  MessengerSearch,\n  // @ts-ignore\n} from "./components";\n\nconst StyledHeader = styled(Header)(() => ({\n  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",\n  backgroundColor: "#ffffff",\n}));\n\nconst IconButtonEdit = styled(IconButton)(() => ({\n  backgroundColor: "rgba(0,0,0,0.04)",\n}));\n\nconst theme = responsiveFontSizes(\n  createTheme({\n    palette: {\n      primary: {\n        main: "rgb(0, 153, 255)",\n      },\n      background: {\n        default: "#fff",\n      },\n    },\n    typography: {\n      fontFamily:\n        \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\',\n      body1: {\n        fontSize: `${15 / 16}rem`,\n      },\n    },\n    components: {\n      MuiCssBaseline: {\n        styleOverrides: {\n          "strong, b": {\n            fontWeight: "bold",\n          },\n        },\n      },\n    },\n  })\n);\n// @ts-ignore\ntheme.vars = null;\n\nexport const LayoutAppMessenger = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Fullscreen>\n        <Root\n          scheme={{\n            header: {\n              config: {\n                xs: {\n                  position: "relative",\n                  height: 64,\n                },\n              },\n            },\n            leftEdgeSidebar: {\n              config: {\n                xs: {\n                  variant: "permanent",\n                  width: "25%",\n                  collapsible: true,\n                  collapsedWidth: 80,\n                },\n              },\n              autoCollapse: "sm",\n            },\n            rightInsetSidebar: {\n              config: {\n                xs: {\n                  position: "absolute",\n                  width: "33%",\n                },\n              },\n            },\n          }}\n        >\n          {({ state: { leftEdgeSidebar } }) => (\n            <>\n              <CssBaseline />\n              <StyledHeader>\n                <Toolbar disableGutters>\n                  <ConversationHead />\n                </Toolbar>\n              </StyledHeader>\n              <EdgeSidebar anchor="left">\n                {leftEdgeSidebar?.collapsed ? (\n                  <Box textAlign={"center"} my={1}>\n                    <IconButtonEdit>\n                      <Edit />\n                    </IconButtonEdit>\n                  </Box>\n                ) : (\n                  <>\n                    <ChatsHeader />\n                    <Box p={"4px 16px 12px"}>\n                      <MessengerSearch />\n                    </Box>\n                  </>\n                )}\n                <ChatList concise={leftEdgeSidebar?.collapsed} />\n              </EdgeSidebar>\n              <Content>\n                <InsetContainer\n                  disableGutters\n                  rightSidebar={\n                    <InsetSidebar>\n                      <ChatSettings />\n                    </InsetSidebar>\n                  }\n                >\n                  <ChatDialog />\n                </InsetContainer>\n              </Content>\n              <Footer>\n                <Container disableGutters>\n                  <InsetAvoidingView>\n                    <Box display={"flex"} alignItems={"center"} p={1}>\n                      <ChatBar concise={leftEdgeSidebar?.collapsed} />\n                    </Box>\n                  </InsetAvoidingView>\n                </Container>\n              </Footer>\n            </>\n          )}\n        </Root>\n      </Fullscreen>\n    </ThemeProvider>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/App/Messenger"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-app-messenger\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutappmessenger",children:"LayoutAppMessenger"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5AppMessengerraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);