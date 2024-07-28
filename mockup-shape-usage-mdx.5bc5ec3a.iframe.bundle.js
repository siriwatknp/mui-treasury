"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2962],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/mockup-shape/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const Circleraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { getBaseGrey } from "../mockup-utils";\n\nexport const Circle = (props: BoxProps) => (\n  <Box\n    {...props}\n    sx={{\n      width: "1em",\n      height: "1em",\n      fontSize: "40px",\n      backgroundColor: getBaseGrey,\n      borderRadius: 10,\n      flexShrink: 0,\n      ...props.sx,\n    }}\n  />\n);\n',Pillraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { getBaseGrey } from "../mockup-utils";\n\nexport const Pill = (props: BoxProps) => (\n  <Box\n    {...props}\n    sx={{\n      width: 56,\n      height: 24,\n      backgroundColor: getBaseGrey,\n      borderRadius: 5,\n      ...props.sx,\n    }}\n  />\n);\n',Squareraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { getBaseGrey } from "../mockup-utils";\n\nexport const Square = (props: BoxProps) => (\n  <Box\n    {...props}\n    sx={{\n      width: "1em",\n      height: "1em",\n      fontSize: "40px",\n      backgroundColor: getBaseGrey,\n      borderRadius: 1,\n      flexShrink: 0,\n      ...props.sx,\n    }}\n  />\n);\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Mockup/Shape"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone mockup-shape\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mockupshape",children:"MockupShape"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circle",children:"Circle"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:Circleraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pill",children:"Pill"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:Pillraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"square",children:"Square"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:Squareraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);