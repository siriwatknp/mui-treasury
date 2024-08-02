"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1386],{"./blocks/layoutV5-app-messenger/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5AppMessengerraw_namespaceObject='import React from "react";\nimport Edit from "@mui/icons-material/Edit";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  createTheme,\n  responsiveFontSizes,\n  styled,\n  ThemeProvider,\n} from "@mui/material/styles";\nimport Toolbar from "@mui/material/Toolbar";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Fullscreen,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n} from "../layout-core-v5";\nimport {\n  ChatBar,\n  ChatDialog,\n  ChatList,\n  ChatSettings,\n  ChatsHeader,\n  ConversationHead,\n  MessengerSearch,\n  // @ts-ignore\n} from "./components";\n\nconst StyledHeader = styled(Header)(() => ({\n  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",\n  backgroundColor: "#ffffff",\n}));\n\nconst IconButtonEdit = styled(IconButton)(() => ({\n  backgroundColor: "rgba(0,0,0,0.04)",\n}));\n\nconst theme = responsiveFontSizes(\n  createTheme({\n    palette: {\n      primary: {\n        main: "rgb(0, 153, 255)",\n      },\n      background: {\n        default: "#fff",\n      },\n    },\n    typography: {\n      fontFamily:\n        \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\',\n      body1: {\n        fontSize: `${15 / 16}rem`,\n      },\n    },\n    components: {\n      MuiCssBaseline: {\n        styleOverrides: {\n          "strong, b": {\n            fontWeight: "bold",\n          },\n        },\n      },\n    },\n  })\n);\n// @ts-ignore\ntheme.vars = null;\n\nexport const LayoutAppMessenger = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Fullscreen>\n        <Root\n          scheme={{\n            header: {\n              config: {\n                xs: {\n                  position: "relative",\n                  height: 64,\n                },\n              },\n            },\n            leftEdgeSidebar: {\n              config: {\n                xs: {\n                  variant: "permanent",\n                  width: "25%",\n                  collapsible: true,\n                  collapsedWidth: 80,\n                },\n              },\n              autoCollapse: "sm",\n            },\n            rightInsetSidebar: {\n              config: {\n                xs: {\n                  position: "absolute",\n                  width: "33%",\n                },\n              },\n            },\n          }}\n        >\n          {({ state: { leftEdgeSidebar } }) => (\n            <>\n              <CssBaseline />\n              <StyledHeader>\n                <Toolbar disableGutters>\n                  <ConversationHead />\n                </Toolbar>\n              </StyledHeader>\n              <EdgeSidebar anchor="left">\n                {leftEdgeSidebar?.collapsed ? (\n                  <Box textAlign={"center"} my={1}>\n                    <IconButtonEdit>\n                      <Edit />\n                    </IconButtonEdit>\n                  </Box>\n                ) : (\n                  <>\n                    <ChatsHeader />\n                    <Box p={"4px 16px 12px"}>\n                      <MessengerSearch />\n                    </Box>\n                  </>\n                )}\n                <ChatList concise={leftEdgeSidebar?.collapsed} />\n              </EdgeSidebar>\n              <Content>\n                <InsetContainer\n                  disableGutters\n                  rightSidebar={\n                    <InsetSidebar>\n                      <ChatSettings />\n                    </InsetSidebar>\n                  }\n                >\n                  <ChatDialog />\n                </InsetContainer>\n              </Content>\n              <Footer>\n                <Container disableGutters>\n                  <InsetAvoidingView>\n                    <Box display={"flex"} alignItems={"center"} p={1}>\n                      <ChatBar concise={leftEdgeSidebar?.collapsed} />\n                    </Box>\n                  </InsetAvoidingView>\n                </Container>\n              </Footer>\n            </>\n          )}\n        </Root>\n      </Fullscreen>\n    </ThemeProvider>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/App/Messenger"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-app-messenger\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutappmessenger",children:"LayoutAppMessenger"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5AppMessengerraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layoutV5-app-messenger/LayoutV5AppMessenger.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Messenger:()=>Messenger,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV5AppMessenger_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Edit=__webpack_require__("./node_modules/@mui/icons-material/Edit.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),responsiveFontSizes=__webpack_require__("./node_modules/@mui/material/styles/responsiveFontSizes.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),layout_core_v5=__webpack_require__("./blocks/layout-core-v5/index.ts"),components=__webpack_require__("./blocks/layoutV5-app-messenger/components/index.js");const StyledHeader=(0,styled.ZP)(layout_core_v5.h4)((()=>({boxShadow:"0 1px 2px 0 rgba(0, 0, 0, .10)",backgroundColor:"#ffffff"}))),IconButtonEdit=(0,styled.ZP)(IconButton.Z)((()=>({backgroundColor:"rgba(0,0,0,0.04)"}))),theme=(0,responsiveFontSizes.Z)((0,createTheme.Z)({palette:{primary:{main:"rgb(0, 153, 255)"},background:{default:"#fff"}},typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body1:{fontSize:"0.9375rem"}},components:{MuiCssBaseline:{styleOverrides:{"strong, b":{fontWeight:"bold"}}}}}));theme.vars=null;const LayoutAppMessenger=()=>react.createElement(ThemeProvider.Z,{theme},react.createElement(layout_core_v5.iT,null,react.createElement(layout_core_v5.fC,{scheme:{header:{config:{xs:{position:"relative",height:64}}},leftEdgeSidebar:{config:{xs:{variant:"permanent",width:"25%",collapsible:!0,collapsedWidth:80}},autoCollapse:"sm"},rightInsetSidebar:{config:{xs:{position:"absolute",width:"33%"}}}}},(({state:{leftEdgeSidebar}})=>react.createElement(react.Fragment,null,react.createElement(CssBaseline.ZP,null),react.createElement(StyledHeader,null,react.createElement(Toolbar.Z,{disableGutters:!0},react.createElement(components.ju,null))),react.createElement(layout_core_v5.NW,{anchor:"left"},leftEdgeSidebar?.collapsed?react.createElement(Box.Z,{textAlign:"center",my:1},react.createElement(IconButtonEdit,null,react.createElement(Edit.Z,null))):react.createElement(react.Fragment,null,react.createElement(components.sG,null),react.createElement(Box.Z,{p:"4px 16px 12px"},react.createElement(components.Ab,null))),react.createElement(components.jJ,{concise:leftEdgeSidebar?.collapsed})),react.createElement(layout_core_v5.VY,null,react.createElement(layout_core_v5.pN,{disableGutters:!0,rightSidebar:react.createElement(layout_core_v5.bM,null,react.createElement(components.lV,null))},react.createElement(components.VY,null))),react.createElement(layout_core_v5.$_,null,react.createElement(Container.Z,{disableGutters:!0},react.createElement(layout_core_v5.FK,null,react.createElement(Box.Z,{display:"flex",alignItems:"center",p:1},react.createElement(components.YS,{concise:leftEdgeSidebar?.collapsed}))))))))));var usage=__webpack_require__("./blocks/layoutV5-app-messenger/usage.mdx");const LayoutV5AppMessenger_stories={title:"Layout v5/App/Messenger",component:LayoutAppMessenger,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Messenger={render:()=>react.createElement(LayoutAppMessenger,null)};Messenger.parameters={...Messenger.parameters,docs:{...Messenger.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutAppMessenger />\n}",...Messenger.parameters?.docs?.source}}};const __namedExportsOrder=["Messenger"]}}]);