"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3796],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/info-chatz/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const InfoChatzraw_namespaceObject='import React from "react";\nimport { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";\nimport { getInfoChatzStyles } from "./InfoChatz.styles";\nexport function InfoChatz() {\n  return /*#__PURE__*/React.createElement(Info, {\n    variant: "chatz",\n    useStyles: getInfoChatzStyles\n  }, /*#__PURE__*/React.createElement(InfoTitle, null, "Phawta Tuntayakul"), /*#__PURE__*/React.createElement(InfoSubtitle, null, "Great, I\'ll join you tomorrow..."), /*#__PURE__*/React.createElement(InfoEyebrow, null, "10 m"));\n}',InfoChatz_stylesraw_namespaceObject='const titleFontSize = "1rem";\nconst subtitleFontSize = "0.875rem";\nconst captionFontSize = "0.75rem";\nexport const getInfoChatzStyles = arg => {\n  const {\n    palette\n  } = "theme" in arg ? arg.theme : arg;\n  return {\n    root: {\n      "& + &": {\n        marginTop: "1rem"\n      }\n    },\n    title: {\n      fontFamily: \'Maven Pro, "Helvetica Neue", Arial, sans-serif\',\n      fontSize: titleFontSize,\n      fontWeight: 500,\n      lineHeight: 1.2,\n      marginBottom: "0px"\n    },\n    subtitle: {\n      color: palette.mode === "dark" ? palette.grey["500"] : palette.grey["700"],\n      fontFamily: \'Maven Pro, "Helvetica Neue", Arial, sans-serif\',\n      fontSize: subtitleFontSize,\n      lineHeight: 1.6,\n      marginBottom: "0.25rem"\n    },\n    eyebrow: {\n      color: palette.grey["600"],\n      fontFamily: \'Maven Pro, "Helvetica Neue", Arial, sans-serif\',\n      fontSize: captionFontSize,\n      lineHeight: 1.4\n    }\n  };\n};';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Info/Chatz"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone info-chatz info-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"infochatz",children:"InfoChatz"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:InfoChatzraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"infochatzstylests",children:"InfoChatz.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:InfoChatz_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);