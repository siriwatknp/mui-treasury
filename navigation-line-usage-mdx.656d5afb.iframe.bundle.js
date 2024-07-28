"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8574],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/navigation-line/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavigationLineraw_namespaceObject='import React from "react";\nimport { useTheme } from "@mui/material/styles";\nimport { Navigation, NavItem } from "../navigation-basic";\nimport { getNavigationLineStyles } from "./NavigationLine.styles";\n\nexport function NavigationLine() {\n  const theme = useTheme();\n  const styles = getNavigationLineStyles(theme);\n  const [activeIndex, setActiveIndex] = React.useState(0);\n  return (\n    <Navigation sx={styles}>\n      {[...Array(5).fill(undefined)].map((_, index) => (\n        <NavItem\n          key={index}\n          // href="#"\n          active={activeIndex === index}\n          disabled={index === 3}\n          onClick={() => setActiveIndex(index)}\n        >\n          Item {index + 1}\n        </NavItem>\n      ))}\n    </Navigation>\n  );\n}\n',NavigationLine_stylesraw_namespaceObject='import { Theme } from "@mui/material/styles";\nimport { CSSObject } from "@mui/system";\nimport { navigationClasses } from "../navigation-basic";\n\nconst itemHorzPadding = 2;\n\nexport const getNavigationLineStyles = (\n  arg: Theme | { theme: Theme }\n): CSSObject => {\n  const { palette, spacing } = "theme" in arg ? arg.theme : arg;\n  return {\n    [`& .${navigationClasses.item}`]: {\n      "&:not(.Mui-disabled)": {\n        color: palette.text.secondary,\n      },\n      "&.Mui-active": {\n        color:\n          palette.mode === "dark"\n            ? palette.primary.light\n            : palette.primary.main,\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n          backgroundColor:\n            palette.mode === "dark"\n              ? palette.primary.light\n              : palette.primary.main,\n        },\n      },\n      "&:after": {\n        content: \'""\',\n        display: "block",\n        position: "absolute",\n        bottom: 0,\n        left: spacing(itemHorzPadding),\n        width: `calc(100% - ${spacing(itemHorzPadding * 2)})`,\n        height: 3,\n        transform: "scale(0, 1)",\n        transition: "0.2s ease-out",\n        opacity: 0,\n        backgroundColor: palette.primary.light,\n      },\n      "&:hover": {\n        color:\n          palette.mode === "dark"\n            ? palette.primary.light\n            : palette.primary.main,\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n        },\n      },\n    },\n  };\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Navigation/Line"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone navigation-line navigation-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationline",children:"NavigationLine"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationLineraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationlinestylests",children:"NavigationLine.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationLine_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);