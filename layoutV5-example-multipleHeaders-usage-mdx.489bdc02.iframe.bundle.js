"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3243],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layoutV5-example-multipleHeaders/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5ExampleMultipleHeadersraw_namespaceObject='import React from "react";\nimport Close from "@mui/icons-material/Close";\nimport KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";\nimport KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";\nimport Box from "@mui/material/Box";\nimport Checkbox from "@mui/material/Checkbox";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport IconButton from "@mui/material/IconButton";\nimport Stack from "@mui/material/Stack";\nimport Tab from "@mui/material/Tab";\nimport Tabs from "@mui/material/Tabs";\nimport {\n  Content,\n  EdgeSidebar,\n  EdgeTrigger,\n  Header,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n  SidebarContent,\n  Subheader,\n  TopHeader,\n} from "../layout-core-v5";\n\nexport const LayoutExampleMultipleHeaders = () => {\n  const [topHidden, setTopHidden] = React.useState(false);\n  const [headerMagnet, setHeaderMagnet] = React.useState(false);\n\n  return (\n    <Root\n      scheme={{\n        topHeader: {\n          config: {\n            xs: { position: "relative", height: 48, clipped: true },\n          },\n          hidden: topHidden,\n        },\n        header: {\n          config: {\n            xs: {\n              position: "sticky",\n              height: 56,\n              clipped: {\n                leftEdgeSidebar: true,\n              },\n            },\n            md: {\n              position: "sticky",\n              height: 64,\n              clipped: true,\n            },\n          },\n        },\n        subheader: {\n          config: {\n            md: {\n              position: "relative",\n              // top: 64,\n              height: 48,\n            },\n          },\n        },\n        leftEdgeSidebar: {\n          config: {\n            sm: {\n              variant: "permanent",\n              width: 256,\n              headerMagnetEnabled: headerMagnet,\n              collapsible: true,\n              collapsedWidth: 64,\n            },\n          },\n        },\n        rightInsetSidebar: {\n          config: {\n            xs: {\n              position: "fixed",\n              width: 256,\n              headerMagnetEnabled: headerMagnet,\n            },\n          },\n        },\n      }}\n    >\n      <CssBaseline />\n      <TopHeader\n        sx={{\n          background: "linear-gradient(to right, #4f46e5, #0ea5e9)",\n          color: "#fff",\n        }}\n      >\n        <Stack\n          spacing={1}\n          direction="row"\n          alignItems="center"\n          justifyContent="center"\n          height="100%"\n        >\n          <div>This is the Top Header.</div>\n          <IconButton\n            color="inherit"\n            size="small"\n            onClick={() => setTopHidden(true)}\n          >\n            <Close />\n          </IconButton>\n        </Stack>\n      </TopHeader>\n      <Header>\n        <Box flex={1} display="flex" alignItems="center" px={1}>\n          <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>\n            {(collapsed, setCollapsed) => (\n              <IconButton onClick={() => setCollapsed(!collapsed)}>\n                {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}\n              </IconButton>\n            )}\n          </EdgeTrigger>\n        </Box>\n      </Header>\n      <Subheader\n        sx={{\n          borderBottom: "1px solid",\n          borderColor: "divider",\n          bgcolor: "background.paper",\n        }}\n      >\n        <Tabs value={0}>\n          <Tab label="Tab 1" />\n          <Tab label="Tab 2" />\n          <Tab label="Tab 3" />\n        </Tabs>\n      </Subheader>\n      <EdgeSidebar anchor="left">\n        <SidebarContent>Sidebar</SidebarContent>\n      </EdgeSidebar>\n      <Content>\n        <InsetContainer\n          maxWidth={"md"}\n          rightSidebar={\n            <InsetSidebar sx={{ bgcolor: "background.paper" }}>\n              <Box p={2}>Hello test</Box>\n            </InsetSidebar>\n          }\n        >\n          <Box p={2} height={"1000px"} width="100%">\n            <p>\n              Scroll the content, then enable header magnet and scroll again\n            </p>\n            <FormControlLabel\n              label="Header Magnet Enabled"\n              control={<Checkbox />}\n              onChange={(_, checked) => setHeaderMagnet(checked)}\n            />\n          </Box>\n        </InsetContainer>\n      </Content>\n    </Root>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/MultipleHeaders"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-example-multipleHeaders\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexamplemultipleheaders",children:"LayoutExampleMultipleHeaders"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5ExampleMultipleHeadersraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);