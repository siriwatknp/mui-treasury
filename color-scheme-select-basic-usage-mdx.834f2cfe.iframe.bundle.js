"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3550],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/color-scheme-select-basic/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const ColorSchemeSelectBasicraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport MenuItem from "@mui/material/MenuItem";\nimport Select from "@mui/material/Select";\nimport { useColorScheme } from "@mui/material/styles";\n\nexport function ColorSchemeSelectBasic() {\n  const { mode, setMode } = useColorScheme();\n  if (!mode) {\n    return (\n      <Box\n        sx={(theme) => {\n          // copy from OutlinedInput\n          const borderColor =\n            theme.palette.mode === "light"\n              ? "rgba(0, 0, 0, 0.23)"\n              : "rgba(255, 255, 255, 0.23)";\n          return {\n            verticalAlign: "bottom",\n            display: "inline-flex",\n            minWidth: 112,\n            height: 56,\n            borderRadius: (theme.vars || theme).shape.borderRadius,\n            border: "1px solid",\n            borderColor: theme.vars\n              ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)`\n              : borderColor,\n          };\n        }}\n      />\n    );\n  }\n  return (\n    <Select\n      value={mode}\n      onChange={(event) => {\n        setMode(event.target.value as "system" | "light" | "dark");\n      }}\n      sx={{ minWidth: 112 }}\n    >\n      <MenuItem value="system">System</MenuItem>\n      <MenuItem value="light">Light</MenuItem>\n      <MenuItem value="dark">Dark</MenuItem>\n    </Select>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"ColorScheme/Select/Basic"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone color-scheme-select-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"colorschemeselectbasic",children:"ColorSchemeSelectBasic"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ColorSchemeSelectBasicraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);