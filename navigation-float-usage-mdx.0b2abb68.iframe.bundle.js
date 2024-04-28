"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7826],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/navigation-float/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavigationFloatraw_namespaceObject='import React from "react";\nimport { useTheme } from "@mui/material/styles";\nimport { Navigation, NavItem } from "../navigation-basic";\nimport { getNavigationFloatStyles } from "./NavigationFloat.styles";\nexport function NavigationFloat() {\n  const theme = useTheme();\n  const styles = getNavigationFloatStyles(theme);\n  const [activeIndex, setActiveIndex] = React.useState(0);\n  return /*#__PURE__*/React.createElement(Navigation, {\n    sx: styles\n  }, [...Array(5).fill(undefined)].map((_, index) => /*#__PURE__*/React.createElement(NavItem, {\n    key: index\n    // href="#"\n    ,\n    active: activeIndex === index,\n    disabled: index === 3,\n    onClick: () => setActiveIndex(index)\n  }, "Item ", index + 1)));\n}',NavigationFloat_stylesraw_namespaceObject='import { navigationClasses } from "../navigation-basic";\nexport const getNavigationFloatStyles = arg => {\n  const {\n    palette\n  } = "theme" in arg ? arg.theme : arg;\n  return {\n    [`& .${navigationClasses.item}`]: {\n      transition: "0.2s ease-out",\n      "&.Mui-active": {\n        color: palette.mode === "dark" ? "#fff" : palette.primary.main\n      },\n      "&:hover": {\n        transform: "translateY(-4px)",\n        textShadow: "0 1px 2px rgba(0,0,0,0.12)",\n        color: palette.mode === "dark" ? "#fff" : palette.primary.main\n      }\n    }\n  };\n};';function _createMdxContent(props){const _components={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Navigation/Float"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone navigation-float navigation-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationfloat",children:"NavigationFloat"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationFloatraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"navigationfloatstylests",children:"NavigationFloat.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationFloat_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);