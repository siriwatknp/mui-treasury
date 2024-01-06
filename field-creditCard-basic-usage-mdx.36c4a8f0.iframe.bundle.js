"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9523],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/field-creditCard-basic/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const FieldCreditCardBasicraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport { Theme } from "@mui/material/styles";\nimport TextField, { TextFieldProps } from "@mui/material/TextField";\nimport { SxProps } from "@mui/system";\nimport { useCardInput, UseCardInputOptions } from "../use-card-input";\n\nexport type CCFieldProps = {\n  /**\n   * className append to the root element\n   */\n  className?: string;\n\n  children: React.ReactNode;\n\n  /**\n   * The system prop that allows defining system overrides as well as additional CSS styles.\n   */\n  sx?: SxProps<Theme>;\n} & UseCardInputOptions &\n  Pick<TextFieldProps, "variant" | "error" | "color"> &\n  Omit<JSX.IntrinsicElements["div"], "ref" | "onChange" | "onBlur">;\n\nexport type CCContextValue = ReturnType<typeof useCardInput> &\n  Pick<TextFieldProps, "variant" | "error" | "color"> &\n  Pick<UseCardInputOptions, "autoFocus" | "fullYear" | "cardSeparator">;\n\nconst CCContext = React.createContext<CCContextValue | undefined>(undefined);\n\nexport const useCCContext = () => {\n  const context = React.useContext(CCContext);\n  if (!context) {\n    throw new Error("Cannot find context, must be called under <CCField>");\n  }\n  return context;\n};\n\nexport const CCField = React.forwardRef<HTMLDivElement, CCFieldProps>(\n  function CreditCard(props, ref) {\n    const {\n      children,\n      autoFocus,\n      cardSeparator,\n      fullYear,\n      onChange,\n      onBlur,\n      defaultValue,\n      value,\n      variant,\n      color,\n      error,\n      ...other\n    } = props;\n\n    const context = useCardInput({\n      ...props,\n      autoFocus,\n      cardSeparator,\n      fullYear,\n      onChange,\n      onBlur,\n      defaultValue,\n      value,\n    });\n\n    return (\n      <Box ref={ref} {...other}>\n        <CCContext.Provider\n          value={{\n            ...context,\n            color,\n            error,\n            variant,\n            autoFocus,\n            cardSeparator,\n            fullYear,\n          }}\n        >\n          {children}\n        </CCContext.Provider>\n      </Box>\n    );\n  }\n);\n\nconst resolveProps = (\n  context: Partial<CCContextValue>,\n  props: TextFieldProps\n) => ({\n  color: props.color || context.color,\n  error: props.error || context.error,\n  variant: props.variant || context.variant,\n});\n\nexport const CCName = ({ inputProps, ...props }: TextFieldProps) => {\n  const { getCardNameInputProps, ...context } = useCCContext();\n  return (\n    <TextField\n      label="Cardholder Name"\n      {...props}\n      {...resolveProps(context, props)}\n      inputProps={{ ...inputProps, ...getCardNameInputProps(props) }}\n    />\n  );\n};\n\nexport const CCNumber = ({ inputProps, ...props }: TextFieldProps) => {\n  const { getCardNumberInputProps, ...context } = useCCContext();\n  return (\n    <TextField\n      label="Card Number"\n      {...props}\n      {...resolveProps(context, props)}\n      inputProps={{ ...inputProps, ...getCardNumberInputProps(props) }}\n    />\n  );\n};\n\nexport const CCExpiration = ({ inputProps, ...props }: TextFieldProps) => {\n  const { getExpInputProps, ...context } = useCCContext();\n  return (\n    <TextField\n      label="Valid Thru"\n      {...props}\n      {...resolveProps(context, props)}\n      inputProps={{ ...inputProps, ...getExpInputProps(props), size: 9 }}\n    />\n  );\n};\n\nexport const CCSecurityCode = ({ inputProps, ...props }: TextFieldProps) => {\n  const { getCSCInputProps, ...context } = useCCContext();\n  return (\n    <TextField\n      label="CVC"\n      {...props}\n      {...resolveProps(context, props)}\n      inputProps={{ ...inputProps, ...getCSCInputProps(props) }}\n    />\n  );\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Field/Credit Card/Basic"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone field-creditCard-basic use-card-input use-expiry-input use-input-siblings\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fieldcreditcardbasic",children:"FieldCreditcardBasic"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:FieldCreditCardBasicraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);