"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2548],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-v6-theme-dashboard-curve/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6ThemeDashboardCurveraw_namespaceObject='import React from "react";\nimport Home from "@mui/icons-material/Home";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport IconButton from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Header,\n  layoutClasses,\n  Root,\n  toggleTemporaryEdgeSidebar,\n} from "../layout-core-v6";\n\nexport function LayoutV6ThemeDashboardCurve() {\n  return (\n    <Root\n      sx={{\n        bgcolor: "rgb(23 26 28)",\n        [`& .${layoutClasses.Header}`]: {\n          borderBottom: {\n            md: "none",\n          },\n        },\n        [`& .${layoutClasses.Content}`]: {\n          bgcolor: "background.paper",\n          borderTopLeftRadius: { md: "32px" },\n          marginTop: {\n            md: "12px",\n          },\n        },\n        [`& .${layoutClasses.EdgeSidebarContent}`]: {\n          background: "rgb(23 26 28)",\n        },\n      }}\n    >\n      <Header\n        sx={{\n          ...applyHeaderStyles({\n            fullWidth: true,\n            height: { xs: "56px", md: "0px" },\n          }),\n          overflow: "hidden",\n          px: 2,\n        }}\n      >\n        <IconButton\n          className={layoutClasses.TemporaryEdgeSidebarTrigger}\n          onClick={() => toggleTemporaryEdgeSidebar()}\n        >\n          <Menu />\n        </IconButton>\n        Global Header\n      </Header>\n      <Content>\n        <Box sx={{ p: { xs: 2, md: 3 } }}>\n          <Typography\n            variant="h1"\n            sx={{ fontWeight: "bold", fontSize: "2.5rem" }}\n          >\n            Page\n          </Typography>\n        </Box>\n      </Content>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: { variant: "temporary", width: "256px", fullHeight: true },\n              md: {\n                variant: "permanent",\n                width: "256px",\n                autoCollapse: "md",\n                collapsedWidth: "64px",\n                expandOnHover: true,\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent\n          className="dark"\n          sx={{ bgcolor: "rgb(23 26 28)", color: "text.primary", py: 5 }}\n        >\n          <ButtonBase sx={{ height: 48 }}>\n            <Home />\n          </ButtonBase>\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n    </Root>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/Theme/DashboardCurve"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-theme-dashboard-curve\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6themedashboardcurve",children:"LayoutV6ThemeDashboardCurve"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6ThemeDashboardCurveraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);