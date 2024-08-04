"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[4561],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-v6-preset-standard/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6PresetStandardraw_namespaceObject='import React from "react";\nimport KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";\nimport KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport Container from "@mui/material/Container";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Footer,\n  Header,\n  Root,\n  toggleEdgeSidebarCollapse,\n  toggleTemporaryEdgeSidebar,\n} from "../layout-core-v6";\nimport {\n  ContentMockup,\n  FooterMockup,\n  HeaderMockup,\n  NavSidebarMockup,\n} from "../mockup-layout";\n\nexport const LayoutV6PresetStandard = () => {\n  return (\n    <Root>\n      <Header\n        sx={{\n          ...applyHeaderStyles({\n            height: { xs: "56px", md: "64px" },\n            fullWidth: "md",\n          }),\n          position: { xs: "sticky", md: "relative" },\n        }}\n      >\n        <HeaderMockup\n          trigger={\n            <IconButton\n              className="EdgeSidebar-trigger"\n              onClick={() => {\n                toggleTemporaryEdgeSidebar();\n              }}\n            >\n              <Menu />\n            </IconButton>\n          }\n        />\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n                width: "256px",\n              },\n              sm: {\n                variant: "permanent",\n                width: "256px",\n                autoCollapse: "sm",\n                collapsedWidth: "64px",\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent>\n          <NavSidebarMockup />\n          <ButtonBase\n            className="EdgeSidebar-collapser"\n            onClick={(event) => toggleEdgeSidebarCollapse({ event })}\n            sx={{ height: 48, mt: "auto" }}\n          >\n            <KeyboardArrowLeft className="Icon-collapse" />\n            <KeyboardArrowRight className="Icon-uncollapse" />\n          </ButtonBase>\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n      <Content>\n        <Container maxWidth="md" sx={{ py: 5 }}>\n          <ContentMockup />\n        </Container>\n      </Content>\n      <Footer>\n        <FooterMockup />\n      </Footer>\n    </Root>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/Preset/Standard"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV6-preset-standard\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6presetstandard",children:"LayoutV6PresetStandard"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6PresetStandardraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);