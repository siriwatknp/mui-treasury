"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[4153],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/switch-textTrack/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const SwitchTextTrackraw_namespaceObject='import { styled } from "@mui/material/styles";\nimport Switch, { switchClasses } from "@mui/material/Switch";\n\nexport const SwitchTextTrack = styled(Switch)({\n  width: 80,\n  height: 48,\n  padding: 8,\n  [`& .${switchClasses.switchBase}`]: {\n    padding: 11,\n    color: "#ff6a00",\n  },\n  [`& .${switchClasses.thumb}`]: {\n    width: 26,\n    height: 26,\n    backgroundColor: "#fff",\n  },\n  [`& .${switchClasses.track}`]: {\n    background: "linear-gradient(to right, #ee0979, #ff6a00)",\n    opacity: "1 !important",\n    borderRadius: 20,\n    position: "relative",\n    "&:before, &:after": {\n      display: "inline-block",\n      position: "absolute",\n      top: "50%",\n      width: "50%",\n      transform: "translateY(-50%)",\n      color: "#fff",\n      textAlign: "center",\n      fontSize: "0.75rem",\n      fontWeight: 500,\n    },\n    "&:before": {\n      content: \'"ON"\',\n      left: 4,\n      opacity: 0,\n    },\n    "&:after": {\n      content: \'"OFF"\',\n      right: 4,\n    },\n  },\n  [`& .${switchClasses.checked}`]: {\n    [`&.${switchClasses.switchBase}`]: {\n      color: "#185a9d",\n      transform: "translateX(32px)",\n      "&:hover": {\n        backgroundColor: "rgba(24,90,257,0.08)",\n      },\n    },\n    [`& .${switchClasses.thumb}`]: {\n      backgroundColor: "#fff",\n    },\n    [`& + .${switchClasses.track}`]: {\n      background: "linear-gradient(to right, #43cea2, #185a9d)",\n      "&:before": {\n        opacity: 1,\n      },\n      "&:after": {\n        opacity: 0,\n      },\n    },\n  },\n});\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Switch/TextTrack"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone switch-textTrack\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"switchtexttrack",children:"SwitchTextTrack"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:SwitchTextTrackraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);