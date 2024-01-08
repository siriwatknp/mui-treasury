"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2356],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/tabs-chrome/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const TabsChromeraw_namespaceObject='import React from "react";\nimport { styled } from "@mui/material/styles";\nimport Tab, { tabClasses } from "@mui/material/Tab";\nimport Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs";\n\nconst TabItem = styled(Tab)(({ theme }) => ({\n  opacity: 1,\n  overflow: "initial",\n  paddingLeft: theme.spacing(2),\n  paddingRight: theme.spacing(2),\n  borderTopLeftRadius: theme.spacing(1),\n  borderTopRightRadius: theme.spacing(1),\n  color: (theme.vars || theme).palette.text.primary,\n  backgroundColor: (theme.vars || theme).palette.grey[300],\n  transition: "0.2s",\n  zIndex: 2,\n  marginTop: theme.spacing(0.5),\n  textTransform: "initial",\n  [theme.breakpoints.up("md")]: {\n    minWidth: 160,\n  },\n  "&:before": {\n    transition: "0.2s",\n  },\n  "&:not(:first-of-type)": {\n    "&:before": {\n      content: \'" "\',\n      position: "absolute",\n      left: 0,\n      display: "block",\n      height: 20,\n      width: "1px",\n      zIndex: 1,\n      marginTop: theme.spacing(0.5),\n      backgroundColor: (theme.vars || theme).palette.grey[500],\n    },\n  },\n  [`& + .${tabClasses.selected}::before`]: {\n    opacity: 0,\n  },\n  "&:hover": {\n    [`&:not(.${tabClasses.selected})`]: {\n      backgroundColor: "rgba(0 0 0 / 0.2)",\n    },\n    "&::before": {\n      opacity: 0,\n    },\n    [`& + .${tabClasses.root}::before`]: {\n      opacity: 0,\n    },\n  },\n  [`&.${tabClasses.selected}`]: {\n    backgroundColor: (theme.vars || theme).palette.grey[900],\n    color: (theme.vars || theme).palette.common.white,\n  },\n  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {\n    zIndex: 1,\n  },\n  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {\n    opacity: 0,\n  },\n}));\n\nexport function TabsChrome({ sx }: TabsProps) {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  return (\n    <Tabs\n      value={tabIndex}\n      onChange={(e, index) => setTabIndex(index)}\n      sx={{\n        [`& .${tabsClasses.indicator}`]: {\n          display: "none",\n        },\n      }}\n    >\n      <TabItem label={"Label 1"} />\n      <TabItem label={"Label 2"} />\n      <TabItem label={"Label 3"} />\n      <TabItem label={"Label 4"} />\n    </Tabs>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Tabs/Chrome"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone tabs-chrome\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tabschrome",children:"TabsChrome"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TabsChromeraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);