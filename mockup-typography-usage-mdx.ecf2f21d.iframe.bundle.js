"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2124],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/mockup-typography/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const MockupTypographyraw_namespaceObject='function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nimport React from "react";\nimport Box from "@mui/material/Box";\nimport { getBaseGrey, randomBetween } from "../mockup-utils";\nconst createTypography = generateSx => ({\n  cached,\n  sx = [],\n  ...props\n}) => {\n  const ref = React.useRef(generateSx());\n  const resolvedSx = (cached ? ref.current : generateSx()) || [];\n  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {\n    sx: [{\n      height: 16,\n      borderRadius: 1,\n      bgcolor: getBaseGrey\n    }, ...(Array.isArray(resolvedSx) ? resolvedSx : [resolvedSx]), ...(Array.isArray(sx) ? sx : [sx])]\n  }));\n};\nexport const H1 = createTypography(() => ({\n  height: 40,\n  width: randomBetween(12, 20, "ch"),\n  maxWidth: "100%",\n  mt: 3,\n  mb: 1\n}));\nexport const Text = createTypography(() => ({\n  height: 16,\n  mt: 1.5,\n  mb: 1.5,\n  width: "100%",\n  maxWidth: "100%"\n}));\nexport const Word = createTypography(() => ({\n  height: 16,\n  width: randomBetween(8, 14, "ch"),\n  maxWidth: "100%"\n}));';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Mockup/Typography"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone mockup-typography\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mockuptypography",children:"MockupTypography"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:MockupTypographyraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);