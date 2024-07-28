"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3197],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/tabs-pill/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const TabsPillraw_namespaceObject='import React from "react";\nimport { styled } from "@mui/material/styles";\nimport Tab, { tabClasses } from "@mui/material/Tab";\nimport Tabs, { tabsClasses } from "@mui/material/Tabs";\n\nconst TabItem = styled(Tab)(({ theme }) => ({\n  position: "relative",\n  borderRadius: "30px",\n  textAlign: "center",\n  transition: "all .5s",\n  padding: "10px 15px",\n  color: "#555555",\n  height: "auto",\n  margin: "10px 0",\n  float: "none",\n  fontSize: "12px",\n  fontWeight: "500",\n  [theme.breakpoints.up("md")]: {\n    minWidth: 120,\n  },\n  [`&.${tabClasses.selected}, &:hover`]: {\n    color: "#FFFFFF",\n    backgroundColor: "#00acc1",\n    boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",\n  },\n}));\n\nexport function TabsPill() {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  return (\n    <Tabs\n      value={tabIndex}\n      onChange={(e, index) => setTabIndex(index)}\n      sx={{\n        width: "100%",\n        [`& .${tabsClasses.indicator}`]: {\n          display: "none",\n        },\n      }}\n    >\n      <TabItem disableRipple label={"Data"} />\n      <TabItem disableRipple label={"Rule"} />\n      <TabItem disableRipple label={"Indexes"} />\n      <TabItem disableRipple label={"Usage"} />\n    </Tabs>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Tabs/Pill"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone tabs-pill\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tabspill",children:"TabsPill"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TabsPillraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);