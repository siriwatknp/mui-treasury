"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1712],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/button-graphic/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const ButtonGraphicraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport { styled } from "@mui/material/styles";\n\nconst GraphicButton = styled(Button)(({ theme }) => {\n  const initialShadow = `0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)`;\n  return {\n    borderRadius: 50,\n    textTransform: "initial",\n    marginTop: -2,\n    "&:hover": {\n      borderBottom: "none",\n    },\n    variants: [\n      {\n        props: { variant: "contained", color: "primary" },\n        style: {\n          textShadow: "0 1px 0 rgba(0,0,0,0.2)",\n          transition: "0.2s",\n          background: `linear-gradient(to top, ${\n            (theme.vars || theme).palette.primary.main\n          }, #7fb8d0)`,\n          boxShadow: initialShadow,\n          textTransform: "uppercase",\n          letterSpacing: "0.5px",\n          "&:focus": {\n            boxShadow: initialShadow,\n          },\n          "&:active": {\n            boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,\n          },\n        },\n      },\n    ],\n  };\n});\n\nexport function ButtonGraphic() {\n  return (\n    <Box sx={{ display: "flex", gap: 2 }}>\n      <GraphicButton variant={"contained"} color={"primary"}>\n        Graphic\n      </GraphicButton>\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Button/Graphic"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone button-graphic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"buttongraphic",children:"ButtonGraphic"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ButtonGraphicraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);