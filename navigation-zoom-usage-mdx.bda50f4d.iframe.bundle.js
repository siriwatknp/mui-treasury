"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3853],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/navigation-zoom/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavigationZoomraw_namespaceObject='import React from "react";\nimport { useTheme } from "@mui/material/styles";\nimport { Navigation, NavItem } from "../navigation-basic";\nimport { getNavigationZoomStyles } from "./NavigationZoom.styles";\n\nexport function NavigationZoom() {\n  const theme = useTheme();\n  const styles = getNavigationZoomStyles(theme);\n  const [activeIndex, setActiveIndex] = React.useState(0);\n  return (\n    <Navigation sx={styles}>\n      {[...Array(5).fill(undefined)].map((_, index) => (\n        <NavItem\n          key={index}\n          // href="#"\n          active={activeIndex === index}\n          disabled={index === 3}\n          onClick={() => setActiveIndex(index)}\n        >\n          Item {index + 1}\n        </NavItem>\n      ))}\n    </Navigation>\n  );\n}\n',NavigationZoom_stylesraw_namespaceObject='import { CSSObject, Theme } from "@mui/material/styles";\nimport { navigationClasses } from "../navigation-basic";\n\nconst itemHorzPadding = 3;\n\nexport const getNavigationZoomStyles = (\n  arg: Theme | { theme: Theme }\n): CSSObject => {\n  const { palette, spacing } = "theme" in arg ? arg.theme : arg;\n  return {\n    [`& .${navigationClasses.item}`]: {\n      "&:not(.Mui-disabled)": {\n        color: palette.text.primary,\n      },\n      fontWeight: "bold",\n      textTransform: "uppercase",\n      letterSpacing: "1px",\n      "&.Mui-active": {\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n        },\n      },\n      "&:after": {\n        content: \'""\',\n        display: "block",\n        position: "absolute",\n        bottom: 0,\n        left: spacing(itemHorzPadding / 2),\n        width: `calc(100% - ${spacing(itemHorzPadding)})`,\n        height: 2,\n        transform: "scale(0, 1)",\n        backgroundColor: palette.text.primary,\n      },\n      "&:hover": {\n        "&:after": {\n          opacity: 0.38,\n          transform: "scale(1, 1)",\n        },\n      },\n    },\n  };\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Navigation/Zoom"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone navigation-zoom navigation-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationzoom",children:"NavigationZoom"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationZoomraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"navigationzoomstylests",children:"NavigationZoom.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationZoom_stylesraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);