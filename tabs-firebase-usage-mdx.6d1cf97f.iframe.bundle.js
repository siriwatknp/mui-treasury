"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9039],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/tabs-firebase/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const TabsFirebaseraw_namespaceObject='import React from "react";\nimport { styled } from "@mui/material/styles";\nimport Tab from "@mui/material/Tab";\nimport Tabs, { tabsClasses } from "@mui/material/Tabs";\n\nconst TabItem = styled(Tab)(({ theme }) => ({\n  textTransform: "initial",\n  minWidth: 0,\n  letterSpacing: 0.5,\n  margin: theme.spacing(0, 2),\n  padding: 0,\n  overflow: "unset",\n  fontWeight: 500,\n  "&:hover::before": {\n    backgroundColor: "rgba(0 0 0 / 0.04)",\n  },\n  "&::before": {\n    content: \'""\',\n    position: "absolute",\n    left: "-1rem",\n    right: "-1rem",\n    height: "100%",\n  },\n  [theme.breakpoints.up("md")]: {\n    minWidth: 0,\n  },\n}));\n\nexport function TabsFirebase() {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  return (\n    <Tabs\n      value={tabIndex}\n      onChange={(e, index) => setTabIndex(index)}\n      sx={{\n        marginLeft: 1,\n        [`& .${tabsClasses.indicator}`]: {\n          height: 3,\n          borderTopLeftRadius: "3px",\n          borderTopRightRadius: "3px",\n        },\n      }}\n    >\n      <TabItem disableRipple label={"Data"} />\n      <TabItem disableRipple label={"Rule"} />\n      <TabItem disableRipple label={"Indexes"} />\n      <TabItem disableRipple label={"Usage"} />\n    </Tabs>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Tabs/Firebase"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone tabs-firebase\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tabsfirebase",children:"TabsFirebase"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TabsFirebaseraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);