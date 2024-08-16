"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2388],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/text-field-shade/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const TextFieldShaderaw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport { yellow } from "@mui/material/colors";\nimport { inputBaseClasses } from "@mui/material/InputBase";\nimport TextField, { TextFieldProps } from "@mui/material/TextField";\n\nexport function TextFieldShade() {\n  const InputLabelProps: TextFieldProps["InputLabelProps"] = {\n    shrink: true,\n    sx: {\n      color: "text.primary",\n      transform: "translate(0, 1.5px) scale(0.8)",\n      letterSpacing: 1,\n      "&.Mui-focused:not(.Mui-error)": {\n        color: "text.primary",\n      },\n    },\n  };\n  const InputProps: TextFieldProps["InputProps"] = {\n    disableUnderline: true,\n    sx: {\n      backgroundColor: "grey.200",\n      transition: "0.3s",\n      "label + &": {\n        marginTop: "24px",\n      },\n      [`&.${inputBaseClasses.focused}`]: {\n        backgroundColor: "common.white",\n        boxShadow: `0 0 0 2px ${yellow[700]}`,\n      },\n      [`&.${inputBaseClasses.error}`]: {\n        backgroundColor: "#fff0f0",\n        [`&.${inputBaseClasses.focused}`]: {\n          boxShadow: `0 0 0 2px #ff6b81`,\n        },\n      },\n      [`&.${inputBaseClasses.disabled}`]: {\n        backgroundColor: "grey.50",\n      },\n      [`& .${inputBaseClasses.input}`]: {\n        padding: "1rem",\n      },\n    },\n  };\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>\n      <TextField\n        label={"Order Name"}\n        placeholder={"Placeholder"}\n        variant="standard"\n        margin={"normal"}\n        required\n        InputLabelProps={InputLabelProps}\n        InputProps={InputProps}\n      />\n      <TextField\n        label={"My License Number"}\n        placeholder={"Disabled"}\n        variant="standard"\n        margin={"normal"}\n        disabled\n        InputLabelProps={InputLabelProps}\n        InputProps={InputProps}\n      />\n      <TextField\n        error\n        label={\n          <>\n            Destination{" "}\n            <Box display="inline-block" color="grey.400">\n              (optional)\n            </Box>\n          </>\n        }\n        placeholder={"Placeholder"}\n        variant="standard"\n        margin={"normal"}\n        InputLabelProps={InputLabelProps}\n        InputProps={InputProps}\n      />\n    </div>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Text Field/Shade"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone text-field-shade\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"textfieldshade",children:"TextFieldShade"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TextFieldShaderaw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);